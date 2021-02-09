import React from "react";
import { connect } from "react-redux";
import { setUsername } from "../../redux/actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };
  }

  updateUsername = (username) => {
    this.setState({ username });
  };

  handleSetUsername = () => {
    this.props.setUsername(this.state.username);

    this.props.history.push(`/chatbox/${this.state.username}`)
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateUsername(e.target.value)}
          value={this.state.username}
        />
        <button onClick={this.handleSetUsername}>
          Set username
        </button>
      </div>
    );
  }
}

export default connect(
    null,
    { setUsername }
  )(SignIn);