import React, { Component } from "react";

import "./File.css";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.mario = React.createRef();

    this.state = {
      span: null
    };
  }

  componentDidMount() {
    const height = this.mario.current.clientHeight;
    console.log(height);

    this.setState({ span: Math.ceil(height / 100) });
  }
  render() {
    const { image } = this.props;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.mario} src={image.urls.regular} />
      </div>
    );
  }
}
