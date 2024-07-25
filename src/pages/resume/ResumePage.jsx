import React from 'react';
import './ResumePage.css';
import { person } from '../../person';

const ResumePage = () => {
    return (<div id="resume-container">
        <iframe src={person.resume} title='my_resume'/>
    </div>);
};

export default ResumePage;