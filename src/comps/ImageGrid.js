import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setImgSelected }) => {
	const { docs } = useFirestore("images");
	console.log(docs);

	return (
		<div className="image-grid">
			{docs &&
				docs.map((doc) => (
					<div
						className="image-wrap"
						key={doc.id}
						onClick={() => setImgSelected(doc.url)}
					>
						<img src={doc.url} alt="Uploaded pic" />
					</div>
				))}
		</div>
	);
};

export default ImageGrid;
