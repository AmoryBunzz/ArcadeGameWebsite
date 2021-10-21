import React from 'react'

import './game-comment.css'
// const logined = document.getElementById('logined')
// logined.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.getElementById('test1').style.display = 'none'
//     document.getElementById('test2').style.display = 'flex'
// })
export default function GameComment() {
    return (
        <div>
            <div className="game-comment game-desc">
                <h3>COMMENTS</h3>
                <div className="game-comment__account" id="test1">
                    <div className="game-comment__account-header">Please register or login to post a comment</div>
                    <div className="game-comment__account-btn">
                        <div className="login-out">
                            <a href="#" className="login-out__btn" id='logined'>
                            LOGIN
                            </a>
                        </div>
                        <div className="login-out">
                            <a href="#" className="login-out__btn--css">
                            REGISTER
                            </a>
                        </div>
                    </div>
                </div>
                <div className="game-comment__account-login" id="test2">
                    <img className="comment__img" src="https://cdn.y8.com/assets/avatars/male/1-48x48-4815f3410d5aef5c9512021dd6c02c7f.png" alt="" />
                    <input type="text" placeholder="Comment text" className="game-comment__account-btn" />
                    <input type="submit" value="Send" />
                </div>
                <div className="game-comment__content">
                    <div className="game-comment__content1">
                        <img className="comment__img" src="https://cdn.y8.com/assets/avatars/male/1-48x48-4815f3410d5aef5c9512021dd6c02c7f.png" alt="" />
                        <div className="game-comment__desc">
                            <div className="comment__user">
                                Player 1
                            </div>
                            <div className="comment__cmt">
                                I passed the entire second sphere, it cost me, I lost like 5 times but I beat him 
                            </div>
                        </div>
                    </div>
                    <div className="game-comment--css">
                        <div className="game-comment__content2">
                            <img className="comment__img" src="https://cdn.y8.com/assets/avatars/male/2-48x48-133d7ce1c8ccb095a7b84c29d898c830.png" alt="" />
                            <div className="game-comment__desc">
                                <div className="comment__user">
                                    Player 2
                                </div>
                                <div className="comment__cmt">
                                    I love it
                                </div>
                            </div>
                        </div>
                        <div className="game-comment__content3">
                            <img className="comment__img" src="https://cdn.y8.com/assets/avatars/female/1-48x48-f9d569b01ef34ef639b5b1031fea7f23.png" alt="" />
                            <div className="game-comment__desc">
                                <div className="comment__user">
                                    Player 3
                                </div>
                                <div className="comment__cmt">
                                    I love it too!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
