import React from 'react'
import "./team.css"
import Noavatar from '../../assets/noAvatar.png'

const TeamM = (props) => {
  return (
    <div className="col-lg-3 mt-3">
        <div className="shape">
        <div className="imgcenter"><img src={props.image || Noavatar} className="profile-a"/></div>
            <div className="info">
                <h3>{props.name}</h3>
                <h4>-{props.lead}</h4>
            </div>
        </div>
    </div>
  )
}

export default TeamM