import React from "react";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className="search-bar-div">
      <form action="">
        <div className="search-bar">
          <div className="search-bar-items">
            <span className="icon">
              <SearchOutlined />
            </span>
            <span style={{ width: "100%" }}>
              <Input placeholder="Seach Jobs here...." />
            </span>
            <span className="icon">
              <CloseCircleOutlined />
            </span>
          </div>

          <div className="search-bar-items">
            <span className="icon">
              <BsHouseDoor />
            </span>
            <span className="search-bar-input">
              <Input placeholder="Seach by Company...." />
            </span>
            <span className="icon">
              <CloseCircleOutlined />
            </span>
          </div>

          <div className="search-bar-items">
            <span className="icon">
              <CiLocationOn />
            </span>
            <span style={{ width: "100%" }}>
              <Input placeholder="Seach by Location...." />
            </span>
            <span className="icon">
              <CloseCircleOutlined />
            </span>
          </div>
          <span className="search-bar-button">
            <Button >Submit</Button>
          </span>
        </div>
      </form>

      <div className="search-bar-secDiv">
        <div className="search-bar-single-search">

          <label htmlFor="relevance" className="search-bar-label">
            Sort by :
          </label >
          <select id="relevance" className="search-bar-select">
            <option value="" > Relevance</option>
            <option value="" > Inclusive</option>
            <option value="" > Starts With</option>
            <option value="" > Contains</option>
          </select>

        </div>

        <div className="search-bar-single-search">

          <label htmlFor="type-of" className="search-bar-label">
            Job Type :
          </label >
          <select id="type-of" className="search-bar-select">
            <option value="" > Internship</option>
            <option value="" > Full time Job</option>
            <option value="" > Internship with Job offer</option>
          </select>

        </div>

        <div className="search-bar-single-search">

          <label htmlFor="level" className="search-bar-label">
            Experience :
          </label >
          <select id="level" className="search-bar-select">
            <option value="" > Fresher </option>
            <option value="" > 0-1 year</option>
            <option value="" > 1-3 year </option>
            <option value="" > 4-6 year</option>
            <option value="" > 6+ year </option>
          </select>

        </div>

        <span className="search-bar-clearall">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
