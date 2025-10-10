import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Player from "./pages/Player";
import Navbar from "./components/common/Navbar";
export const App = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/Players" element={<Player />}></Route>
			</Routes>
		</div>
	);
};
