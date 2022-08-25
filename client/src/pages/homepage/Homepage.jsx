import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <h1 className="events">E V E N T S</h1>
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
