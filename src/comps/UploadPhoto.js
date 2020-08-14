import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadPhoto() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>

      <div className="output">
        {error && (
          <div className="error" style={{ color: "crimson", fontWeight: 700 }}>
            {" "}
            {error}
          </div>
        )}
        {file && (
          <div className="error" style={{ color: "darkgrey", fontWeight: 700 }}>
            {" "}
            {file.name}
          </div>
        )}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}
