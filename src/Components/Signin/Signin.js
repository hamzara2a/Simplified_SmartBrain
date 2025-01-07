import React from "react";

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: "",
            signInPassword: ""
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }


    onSubmitSignIn = () => {
        if(this.state.signInEmail === "test@test.com" && this.state.signInPassword === "test") {
            this.props.onRouteChange('home');
        }
        
    }

    render() {
        return (
            <article className="mv7 br3 w-100 shadow-2 w-50-m w-25-l center">
                <main className="pa5">
                    <div className="f2 measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mid-gray">
                        <div className="mt3">
                            <label className="db fw6 lh-copy f3 mid-gray" htmlFor="email-address">Email</label>
                            <input
                            className="mid-gray pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f3 mid-gray" htmlFor="password">Password</label>
                            <input 
                            className="mid-gray b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={this.onPasswordChange}
                            />
                        </div>
                        </fieldset>
                        <div className="">
                            <input 
                            className="mid-gray b ph3 pv2 input-reset ba b--mid-gray bg-transparent grow pointer f2 dib" 
                            type="submit" 
                            value="Sign-in"
                            onClick={this.onSubmitSignIn}
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;