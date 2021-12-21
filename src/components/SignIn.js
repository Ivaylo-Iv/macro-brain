import React from "react";
import "../style/signIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }
  onEmailChange = (e) => {
    this.setState({ signInEmail: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ signInPassword: e.target.value });
  };

  onSubmitSignIn = async function (e) {
    e.preventDefault();
    console.log(this.state);
    const request = await fetch("http://192.168.1.183:3000/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    });

    const data = await (await request).json();
    console.log(data);
    if (data) {
      console.log(data);
      this.props.loadUser(data);
      this.props.onRouteChange("home");
    }
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="wrapper-s">
        <main className="pa4  black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f3" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="flex-options">
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                  onClick={(e) => this.onSubmitSignIn(e)}
                />
              </div>
              <div className="alternative-text lh-copy mt3">
                <p
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "white",
                  }}
                  className="f6 link dim black db"
                  onClick={() => onRouteChange("signup")}
                >
                  Sign up
                </p>
              </div>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default SignIn;
