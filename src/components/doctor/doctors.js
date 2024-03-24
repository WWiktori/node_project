import React, { useState } from 'react';
import './doctor-module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css'; 
import { faLocationDot, faStethoscope, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import Rating from '../rating/Rating';

export function Doctor({ id, name, specialty, location, ratings, image, time }) {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [commenterName, setCommenterName] = useState('');
    const [commentRating, setCommentRating] = useState(0); // Змінено на 0 для ініціалізації

    const handleAppointmentClick = () => {
        alert("Функція запису на прийом");
    };

    const handleRate = (rateValue) => {
        setCommentRating(rateValue);
    };

    const handleCommentSubmit = () => {
        if (!commentText.trim() || !commenterName.trim() || commentRating === 0) return;
        const newComment = {
            text: commentText,
            name: commenterName,
            rating: commentRating,
        };
        setComments([...comments, newComment]);
  setCommentText('');
  setCommenterName('');
  setCommentRating(0);
    };

    return (
        <div className='Grid'>
            <div key={id} className='doctor-card'>
                <div className="doctor-text-container">
                    <h3 className='doctorName'>{name}</h3>
                    <div className='doctorCard-information'>
                        <div className='doctorSpecialty'>
                            <FontAwesomeIcon icon={faStethoscope} style={{ color: "#ff8408", marginRight: "8px" }}/>
                            {specialty}
                        </div>
                        <div className='doctorLocation'>
                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ff8408", marginRight: "12px" }} />
                            {location}
                        </div>
                        <div className='doctorRatings'>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#ff8408", marginRight: "8px" }} />
                            {ratings}
                        </div>
                        <div className='doctorWorkHours'>
                            <FontAwesomeIcon icon={faClock} style={{color: "#ff8408", marginRight: "8px"}} />
                            {time}
                        </div>
                    </div>
                    <div className='Doctor-signup'>
                        <button onClick={handleAppointmentClick} className="appointment-button">Записатися</button>
                        <button onClick={handleAppointmentClick} className="review-button">Залишити відгук</button>
                    </div>
                </div>
                <img src={image} alt='doctor' className='doctor-img'></img>
            </div>
            <div className='comment-section'>
            <input 
    type="text"
    value={commenterName}
    onChange={(e) => setCommenterName(e.target.value)}
    placeholder="Ваше ім'я"
    className="comment-input-name"
/>
                <Rating onRate={handleRate} />
                <textarea 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Залиште ваш коментар" 
                    className="comment-input"
                ></textarea>
                <button onClick={handleCommentSubmit} className="submit-comment-button">Готово</button>
            </div>
            <div className="comments-display">
  {comments.map((comment, index) => (
    <div key={index} className="comment-item">
      <div>      
      <p><b>{comment.name}</b><FontAwesomeIcon icon={faStar} style={{ color: "#ff8408", marginRight: "4px", }} /> 
        <span> {comment.rating} / 5</span></p>
        <p>{comment.text}</p>
      </div>
    </div>
  ))}
</div>
        </div>
    );
}
