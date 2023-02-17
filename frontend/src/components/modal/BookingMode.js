import {Row, Col, Image, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/images/banners/trips.png';

export const BookingMode = () => {
    return (
        <div className="BookingMode mb-4">
            <Row>
                <Col sm={12} md={6}>
                    <div className='fs-5 fw-semibold my-4'>Your Trip</div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                        <div>
                            <div className="fs-6 fw-bold">Dates</div>
                            <div className="fs-6 text-gray">Jan 24 - 26</div>
                        </div>
                        <Link to="" className='fs-6 fw-bold text-dark-purple'><u>Edit</u></Link>
                    </div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                        <div>
                            <div className="fs-6 fw-bold">Dates</div>
                            <div className="fs-6 text-gray">Jan 24 - 26</div>
                        </div>
                        <Link to="" className='fs-6 fw-bold text-dark-purple'><u>Edit</u></Link>
                    </div><hr/>
                    <div className='fs-5 fw-semibold my-4'>Pay with</div>
                    <hr/>
                    <div className='fs-5 fw-semibold my-4'>Required for your trip</div>
                    <div className='fs-6 fw-bold'>Message the Host</div>
                    <small className="text-gray mb-2">Let the Host know why you’re traveling and when you’ll check in</small>
                    <div className="d-flex align-items-center my-2">
                        <Image src={Avatar} width="50" height="50"  style={{objectFit:"cover"}} className="rounded-circle me-2"/>
                        <div className='d-flex flex-column'>
                            <small className='fw-bold'>Anders</small>
                            <small className='text-gray'>Joined in 2016</small>
                        </div>
                    </div>
                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={4} />
                    </Form.Group>
                    <hr/>
                    <div className='fs-5 fw-semibold my-4'>Cancellation policy</div>
                    <small className="text-gray">This reservation is non-refundable. <strong><u>Learn more</u></strong></small>
                    <hr/>
                    <Button className="bg-dark-purple border-dark-purple text-white fw-bold w-100 py-2">Request to book</Button>
                </Col>
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}