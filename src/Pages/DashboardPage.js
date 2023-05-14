import React from 'react'

function DashboardPage() {
  
  return (
    <div className="card">
      <div className="cardHeader">Register</div>
      <div className="cardBody">
        <div className="inputGroup"> 
        <label htmlFor="chatroomname">Chatroom Name</label>
          <input 
            type="text"  
            name="chatroomname" 
            id="chatroomname" 
            placeholder="ChatterBox Nepal" />
        </div>
        <button>Create a chatroom</button>
        <div className="chatrooms">
          <div className="chatroom">
            <div>Happy Newbie</div>
            <div className="join">Join</div>
          </div>
          <div className="chatroom">
            <div>Happy Newbie</div>
            <div className="join">Join</div>
          </div>
          <div className="chatroom">
            <div>Happy Newbie</div>
            <div className="join">Join</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
