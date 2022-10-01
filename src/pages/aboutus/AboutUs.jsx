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
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
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
				<img src={about_img} alt = "about us img"/>
			</div>
		</div>
	</div>
    </>
  );
}
