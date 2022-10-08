import React from "react";

//Styles
import "./Footer.scss";

const Footer = ({className, logo, iconFacebook, iconInstagram, iconTwitter}) => {
	return (
		<footer className={className}>
			<div className="container">
				<div className="footer__inner">
					<img className="footer__inner-logo" src={logo} alt="logo-img" />
					<p className="footer__inner-text">The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
					<ul className="footer__inner-socials">
						<li>
							<img src={iconFacebook} alt="icon-facebook" />
						</li>
						<li>
							<img src={iconInstagram} alt="icon-instagram" />
						</li>
						<li>
							<img src={iconTwitter} alt="icon-twitter" />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
