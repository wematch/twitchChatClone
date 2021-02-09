import React from "react";
import { connect } from "react-redux";
import { setUsername } from "../../redux/actions";
import { getUsername } from "../../redux/selectors";

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
    // this.setState({ username: "" });

    this.props.history.push(`/chatbox/${this.state.username}`)
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateUsername(e.target.value)}
          value={this.state.username}
        />
        <button className="add-username" onClick={this.handleSetUsername}>
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