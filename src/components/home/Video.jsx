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
		<div className="h-full w-full pointer-events-none relative overflow-hidden">
			{/* Poster (or blurred background) shown until video loads */}
			<div
				className={`absolute inset-0 bg-gray-800 transition-opacity duration-700 ${
					loaded ? "opacity-0" : "opacity-100"
				}`}
			/>

			{/* Dark overlay for readability (optional) */}
			<div className="absolute inset-0 bg-black/30" />

			{/* Video fades in when ready */}
			<video
				ref={videoRef}
				autoPlay
				loop
				muted
				playsInline
				preload="metadata"
				onLoadedData={() => setLoaded(true)}
				className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
				src="f1.mp4"
			/>
		</div>
	);
};
