import React from "react";
import Nav from "./nav"
import Card from "./card"
import Jumbotron from "./jumbotron";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<div className="container">
				<Jumbotron />
				<div className="row d-flex justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
