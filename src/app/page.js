"use client";
import axios from "axios";
import React, { useState } from "react";
import "../app/HomePage.css";
function page() {
  const [key, setkey] = useState("");
  const [apiData, setapiData] = useState("");

  const getData = async () => {
    await axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=IMqITPeQcSFeNFqKASS3JJKSSIpeW91S&q=${key}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      )
      .then((res) => {
        console.log(res);
        setapiData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Some error occured in fetching data");
      });
  };
  return (
    <div className="div-main">
      <div className="SearchDiv">
        <input
          type="text"
          placeholder="Search Keyword or placename"
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
      <div className="pagination-div">
        <div
          onClick={() => {
            console.log("hi");
          }}
        >
          Previous
        </div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>Next</div>
      </div>
    </div>
  );
}

export default page;
