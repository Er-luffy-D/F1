import { Video } from "../components/home/Video";
import { HomeHeroText } from "../components/home/HomeHeroText";
import { HomeBottomText } from "../components/home/HomeBottomText";
import { HomeMiddleText } from "../components/home/HomeMiddleText";
import { useState } from "react";
const Home = () => {
	const [loading, setloading] = useState(true);
	return (
		<div>
			<div className="h-screen w-screen fixed">
				<Video />
			</div>
			<div className="h-screen w-screen relative flex flex-col justify-between text-white">
				<HomeHeroText></HomeHeroText>
				<HomeMiddleText />
				<HomeBottomText></HomeBottomText>
			</div>
		</div>
	);
};

export default Home;
