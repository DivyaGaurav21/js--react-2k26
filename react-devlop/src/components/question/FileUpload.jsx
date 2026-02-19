import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    // type validation
    if (!selectedFile.type.startsWith("image/")) {
      setError("Only image files allowed");
      return;
    }

    // size validation (2MB)
    if (selectedFile.size > 2 * 1024 * 1024) {
      setError("File size should be less than 2MB");
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setError("");
  };

  const removeFile = () => {
    setFile(null);
    setPreview("");
  };

  return (
    <div className="w-64 p-4 border">
      <input type="file" onChange={handleChange} />

      {error && <p className="text-red-500">{error}</p>}

      {file && (
        <div className="mt-2">
          <p>{file.name}</p>
          <p>{(file.size / 1024).toFixed(2)} KB</p>

          <img
            src={preview}
            alt="preview"
            className="w-32 h-32 object-cover mt-2"
          />

          <button
            onClick={removeFile}
            className="bg-red-500 text-white px-2 mt-2"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;