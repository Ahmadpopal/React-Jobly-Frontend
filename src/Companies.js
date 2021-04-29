import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';


import JoblyApi from './Jobly'
import CompanyCard from './CompanyCard'
import SearchForm from './helper/SearchForm'
import './Companies.css'


// Companies Component: 
//   - Show Companies list from Jobly Api 
//   - show Search Form where Users can search companies by passing company name 

// Renders 
//   - SearchForm Component 
//   - CompanyCard Component

const Companies = () => {

    const [companies, setCompanies] = useState(null);

    useEffect(() => {
            getAllCompanies();
    }, []);

    async function getAllCompanies(name) {
      let companies = await JoblyApi.getCompanies(name);
      setCompanies(companies);
    };

    if (!companies) {
      return <h2>Companies List Loading....</h2>;
	}


    return (
      <Container className="Companies">
        <Row>
          <Col className="Companies-div-title">
            <h3 className="Companies-title">Companies list <hr /></h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchForm searchFor={getAllCompanies} />
          </Col>
        </Row>
        <Row>
          <Col>
          {companies.map(c => (
                <CompanyCard key={c.handle} 
                  name={c.name} handle={c.handle} 
                  numOfEmployee={c.numEmployees} 
                  description={c.description} 
                  logoUrl={c.logoUrl} />
              ))}
          </Col>
        </Row>
      </Container>
    )
}


export default Companies