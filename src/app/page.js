"use client";
import axios from "axios";
import React, { useState } from "react";
import "../app/HomePage.css";

import Loader from "../app/Loader";
import Nabvar from "./Navbar/Nabvar";
function page() {
  const [key, setkey] = useState("");
  const [apiData, setapiData] = useState("");
  const [loader, setloader] = useState(false);

  const [currentPage, setcurrentPage] = useState(1);
  const [offset, setoffset] = useState(0);

  const getData = async () => {
    const login = sessionStorage.getItem("login");
    if (login === "true") {
      setloader(true);
      setapiData("");
      setoffset(0);
      setcurrentPage(1);
      await axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=IMqITPeQcSFeNFqKASS3JJKSSIpeW91S&q=${key}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        )
        .then((res) => {
          console.log(res);
          setloader(false);
          setapiData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          alert("Some error occured in fetching data");
        });
    } else {
      alert("Login to search GIFs");
    }
  };

  const nextPage = async () => {
    setloader(true);
    setapiData("");
    const newOffset = currentPage * 3;
    setoffset(newOffset);
    setcurrentPage(currentPage + 1);

    await axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=IMqITPeQcSFeNFqKASS3JJKSSIpeW91S&q=${key}&limit=3&offset=${newOffset}&rating=g&lang=en&bundle=messaging_non_clips`
      )
      .then((res) => {
        console.log(res);
        setloader(false);
        setapiData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Some error occurred in fetching data");
      });
  };

  const prevPage = async () => {
    if (currentPage !== 1) {
      const newOffset = (currentPage - 2) * 3;
      setloader(true);
      setapiData("");
      setoffset(newOffset);
      setcurrentPage(currentPage - 1);
      await axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=IMqITPeQcSFeNFqKASS3JJKSSIpeW91S&q=${key}&limit=3&offset=${newOffset}&rating=g&lang=en&bundle=messaging_non_clips`
        )
        .then((res) => {
          console.log(res);
          setloader(false);
          setapiData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          alert("Some error occurred in fetching data");
        });
    }
  };

  const pageMove = async (e) => {
    setloader(true);
    setapiData("");
    setcurrentPage(parseInt(e.target.innerHTML, 10));
    const pageNo = parseInt(e.target.innerHTML, 10);
    const offset = (pageNo - 1) * 3;
    await axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=IMqITPeQcSFeNFqKASS3JJKSSIpeW91S&q=${key}&limit=3&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`
      )
      .then((res) => {
        console.log(res);
        setloader(false);
        setapiData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Some error occured in fetching data");
      });
  };

  return (
    <>
      <Nabvar />
      <div className="div-main">
        <div className="SearchDiv">
          <input
            type="text"
            placeholder="Article Name or Keyword ......"
            onChange={(e) => {
              setkey(e.target.value);
            }}
          />
          <button
            onClick={() => {
              getData();
            }}
          >
            search
          </button>
        </div>

        {loader && <Loader />}

        <div className="div-img">
          {apiData &&
            apiData.map((item, idx) => (
              <>
                <div className="div-img-2">
                  <img
                    src={`${item.images.original.url}`}
                    style={{
                      height: "300px",
                      width: "300px",
                    }}
                  />
                  <h4>
                    {item.title.length > 100
                      ? `${item.title.slice(0, 10)}...`
                      : item.title}
                  </h4>
                  <p>@{item.username}</p>
                </div>
              </>
            ))}
        </div>
        {apiData && (
          <div className="pagination-div">
            <div onClick={prevPage}>Previous</div>
            <div onClick={pageMove}>1</div>
            <div onClick={pageMove}>2</div>
            <div onClick={pageMove}>3</div>
            <div onClick={nextPage}>Next</div>
          </div>
        )}
      </div>
    </>
  );
}

export default page;
