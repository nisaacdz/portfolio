import React from 'react';
import './ResumePage.css';

const googleDocsLink = 'https://docs.google.com/document/d/19YBRcPLhNuv2_PSSYJXquFnM9nl551V6k2xdjKzhN44/preview?usp=sharing';

const ResumePage = () => {
    return (<div id="resume-container">
        <iframe src={googleDocsLink} title='my_resume'/>
    </div>);
};

export default ResumePage;