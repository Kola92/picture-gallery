import { useState, useEffect } from "react";
import { photoStorage, photoFirestore, timestamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // reference url path to store data
    const storageRef = photoStorage.ref(file.name);
    const collectionRef = photoFirestore.collection('images')

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({url, createdAt})
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;