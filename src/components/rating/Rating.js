import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";

const Rate = ({ onRate }) => {
  const [rate, setRate] = useState(0);
  

  const handleClick = (rating) => {
    setRate(rating);
    onRate(rating); // Передаємо рейтинг в батьківський компонент
  };

  return (
    <Container>
	<span>Оцінка:</span>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label key={index}>
            <Radio
              type="radio"
              value={givenRating}
              checked={givenRating === rate}
              onChange={() => handleClick(givenRating)}
            />
            <Rating>
              <FaStar color={givenRating <= rate ? "#ffc107" : "rgb(192,192,192)"} />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

export default Rate;
