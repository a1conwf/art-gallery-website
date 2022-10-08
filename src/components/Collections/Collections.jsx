import React from "react";

//Styles
import "./Collections.scss";

//Images

//Mobile
import imgMob1 from "../../assets/images/mobile/image-grid-1.jpg";
import imgMob1_2x from "../../assets/images/mobile/image-grid-1@2x.jpg";
import imgMob2 from "../../assets/images/mobile/image-grid-2.jpg";
import imgMob2_2x from "../../assets/images/mobile/image-grid-2@2x.jpg";
import imgMob3 from "../../assets/images/mobile/image-grid-3.jpg";
import imgMob3_2x from "../../assets/images/mobile/image-grid-3@2x.jpg";

//Tablet
import imgTab1 from "../../assets/images/tablet/image-grid-1.jpg";
import imgTab1_2x from "../../assets/images/tablet/image-grid-1@2x.jpg";
import imgTab2 from "../../assets/images/tablet/image-grid-2.jpg";
import imgTab2_2x from "../../assets/images/tablet/image-grid-2@2x.jpg";
import imgTab3 from "../../assets/images/tablet/image-grid-3.jpg";
import imgTab3_2x from "../../assets/images/tablet/image-grid-3@2x.jpg";

//Desktop
import imgDesk1 from "../../assets/images/desktop/image-grid-1.jpg";
import imgDesk1_2x from "../../assets/images/desktop/image-grid-1@2x.jpg";
import imgDesk2 from "../../assets/images/desktop/image-grid-2.jpg";
import imgDesk2_2x from "../../assets/images/desktop/image-grid-2@2x.jpg";
import imgDesk3 from "../../assets/images/desktop/image-grid-3.jpg";
import imgDesk3_2x from "../../assets/images/desktop/image-grid-3@2x.jpg";

const Collections = () => {
	return (
		<section className="collections">
			<div className="container">
				<div className="grid__1">
					<div className="grid__1-img">
						<picture>
							<source media="(max-width: 767px)" srcSet={`${imgMob1} 343w, ${imgMob1_2x} 686w`} />
							<source media="(max-width: 1439px)" srcSet={`${imgTab1} 398w, ${imgTab1_2x} 796w`} />
							<source srcSet={`${imgDesk1} 635w, ${imgDesk1_2x} 1270w`} />
							<img src={imgDesk1} alt="grid-img-1" />
						</picture>
					</div>
					<div className="grid__1-text">
						<h2>Your Day at the Gallery</h2>
						<p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
					</div>
				</div>

				<div className="grid__2">
					<div className="grid__2-img">
						<picture>
							<source media="(max-width: 767px)" srcSet={`${imgMob2} 343w, ${imgMob2_2x} 686w`} />
							<source media="(max-width: 1439px)" srcSet={`${imgTab2} 398w, ${imgTab2_2x} 796w`} />
							<source srcSet={`${imgDesk2} 635w, ${imgDesk2_2x} 1270w`} />
							<img src={imgDesk2} alt="grid-img-2" />
						</picture>
					</div>
					<div className="grid__2-img img2">
						<picture>
							<source media="(max-width: 767px)" srcSet={`${imgMob3} 343w, ${imgMob3_2x} 686w`} />
							<source media="(max-width: 1439px)" srcSet={`${imgTab3} 280w, ${imgTab3_2x} 560w`} />
							<source srcSet={`${imgDesk3} 445w, ${imgDesk3_2x} 890w`} />
							<img src={imgDesk3} alt="grid-img-3" />
						</picture>
					</div>
					<div className="grid__2-text">
						<h2 className="white">Come &#38; be inspired</h2>
						<p>We&#8217;re excited to welcome you to our gallery and see how our collections influence you.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collections;
