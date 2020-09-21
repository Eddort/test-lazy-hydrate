import React, { useRef, useEffect } from "react";
import atomize from "@quarkly/atomize";

const YoutubeVideo = ({
	children,
	videoId,
	...props
}) => {
	const ref = useRef(null);
	useEffect(() => {
		ref.current.innerHTML = `<iframe width="100%" height="100%" max-width="1280" max-height="720" src="https://www.youtube.com/embed/${videoId}?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
	}, [videoId]);
	return <div {...props} ref={ref} />;
};

export default atomize(YoutubeVideo)({
	name: "YoutubeVideo",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "TextLoopComp — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		videoId: {
			control: "input"
		}
	}
});