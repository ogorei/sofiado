import React from "react";

export const Heading = ({ content }) => {
	return (
		<h1 className="text-xl font-heading max-w-5xl mx-auto my-5">
			{content}
		</h1>
	);
};
