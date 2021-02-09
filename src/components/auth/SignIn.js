import React from "react";
import { connect } from "react-redux";
import { setUsername } from "../../redux/actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  updateUsername = (username) => {
    this.setState({ username });
  };

  handleSetUsername = () => {
    if (this.state.username) {
      this.props.setUsername(this.state.username);
  
      this.props.history.push(`/chatbox/${this.state.username}`);
    }
  };

  render() {
    return (
      <div className="signin-container">
        <input
          type="text"
          value={this.state.username}
          placeholder="Username..."
          className="signin-input"
          onChange={(e) => this.updateUsername(e.target.value)}
        />
        <div className="signin-wrapper">
          <button className={`signin-action ${this.state.username ? "active" : ""}`} onClick={this.handleSetUsername}>
            Enter chat room
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { setUsername })(SignIn);
