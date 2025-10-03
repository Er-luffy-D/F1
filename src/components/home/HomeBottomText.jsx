import React from "react";
import { Link } from "react-router-dom";

export const HomeBottomText = () => {
	return (
		<div className="font-[second] flex items-center justify-center pb-2 gap-5 ">
			<Link className="text-[5.6rem] leading-20 border-4 border-white rounded-full hover:border-amber-300 hover:text-amber-300 uppercase px-8 pt-1" to={"/players"}>
				Players
			</Link>
			<Link className="text-[5.6rem] leading-20 border-4 border-white rounded-full uppercase px-8 pt-1 hover:border-amber-300 hover:text-amber-300" to={"/about"}>
				About
			</Link>
		</div>
	);
};
