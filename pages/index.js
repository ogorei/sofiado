import React from "react";
import Top from "../components/Top";
import Layout from "@/components/Layout";
import client from "@/client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { cleanTransformBlocks } from "@/utils/cleanTransformBlocks";

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql
    `query NewQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks
        }
      }
    }
		`
	});
	return {
		props: { blocks: cleanTransformBlocks(data.nodeByUri.blocks)}
	};
}

const Home = (props) => {
	return (
		<Layout>
		<BlockRenderer blocks={props.blocks} />
		</Layout>
	);
};

export default Home;
