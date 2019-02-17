import React, { Component } from "react";
import ImageCard from "../components/ImageCard";
import "./File.css";

class ImageList extends Component {
  render() {
    const { images } = this.props;

    return (
      <div className="image-list">
        {images.map(image => (
          <ImageCard image={image} />
        ))}
      </div>
    );
  }
}

export default ImageList;
