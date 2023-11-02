import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Reviews({reviewData}) {
  return (
    <div>
       <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Reviews</Accordion.Header>
        <Accordion.Body>
            {
                reviewData?.map(i=>(
                    <div>
                        <p>Name : {i.name}</p>
                        <p>Date : {i.date}</p>
                        <p>Rating : {i.rating}</p>
                        <p>Comments : {i.comments}</p>
                        <hr />
                    </div>
                ))
            }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Reviews
