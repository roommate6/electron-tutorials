const noteTitleElement = document.getElementById("noteTitle");
const noteContentElement = document.getElementById("noteContent");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", async () => {
  const title = noteTitleElement.value;
  const content = noteContentElement.value;

  const response = await api.createNode({
    title,
    content,
  });

  console.log(response);

  noteTitleElement.value = "";
  noteContentElement.value = "";
});
