import React, { ChangeEvent, useRef, useState } from "react";

function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleImagePicker = (event) => {
    const fileUploaded = event.target.files?.[0];
    console.log(fileUploaded);
    if (fileUploaded) setFile(fileUploaded);
  };

  const handleUploadButton = () => {
    imageRef.current?.click();
  };
  return (
    <div>
      <div
        style={{
          height: "150px",
          width: "150px",
          border: "2px solid grey",
          marginTop: "20px",
          display: "inline-block",
        }}
      >
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt=""
            style={{ width: "150px", height: "150px", objectFit: "fill" }}
          />
        )}
      </div>
      <input
        type="file"
        ref={imageRef}
        onChange={handleImagePicker}
        accept=".jpg,.png,.jpeg"
        style={{ display: "none" }}
      />
      <button onClick={handleUploadButton} type="button">
        Upload Image
      </button>
    </div>
  );
}

export default ImageUpload;
