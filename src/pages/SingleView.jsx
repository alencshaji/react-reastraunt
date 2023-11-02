import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Modaloperating from '../components/Modaloperating';
import Reviews from '../components/Reviews';

function SingleView() {
    const { uid } = useParams();
    const [allData, setData] = useState([]);
    const [singleData, setSingleData] = useState(null);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const result = await axios.get('/restaurants.json');
                setData(result.data.restaurants);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchAllData();
    }, []);

    useEffect(() => {
        if (allData.length > 0) {
            const foundData = allData.find(item => item.id === parseInt(uid, 10));
            if (foundData) {
                setSingleData(foundData);
            }
        }
    }, [allData, uid]);

    return (
        <div style={{marginBottom:'5rem'}}>
            <Container>
            {singleData ? (
                <Row>
                    <Col>
                        <img style={{height:'25rem'}} src={singleData.photograph} alt="" />
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item action >
                                {singleData.address}
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                {singleData.neighborhood}
                            </ListGroup.Item>
                            <ListGroup.Item action >
                                {singleData.cuisine_type}
                            </ListGroup.Item>
                            <ListGroup.Item action >
                            <Modaloperating data={singleData.operating_hours}></Modaloperating>
                            </ListGroup.Item>
                            <ListGroup.Item action >
                           <Reviews  reviewData={singleData.reviews}></Reviews>
                            </ListGroup.Item>
                         
                        </ListGroup>
                    </Col>
                </Row>
            ) : (
                <p>Restaurant not found.</p>
            )}
            </Container>
           
        </div>
    );
}

export default SingleView;
