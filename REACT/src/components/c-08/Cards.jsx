import React from 'react'
import "./cards.scss"
import data from "../../assets/data/students.json"
import { Col, Container, Row} from "react-bootstrap"
import StudentCards from './StudentCards'


const Cards = () => {
    return (
      
        <Container className='text-center'>
            <Row className='m-3'>
                {

                    data.map((student, index) => (
                     
                        <Col key={index} md={6} lg={4} > <StudentCards {...student} />  </Col>

                 ))


                }
            </Row>


        </Container>
    
      
  )
}

export default Cards