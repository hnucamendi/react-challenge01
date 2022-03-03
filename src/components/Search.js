import React, { Component } from "react";
import Data from "../data/basicData.json";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }
  render() {
    return (
      <>
        <div className="search-section">
          <input
            placeholder="Enter First Name"
            className="fName search"
            type="text"
            onChange={(e) => this.setState({ query: e.target.value })}
          ></input>
          <input
            placeholder="Enter Last Name"
            className="lName search"
            type="text"
            onChange={(e) => this.setState({ query: e.target.value })}
          ></input>
          <input
            placeholder="Enter Phone Number"
            className="mNumber search"
            type="text"
            onChange={(e) => this.setState({ query: e.target.value })}
          ></input>
          <input
            placeholder="Enter Birthday"
            className="birthday search"
            type="text"
            onChange={(e) => this.setState({ query: e.target.value })}
          ></input>
        </div>

        <div className="App">
          <div className="pii">
            {/* <div className="pii-items"> */}
            {Data.filter((posts) => {
              if (this.state.query === "") {
                return posts;
              } else if (
                posts.firstName
                  .toLowerCase()
                  .includes(this.state.query.toLowerCase()) ||
                posts.lastName
                  .toLowerCase()
                  .includes(this.state.query.toLowerCase()) ||
                posts.mobileNumber.includes(this.state.query) ||
                posts.birthday
                  .toLowerCase()
                  .includes(this.state.query.toLowerCase())
              ) {
                return posts;
              }
            }).map((posts, index) => (
              <div className="pii-items" key={index}>
                <p>
                  {posts.firstName} {posts.lastName}
                </p>
                <p>{posts.mobileNumber}</p>
                <p>{posts.birthday}</p>
              </div>
            ))}
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default Search;