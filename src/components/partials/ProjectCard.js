import React from 'react'

export const ProjectCard = () => {
    return (
        <div className="flip-card-outer">
        <div className="flip-card-inner">
          <div className="card front">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">Front</p>
            </div>
          </div>
          <div className="card back">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">Back</p>
            </div>
          </div>
        </div>
      </div>
    )
}
