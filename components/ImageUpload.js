import { useState } from "react";
import baseApiUrl from "../utils/baseApiUrl";

export default function ImageUpload({ sportNewsId, imageUploaded }) {
  const [image, setImage] = useState(null);

  const handleFilechange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "sports");
    formData.append("refid", sportNewsId);
    formData.append("field", "image");

    const res = await fetch(`${baseApiUrl}/upload`, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      imageUploaded();
    }
  };

  return (
    <div>
      <h4>Upload Sport News Image</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" onChange={handleFilechange} />
          <input type="submit" value="Upload" className="btn" />
        </div>
      </form>
    </div>
  );
}
