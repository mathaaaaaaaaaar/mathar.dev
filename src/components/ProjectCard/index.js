import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
    
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(true);
    };

    const handleCloseModal = () => {
        setIsFlipped(false);
    };

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal-parent')) {
            handleCloseModal();
        }
    };

    return (
        <div>
            <div className={`project-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
                <h3>{project.title}</h3>
                <p>{project.projDesc}</p>
            </div>
            <div className={`modal-parent ${isFlipped ? 'show' : ''}`} onClick={handleOutsideClick}>
                <div className="modal-content">
                    <button className="modal-close-button" onClick={handleCloseModal}>X</button>
                    <h4>This is a modal!</h4>
                    <h5>{project.title}</h5>
                    <h5>{project.projDesc}</h5>
                    <h5>{project.tags}</h5>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;