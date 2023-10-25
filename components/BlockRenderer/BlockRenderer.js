import { Columns } from "../Columns";
import {Column} from "../Column";
import { Cover } from "../Cover";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import Image from "next/image";

export const BlockRenderer = ({ blocks }) => {
	return blocks.map(block => {
		switch (block.name) {
			case "core/heading": {
				return <Heading key={block.id} content={block.attributes.content} />;
			}
      case "core/paragraph": {
				return <Paragraph key={block.id} content={block.attributes.content} />;
			}
			case "core/cover": {
				return (
					<Cover key={block.id} background={block.attributes.url}>
						<BlockRenderer blocks={block.innerBlocks} />
					</Cover>
				);
			}
      case "core/columns": {
       return(
        <Columns
        key={block.id}
        isStackedOnMobile={block.attributes.isStackedOnMobile}
        >
        <BlockRenderer blocks={block.innerBlocks} />
        </Columns>
       )
      }
      case "core/column": {
        return (
          <Column
            key={block.id}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/image": {
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ""}
          />
        );
      }
			default: {
				return null;
			}
		}
	});
};
