import React from "react";
import { Video } from "./Video";

export const HomeHeroText = () => {
	return (
		<div className="font-[first] pt-3 text-center">
			<div className="text-9xl flex justify-center items-center uppercase leading-[6.3rem]">THE PINNACLE</div>
			<div className="text-9xl flex justify-center items-center uppercase leading-[6.3rem]">
				OF
				<div className="h-[6rem] -mt-4 rounded-full overflow-hidden">
					<Video />
				</div>
				MOTORSPORT
			</div>
			<div className="text-9xl flex justify-center items-center uppercase leading-[6.3rem]">UNRIVALED SPEED</div>
		</div>
	);
};
