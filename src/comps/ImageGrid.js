import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setImgSelected }) => {
	const { docs } = useFirestore("images");
	console.log(docs);

	return (
		<div className="image-grid">
			{docs &&
				docs.map((doc) => (
					<motion.div
						className="image-wrap"
						key={doc.id}
						layout
						whileHover={{ opacity: 1 }}
						onClick={() => setImgSelected(doc.url)}
					>
						<motion.img
							src={doc.url}
							alt="Uploaded pic"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7 }}
						/>
					</motion.div>
				))}
		</div>
	);
};

export default ImageGrid;
