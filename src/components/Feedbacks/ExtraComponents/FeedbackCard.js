import React from 'react';
import "./Feedbackcard.css"
import star from "../../../assets/top-teachers/star.png"
import hat from "../../../assets/top-teachers/hat.png"



export const FeedbackCard = ({teacher}) => {




    return (
        <>
            <div className="feedbackCard_container">
                <img src={teacher.image} alt="teachers photo" className="feedbackCard_teacherImg"/>
                <div className="feedbackCard_inner">
                    <span className="feedbackCard_Name">{teacher.name}</span>
                    <div className="feedbackCard_strasSection">
                        <img src={star} alt='stars' className="feedbackCard_star" /><img src={star} alt='stars' className="feedbackCard_star"/><img src={star} alt='stars' className="feedbackCard_star"/><img src={star} alt='stars' className="feedbackCard_star"/><img
                        src={star} alt='stars' className="feedbackCard_star"/>
                    </div>
                  <div>
                    <img src={hat} alt="hat" className="feedbackCard_hat"/>
                      <span className="feedbackCard_commentator">{teacher.commentator}</span>
                  </div>
                    <p className="feedbackCard_feedback"> {teacher.description}</p>
                    <div className="feedbackCard_date"> {teacher.date}</div>



                </div>
            </div>

        </>
    );
};
