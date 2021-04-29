import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import JoblyApi from './Jobly'
import JobCard from './JobCard'
import './CompanyDetail.css'



const CompanyDetail = () => {

    const {handle} = useParams();
    const [company, setCompany] = useState(null);

    useEffect(function getCompanyAndJobs(){
        async function getCompany(){
            let company = await JoblyApi.getCompany(handle);
            setCompany(company)
        }
        getCompany()
    },[handle])

    if (!company) return <h3>Loading...</h3>;

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Company: {company.name}
                        <span>
                            {company.logoUrl 
                            ? <img src={company.logoUrl} className="float-right" style={{width: "4rem"}} alt={handle}/> 
                            : null}
                        </span>
                    </h3>
                    <p><b>Number of Employees :</b> {company.numEmployees}</p>
                    <p><b>Description :</b> {company.description} </p>
                    <hr></hr>
                </Col>
            </Row>
            {company.jobs.map( job => (
                 <JobCard key={job.id} id={job.id} title={job.title} equity={job.equity} salary={job.salary}  companyName={company.name}/>
             ))}    
        </Container>
    )
}


export default CompanyDetail