import { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";

export const F1 = () => {
	return (
		<svg viewBox="0 0 1600 400" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" className="h-full w-full">
			<title>F1</title>
			<g clipPath="url(#clip0_47001_481:S13:)">
				<path
					d="M1367.21 312.501C1379.83 312.501 1390.25 316.71 1398.5 325.168C1406.75 333.626 1410.88 344.001 1410.88 356.334C1410.88 368.667 1406.79 379.043 1398.58 387.418C1390.38 395.793 1380 400.001 1367.38 400.001C1354.75 400.001 1344.25 395.792 1335.92 387.334C1327.54 378.876 1323.38 368.501 1323.38 356.168C1323.38 343.835 1327.54 333.459 1335.83 325.084C1344.13 316.709 1354.59 312.501 1367.21 312.501ZM1167.04 149.792H635.292C501.959 149.792 473.584 160.083 403.667 227.875H403.708L226.292 400H0L281.542 120.583C386.208 17 436.667 4.27469e-06 615.125 0H1320.04L1167.04 149.792ZM1144.21 173.708L1003.96 313.958H641.125C574.625 313.958 559.917 317.083 526.917 350.083L477 400H267.167L422.292 244.875C483.209 184 504.209 173.708 638.5 173.708H1144.21ZM1600 0L1198.92 400H950.875L1350.88 0H1600ZM1367.13 319.376C1356.79 319.376 1348.13 322.96 1341.13 330.126C1334.17 337.293 1330.67 345.96 1330.67 356.168C1330.67 366.376 1334.17 375.042 1341.13 382.209C1348.09 389.376 1356.75 392.959 1367.13 392.959C1377.5 392.959 1386.13 389.418 1393.13 382.293C1400.09 375.168 1403.58 366.501 1403.58 356.251C1403.58 346.001 1400.09 337.293 1393.13 330.126C1386.17 322.959 1377.5 319.376 1367.13 319.376ZM1367.21 332.084C1373.5 332.084 1378.25 333.251 1381.42 335.626C1384.58 337.959 1386.17 341.501 1386.17 346.209C1386.17 350.917 1385.54 354.417 1384.25 356.709C1382.96 359.001 1380.79 360.834 1377.71 362.251L1386.83 380.668H1376.71L1368.42 363.501H1358.63L1358.58 363.459V380.626H1348.96V332.084H1367.21ZM1358.42 355.918H1368.21C1371.21 355.918 1373.38 355.293 1374.67 354.001C1376 352.709 1376.67 350.626 1376.67 347.751C1376.67 342.293 1373.25 339.584 1366.38 339.584H1358.42V355.918Z"
					fill="white"
				></path>
			</g>
			<defs>
				<clipPath id="clip0_47001_481:S13:">
					<rect className="h-full w-full" fill="white"></rect>
				</clipPath>
			</defs>
		</svg>
	);
};

const Navbar = () => {
	const [navOpen, setnavOpen] = useContext(NavbarContext);
	console.log(navOpen);
	const navRef = useRef(null);
	const toggleNav = () => {
		setnavOpen(true);
	};
	return (
		<div className="z-1 flex fixed top-0 w-full items-start justify-between">
			<div className="p-2">
				<div className="w-34 ">
					<F1 />
				</div>
			</div>
			<div
				onMouseEnter={() => {
					navRef.current.style.height = "100%";
				}}
				onMouseLeave={() => {
					navRef.current.style.height = "0%";
				}}
				className="h-12 w-57 cursor-pointer	 bg-black relative group"
				onClick={toggleNav}
			>
				<div ref={navRef} className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"></div>
				<div className=" relative">
					<div className="group-hover:bg-black bg-white rounded-4xl w-28 h-1 relative top-2.5 -right-18"></div>
					<div className="group-hover:bg-black bg-white rounded-4xl w-20 h-1 relative top-4 -right-26"></div>
					<div className="group-hover:bg-black bg-white rounded-4xl w-12 h-1 relative top-5.5 -right-34"></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
