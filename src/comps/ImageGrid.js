import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
	const { docs } = useFirestore("images");
	console.log(docs);

	return (
		<div className="image-grid">
			{docs &&
				docs.map((doc) => (
					<div className="image-wrap" key={doc.id}>
						<img src={doc.url} alt="uploaded pic" />
					</div>
				))}
		</div>
	);
};

export default ImageGrid;
