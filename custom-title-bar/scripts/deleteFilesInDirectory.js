const fs = require("fs");
const path = require("path");

function deleteFilesInDirectory(directoryPath) {
  try {
    // Get a list of all files in the directory
    const files = fs.readdirSync(directoryPath);

    // Loop through the files and delete them
    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);

      // Check if the path is a file (not a subdirectory)
      if (fs.statSync(filePath).isFile()) {
        // Delete the file
        fs.unlinkSync(filePath);
        console.log(`Deleted file: ${filePath}`);
      }
    });

    console.log("All files deleted successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = {
  deleteFilesInDirectory,
};
