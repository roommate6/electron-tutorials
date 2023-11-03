const fs = require("fs-extra");

function copyFiles(sourceDir, destinationDir) {
  try {
    // Ensure the source directory exists
    if (!fs.existsSync(sourceDir)) {
      console.error("Source directory does not exist.");
      return;
    }

    // Ensure the destination directory exists; create it if not
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir, { recursive: true });
    }

    // Get a list of all files in the source directory
    const files = fs.readdirSync(sourceDir);

    // Loop through the files and copy them to the destination directory
    files.forEach((file) => {
      const sourcePath = `${sourceDir}/${file}`;
      const destinationPath = `${destinationDir}/${file}`;

      // Copy the file
      fs.copySync(sourcePath, destinationPath);
      console.log(`Copied: ${sourcePath} to ${destinationPath}`);
    });

    console.log("All files copied successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = { copyFiles };
