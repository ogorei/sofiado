import { Cover } from "../Cover";



// render blocks by name
export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover": {
        console.log("COVER BLOCK: ", block);
        return (
          <Cover key={block.id} background={block.attributes.url}></Cover>
        );
      }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  });
};
