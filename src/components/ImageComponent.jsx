import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imgLink} alt={this.props.imgAlt} />
      </div>
    );
  }
}

export default ImageComponent;
