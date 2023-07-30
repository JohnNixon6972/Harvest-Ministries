import "./AboutUs.css";
import about_img from "../../images/about_pic.jpg"
export default function AboutUs() {
	return (
		<>
			<div className="section">
				<div className="container">
					<div className="content-section">
						<div clasNames="title">
							<h1>About Us</h1>
						</div>
						<div className="content">
							<h3>Sending Forth Laborers for Harvest - Missions Ministry</h3>
							<p>Welcome to the Missions Ministry of Harvest Ministries! At Harvest, we are passionate about fulfilling the Great Commission given by our Lord Jesus Christ to go into all the world and make disciples of all nations. Our mission is to send forth laborers to bring souls into God's Kingdom, spreading the message of love, hope, and salvation to the ends of the earth.</p>
							<br />
							<h3>Our Vision</h3>
							<p>At Harvest Ministries, we envision a world where every person has the opportunity to hear and respond to the Gospel. We believe in equipping and empowering individuals with a heart for missions to go out and be the hands and feet of Jesus, impacting lives, and transforming communities through the power of God's Word.</p>
							<br />

							<div className="button">
								<a href="/Harvest-Ministries">Our Church Activities</a>
							</div>
						</div>
						<div class="social">
							<a href="https://www.facebook.com/profile.php?id=100081239378626" ><i className="social-icon fab fa-facebook"></i></a>
							<a href="https://instagram.com/_harvestchurch_?igshid=YmMyMTA2M2Y="><i className="social-icon fab fa-instagram"></i></a>
							<a href="https://youtube.com/channel/UCJ3JmUE6Z45rT7y_k-WL5dw"><i class="social-icon fab fa-youtube"></i></a>
						</div>
					</div>
					<div class="image-section">
						<img src={about_img} alt="about us img" />
					</div>
				</div>
			</div>
		</>
	);
}
