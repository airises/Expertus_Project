import React, { useState } from "react";
import { storage } from "../../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const Profile = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  console.log(image);
  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button>Su</button>
    </div>
  );
};
