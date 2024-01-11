// src/components/VideoUpload.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const VideoPlayer = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop a video file here, or click to select one</p>
      </div>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <video width="320" height="240" controls>
            <source src={URL.createObjectURL(selectedFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
