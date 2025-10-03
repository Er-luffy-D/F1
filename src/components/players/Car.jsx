import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Car = () => {
	const carRef = useRef(null);
	const imageRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.to(carRef.current, {
			x: "-130rem",
			y: "40rem",
			ease: "none",
			scrollTrigger: {
				trigger: ".mixe",
				markers: true,
				start: "top center",
				end: "bottom center",
				scrub: 1.1,
			},
		});
	});

	return (
		<div>
			<div className="relative mixe w-full h-[120vh]">
				<div ref={carRef} className="w-[35vw] absolute top-[-30rem] z-20 -right-96 h-96 ">
					<img ref={imageRef} src="car1.png" className="w-full object-cover rotate-[-110deg]" />
				</div>
				<div className="h-screen w-screen flex justify-center absolute items-center">
					<h2 className="text-5xl font-bold text-black">Let's Go</h2>
				</div>
			</div>
		</div>
	);
};

export default Car;
