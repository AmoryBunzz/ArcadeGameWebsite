import React from "react";
import './friend-list.css'

import friendList from '../../../Assets/Images/App/friend-list.png'
import facebook from '../../../Assets/Images/Icons/facebook.png'
import friendImg from '../../../Assets/Images/User/avatar1.jpg'
import friendImg1 from '../../../Assets/Images/User/avatar2.jpg'
import friendImg2 from '../../../Assets/Images/User/avatar3.jpg'
import friendImg3 from '../../../Assets/Images/User/avatar4.jpg'

function FriendList({user}) {
    return (user) ? (
        <div class="col l-2">
            <div class="friend-list">      
                <div class="friend-list__heading">
                    <div class="friend-list__friend active">
                        <img src={friendList} class="friend-list__friend-img" alt="" />
                        <div class="friend-list__friend-name">FRIENDS</div>
                    </div>
                    <div class="friend-list__contact">
                        <img src={facebook} class="friend-list__friend-img" alt="" />
                        <div class="friend-list__friend-name">CONNECT</div>
                    </div>
                </div>
                <div class="friend-list__title">
                    <div class="friend-info">
                        <div class="friend-info__item">
                            <img class="friend-list__title-img" src={friendImg} alt="" />
                            <div class="friend-list__title-name">Player 1 </div>
                            <button class="friend-list__title-add">Invite</button>
                        </div>
                    </div>
                    <div class="friend-info">
                        <div class="friend-info__item">
                            <img class="friend-list__title-img" src={friendImg1} alt="" />
                            <div class="friend-list__title-name">Player 2 </div>
                            <button class="friend-list__title-add">Invite</button>
                        </div>
                    </div>
                    <div class="friend-info">
                        <div class="friend-info__item">
                            <img class="friend-list__title-img" src={friendImg2} alt="" />
                            <div class="friend-list__title-name">Player 3 </div>
                            <button class="friend-list__title-add">Invite</button>
                        </div>
                    </div>
                    <div class="friend-info">
                        <div class="friend-info__item">
                            <img class="friend-list__title-img" src={friendImg3} alt="" />
                            <div class="friend-list__title-name">Player 4 </div>
                            <button class="friend-list__title-add">Invite</button>
                        </div>
                    </div>
                </div>
                <div class="friend-list__footer">
                    <button class="friend-list__add">
                        <i class="fas fa-plus friend-list__add-icon"></i>
                        <div class="friend-list__friend-name">Add Friend</div>
                    </button>
                </div>
            </div>
        </div>
    ) : null;
}
 
export default FriendList 