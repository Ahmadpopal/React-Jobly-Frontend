import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import JoblyApi from './Jobly'
import JobCardList from './JobCardList'
import SearchForm from './helper/SearchForm'
import './Jobs.css'


// Jobs Component: 
//   - Show Jobs list from Jobly Api 
//   - show Search Form where Users can search jobs by passing job title  

// Renders 
//   - SearchForm Component 
//   - JobCard Component

const Jobs = () => {

const [jobs, setJobs] = useState(null);

useEffect(() =>{
    getAllJobs()
}, [])

async function getAllJobs(search){
    let jobs = await JoblyApi.getJobs(search)
    setJobs(jobs)
}

if(!jobs){
    return <h2> Job List Loading.... </h2>
}

return (
    <Container className="Jobs">
        <Row>
            <Col className="Jobs-div-title">
                <h3 className="Jobs-title"> Jobs List <hr/></h3>
            </Col>
        </Row>
        <Row>
          <Col>
            <SearchForm searchFor={getAllJobs} />
          </Col>
        </Row>
            <JobCardList jobs={jobs}/>
    </Container>
    )
}


export default Jobs