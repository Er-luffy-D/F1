import { CrossIcon, Globe, Globe2, X } from "lucide-react";
import { F1 } from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../../context/NavContext";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const FullScreenNav = () => {
	const [time, setTime] = useState("");

	const [navOpen, setnavOpen] = useContext(NavbarContext);
	const fullscreenRef = useRef(null);
	const navItems = [
		{
			id: "home",
			path: "/",
			title: "Home",
			marquee: ["Welcome to the speedzone", " latest races, highlights, and stories.", "full throttle content ahead."],
			img: [
				"https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg",
				"https://wallpaperbat.com/img/115850-m4jr274-race-track-wallpaper-2560x1440-px.jpg",
				"https://wallpaperbat.com/img/236521-red-bull-f1-wallpaper.jpg",
			],
		},
		{
			id: "players",
			path: "/players",
			title: "Players",
			marquee: ["Get ready for the roar!", " Discover the stars of Formula 1", " Get to Know about your racers"],
			img: [
				"https://w0.peakpx.com/wallpaper/783/119/HD-wallpaper-jolyon-palmer-formula-1-british-racing-driver-renault-rs17-renault-f1-team-thumbnail.jpg",
				"https://wallpapercave.com/wp/wp4105314.jpg",
				"https://img.freepik.com/premium-photo/realistic-image-formula-1-race-car-sunset-track_1088041-88097.jpg?semt=ais_hybrid&w=740&q=80",
			],
		},

		{
			id: "about",
			path: "/about",
			title: "About",
			marquee: ["Learn about our mission", "celebrate racing and the people behind it.", "Built for motorsport fans."],
			img: [
				"https://images7.alphacoders.com/140/thumbbig-1400280.webp",
				"https://i.pinimg.com/originals/75/c6/3d/75c63db80fb037fc5bf180fb94641509.jpg",
				"https://wallpapers.com/images/featured/f1-pictures-knvmyw3fvlbulxso.jpg",
			],
		},
	];
	const fullScreen = useRef(null);
	useEffect(() => {
		if (!navOpen) return;

		const updateTime = () => {
			const newTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
			setTime(newTime);
		};

		updateTime(); // immediate update when opening
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, [navOpen]);
	function gsapAnimation() {
		const tl = gsap.timeline();
		tl.to(".fullscreennav", {
			display: "block",
		});
		tl.to(".stairing", {
			delay: 0.2,
			height: "100%",
			stagger: {
				amount: -0.3,
			},
		});

		tl.to(".navlink", {
			opacity: 1,
		});

		tl.to(
			".link",
			{
				opacity: 1,
				rotateX: 0,
				stagger: {
					amount: 0.3,
				},
			},
			"<"
		);
		tl.to(".footer", {
			opacity: 1,
		});
	}
	function gsapAnimationReverse() {
		const tl = gsap.timeline();
		tl.to(".link", {
			opacity: 0,
			rotateX: 90,
			stagger: {
				amount: 0.1,
			},
		});
		tl.to(
			".navlink",
			{
				opacity: 0,
			},
			"<"
		);
		tl.to(
			".footer",
			{
				opacity: 0,
			},
			"<"
		);
		tl.to(".stairing", {
			height: 0,
			stagger: {
				amount: 0.1,
			},
		});
		tl.to(".fullscreennav", {
			display: "none",
		});
	}

	useGSAP(
		function () {
			if (navOpen) {
				gsapAnimation();
			} else {
				gsapAnimationReverse();
			}
		},
		[navOpen]
	);

	const toggleNav = () => {
		setnavOpen(false);
	};

	return (
		<div ref={fullscreenRef} className="h-screen hidden fixed fullscreennav z-50 w-full overflow-hidden  text-white  ">
			{/* stairs */}
			<div className="h-screen w-full fixed ">
				<div className="h-full w-full flex">
					<div className="stairing h-full w-1/5 bg-black"></div>
					<div className="stairing h-full w-1/5 bg-black"></div>
					<div className="stairing h-full w-1/5 bg-black"></div>
					<div className="stairing h-full w-1/5 bg-black"></div>
					<div className="stairing h-full w-1/5 bg-black"></div>
				</div>
			</div>
			{/* Links */}
			<div ref={fullScreen} className="relative">
				<div className="navlink flex w-full justify-between items-start p-2 z-10 ">
					<div>
						<div className="w-34 ">
							<F1 />
						</div>
					</div>
					<div className="h-20 group w-20 relative mr-2 mt-1 cursor-pointer " onClick={toggleNav}>
						<div className="group-hover:bg-[#D3FD50] bg-white h-28 w-0.5 absolute origin-top -rotate-45"></div>
						<div className="group-hover:bg-[#D3FD50] bg-white h-28 w-0.5 absolute origin-top rotate-45 right-0"></div>
					</div>
				</div>
				<div className="pt-40 pb-24">
					{navItems.map((i, _) => {
						return (
							<Link key={_} to={i.path} onClick={toggleNav}>
								<div
									className={
										i.id === "about"
											? "link origin-top border-y-1 border-white relative group"
											: "link origin-top border-t-1 border-white relative group"
									}
								>
									<h1 className="font-[second] text-[7vw] uppercase leading-[1] pt-2 text-center">{i.title}</h1>

									<div className=" absolute opacity-0 top-0 bg-[#D3FD50] group-hover:opacity-100 transition-all ease-out flex text-black">
										<div className="moveX flex whitespace-nowrap">
											{i.marquee.map((line, _) => (
												<div key={_} className="flex whitespace-nowrap">
													<div key={_} className="font-[second] text-[7vw] uppercase leading-[1] pt-2 px-10">
														{line}
													</div>
													<img
														className=" h-28 rounded-full shrink-0 w-80 object-cover "
														src={i.img[Math.min(i.img.length - 1, Math.floor(Math.random() * i.img.length))]}
													></img>
												</div>
											))}
										</div>
										<div className="moveX flex whitespace-nowrap">
											{i.marquee.map((line, _) => (
												<div key={_} className="flex whitespace-nowrap">
													<div className="font-[second] text-[7vw] uppercase leading-[1] pt-2 px-10">{line}</div>
													<img
														className=" h-28 rounded-full shrink-0 w-80 object-cover "
														src={i.img[Math.min(i.img.length - 1, Math.floor(Math.random() * i.img.length))]}
													></img>
												</div>
											))}
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
				<div className="footer h-12 w-full flex align-middle justify-between">
					<p className="font-[third] hover:text-green-400 text-3xl pl-1 -leading-3">INDIA : {time}</p>
					<a href="https://builtbypiyush.me/" target="_blank">
						<p>
							<Globe className="w-14 scale-125 hover:text-green-400 " />
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default FullScreenNav;
