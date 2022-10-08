import React from "react";
import Collections from "../../components/Collections/Collections";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

//Icons
import logoLight from "../../assets/brand/logo-light.svg";
import iconFacebookLight from "../../assets/svg/icon-facebook-light.svg";
import iconInstagramLight from "../../assets/svg/icon-instagram-light.svg";
import iconTwitterLight from "../../assets/svg/icon-twitter-light.svg";

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<Collections />
			</main>
			<Footer className="footer dark" logo={logoLight} iconFacebook={iconFacebookLight} iconInstagram={iconInstagramLight} iconTwitter={iconTwitterLight} />
		</>
	);
};

export default Home;
