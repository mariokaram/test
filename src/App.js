import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

import Search from "./components/Search";
import ImageList from "./components/ImageList";

class App extends Component {
  state = {
    search: "",
    images: []
  };
  onHandleSubmit = async event => {
    event.preventDefault();

    const data = await axios.get("https://api.unsplash.com/search/photos/", {
      params: { query: this.state.search },
      headers: {
        Authorization: `Client-ID badb02fa993ce8c441ca6bf292e4f31087e2c98293334340caeaf19f1024a6dc`
      }
    });

    this.setState({ images: data.data.results });
  };
  onSearch = event => {
    let value = event.target.value;
    this.setState({ search: value });
  };
  render() {
    return (
      <div className="ui container">
        <Search onHandleSubmit={this.onHandleSubmit} onSearch={this.onSearch} />
        Image Lists :
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
