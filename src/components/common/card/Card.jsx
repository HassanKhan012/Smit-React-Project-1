import { NavLink } from 'react-router-dom'
import './card.css'


const Card = ({ item }) => {
  const { id, background, profileImage, name, description, profession } = item
  return (
    <div className="profile-container">
      <div className="image-section">
        <img id='background-image' src={background} alt="" />
        <img id='profile-image' src={profileImage ? profileImage : null} alt="" />
        <div className="details-section">
          <p id='user-name'>{name}</p>
          <p id='user-profession'>{profession}</p>
          <p id='user-description'>{description}</p>
          <NavLink to={`/Profile/${id}`}>
            <button className='profile-btn'>View Profile</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Card
