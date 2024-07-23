import React from 'react';
import './ResumePage.css';

const googleDocsLink = 'https://docs.google.com/document/d/1gUA2RCtFWmvcUJ5k1lK1CdYGV0AUNMvT8pyIt5ed7sY/preview';

const ResumePage = () => {
    return (<div id="resume-container">
        <iframe src={googleDocsLink} title='my_resume'/>
    </div>);
};

export default ResumePage;