import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars, review }) => {

    const ratingStar = Array.from({ length: 5 }, (ele, index) => {
        let number = index + 0.5

        return (
            <span key={index}>
                {
                    stars >= index + 1 ? (<FaStar />) : stars >= number ? (<FaStarHalfAlt />) : (<AiOutlineStar />)
                }
            </span>
          )
    });

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {ratingStar}
            </div>
            <p>({ review } Customer Reviews)</p>
        </div>
    )

}

export default Stars
