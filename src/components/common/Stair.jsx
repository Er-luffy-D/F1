import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

const Stair = ({ children }) => {
	const currentPath = useLocation().pathname;
	const pageRef = useRef(null);
	const stairParent = useRef(null);
	useGSAP(
		function () {
			const tl = gsap.timeline();

			tl.to(stairParent.current, {
				display: "block",
			});

			tl.from(".stair", {
				height: 0,
				stagger: {
					amount: -0.2,
				},
			});

			tl.to(".stair", {
				y: "100%",
				stagger: {
					amount: -0.2,
				},
			});

			tl.to(stairParent.current, { display: "none" });

			tl.to(".stair", {
				y: "0%",
			});

			gsap.from(pageRef.current, {
				opacity: 0,
				delay: 1.1,
			});
		},
		[currentPath]
	);

	return (
		<div className="overflow-hidden">
			<div ref={stairParent} className="h-screen w-full  fixed z-20">
				<div className="h-full w-full flex">
					<div className="stair h-full w-1/5 bg-black"></div>
					<div className="stair h-full w-1/5 bg-black"></div>
					<div className="stair h-full w-1/5 bg-black"></div>
					<div className="stair h-full w-1/5 bg-black"></div>
					<div className="stair h-full w-1/5 bg-black"></div>
				</div>
			</div>
			<div>
				<div ref={pageRef}>{children}</div>
			</div>
		</div>
	);
};

export default Stair;
