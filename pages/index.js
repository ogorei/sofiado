import React from "react";
import Top from "../components/Top";
import Layout from "@/components/Layout";
import client from "@/client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { cleanTransformBlocks } from "@/utils/cleanTransformBlocks";
import { mapMainMenuItems } from "@/utils/mapMainMenuItems";

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql
    `query PageQuery {
      nodeByUri(uri: "/") {
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
		`
	});
	return {
		props: { 
			blocks: cleanTransformBlocks(data.nodeByUri.blocks),
			menuItems: mapMainMenuItems(data.acfOptionsMainMenu.main_menu.menuItems)
		}
	};
}

const Home = (props) => {
	console.log("home-props",props);
	return (
		<Layout>
		<BlockRenderer blocks={props.blocks} />
		</Layout>
	);
};

export default Home;
