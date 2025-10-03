import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { playerData } from "../components/players/playerData";
import Car from "../components/players/Car";

const Player = () => {
	const imageDivRef = useRef(null);
	const imageRef = useRef(null);

	// const carRef = useRef(null);
	// const section2Ref = useRef(null);

	const teamColors = {
		"Red Bull Racing": "#1E41FF",
		Mercedes: "#00D2BE",
		Ferrari: "#DC0000",
		McLaren: "#FF8700",
		"Aston Martin": "#006F62",
		Alpine: "#0090FF",
		Williams: "#005AFF",
		"Racing Bulls": "#6692FF",
		"Kick Sauber": "#52E252",
		Haas: "#B6BABD",
	};

	// for scroll trigger
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(function () {
		gsap.from(imageRef.current, {
			x: "6rem",
			delay: 1.4,
		});

		gsap.to(imageDivRef.current, {
			scrollTrigger: {
				trigger: imageDivRef.current,
				start: "top 32.5%",
				end: "top -60%",
				pin: true,
				scrub: true,
				onUpdate: (elem) => {
					const index = Math.min(Math.floor(elem.progress * playerData.length), playerData.length - 1);
					const currentPlayer = playerData[index];

					imageRef.current.src = currentPlayer.image_url;

					imageDivRef.current.style.backgroundColor = teamColors[currentPlayer.team];
				},
			},
		});

		// if (carRef.current && section2Ref.current) {
		// }
	});
	return (
		<div>
			<div className="section1">
				<div ref={imageDivRef} className="h-80 overflow-hidden rounded-4xl w-60 absolute top-60 left-90 bg-red-500">
					<img
						ref={imageRef}
						className="w-full object-cover"
						src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/haas/olibea01/2025haasolibea01right.webp"
						alt="F1 Player"
					/>
				</div>
				<div className="relative font-[second]">
					<div className=" mt-[50vh] ">
						<h1 className="text-[19.5vw]  uppercase text-center leading-[17vw]">
							The <br />
							Grid
						</h1>
					</div>
					<div className="pl-[50%] mt-10 ">
						<p className="text-3xl">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;THE
							CULMINATION OF AUTOMOTIVE EXCELLENCE AND ATHLETIC OBSESSION. This is the unrelenting, high-stakes domain
							where twenty world-class protagonists face the ultimate test. Dive into comprehensive statistics, analyze
							the formidable strategies and ferocious rivalries that shape the championship narrative. Access
							unparalleled insight into the sheer audacity required to conquer the pinnacle of global motorsport.
						</p>
					</div>
				</div>
			</div>
			<div >
				<Car />
			</div>
			<div className="h-screen"></div>
		</div>
	);
};

export default Player;
