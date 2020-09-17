import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  characterCounter = () => {
    return this.props.maxChars - this.state.message.length
  }

  handleFormChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <div>
          Characters Remaining: {this.characterCounter()}
        </div>
        <input type="text" name="message" id="message" onChange={this.handleFormChange} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
