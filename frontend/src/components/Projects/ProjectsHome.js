import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsHome = () => {
    const navigate = useNavigate();
    const viewAll = () => {
        navigate('/projects');
    }
    return (
        <>
            <div>ProjectsHome</div>
            <button onClick={viewAll}>view all</button>
        </>
    )
}

export default ProjectsHome