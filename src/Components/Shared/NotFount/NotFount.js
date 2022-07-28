import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiRun } from 'react-icons/bi';

const NotFount = () => {
    const navigate = useNavigate()
    return (
       <div style={{backgroundColor: '#021B2A', color: "white"}}>
         <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:  "center", height: "100vh"}}> 
            <h1 style={{margin: "0"}}>AHHHHHHH! YOU FOUND ME!</h1>
            <p style={{ width: "470px", textAlign: "center"}}>Uh oh, we can't seem to find the page you're looking for. Try going back to the previous page!</p>
            <BiRun style={{fontSize: "100px", color: "#9e2780", transform: "scaleX(-1)"}}></BiRun>
             <br />
            <button style={{width: "150px", marginRight: "10px"}} className = "about-btn" onClick={() => navigate("/home")}>Go to Home</button>
           <div>

           </div>
        </div>
       </div>
    );
};

export default NotFount;