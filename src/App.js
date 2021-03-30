import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
	const [imgSelected, setImgSelected] = useState(null);

	return (
		<div className="App">
			<Title />
			<UploadForm />
			<ImageGrid setImgSelected={setImgSelected} />
			{imgSelected && (
				<Modal imgSelected={imgSelected} setImgSelected={setImgSelected} />
			)}
		</div>
	);
}

export default App;
