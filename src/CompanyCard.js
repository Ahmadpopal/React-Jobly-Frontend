import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';


import './CompanyCard.css'

// CompanyCard Component 
//     - Renders list of Companies and Information about the company 
//     - where Users can click on the CompanyCard and will be redirect to the CompanyDetail Page 

const CompanyCard = ({name, handle, description, logoUrl, numOfEmployee}) => {

    return (
        <Container className="CompanyCard">
            <Row>
                <Col className="CompanyCard-div">
                <Link className="CompanyCard-Link" to={`/companies/${handle}`}>
                    <p className="CompanyCard-companyName-p">
                        <b>CompanyName: {name} </b>
                            <span>
                                {logoUrl 
                                ? <img src={logoUrl} className="float-right" style={{width: "2rem"}} alt={handle}/> 
                                : null}
                            </span>
                    </p>
                    <ul className="CompanyCard-ul">
                        <li>Handle: {handle}</li>
                        <li>Employees: {numOfEmployee}</li>
                        <li>Description: {description}</li>
                    </ul>
                </Link>
                </Col>
            </Row>
        </Container>  
    )
    
}

export default CompanyCard