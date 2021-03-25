import { useState, useEffect } from "react";
import {
	projectStorage,
	projectFirestore,
	timestamp,
} from "../firebase/config";

const useStorage = (file) => {
	const [progress, setProgress] = useState(null);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		// references
		const storageRef = projectStorage.ref(file.name);
		const collectionRef = projectFirestore.collection("images");

		// Putting the file into storage & listening to the state & getting the url after the upload is completed
		storageRef.put(file).on(
			"state_changed",
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(error) => {
				setError(error);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				collectionRef.add({ url, createdAt: timestamp() });
				setUrl(url);
			}
		);
	}, [file]);

	return {
		progress,
		error,
		url,
	};
};

export default useStorage;
