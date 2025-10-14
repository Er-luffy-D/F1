import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Player from "./pages/Player";
import Navbar from "./components/common/Navbar";
import FullscreenNav from "./components/common/FullScreenNav";
export const App = () => {
	return (
		<div>
			<Navbar></Navbar>
			<FullscreenNav></FullscreenNav>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/players" element={<Player />}></Route>
			</Routes>
		</div>
	);
};
