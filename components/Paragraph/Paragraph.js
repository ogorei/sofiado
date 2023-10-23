
import { relativeToAbsoluteUrls } from "../../utils/relativeToAbsoluteUrls";

export const Paragraph = ({ content }) => {
	return (
		<p
		className={`max-w-5xl mx-auto`}
		dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
	/>
	);
};
