import client from "@/client";
import { gql } from "@apollo/client";
import { cleanTransformBlocks } from "@/utils/cleanTransformBlocks";
import { BlockRenderer } from "@/components/BlockRenderer";

export default function Page(props) {
	return (
		<div>
			<BlockRenderer blocks={props.blocks} />
		</div>
	);
}

export const getStaticProps = async context => {
	const uri = `/${context.params.slug.join("/")}/`;
	const { data } = await client.query({
		query: gql`
			query PageQuery($uri: String!) {
				nodeByUri(uri: $uri) {
					... on Page {
						id
						title
						blocks
					}
				}
			}
		`,
		variables: { uri }
	});
	const blocks = cleanTransformBlocks(data.nodeByUri.blocks);
	return {
		props: {
			blocks,
			title: data.nodeByUri.title
		}
	};
};

export const getStaticPaths = async () => {
	// speficify the paths that next.js should pre-render
	const { data } = await client.query({
		query: gql`
			query AllPagesQuery {
				pages {
					nodes {
						uri
					}
				}
				properties {
					nodes {
						uri
					}
				}
			}
		`
	});
	return {
		paths: [...data.pages.nodes, ...data.properties.nodes].filter(page => page.uri !== "/").map(page => ({
			params: {
				slug: page.uri.substring(1, page.uri.length - 1).split("/")
			}
		})),
		// url will dynamically try to match the path
		fallback: "blocking"
	};
};
