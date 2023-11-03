const Jimp = require("jimp");
const fs = require("fs").promises;

async function applyColorOverlay(inputFolder, outputFolder, overlayColor) {
  try {
    const files = await fs.readdir(inputFolder);

    for (const file of files) {
      if (file.endsWith(".png")) {
        const inputImagePath = `${inputFolder}/${file}`;
        const outputImagePath = `${outputFolder}/${file}`;

        const image = await Jimp.read(inputImagePath);

        // Iterate over each pixel in the image and check transparency
        image.scan(
          0,
          0,
          image.bitmap.width,
          image.bitmap.height,
          function (x, y, idx) {
            const alpha = this.bitmap.data[idx + 3]; // Alpha channel (transparency)

            // If the pixel is not transparent, replace it with the overlay color
            if (alpha !== 0) {
              this.bitmap.data[idx] = parseInt(
                overlayColor.substring(1, 3),
                16
              ); // Red
              this.bitmap.data[idx + 1] = parseInt(
                overlayColor.substring(3, 5),
                16
              ); // Green
              this.bitmap.data[idx + 2] = parseInt(
                overlayColor.substring(5, 7),
                16
              ); // Blue
              // this.bitmap.data[idx + 3] = 255; Set alpha to fully opaque (not recomended)
              // this will kill shadows
            }
          }
        );

        // Save the modified image
        await image.writeAsync(outputImagePath);

        console.log(
          `Overlay color applied to non-transparent pixels in ${file}`
        );
      }
    }

    console.log(
      "Overlay color applied to non-transparent pixels in all PNG files."
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = {
  applyColorOverlay,
};
