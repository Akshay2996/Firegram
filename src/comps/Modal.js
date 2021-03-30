import React from "react";

const Modal = ({ imgSelected, setImgSelected }) => {
	const handleClick = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setImgSelected(null);
		}
	};

	return (
		<div className="backdrop" onClick={handleClick}>
			<img src={imgSelected} alt="Clicked Pic" />
		</div>
	);
};

export default Modal;
