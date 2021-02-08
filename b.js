// Marks 20%


// The ./libs directory contains a random amount of directories and files.
// write a function to count the number of directories and files and 
// returns a promise that resolves to an object with keys `files` for number of files and `directories` for number of directories.

// documentation for fs https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

function count() {
  const fs = require('fs')
  const path = './books'

  return new Promise((resolve, reject) => {
    fs.readdir(path, {withFileTypes: true},(err, files) => {
      if (err) reject(new Error(err))
      const fileList = files.filter(x => x.isFile())
      const dirList = files.filter(x => x.isDirectory())
      resolve({files: fileList.length, directories: dirList.length})
    })
  })
}

// count().then(x => console.log(x))

module.exports = count;
