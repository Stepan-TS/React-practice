import React from 'react';
import JobValue from '../components/JobValue';
import ApiServise from '../helper/ApiServise';

function JobList() {
    return (
        <div className='jobList'>
            {/*<ApiServise />*/}
            <JobValue />
            
        </div>
    )
}

export default JobList;