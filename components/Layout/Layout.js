import Head from "next/head";
import { MainMenu } from "../MainMenu";
import { BlockRenderer } from "../BlockRenderer";

export const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>reina</title>
				<meta name="description" />
			</Head>
			<MainMenu items={props.menuItems} />
			<BlockRenderer blocks={props.blocks} />
		</div>
	);
};

export default Layout;
