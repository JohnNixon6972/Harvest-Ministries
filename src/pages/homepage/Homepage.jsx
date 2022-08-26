import { useEffect,useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";

export default function Homepage() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
     const res = await axios.get("/posts")
      console.log(res);
    }
    fetchPosts();
  },[])
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
