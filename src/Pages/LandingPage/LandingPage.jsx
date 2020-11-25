import React, { useState } from "react";
import "./LandingPage.css";
import logo from "./imgs/logo.png";
import google from "./imgs/google.png";
import kijiji from "./imgs/kijiji.png";
import u from "./imgs/u.png";
import wk from "./imgs/wk.png";
import to from "./imgs/21.png";
import ebay from "./imgs/ebay.png";
import twitt from "./imgs/twitt.png";
import y from "./imgs/y.png";
import b from "./imgs/b.png";
import a from "./imgs/a.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchFunction } from "../../Redux/searchReducer/searchReducerActions";

function LandingPage(props) {
  var [valuee, setValue] = useState("");
  var [selectedEngine, setSelectedEngines] = useState([]);
  const handleSearch = (searchItem, site) => {
    if(selectedEngine.length===0)
    {
      alert("Please select search engines.")
    }
    else if (valuee==="")
    {
      alert("Please enter text")
    }
    else {
      props.searchFunction(valuee, selectedEngine);
      props.history.push("/searchresults");
    }
  };

  // const Circle = (props) => {
  //   return(
  //     <div className="circle flex" id={`${props.uid}`}  >
  //           <img className="w80h80" src={`${props.img}`} alt=""
  //           onClick={()=>{handleIconClick(`${props.uid}`)}}/>
  //         </div>
  //   )
  // }

  const handleIconClick = (id) => {
    // console.log(id);
    var refCircle = document.getElementById(id);
    if (selectedEngine.includes(id)) {
      var newArr = selectedEngine.filter((element) => {
        return id !== element;
      });
      setSelectedEngines(()=>newArr);
      refCircle.style.backgroundColor = "transparent";
    }
    else{
      if(selectedEngine.length>3)
      {
        alert("Can not select more than 4 for now.")
      }
      else{
        refCircle.style.backgroundColor = "white";
        setSelectedEngines((prevState) => [...prevState, id]);
      }
    }

  };

  return (
    <div className="ladingpage-wrapper">
      <div></div>
      <div className="landingpage-container">
        <div className="bg-dark flex">
          <img style={{ width: "20rem", height: "10rem" }} src={logo} alt="" />
        </div>
        <div className="bg-smoke flex search-icons-row flex">
          <div className="circle flex" id="google">
            <img
              className="w80h80"
              src={google}
              alt=""
              onClick={() => {
                handleIconClick("google");
              }}
            />
          </div>
          <div className="circle flex" id="facebook">
            <img className="w80h80" src={to} alt="" onClick={() => {
                handleIconClick("facebook");
              }} />
          </div>
          <div className="circle flex" id="ebay">
            <img className="w80h80" src={ebay} alt="" onClick={() => {
                handleIconClick("ebay");
              }}/>
          </div>
          <div className="circle flex" id="amazon">
            <img className="w80h80" src={a} alt="" 
            onClick={() => {
              handleIconClick("amazon");
            }}/>
          </div>
          <div className="circle flex" id="bing">
            <img className="w80h80" src={b} alt="" 
            onClick={() => {
              handleIconClick("bing");
            }}/>
          </div>
          <div className="circle flex" id="wikipedia">
            <img className="w80h80" src={wk} alt="" 
            onClick={() => {
              handleIconClick("wikipedia");
            }}/>
          </div>
          <div className="circle flex" id="youtube">
            <img className="w80h80" src={u} alt="" onClick={() => {
                handleIconClick("youtube");
              }}/>
          </div>
          <div className="circle flex" id="yahoo">
            <img className="w80h80" src={y} alt="" onClick={() => {
                handleIconClick("yahoo");
              }}/>
          </div>
          <div className="circle flex" id="kijiji">
            <img className="w80h80" src={kijiji} alt="" onClick={() => {
                handleIconClick("kijiji");
              }}/>
          </div>
          <div className="circle flex" id="twitter">
            <img className="w80h80" src={twitt} alt="" onClick={() => {
                handleIconClick("twitter");
              }}/>
          </div>
        </div>
        <div className="bg-silver search-box flex">
          <div
            className="input-group mb-3 f1-5"
            style={{ width: "60%", lineHeight: "2rem" }}
          >
            <input
              type="text"
              style={{ width: "80%" }}
              value={valuee}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary f1-5"
                type="button"
                onClick={() => {
                  handleSearch();
                }}
              >
                Search
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="bg-blue"></div>
      </div>
      <div></div>
    </div>
  );
}
var actions = {
  searchFunction,
};
export default connect(null, actions)(LandingPage);
