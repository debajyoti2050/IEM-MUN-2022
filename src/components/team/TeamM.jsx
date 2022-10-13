import React from 'react'
import "./team.css"
import Noavatar from '../../assets/noAvatar.png'

const TeamM = (props) => {
  return (
    <div className="col-lg-3 mt-3 col-md-6">
        <div className="shape col-lg-3 ">
        <div className="imgcenter"><img src={props.image || Noavatar} className="profile-a"/></div>
            <div className="info">
                <h3>{props.name}</h3>
                <h5 style={{color:"white"}}>{props.team}</h5>
            </div>
        </div>
    </div>
  )
}

export default TeamM