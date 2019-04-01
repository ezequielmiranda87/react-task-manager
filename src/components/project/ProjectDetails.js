import React from 'react'

export default function ProjectDetails(props) {
  return (
    <div className="container section project-detail">
        <div className="card">
            <div className="card-content">
              <span className="card-title">Project detail {props.match.params.id}</span>
              <p> Occaecat aliqua esse mollit consectetur dolore non aute pariatur. Nostrud commodo reprehenderit aliquip ea anim excepteur irure cupidatat occaecat ea do incididunt laboris. Irure Lorem in laboris quis. Ad aliquip non sint adipisicing fugiat ipsum nisi commodo cupidatat ea aliquip minim nostrud. Nostrud veniam laborum reprehenderit laborum in tempor aliquip consectetur occaecat voluptate est ut duis id.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div> Posted by Thom</div>
                <div> 22th, setptember 2018, 24:00</div>
            </div>
        </div>
    </div>
  )
}
