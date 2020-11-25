import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./SearchResults.css";
import axios from "axios";
import { searchFunction } from "../../Redux/searchReducer/searchReducerActions";
import { Link } from "react-router-dom";

function SearchResults(props) {
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [result3, setResult3] = useState(null);
  const [result4, setResult4] = useState(null);
  var [selectedEngine, setSelectedEngines] = useState([
    props.searchedItemObj.websites[0],
    props.searchedItemObj.websites[1],
    props.searchedItemObj.websites[2],
    props.searchedItemObj.websites[3],
  ]);

  var [valuee, setValue] = useState(props.searchedItemObj.searchedItem);
  const handleSearch = (searchItem, site) => {
    props.searchFunction(valuee, selectedEngine);
    props.history.push("/searchresults");
  };
  useEffect(() => {
    // console.log(props);
    // console.log(props.searchedItemObj.searchedItem);
    getResults(props.searchedItemObj.searchedItem);
    return () => {
      // cleanup
    };
  }, [props.searchedItemObj.searchedItem]);

  const getResults = (searchItem) => {
    // Make a request for a user with a given ID
    if (searchItem !== "") {
      sendRequest(searchItem,props.searchedItemObj.websites[0],props.searchedItemObj.websites[1],props.searchedItemObj.websites[2],props.searchedItemObj.websites[3])
    }
  };

  const sendRequest = (searchItem, site1, site2, site3, site4) => {
    if (site1 && site2 && site3 && site4) {
      console.log(site1, site2, site3, site4);
      axios
        .get(
          `https://custom-search-engine-aashir.herokuapp.com/search?websites=${`${site1},${site2},${site3},${site4}`}&searchterm=${searchItem}`
        )
        .then(function (response) {
          // handle success
          console.log("getResults", response);
          setResult1(response.data[`${site1}`]);
          setResult2(response.data[`${site2}`]);
          setResult3(response.data[`${site3}`]);
          setResult4(response.data[`${site4}`]);
        })
        .catch(function (err) {
          // handle error
          console.log("error", err);
        })
        .then(function () {
          // always executed
        });
    } else if (site1 && site2 && site3) {
      console.log(site1, site2, site3, site4);
      axios
        .get(
          `https://custom-search-engine-aashir.herokuapp.com/search?websites=${`${site1},${site2},${site3}`}&searchterm=${searchItem}`
        )
        .then(function (response) {
          // handle success
          console.log("getResults", response);
          setResult1(response.data[`${site1}`]);
          setResult2(response.data[`${site2}`]);
          setResult3(response.data[`${site3}`]);
        })
        .catch(function (err) {
          // handle error
          console.log("error", err);
        })
        .then(function () {
          // always executed
        });
    } else if (site1 && site2) {
      console.log(site1, site2, site3, site4);
      axios
        .get(
          `https://custom-search-engine-aashir.herokuapp.com/search?websites=${`${site1},${site2}`}&searchterm=${searchItem}`
        )
        .then(function (response) {
          // handle success
          console.log("getResults", response);
          setResult1(response.data[`${site1}`]);
          setResult2(response.data[`${site2}`]);
        })
        .catch(function (err) {
          // handle error
          console.log("error", err);
        })
        .then(function () {
          // always executed
        });
    } else if (site1) {
      console.log(site1, site2, site3, site4);
      axios
        .get(
          `https://custom-search-engine-aashir.herokuapp.com/search?websites=${`${site1}`}&searchterm=${searchItem}`
        )
        .then(function (response) {
          // handle success
          console.log("getResults", response);
          setResult1(response.data[`${site1}`]);
        })
        .catch(function (err) {
          // handle error
          console.log("error", err);
        })
        .then(function () {
          // always executed
        });
    }
  };

  const ItemWithoutImage = (props) => {
    return (
      <a
        href={`${props.content.link}`}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <div
          className="result-without-image bg-white"
          // style={{ width: "100%", height: "10rem" }}
        >
          <h1 className="blue f1-5 fb"> {props.content.title} </h1>
          <div className="f1 fb" style={{ color: "#64FF00" }}>
            {props.content.link}{" "}
          </div>
          <div className="black f1"> {props.content.snippet} </div>
        </div>
      </a>
    );
  };

  const ItemWithImage = (props) => {
    return (
      <a
        href={`${props.content.link}`}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <div className="result-with-image">
          <div className="image">
            <img src={props.content.img} className="w100h100" alt="" />
          </div>
          <div className="content">
            <h1 className="blue f1-5 fb"> {props.content.title} </h1>
            <div className="f1 fb" style={{ color: "#64FF00" }}>
              {props.content.link}{" "}
            </div>
            <div className="black f1"> {props.content.snippet} </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="searchresult-wrapper">
      <div></div>
      <div className="searchresult-container">
        <div className="searchbar flex bg-dark">
          <Link to={`/`} style={{textDecoration:"none",color:"inherit", flex: "1"}}>
            <div  className="white f2 flex">
              Home
            </div>
          </Link>
          <div
            className="input-group f1-5"
            style={{ width: "60%", lineHeight: "3rem", flex: "3" }}
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
            </div>
          </div>
        </div>
        <div className="commongrid  r1c1">
          <div className="commongrid-row1">
            {result1
              ? result1.items.map((element, index) => {
                  return element.image ? (
                    <ItemWithImage
                      key={index}
                      content={{
                        title: element.title,
                        link: element.link,
                        snippet: element.snippet,
                        img: element.image,
                      }}
                    />
                  ) : (
                    <ItemWithoutImage
                      key={index}
                      content={{
                        title: element.title,
                        link: element.link,
                        snippet: element.snippet,
                      }}
                    />
                  );
                })
              : null}
          </div>
          <div className="commongrid-row2">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="commongrid  r1c2">
          <div className="commongrid-row1">
            {result2
              ? result2.items.map((element, index) => {
                  return element.image ? (
                    <ItemWithImage
                      key={index}
                      content={{
                        title: element.title,
                        link: element.link,
                        snippet: element.snippet,
                        img: element.image,
                      }}
                    />
                  ) : (
                    <ItemWithoutImage
                      key={index}
                      content={{
                        title: element.title,
                        link: element.link,
                        snippet: element.snippet,
                      }}
                    />
                  );
                })
              : null}
          </div>
          <div className="commongrid-row2">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="commongrid  r2c1">
          <div className="commongrid-row1">
            {result3
              ? result3.items.map((element, index) => {
                  return element.image ? (
                    <ItemWithImage
                      key={index}
                      content={{
                        title: element.title,
                        link: element.link,
                        snippet: element.snippet,
                        img: element.image,
                      }}
                    />
                  ) : (
                    <ItemWithoutImage
                      key={index}
                      content={{
                        title: element.title,
                        link: element.link,
                        snippet: element.snippet,
                      }}
                    />
                  );
                })
              : null}
          </div>
          <div className="commongrid-row2">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="commongrid  r2c2">
          <div className="commongrid-row1">
            {result4
              ? result4.items.map((element, index) => {
                  return element.image ? (
                    <ItemWithImage
                      key={index}
                      content={{
                        title: element.title,
                        link: element.link,
                        snippet: element.snippet,
                        img: element.image,
                      }}
                    />
                  ) : (
                    <ItemWithoutImage
                      key={index}
                      content={{
                        title: element.title,
                        link: element.link,
                        snippet: element.snippet,
                      }}
                    />
                  );
                })
              : null}
          </div>
          <div className="commongrid-row2">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

var mapStateToProps = (state) => {
  console.log(state.searchedItem);
  return {
    searchedItemObj: state.searchedItem,
  };
};
var actions = {
  searchFunction,
};
export default connect(mapStateToProps, actions)(SearchResults);
