import "./header.css";
import img from "../../images/bg_img.jpg"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Harvest</span>
        <span className="headerTitleLg">Ministries</span>
      </div>
      <img
        className="headerImg"
        src = {img}
        alt=""
      />
    </div>
  );
}
