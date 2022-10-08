import React from "react";
import {Link} from "react-router-dom";
import Footer from "../../components/Footer/Footer";

//Styles
import "./Contact.scss";

//Images and icons
import mapMob from "../../assets/images/mobile/image-map.png";
import mapMob2x from "../../assets/images/mobile/image-map@2x.png";
import mapTab from "../../assets/images/tablet/image-map.png";
import mapTab2x from "../../assets/images/tablet/image-map@2x.png";
import mapDesk from "../../assets/images/desktop/image-map.png";
import mapDesk2x from "../../assets/images/desktop/image-map@2x.png";
import arrowLeft from "../../assets/svg/icon-arrow-left.svg";
import logoDark from "../../assets/brand/logo-dark.svg";
import iconFacebookDark from "../../assets/svg/icon-facebook-dark.svg";
import iconInstagramDark from "../../assets/svg/icon-instagram-dark.svg";
import iconTwitterDark from "../../assets/svg/icon-twitter-dark.svg";

const Contact = () => {
	return (
		<>
			<div className="map__container">
				<picture>
					<source media="(max-width: 767px)" srcSet={`${mapMob} 375w, ${mapMob2x} 750w`} />
					<source media="(max-width: 1439px)" srcSet={`${mapTab} 768w, ${mapTab2x} 1536w`} />
					<source srcSet={`${mapDesk} 1440w, ${mapDesk2x} 2880w`} />
					<img src={mapDesk} alt="map-img" />
				</picture>
				<Link to="/" className="btn__container home">
					<button className="btn location">Back to home</button>
					<img className="arrow left" src={arrowLeft} alt="icon-arrow-left" />
				</Link>
			</div>
			<section className="location">
				<div className="container">
					<h2 className="location__title white">Our location</h2>
					<div className="location__info">
						<h3 className="location__info-title">99 King Street</h3>
						<ul className="location__info-list">
							<li>Newport</li>
							<li>RI 02840</li>
							<li>United States of America</li>
						</ul>
						<p className="location__info-text">Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
					</div>
				</div>
			</section>
			<Footer className="footer gold" logo={logoDark} iconFacebook={iconFacebookDark} iconInstagram={iconInstagramDark} iconTwitter={iconTwitterDark} />
		</>
	);
};

export default Contact;
