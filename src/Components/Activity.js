// Activity.js
import React from 'react';
import './Activity.css';
import yogaImage from './Images/u1.png'; // Importing image for example
import yogaImage1 from './Images/p4.png';
import yogaImage2 from './Images/u2.png';
import yogaImage3 from './Images/u3.png';
import med from './Images/m1.png';
import med2 from './Images/p.png';
import med3 from './Images/p4.png';

function Activity() {
  return (
    <div className="activity-container">
      

      <h2>Upcoming Activities</h2>
      <div className="activity-list">
        <div className="activity-item">
          <img src={yogaImage} alt="Yoga Session" className="activity-image" />
          <div className="activity-details">
            <div className="activity-date">June 5, 2024</div>
            <div className="activity-name">Guided Meditation</div>
            <div className="activity-location">Mindfulness Studio</div>
          </div>


        </div>

        <div className="activity-item">
          <img src={med} alt="Yoga Session" className="activity-image" />
          <div className="activity-details">
            <div className="activity-date">June 5, 2024</div>
            <div className="activity-name">Virtual Mindfulness Workshop</div>
            <div className="activity-location">Virtual</div>
          </div>


        </div>
        <div className="activity-item">
          <img src={med2} alt="Yoga Session" className="activity-image" />
          <div className="activity-details">
            <div className="activity-date">June 5, 2024</div>
            <div className="activity-name">Therapy Group</div>
            <div className="activity-location">Mindfulness Studio</div>
          </div>


        </div>
        <div className="activity-item">
          <img src={med3} alt="Yoga Session" className="activity-image" />
          <div className="activity-details">
            <div className="activity-date">June 5, 2024</div>
            <div className="activity-name">selfcareDrive</div>
            <div className="activity-location">Mindfulness Studio</div>
          </div>


        </div>
        {/* Add more upcoming activities as needed */}
      </div>

      <h2>Past Activities</h2>
      <div className="activity-list">
        <div className="activity-item">
          <img src={yogaImage} alt="Yoga Session" className="activity-image" />
          <div className="activity-details">
            <div className="activity-date">May 10, 2024</div>
            <div className="activity-name">Journaling</div>
            <div className="activity-location">Wellness Center</div>
          </div>
        </div>
        <div className="activity-item">
          <img src={yogaImage1} alt="Yoga Session" className="activity-image" />
          <div className="activity-details">
            <div className="activity-date">May 10, 2024</div>
            <div className="activity-name">Home and away Drive</div>
            <div className="activity-location">Wellness Center</div>
          </div>
        </div>

        <div className="activity-item">
          <img src={yogaImage2} alt="Yoga Session" className="activity-image" />
          <div className="activity-details">
            <div className="activity-date">May 10, 2024</div>
            <div className="activity-name">Lets Make life Fun</div>
            <div className="activity-location">Wellness Center</div>
          </div>
        </div>

        <div className="activity-item">
          <img src={yogaImage3} alt="Yoga Session" className="activity-image" />
          <div className="activity-details">
            <div className="activity-date">May 10, 2024</div>
            <div className="activity-name">Lamenting Session</div>
            <div className="activity-location">Wellness Center</div>
          </div>
        </div>
        {/* Add more past activities as needed */}
      </div>
    </div>
  );
}

export default Activity;
