import React from "react";
import "./DropBox.css";

function ImageDropBox({ image }) {
	return (
		<div>
			<img alt='' className="imageDropBox" src={image.src} />
		</div>
	);
}

export default ImageDropBox;