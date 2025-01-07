import React from "react";

const Navigation = ({isSignedIn, onRouteChange}) => {
    
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() =>{onRouteChange("signin")}} className="f3 ma2 dim underline link pa3 pointer">Sign-Out</p>
            </nav>
        ); 
    }

}

export default Navigation;