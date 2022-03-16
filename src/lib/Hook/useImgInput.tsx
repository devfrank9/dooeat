import {useCallback, useRef, useState} from 'react';
import {nanoid} from 'nanoid';
import {ResponseBoardFile} from '../GQL/GQLInterfaces';

export type CustomFile = Record<string, File>;

const useFileInput = () => {
  const [imgFiles, setImgFiles] = useState<CustomFile>({});
  const [isError, setIsError] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleClickOnFileInput = useCallback(() => {
    fileInput.current?.click();
  }, [fileInput]);

  const handleUploadFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, additional?: number) => {
      const {
        target: {files},
      } = e;

      if (!files) return;

      for (let i = 0; i < (files?.length ?? 0); i++) {
        const file = files[i];
        const values = Object.values(imgFiles).length;

        if (values + (additional ?? 0) === 2) setIsError(true);
        else if (isError) setIsError(false);

        const customFile = {[nanoid()]: file};
        console.log(customFile);
        console.log(file);
        setImgFiles({...imgFiles, ...customFile});
        /*         setProcess({
          url: imgFiles,
          fileType: '',
          thumb: '',
          bf_id: 0,
          bo_table: '',
          wr_id: 0,
          fileName: '',
          downloadCount: 0,
        }); */
      }
    },
    [imgFiles, isError],
  );

  const removeSeletedPreview = (e: React.MouseEvent, selected: string) => {
    e.preventDefault();

    const duplicated = {...imgFiles};
    delete duplicated[selected];

    setImgFiles(duplicated);
  };

  return {
    fileRef: fileInput,
    imgFiles,
    isError,
    handleClickOnFileInput,
    handleUploadFile,
    removeSeletedPreview,
  } as const;
};

export default useFileInput;
