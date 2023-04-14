const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const convertFile = async (file) =>
  file.rawFile
    ? convertFileToBase64(file).then((convertedFile) => ({
        data: convertedFile,
        name: file.rawFile.name,
        size: file.rawFile.size,
        type: file.rawFile.type,
      }))
    : Promise.resolve(file);

export default convertFile;
