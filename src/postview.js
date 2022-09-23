import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import "./App.css";

function PostView() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://instaproject-10x.herokuapp.com/";
    const httpObject={
      method:"GET",
      headers:{
        'Accept':"application/json",
        'Content-Type':"application/json"
      }
    }
    fetch(url,httpObject).then((response) => response.json()).then((response) => setData(response));
  }, []);
  const navigate=useNavigate()
  const formpage=()=>{
    navigate('/formpage')
  }
  return (
    <>
      <div>
        <div className="navbar">
          <div className="navbar-left">
            <div>
              <img src="target.jpg" alt="No logo" />
            </div>
            <div className="instaclone">Instaclone</div>
          </div>
          <div className="camera">
            <img src="camera.png" alt="cam"  onClick={() => formpage()} />
          </div>
        </div>
        {data.map((key) => (
          <>
            <div className="container">
                <div className="header">
                    <div className="left-content">
                        <div id="name">{key.name}</div>
                        <div id="location">{key.location}</div>
                    </div>
                    <div className="dots"><img src="dots.png" alt="no logo"/></div>
                </div>
                <div className="photos"><img src={key.PostImage} alt="no-photos"/></div>
                <div className="heart">
                    <div>
                    <img src="heart-icon.png" alt="no-icon"/>
                    <img src="rocket-icon.png" alt="no-icon"/>
                    </div>
                    <div className="date">{key.date}</div>
                </div> 
                <div className="likes">{key.likes} likes</div>
                <div className="description">
                    {key.description}
                </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
export default PostView;
