//이미지 api

export const compressImageFile = (file: File) => {
  return new Promise<File>(resolve => {
    const fileReader = new FileReader();

    fileReader.readAsArrayBuffer(file);
    fileReader.onload = ({target}) => {
      if (!target || !target.result) return;

      const blob = new Blob([target.result]);
      const blobURL = URL.createObjectURL(blob);

      const image = new Image();
      image.src = blobURL;
      image.onload = async () => {
        const resized = await resize(image);
        resolve(
          new File([dataURItoBlob(resized)], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now(),
          }),
        );
      };
    };
  });
};

const resize = async (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas');
  const {width, height} = image;

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  context?.drawImage(image, 150, 150, width, height);

  return canvas.toDataURL('image/jpeg', 0.5);
};

const dataURItoBlob = (resized: string) => {
  const data = resized.split(',');
  const bytes = atob(data[1]); // base64 decoding
  const mime = data[0].split(':')[1].split(';')[0]; // get MIMEType
  const arrayBuffer = new ArrayBuffer(bytes.length);
  const int8Arr = new Uint8Array(arrayBuffer);

  for (let i = 0; i < bytes.length; i++) {
    int8Arr[i] = bytes.charCodeAt(i);
  }

  const blob = new Blob([arrayBuffer], {type: mime});
  return blob;
};
