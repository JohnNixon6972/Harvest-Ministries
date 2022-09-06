import { useContext, useState } from "react";
import "./write.css";
import axios from "../../axios";
import { Context } from "../../context/Context";
import {ref,getDownloadURL, uploadBytes} from 'firebase/storage'
import storage from "../../firebase";

export default function Write({handleInputState}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
   
      try{
        const filename = Date.now() + file.name;
        const imgref = ref(storage,`images/${filename}`);
      await  uploadBytes(imgref,file).then(()=>{
          alert("image uploaded");
        });
      await  getDownloadURL(ref(storage,`images/${filename}`)).then((url) =>{
          newPost.photo = url;
        })
        
      }
      catch(err){
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/Harvest-Ministries");
    } catch (err) {}
  };
  return (
    <div className="write">
      
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
     
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup1">
          <label htmlFor="fileInput" >
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          </div>
          <div className="writeFormGroup2">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup3">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        {/* <div className="button"> */}
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        {/* </div> */}
       
      </form>
    </div>
  );
}