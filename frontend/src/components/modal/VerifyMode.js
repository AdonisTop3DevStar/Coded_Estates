import { useState } from "react";
import { Container, Button, Image, Row, Col, Card, ListGroup, Form, ButtonGroup } from "react-bootstrap";
import Logo from '../../assets/images/Logo.svg';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import SBanner1 from '../../assets/images/verify/sbanner-1.png';
import SBanner2 from '../../assets/images/verify/sbanner-2.png';
import SBanner3 from '../../assets/images/verify/sbanner-3.png';
import Banner1 from '../../assets/images/verify/banner-1.png';
import Banner2 from '../../assets/images/verify/banner-2.png';
import Banner3 from '../../assets/images/verify/banner-3.png';
import UploadBanner from '../../assets/images/verify/upload.png';
import Building from '../../assets/images/building/13.webp';
import { BiHome } from "react-icons/bi";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FileUploader } from "react-drag-drop-files";
import NetIcon from '../../assets/images/verify/net.svg';
import Icon1 from '../../assets/images/icons/swimming-pool.svg';
import Icon2 from '../../assets/images/icons/star-border.svg';
import Icon3 from '../../assets/images/icons/heart-outline.svg';

const data = [
    {no : 1}, {no : 1}, {no : 1}, {no : 1}, {no : 1}, {no : 1},{no : 1},{no : 1}, {no : 1}, {no : 1},{no : 1},{no : 1},{no : 1}, {no : 1},{no : 1}, {no : 1},{no : 1}, {no : 1},{no : 1},{no : 1}, {no : 1},
]

export default function VerifyMode () {
    const steps = [
        { label: "Step0", stepNumber: 0, element: <Step0/> },
        { label: "Step1", stepNumber: 1, element: <Step1/> },
        { label: "Step2", stepNumber: 2, element: <Step2/> },
        { label: "Step3", stepNumber: 3, element: <Step3/> },
        { label: "Step4", stepNumber: 4, element: <Step4/> },
        { label: "Step5", stepNumber: 5, element: <Step5/> },
        { label: "Step6", stepNumber: 6, element: <Step6/> },
        { label: "Step7", stepNumber: 7, element: <Step7/> },
        { label: "Step8", stepNumber: 8, element: <Step8/> },
        { label: "Step9", stepNumber: 9, element: <Step9/> },
        { label: "Step10", stepNumber: 10, element: <Step10/> },
        { label: "Step11", stepNumber: 11, element: <Step11/> },
        { label: "Step12", stepNumber: 12, element: <Step12/> },
        { label: "Step13", stepNumber: 13, element: <Step13/> },
        { label: "Step14", stepNumber: 14, element: <Step14/> },
        { label: "Step15", stepNumber: 15, element: <Step15/> },
        { label: "Step16", stepNumber: 16, element: <Step16/> },
        { label: "Step17", stepNumber: 17, element: <Step17/> },
        { label: "Step18", stepNumber: 18, element: <Step18/> },
        { label: "Step19", stepNumber: 19, element: <Step19/> },
    ];

    const [currentStep, setCurrentStep] = useState(0);

    const goToNextStep = () => {
        if (currentStep < (steps.length-1) && currentStep < 19) {
          setCurrentStep(currentStep + 1);
        }
      };
    
      const goToPreviousStep = () => {
        if (currentStep > 0) {
          setCurrentStep(currentStep - 1);
        }
      };

    return (
        <div className="VerifyMode position-relative" style={{height:"70vh"}}>
            
            {steps.map((item, idx) => (
                <div key={idx} className={`step p-3 bg-white-custom  ${item.stepNumber === currentStep ? "d-block" : "d-none"}`} style={{maxHeight:'60vh', overflowY:'scroll'}}>
                    <Container>{item.element}</Container>                    
                </div>     
            ))
                
            }
             <ProgressBar percent={5*currentStep} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"/>
            <div className="bg-white pt-1 mb-1">
               
                <Container>
                    {currentStep == 0 ? (
                        <div className="d-flex align-items-center justify-content-end">
                            <Button className="bg-dark-purple text-white border-dark-purple fw-bold px-4 py-1 mt-1" onClick={goToNextStep}>Get Start</Button>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center justify-content-between">
                            <Button className="bg-white text-dark-purple border-white  px-2 py-2" onClick={goToPreviousStep}><u>Back</u></Button>
                            <Button className="bg-dark-purple text-white border-dark-purple fw-bold px-3 py-1" onClick={goToNextStep}>Next</Button>
                        </div>
                    )}
                    
                </Container>
            </div>
        </div>
    )
}

export const Step0 = () => {
    return (
        <div className="Step0 py-5">
            <Row className="align-items-center">
                <Col sm={6} md={6} className="">
                    <div className="fs-3 fw-bold w-50 mx-auto">Get Your NFT</div>
                    <div className="fs-3 fw-bold w-50 mx-auto">ready for rental</div>
                </Col>
                <Col sm={6} md={6}>
                    <div className="py-4 border-bottom d-flex align-items-center justify-content-between">
                        <div className="">
                            <div className="fs-5 fw-semibold">1 Tell us about your place</div>
                            <div className="text-gray ms-3">Share some basic info, like where it is and how many guests can stay.</div>
                        </div>
                        <Image src={SBanner1}/>
                    </div>
                    <div className="py-4 border-bottom d-flex align-items-center justify-content-between">
                        <div className="">
                            <div className="fs-5 fw-semibold">2 Make it stand out</div>
                            <div className="text-gray ms-3">Add 5 or more photos plus a title and description - we’ll help you out.</div>
                        </div>
                        <Image src={SBanner2}/>
                    </div>
                    <div className="py-4 border-bottom d-flex align-items-center justify-content-between">
                        <div className="">
                            <div className="fs-5 fw-semibold">3  Finish up and publish</div>
                            <div className="text-gray ms-3">Choose it you’d like to start with an experience gest, set a starting price, and publish your listing.</div>
                        </div>
                        <Image src={SBanner3}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export const Step1 = () => {
    return (
        <div className="Step1 py-5 my-3">
            <Row className="align-items-center">
                <Col sm={6} md={6}>
                    <div className="w-75 mx-auto">
                        <div className="fs-6 fw-semibold mb-2">Step 1</div>
                        <div className="fs-3 fw-bold mb-2">Tell us about your place</div>
                        <div className="">In this step, we’ll ask you which type of property you have and if gests will book the entire place or just a room.  Then let us know the location and how may gests can stay.</div>
                    </div>
                </Col>
                <Col sm={6} md={6} className="text-center">
                    <Image src={Banner1} width="400"/>
                </Col>
            </Row>
        </div>
    )
}

export const Step2 = () => {
    return (
        <div className="Step2">
            <div className="fs-5 fw-bold">Which of these best describes <br/>your place ?</div>
            <Row>
                {data.map((item, idx) => (
                    <Col sm={6} md={3} className="mt-2">
                        <Card>
                            <Card.Body>
                                <BiHome className="fs-2"/>
                                <div>Home</div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                
            </Row>
        </div>
    )
}

export const Step3 = () => {
    return (
        <div className="Step3 py-5 my-3">
            <div className="w-50 mx-auto">
                <div className="fs-5 fw-bold">What type of place will guests have?</div>
                <Card className="mt-4">
                    <Card.Body>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <div className="fw-semibold">An entire place</div>
                                <div className="text-gray">Guest have the whole place to themselves</div>
                            </div>
                            <BiHome className="fs-1"/>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="mt-4">
                    <Card.Body>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <div className="fw-semibold">A private room</div>
                                <div className="text-gray">Guest sleep in a private room but some areas may be shared with you or others</div>
                            </div>
                            <BiHome className="fs-1"/>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="mt-4">
                    <Card.Body>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <div className="fw-semibold">A shared room</div>
                                <div className="text-gray">Guests sleep in a room or common area that may be shared with you or others</div>
                            </div>
                            <BiHome className="fs-1"/>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export const Step4 = () => {
    return (
        <div className="Step4 py-5 my-3">
            <div className="w-50 mx-auto">
                <div className="fs-5 fw-bold mb-2">What type of place will guests have?</div>
                <div className="text-gray mb-2">Guest have the whole place to themselves</div>
                <Card className="mt-4 mb-1">
                <iframe className="w-100 rounded" style={{height:"310px"}} src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"></iframe>
                </Card>
            </div>
        </div>
    )
}

export const Step5 = () => {
    return (
        <div className="Step5 py-5 my-3">
            <div className="w-50 mx-auto">
                <div className="fs-5 fw-bold mb-2">Confirm your address</div>
                <div className="text-gray mb-2">Your address is only shared with guests after they’ve made a reservation</div>
                <ListGroup>
                    <ListGroup.Item>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Text className="text-muted">Street</Form.Text>                       
                        <Form.Control type="text" placeholder="" className="border-0" />
                    </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted"> </Form.Text>                       
                            <Form.Control type="text" placeholder="" className="border-0 mt-3" />
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted">City</Form.Text>                       
                            <Form.Control type="text" placeholder="" className="border-0" />
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted">State (Optional)</Form.Text>                       
                            <Form.Control type="text" placeholder="" className="border-0" />
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted">Zip coded (Optional)</Form.Text>                       
                            <Form.Control type="text" placeholder="" className="border-0" />
                        </Form.Group>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Text className="text-muted">Country / Regenon</Form.Text>                       
                            <Form.Control type="text" placeholder="" className="border-0" />
                        </Form.Group>
                    </ListGroup.Item>
                </ListGroup>
                <hr/>
                <div className="fs-5 fw-semibold">Show your specific location</div>
                <div className="d-flex align-items-center justify-content-between">
                    <small className="text-gray">Make it clear to guests where your place is located. We’ll only share your address after they’ve made a reservation. <strong><u>Learn more</u></strong></small>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                    />
                </div>
                <Card className="mt-4 mb-1">
                <iframe className="w-100 rounded" style={{height:"310px"}} src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"></iframe>
                </Card>
            </div>
        </div>
    )
}

export const Step6 = () => {
    return (
        <div className="Step6 py-5 my-3">
            <div className="w-50 mx-auto">
                <div className="fs-5 fw-bold mb-2">Is the pin in the right spot?</div>
                <div className="text-gray mb-2">Your address is only shared with guests after they’ve made a reservation.</div>
                <Card className="mt-4 mb-1">
                <iframe className="w-100 rounded" style={{height:"310px"}} src="https://maps.google.com/maps?q=18%20Ezekia%20Papaioannou%20Str.%20Off.104%2C%201075%20%20Nicosia%2C%20Cyprus&t=m&z=15&output=embed&iwloc=near"></iframe>
                </Card>
            </div>
        </div>
    )
}

export const Step7 = () => {
    return (
        <div className="Step7 py-5 my-3">
            <div className="w-50 mx-auto">
                <div className="fs-5 fw-bold mb-2">Share some basic about your place</div>
                <div className="text-gray mb-2">You’ll add more details later, like bed type</div>
                <div className="mt-2">
                    <div className="d-flex align-items-center py-3 justify-content-between my-2 guest-stepper border-bottom">
                        <div className="guest-content">
                        <div className="guest-title">Guests</div>
                        </div>
                        <div className="stepper">
                        <ButtonGroup className="align-items-center ">
                            <Button><FaMinus/></Button>
                            <span className="px-3">1</span>
                            <Button ><FaPlus/></Button>
                        </ButtonGroup>
                        </div>
                    </div>
                    <div className="d-flex align-items-center  py-3 justify-content-between my-2 guest-stepper border-bottom">
                        <div className="guest-content">
                        <div className="guest-title">Bedrooms</div>
                        </div>
                        <div className="stepper">
                        <ButtonGroup className="align-items-center ">
                            <Button><FaMinus/></Button>
                            <span className="px-3">1</span>
                            <Button ><FaPlus/></Button>
                        </ButtonGroup>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-3 justify-content-between my-2 guest-stepper border-bottom">
                        <div className="guest-content">
                        <div className="guest-title">Beds</div>
                        </div>
                        <div className="stepper">
                        <ButtonGroup className="align-items-center ">
                            <Button><FaMinus/></Button>
                            <span className="px-3">1</span>
                            <Button ><FaPlus/></Button>
                        </ButtonGroup>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-3 justify-content-between my-2 guest-stepper">
                    <div className="guest-content">
                    <div className="guest-title">Bathrooms</div>
                    </div>
                    <div className="stepper">
                    <ButtonGroup className="align-items-center ">
                        <Button><FaMinus/></Button>
                        <span className="px-3">1</span>
                        <Button ><FaPlus/></Button>
                    </ButtonGroup>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export const Step8 = () => {
    return (
        <div className="Step8 py-5 my-3">
            <Row className="align-items-center">
                <Col sm={6} md={6}>
                    <div className="w-75 mx-auto">
                        <div className="fs-6 fw-semibold mb-2">Step 2</div>
                        <div className="fs-3 fw-bold mb-2">Make your place stand out</div>
                        <div className="">In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then, you’ll create a title and description.</div>
                    </div>
                </Col>
                <Col sm={6} md={6} className="text-center">
                    <Image src={Banner2} width="400"/>
                </Col>
            </Row>
        </div>
    )
}

export const Step9 = () => {
    return (
        <div className="Step9">
            <div className="fs-5 fw-bold mb-2">Tell guests what your place has to offer</div>
            <div className="text-gray mb-2">You can add more amenities after you publish your listing.</div>
            <Row>
                {data.map((item, idx) => (
                    <Col sm={6} md={3} className="mt-2">
                        <Card>
                            <Card.Body>
                                <BiHome className="fs-2"/>
                                <div>Home</div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}                
            </Row>
            <div className="fw-bold my-2">Do you have any sandout amenities?</div>
            <Row>
                {data.map((item, idx) => (
                    <Col sm={6} md={3} className="mt-2">
                        <Card>
                            <Card.Body>
                                <BiHome className="fs-2"/>
                                <div>Home</div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}                
            </Row>
        </div>
    )
}

export const Step10 = () => {
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
    return (
        <div className="Step10 py-5 my-3">
            <div className="w-50 mx-auto">
                <div className="fs-5 fw-bold mb-2">Add some photos of your house</div>
                <div className="text-gray mb-2">You’ll need 5 photos to get started. You can add more or make changes later</div>
                <div className="position-relative p-2 rounded-2 border-dark-purple" style={{backgroundImage: `url(${UploadBanner})`, backgroundSize:"100%", backgroundPosition:"center"}}>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes}/>                    
                </div>
            </div>
        </div>
    )
}

export const Step11 = () => {
    return (
        <div className="Step11 py-5 my-3">
            <div className="w-50 mx-auto">
                <div className="fs-5 fw-bold mb-2">Now, let’s give your house a title</div>
                <div className="text-gray mb-2">Short titles work best. Have fun with it - you can always change it later.</div>
                <Form.Group className="mt-1 mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={11} />
                    <Form.Label><small className="text-gray">11 / 32</small></Form.Label>
                </Form.Group>
            </div>
        </div>
    )
}

export const Step12 = () => {
    return (
        <div className="Step12 py-5 my-3">
            <div className="w-50 mx-auto my-5 py-5">
                <div className="fs-5 fw-bold mb-2">Next, let’s describe your house</div>
                <div className="text-gray mb-2">Choose up to 2 highlights. We’ll use these to get your description started.</div>
                <Row className="mb-5">
                    <Col sm={6} md={3} className="py-1 border-dark-purple rounded-5 border bg-white my-1">
                        <Image src={NetIcon} width="20" className="me-2 mb-1"/><small>Peaceful</small>
                    </Col>
                    <Col sm={6} md={3} className="py-1 border-dark-purple rounded-5 border bg-white my-1">
                        <Image src={NetIcon} width="20" className="me-2 mb-1"/><small>Peaceful</small>
                    </Col>
                    <Col sm={6} md={3} className="py-1 border-dark-purple rounded-5 border bg-white my-1">
                        <Image src={NetIcon} width="20" className="me-2 mb-1"/><small>Peaceful</small>
                    </Col>
                    <Col sm={6} md={3} className="py-1 border-dark-purple rounded-5 border bg-white my-1">
                        <Image src={NetIcon} width="20" className="me-2 mb-1"/><small>Peaceful</small>
                    </Col>
                    <Col sm={6} md={3} className="py-1 border-dark-purple rounded-5 border bg-white my-1">
                        <Image src={NetIcon} width="20" className="me-2 mb-1"/><small>Peaceful</small>
                    </Col>
                    <Col sm={6} md={3} className="py-1 border-dark-purple rounded-5 border bg-white my-1">
                        <Image src={NetIcon} width="20" className="me-2 mb-1"/><small>Peaceful</small>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export const Step13 = () => {
    return (
        <div className="Step13 py-5 my-3">
            <div className="w-50 mx-auto">
                <div className="fs-5 fw-bold mb-2">Create your description</div>
                <div className="text-gray mb-2">Share what makes your place special.</div>
                <Form.Group className="mt-1 mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={11} />
                    <Form.Label><small className="text-gray">11 / 32</small></Form.Label>
                </Form.Group>
            </div>
        </div>
    )
}

export const Step14 = () => {
    return (
        <div className="Step14 py-5 my-3">
            <Row className="align-items-center">
                <Col sm={6} md={6}>
                    <div className="w-75 mx-auto">
                        <div className="fs-6 fw-semibold mb-2">Step 3</div>
                        <div className="fs-3 fw-bold mb-2">Finish up and publish</div>
                        <div className="">Finally, you’ll choose if you’d like to start with an experienced guest, then you’ll set your nightly price. Answer a few quick questions and publish when you’re ready.</div>
                    </div>
                </Col>
                <Col sm={6} md={6} className="text-center">
                    <Image src={Banner3} width="400"/>
                </Col>
            </Row>
        </div>
    )
}

export const Step15 = () => {
    return (
        <div className="Step15 py-5 my-3">
        <div className="w-50 mx-auto mt-5 mb-4">
            <div className="fs-5 fw-bold mb-2">Choose who to welcome for your first reservation</div>
            <div className="text-gray mb-2">Short titles work best. Have fun with it - you can always change it later.</div>
            <Card className="my-3">
                <Card.Body className="d-flex align-items-start">
                <Form.Check 
                    type="radio"
                    id="1"
                    className="mt-1"
                />
                <div className="ms-3">
                    <div className="fs-5 fw-semibold">Any Coded Estate Guest</div>
                    <small cls = "text-gray">Get reservations faster when you welcome anyone from the Coded Estate community</small>
                </div>
                </Card.Body>
            </Card>
            <Card className="my-3">
                <Card.Body className="d-flex align-items-start">
                <Form.Check 
                    type="radio"
                    id="2"
                    className="mt-1"
                />
                <div className="ms-3">
                    <div className="fs-5 fw-semibold">An experienced guest</div>
                    <small cls = "text-gray">For your first guest, welcome someone with a good track record on Coded estate who can offer tips for how to be a great Host</small>
                </div>
                </Card.Body>
            </Card>
        </div>
    </div>
    )
}

export const Step16 = () => {
    return (
        <div className="Step16 py-4 my-3">
        <div className="w-50 mx-auto mt-4">
            <div className="fs-5 fw-bold mb-2">Now, set your price</div>
            <div className="text-gray mb-2">You can change it anytime.</div>
            <Card className="my-3">
                <Card.Body className="d-flex align-items-start">
                    <div className="mx-auto">
                        <div className="stepper">
                        <div className="d-flex align-items-center justify-content-around w-100">
                            <Button className="bg-white border-gray text-dark-purple rounded-circle py-2"><FaMinus/></Button>
                            <Form.Control type="text" value="891" className="border-gray fs-5 fw-semibold mx-5 text-center"/>
                            <Button className="bg-white border-gray text-dark-purple rounded-circle py-2"><FaPlus/></Button>
                        </div>
                        </div>
                        <div className="text-gray text-center my-2">Per night</div>
                        <div className="text-gray text-center my-2 w-75 mx-auto">Places like yours in your area usually range from 671 kr to 1,118 kr</div>
                    </div>                    
                </Card.Body>
            </Card>
            <Card className="my-3">
                <Card.Body>
                    <div className="fs-6 fw-bold text-gray my-2">Get booked faster</div>
                    <div className="fs-6 text-gray my-2">Offer 20% off to your first 3 guests to help your place stand out.</div>
                    <div className="fs-6 fw-bold text-gray my-2"><u>Learn more</u></div>
                </Card.Body>
            </Card>
        </div>
      </div>  
    )
}

export const Step17 = () => {
    return (
        <div className="Step16 py-4 my-3">
            <div className="w-50 mx-auto mt-4">
                <div className="fs-5 fw-bold mb-2">Just one last step!</div>
                <div className="fs-6 fw-bold mb-2">How are you hosting on Coded Estate ? </div>
                <Form.Check 
                    type="radio"
                    id="1"
                    label="I’m hosting as a private individual"
                    className="mb-2"
                />
                <Form.Check 
                    type="radio"
                    id="1"
                    label="I’m hosting as a business"
                    className="mb-2"
                />
                <div className="fs-6 fw-bold my-2">How are you hosting on Coded Estate ? </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="">Security camera (s)</div>
                    <Form.Check
                        disabled
                        type="checkbox"
                        id="3"
                    />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="">Weapons</div>
                    <Form.Check
                        disabled
                        type="checkbox"
                        id="3"
                    />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="">Dangerous animals</div>
                    <Form.Check
                        disabled
                        type="checkbox"
                        id="3"
                    />
                </div>
                <hr/>
                <Button className="bg-dark-purple border-dark-purple text-white py-2 px-2 mb-3">Verify ownership</Button>
                <div className="fs-6 fw-bold mb-2">Important things to know</div>
                <div className="fs-6 text-gray">Be sure to comply with your local laws and review Coded Estates nondiscrimination policy and guest and Host fees.</div>
            </div>
      </div>  
    )
}

export const Step18 = () => {
    return (
        <div className="Step18 py-4 my-3">
        <div className="w-50 mx-auto mt-4">
            <div className="fs-5 fw-bold mb-2">Yay ! It’s time to publish.</div>
            <div className="text-gray mb-2">Here’s what we’ll show to gests. Before you publish, make sure to review the details.</div>
            <div className="my-3">
                <Row>
                    <Col sm={12} md={5}>
                        <Image src={Building} height="100%" width="100%" style={{objectFit:"cover"}}/>
                    </Col>
                    <Col sm={12} md={7}>
                        <div className="fs-6 fw-bold mb-2">What’s next?</div>
                        <div className="my-2 pb-2">
                        <div className="d-flex my-2">
                            <Image src={Icon1} className="me-3"/>
                            <div className="">
                                <div className="text-dark-purple fw-bold fs-5">Dive right in</div>
                                <small className="text-gray">This is one of the few place in the area with a pool.</small>
                            </div>
                        </div>
                        <div className="d-flex my-2">
                            <Image src={Icon2} className="me-3"/>
                            <div className="">
                                <div className="text-dark-purple fw-bold fs-5">Experienced host</div>
                                <small className="text-gray">Bookiply has 1429 reviews for other places</small>
                            </div>
                        </div>
                        <div className="d-flex my-2">
                            <Image src={Icon3} className="me-3"/>
                            <div className="">
                                <div className="text-dark-purple fw-bold fs-5">Highly rated Host</div>
                                <small className="text-gray">Bookily has recieved 5-star ratings from 100% of recent guests.</small>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
      </div>  
    )
}

export const Step19 = () => {
    return (
        <div className="Step19 py-5 my-5 my-3" style={{height:"45vh"}}>
            <div className="w-50 mx-auto my-5">
            <div className="fs-5 fw-bold mt-5 mb-2">Congratulations, Didrik !</div>
                <div className="text-gray mb-4">From one Host to another -welcome aboard. Thanks you for sharing your home and helping to create incredible experieces for out case.</div>
            </div>    
        </div>  
    )
}




