import client from "@/client";
import { gql } from "@apollo/client";
import { cleanTransformBlocks } from "./cleanTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {
  // if uri exist query the parameter, if not just query homepage
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
		query: gql
    `query PageQuery ($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          id
          blocks
        }
      }
				acfOptionsMainMenu {
					main_menu {
						menuItems {
							menuItem {
								destination {
									... on Page {
										uri
									}
								}
								label
							}
							items {
								destination {
									... on Page {
										uri
									}
								}
								label
							}
						}
					}
				}
			
    }
		`,
		variables: { uri }
	});
	return {
		props: {
			blocks: cleanTransformBlocks(data.nodeByUri.blocks),
			menuItems: mapMainMenuItems(data.acfOptionsMainMenu.main_menu.menuItems)
		}
	};
}