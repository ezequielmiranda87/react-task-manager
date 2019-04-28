import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
            {
                projects && projects.map( project => {
                    const {id} = project;
                    return(
                        <Link to = {'/project/' +project.id } key = {id} >
                            <ProjectSummary project = {project} key = {id}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ProjectList;
