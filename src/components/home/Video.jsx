import React, { useEffect, useRef, useState } from "react";

export const Video = () => {
	const videoRef = useRef(null);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const v = videoRef.current;
		if (!v) return;

		// Set playback speed
		v.playbackRate = 1.15;

		// When video is ready enough to play smoothly
		const handleCanPlay = () => setLoaded(true);
		v.addEventListener("canplaythrough", handleCanPlay);

		return () => v.removeEventListener("canplaythrough", handleCanPlay);
	}, []);

	return (
		<>
			<style jsx global>{`
				#vignette-overlay {
					filter: blur(12px);
					box-shadow: inset 0 0 100px 15px rgba(255, 255, 255, 0.4);
					opacity: 0.8;
					pointer-events: none; /* Allows user interaction with content below */
				}
				@keyframes scaleUpDown {
					0%,
					100% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.3);
					}
				}

				.scale-animate {
					animation: scaleUpDown 3s ease-in-out infinite;
				}
			`}</style>

			<div className="h-full w-full pointer-events-none relative overflow-hidden">
				{!loaded && (
					<>
						<div className="relative  min-h-screen bg-black overflow-hidden font-sans">
							<div className="scale-animate absolute inset-0 h-1/3 w-1/3 rounded-4xl top-50 left-130 bg-[url(/road.png)] blur-3xl backdrop-blur-3xl"></div>
							<div id="vignette-overlay" className="absolute inset-0"></div>
						</div>
						<div className="absolute inset-0 bg-black/30" />
					</>
				)}
				{/* Video fades in when ready */}
				<video
					ref={videoRef}
					autoPlay
					loop
					muted
					playsInline
					preload="metadata"
					onLoadedData={() => setLoaded(true)}
					className={`h-full w-full object-cover transition-opacity duration-700 ${
						loaded ? "opacity-100" : "opacity-0"
					}`}
					src="f1.mp4"
				/>
			</div>
		</>
	);
};
