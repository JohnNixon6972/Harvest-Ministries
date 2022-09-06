import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        
        <a href="https://www.facebook.com/profile.php?id=100081239378626" ><i className="topIcon fab fa-facebook-square"></i></a>
        <a href="https://instagram.com/_harvestchurch_?igshid=YmMyMTA2M2Y="><i className="topIcon fab fa-instagram-square"></i></a>
        <a href="https://youtube.com/channel/UCJ3JmUE6Z45rT7y_k-WL5dw"><i class="topIcon fab fa-youtube-square"></i></a>
        
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/Harvest-Ministries">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/aboutus">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Harvest-Ministries">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem1" onClick={handleLogout}>
            <span className="logout"> {user && "LOGOUT"}</span>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
