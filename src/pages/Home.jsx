import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Restcard from '../components/Restcard';

function Home() {
    const [restaurants, setValue] = useState([]);

    const fetchData = async () => {
        try {
            const result = await axios.get('/restaurants.json');
            setValue(result.data.restaurants);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <Container style={{marginBottom:'8rem',paddingBottom:'2rem'}}>
        <Row className='mt-5'>
                <Col>
                    <h2 className='mt-3 text-danger'>Find the Best Reastruant With Your Choice</h2>
                    <p className='fs-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem laborum labore beatae quam ad optio ullam recusandae? Dolorum sunt, natus sapiente repudiandae dolores vero. Ad inventore ipsum consectetur eveniet.</p>
                </Col>
                <Col>
                <img src="" alt="" />
                </Col>
            </Row>
            <Row className=''>
                {restaurants.map((item) => (
                    <Col className='mt-3 p-2' lg={4} md={4} sm={6} key={item.id}>
                        <Restcard item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
          
        </>



    )
}

export default Home;
