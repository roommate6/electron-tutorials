let mediaRecorder;
const recordedChuncks = [];

const { desktopCapturer, remote } = require("electron");
const { Menu } = remote;

const videoSourceButton = document.getElementById("videoSourceButton");

videoSourceButton.onclick = getVideoSources;

async function getVideoSources() {
  const videoSources = await desktopCapturer.getSources({
    types: ["window", "screen"],
  });

  const videoSourceOptionsMenu = Menu.buildFromTemplate(
    videoSources.map((videoSource) => {
      return {
        label: videoSource.name,
        click: () => selectVideoSource(videoSource),
      };
    })
  );

  videoSourceOptionsMenu.popup();
}

const videoElement = document.querySelector("video");

async function selectVideoSource(videoSource) {
  videoSourceButton.innerText = videoSource.name;

  const constraints = {
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: "desktop",
        chromeMediaSourceId: videoSource.id,
      },
    },
  };

  const stream = await navigator.mediaDevices.getUserMedia(constraints);

  videoElement.srcObject = stream;
  videoElement.play();

  const options = { mimeType: "video/webm; codecs=vp9" };
  mediaRecorder = new MediaRecorder(stream, options);

  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.onstop = handleStop;
}

function handleDataAvailable(e) {
  recordedChuncks.push(e.data);
}

const { dialog } = remote;
const { writeFile } = require("fs");

async function handleStop(e) {
  const blob = new Blob(recordedChuncks, {
    type: "video/webm; codecs=vp9",
  });

  const buffer = Buffer.from(await blob.arrayBuffer());

  const { filePath } = await dialog.showSaveDialog({
    buttonLabel: "Save video",
    defaultPath: `vid-${Date.now()}.webm`,
  });

  writeFile(filePath, buffer, () => console.log("Video saved successfully!"));
}

const startButton = document.getElementById("startButton");

startButton.onclick = (e) => {
  if (mediaRecorder == null) {
    return;
  }
  mediaRecorder.start();
  startButton.classList.add("is-danger");
  startButton.innerText = "Recording";
};

const stopButton = document.getElementById("stopButton");

stopButton.onclick = (e) => {
  if (mediaRecorder == null) {
    return;
  }
  mediaRecorder.stop();
  startButton.classList.remove("is-danger");
  startButton.innerText = "Start";
};
