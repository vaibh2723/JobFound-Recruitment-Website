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
            <Button>Submit</Button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Search;
