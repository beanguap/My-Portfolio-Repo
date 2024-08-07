import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className="about__box">
      <i class='bx bxs-award about__icon' ></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Entry Level</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon' ></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">18+ Projects Built</span>
      </div>

      <div className="about__box">
        <i class='bx bx-trending-up about__icon' ></i>

        <h3 className="about__title">Commitment</h3>
        <span className="about__subtitle">Continuos Growth, Passion, and Support</span>
      </div>
    </div>
  )
}

export default Info
