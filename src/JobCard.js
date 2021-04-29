import React, { useContext, useState } from "react";
import { Button } from 'reactstrap';
import UserContext from "./Context";
import { Row, Col } from 'reactstrap';

import './JobCard.css'

// JobCard Component:
//   - hasAppliedToJob: where checks if user already applied to the job 
//   *
//   *
//   - handleApply: allow users to click on a button and apply for the job
//   *
//   *
//   - Renders:
//     - Job Information
//     - Apply button so users can apply for the job 

const JobCard = ({id, title, companyName, equity, salary}) => {
    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();

    React.useEffect(function updateAppliedStatus() {
        console.debug("JobCard useEffect updateAppliedStatus", "id=", id);
    
        setApplied(hasAppliedToJob(id));
      }, [id, hasAppliedToJob]);
    

      /** Apply for a job */
      async function handleApply(evt) {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
      }

    return (
        <Row>
          <Col className="JobCard-div">
              <h3>Job title: {title}
              <hr/></h3>
              <p className="JobCard-div-details" >Job Id: {id}</p>
              <p className="JobCard-div-details" >Job Equity: {equity}</p>
              <p className="JobCard-div-details" >Salary : { salary }</p>
              <p className="JobCard-div-details" >Company Name: { companyName }
              <Button 
                  className="float-right" 
                  color="danger" 
                  onClick={handleApply} 
                  disabled={applied}>
                    {applied ? "Applied" : "Apply Now"}
                </Button>
              </p>
          </Col>
        </Row>
    )
}


export default JobCard