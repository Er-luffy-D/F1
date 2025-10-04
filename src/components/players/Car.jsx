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
				start: "top center",
				end: "bottom center",
				scrub: 1.1,
			},
		});
		ScrollTrigger.create({
			trigger: ".mixe",
			start: "top top", 
			end: "bottom top",
			onEnter: () =>
				gsap.to(".mixe", {
					ease: "none",
					delay: -4,
					background: "linear-gradient(to bottom, rgb(0,0,0,0) 50%, oklch(21.6% 0.006 56.043) 50%)",
				}),
			onLeaveBack: () => gsap.to(".mixe", { ease: "none", delay: -4, backgroundColor: "rgb(0,0,0,0)" }), // revert color
		});
	});

	return (
		<div>
			<div className="relative mixe w-full h-[120vh] rgb(0,0,0,0) ">
				<div ref={carRef} className="w-[35vw] absolute top-[-30rem] z-20 -right-96 h-96 ">
					<img ref={imageRef} src="car1.png" className="w-full object-cover rotate-[-110deg]" />
				</div>
				<div className="h-[130vh] w-screen rotate-[-10deg] scale-x-150 scale-y-75 flex justify-center absolute items-center bg-[url('/road.png')] bg-cover bg-center  "></div>
			</div>
		</div>
	);
};

export default Car;
