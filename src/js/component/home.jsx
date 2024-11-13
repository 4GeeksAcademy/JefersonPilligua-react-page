import React from "react";
import { NavBar } from "./navbar";
import { Jumbo } from "./jumbo";
import { Card } from "./cards"
import { Footer } from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbo />
			<Card />
			<Footer/>
		</div>
	);
};

export default Home;
