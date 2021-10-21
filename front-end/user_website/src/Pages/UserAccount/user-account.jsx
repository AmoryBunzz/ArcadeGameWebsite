import React from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "./SideBar/sidebar";
import routes from "./user-account-routes";

import logo from "../../Assets/Images/User/avatar3.jpg";
import { BackgroundColorContext } from "./BackgroundColorContext";


function UserAccount(props) {
  
  const mainPanelRef = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user-account") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <React.Fragment>
          <div className="wrapper">
            <SideBar
              routes={routes}
              logo={{
                text: "bduyphuong12",
                imgSrc: logo,
              }}
             
            />
            <div className="main-panel" ref={mainPanelRef} data={color} >
              
              <Switch>
                {getRoutes(routes)}
              </Switch>
            
            </div>
          </div>
          
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default UserAccount;
