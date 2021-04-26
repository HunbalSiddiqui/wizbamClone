import React, { useState, useEffect } from "react";
import "./LandingPage.css";
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
import { connect } from "react-redux";
import { searchFunction } from "../../Redux/searchReducer/searchReducerActions";
import Switch from "@material-ui/core/Switch";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function LandingPage(props) {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    var container = document.querySelector(".landingpage-container");
    var searchBtn = document.querySelector(".search-btn");
    var searchbar = document.querySelector(".searchbar");
    var landingpageRight = document.querySelector(".landingpage-right");
    if (state.checkedA) {
      container.style.background = "#35363A";
      searchBtn.style.border = "0.1px solid white";
      searchBtn.style.color = "white";
    } else {
      container.style.background = "white";
      // landingpageRight.stlye.background = "whitesmoke"
      searchBtn.style.border = "1px solid #35363A";
      searchbar.style.border = "0.1px solid lightgray";
      searchbar.style.boxShadow =
        "0 1px #fff, inset 0 1px 4px rgb(243 82 82 / 15%)";
    }
    return () => {
      // cleanup
    };
  }, [state]);

  const ThemeSwitch = () => {
    return (
      <div className="flex">
        {state.checkedA ? (
          <Brightness4Icon style={{ fontSize: "3rem", color: "orange" }} />
        ) : (
          <Brightness4Icon style={{ fontSize: "3rem", color:"black" }} />
        )}
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          color="default"
          name="checkedA"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </div>
    );
  };

  var [valuee, setValue] = useState("");
  var [selectedEngine, setSelectedEngines] = useState([]);
  const handleSearch = (searchItem, site) => {
    if (selectedEngine.length === 0) {
      alert("Please select search engines.");
    } else if (valuee === "") {
      alert("Please enter text");
    } else {
      props.searchFunction(valuee, selectedEngine);
      props.history.push("/searchresults");
    }
  };

  const handleIconClick = (id) => {
    // console.log(id);
    var refCircle = document.getElementById(id);
    if (selectedEngine.includes(id)) {
      var newArr = selectedEngine.filter((element) => {
        return id !== element;
      });
      setSelectedEngines(() => newArr);
      refCircle.style.backgroundColor = "transparent";
    } else {
      if (selectedEngine.length > 3) {
        alert("Can not select more than 4 for now.");
      } else {
        refCircle.style.backgroundColor = "#DAE0E2";
        setSelectedEngines((prevState) => [...prevState, id]);
      }
    }
  };

  const Linedivider = () => {
    return <div className="linedivider"></div>;
  };

  const Engine = () => {
    return (
      <form style={{ width: "100%" }} className="flex-col">
        {state.checkedA ? (
          <input
            type="text"
            placeholder="Search..."
            className="f1-5 searchbar"
            value={valuee}
            style={{
              width: "90%",
              borderRadius: "30px 30px",
              boxSizing: "border-box",
              padding: "1rem 2rem",
              outline: "0",
            }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        ) : (
          <input
            type="text"
            placeholder="Search..."
            className="f1-5 searchbar"
            value={valuee}
            style={{
              width: "90%",
              borderRadius: "30px 30px",
              boxSizing: "border-box",
              padding: "1rem 2rem",
              outline: "0",
            }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onMouseEnter={() => {
              document.querySelector(".searchbar").style.border =
                "0.1px solid orange";
              document.querySelector(".searchbar").style.boxShadow =
                "0 0 10px 2px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={() => {
              document.querySelector(".searchbar").style.border =
                "0.1px solid lightgray";
              document.querySelector(".searchbar").style.boxShadow =
                "0 1px #fff, inset 0 1px 4px rgb(243 82 82 / 15%)";
            }}
          />
        )}
        <br />
        <button
          type="button"
          className="btn bg-dark f1-5 search-btn"
          onClick={handleSearch}
        >
          Findduck Search
        </button>
      </form>
    );
  };

  return (
    <div className="ladingpage-wrapper">
      <div className="landingpage-container">
        <div className="landingpage-nav flex-end">
          <ThemeSwitch style={{ color: "white" }} />
        </div>
        <div className="landingpage-left">{Engine()}</div>
        <div className="landingpage-right flex">
          <Linedivider />
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
            <img
              className="w80h80"
              src={to}
              alt=""
              onClick={() => {
                handleIconClick("facebook");
              }}
            />
          </div>
          <div className="circle flex" id="ebay">
            <img
              className="w80h80"
              src={ebay}
              alt=""
              onClick={() => {
                handleIconClick("ebay");
              }}
            />
          </div>
          <div className="circle flex" id="amazon">
            <img
              className="w80h80"
              src={a}
              alt=""
              onClick={() => {
                handleIconClick("amazon");
              }}
            />
          </div>
          <div className="circle flex" id="bing">
            <img
              className="w80h80"
              src={b}
              alt=""
              onClick={() => {
                handleIconClick("bing");
              }}
            />
          </div>
          <div className="circle flex" id="wikipedia">
            <img
              className="w80h80"
              src={wk}
              alt=""
              onClick={() => {
                handleIconClick("wikipedia");
              }}
            />
          </div>
          <div className="circle flex" id="youtube">
            <img
              className="w80h80"
              src={u}
              alt=""
              onClick={() => {
                handleIconClick("youtube");
              }}
            />
          </div>
          <div className="circle flex" id="yahoo">
            <img
              className="w80h80"
              src={y}
              alt=""
              onClick={() => {
                handleIconClick("yahoo");
              }}
            />
          </div>
          <div className="circle flex" id="kijiji">
            <img
              className="w80h80"
              src={kijiji}
              alt=""
              onClick={() => {
                handleIconClick("kijiji");
              }}
            />
          </div>
          <div className="circle flex" id="twitter">
            <img
              className="w80h80"
              src={twitt}
              alt=""
              onClick={() => {
                handleIconClick("twitter");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
var actions = {
  searchFunction,
};
export default connect(null, actions)(LandingPage);
