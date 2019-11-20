const processUploadedFiles = (files) => {
  let filesObj = {}

  files.forEach(file => {
    let filePath = file.webkitRelativePath.split('/')
    let timeStamp = file.name.substring(0, 19)

    if (file.type === 'video/mp4' && (filePath[1] === 'SentryClips' || filePath[1] === 'SavedClips')) {
      if (filesObj[filePath[2]]) {
        if (filesObj[filePath[2]].timestamps) {
          if (filesObj[filePath[2]].timestamps[timeStamp]) {
            filesObj[filePath[2]].timestamps[timeStamp].files.push(file)
          } else {
            filesObj[filePath[2]].timestamps[timeStamp] = {
              name: timeStamp,
              files: [file]
            }
          }
        }
      } else {
        filesObj[filePath[2]] = {
          name: filePath[2],
          timestamps: { [timeStamp]: { name: timeStamp, files: [file] } }
        }
      }
    }
  })

  console.log(filesObj)

  return filesObj
}

export { processUploadedFiles }
