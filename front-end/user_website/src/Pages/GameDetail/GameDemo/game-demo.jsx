import React from 'react'

import './game-demo.css'

function GameDemo() {
    return (
        <div>
            <div className="game-demo game-desc">
                <h3>Video demo</h3>
                <div className="game-demo__link">
                    <iframe src="https://www.youtube.com/embed/sL1z3pIrGjY" width="300" height="160" title="The YouTube video player"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default GameDemo
