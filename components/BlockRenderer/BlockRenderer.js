import { Cover } from "../Cover";
import { Heading } from "../Heading";

export const BlockRenderer = ({ blocks }) => {
	console.log("BLOCKS: ", blocks);
	return blocks.map(block => {
		switch (block.name) {
			case "core/heading": {
				return <Heading key={block.id} content={block.attributes.content} />;
			}
			case "core/cover": {
				return (
					<Cover key={block.id} background={block.attributes.url}>
						<BlockRenderer blocks={block.innerBlocks} />
					</Cover>
				);
			}
			default: {
				return null;
			}
		}
	});
};
