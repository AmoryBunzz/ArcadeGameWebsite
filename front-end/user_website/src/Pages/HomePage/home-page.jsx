import React from "react";
import './home-page.css'

import FriendList from './FriendList/friend-list';
import FamousGame from "./FamousGame/famous-game";
import NewGame from "./NewGame/new-game";

function HomePage({user}) {
  return (
      <div>
          <div className="App-left-sidebar">
              <FriendList user={user}/>
          </div>
          <div className='grid wide'>
            <div className='row'>
              <div className='col-sm-9 col-md-6 col-lg-8'>
                <FamousGame/>
              </div>
            </div>
          </div>
          <div className='grid wide'>
              <div className='row'>
                  <div className='col-sm-9 col-md-6 col-lg-8'>
                    <NewGame/>
                  </div>
              </div>
          </div>
      </div>
  );
}
 
export default HomePage;