import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

function StarRating({rating}) {

    let fullStars = Math.floor(rating);
    let halfStar = 0;

    let decimal = rating % 1;
    if ((decimal > 0) && (decimal <= 0.25)) halfStar = 0;
    else if ((decimal >= 0.3) && (decimal <= 0.8)) halfStar = 1;
    else if ((decimal >= 0.8) && (decimal < 1)) fullStars++;

    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={i} style={{color: 'orange'}} />);
    if (halfStar) stars.push(<FaStarHalf key={9} style={{color: 'orange'}} />);

  return (
        <div style={{position: 'relative', padding: '0.4rem', borderRadius: '0.7rem'}}>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px', placeItems: 'center', fontSize: '1rem'}}>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
            </div>
            <div style={{width: '100%', position: 'absolute', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px', placeItems: 'center', fontSize: '0.7rem', color: 'aqua', top: '3.5px', left: '0', padding: '0.4rem'}}>
                {stars}
            </div>
        </div>
  )
}

export default StarRating