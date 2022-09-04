import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "../../axios.js";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
        <h2 className="events">E V E N T S</h2>
        <hr className="hr"/>
        <div className="home">
        <Posts posts={posts} />
        {/* <div className="sidebar1"> */}
        {/* <Sidebar /> */}
        {/* </div> */}
        
      </div>
    </>
  );
}
