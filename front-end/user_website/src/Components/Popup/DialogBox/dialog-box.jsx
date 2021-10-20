import React from "react";

import './dialog-box.css'

function DialogBox(){
    return (
        <div>
            <div class="mt-10 text-center">
                <button class="btn">Delete Task</button>
                <button class="btn">Delete User</button>
            </div>
        
        
            <div class="overlay">
            
            
                <div class="dialog">
            
                <div class="dialog__content">
                    <h2 class="dialog__title">Delete a task?</h2>
                    <p class="dialog__description">Are you sure you want to delete this task?</p>
                </div>
            
                <hr />
            
                <div class="dialog__footer">
                    <button class="dialog__cancel">Cancel</button>
                    <button class="dialog__confirm">Yes, delete it</button>
                </div>
            
                </div>
        
            </div>
        </div>
    )
}

export default DialogBox