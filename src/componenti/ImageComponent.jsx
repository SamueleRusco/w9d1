import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <img src={this.props.src} alt={this.props.alt} />
      </>
    );
  }
}

export default ImageComponent;
