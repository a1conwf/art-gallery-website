import React from "react";
import {Link} from "react-router-dom";

//Styles
import "./Header.scss";

//Images and icons
import heroMob from "../../assets/images/mobile/image-hero-mob.jpg";
import heroMob2x from "../../assets/images/mobile/image-hero-mob@2x.jpg";
import heroTab from "../../assets/images/tablet/image-hero-tab.jpg";
import heroTab2x from "../../assets/images/tablet/image-hero-tab@2x.jpg";
import heroDesk from "../../assets/images/desktop/image-hero-desk.jpg";
import heroDesk2x from "../../assets/images/desktop/image-hero-desk@2x.jpg";
import arrowRight from "../../assets/svg/icon-arrow-right.svg";

const Header = () => {
	return (
		<header className="header">
			<h1 className="desk-title">
				Modern <br /> art gallery
			</h1>
			<picture>
				<source media="(max-width: 767px)" srcSet={`${heroMob} 375w, ${heroMob2x} 750w`} />
				<source media="(max-width: 1439px)" srcSet={`${heroTab} 437w, ${heroTab2x} 874w`} />
				<source srcSet={`${heroDesk} 540w, ${heroDesk2x} 1080w`} />
				<img src={heroDesk} alt="header-img" />
			</picture>
			<div className="header__content">
				<h1 className="header__content-title">Modern art gallery</h1>
				<div className="header__content-info">
					<p>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
				</div>
				<Link to="/contact" className="btn__container">
					<button className="btn location">Our location</button>
					<img className="arrow right" src={arrowRight} alt="icon-arrow-right" />
				</Link>
			</div>
		</header>
	);
};

export default Header;
