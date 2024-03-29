import { Card, Carousel, Col, Image, Row, Button, Modal } from "react-bootstrap";
import { FaRuler, FaBath, FaBed, FaRegHeart, FaStar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { SecondPrimaryBtn } from "../button/Buttons";
import VerifyIcon from '../../assets/images/icons/verify.svg';
import UploadIcon from '../../assets/images/icons/upload.svg';
import MintIcon from '../../assets/images/icons/mint.svg';
import { DetailCarousel, ListCardCarousel, MintedPropertiesCardCarousel, UnverifiedCardCarousel } from "../carousel/Carousel";
import { ListCarouselData, UnVerifyNFTData, VerifyNFTData } from "../../utils/data";
import BarChartIcon from '../../assets/images/icons/barchart.svg';
import SumIcon from '../../assets/images/icons/sum.svg';
import AmountListIcon from '../../assets/images/icons/amount_list.svg';
import BidIcon from '../../assets/images/icons/bid.svg';
import ActiveIcon from '../../assets/images/icons/active.png';
import BuildingImage from '../../assets/images/building/1.webp';
import FHeartIcon from '../../assets/images/icons/fheart.svg';
import BuildingIcon from '../../assets/images/icons/building.svg';
import UpIcon from '../../assets/images/icons/up.svg';
import DownIcon from '../../assets/images/icons/down.svg';
import VerifyMode from "../modal/VerifyMode";
import { useState } from "react";
import Logo from '../../assets/images/Logo.svg';
import { store } from "../../configs/Store";
import SEIIcon from '../../assets/images/crypto/sei.svg';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'






export const NormalCard = ({ title, network, price, images, bed, bath, size }) => {
    const [loading, setLoading] = useState(true);
    const [header, setHeader, updateHeader] = store.useState('Header');
    setTimeout(() => {
        setLoading(false)
    }, "3000");

    return (
        <Card className="NormalCard my-2">
            <Card.Body className="position-relative">
                <FaRegHeart className="heart-icon" />
                {loading ?
                    (
                        <Skeleton
                            height="245px"
                            containerClassName="avatar-skeleton"
                        />
                    ) : (
                        <Carousel>
                            {
                                images.map((item, idx) => (
                                    <Carousel.Item>
                                        <Link className="nav-link" to="/detail/buy/1" onClick={() => setHeader('BUY')}><Image src={item} key={idx} height="245" className="w-100 object-fit-cover border rounded" style={{ objectFit: "cover" }} /></Link>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    )}

                <Link className="nav-link" to="/detail/buy/1" onClick={() => setHeader('BUY')}>
                    {loading ?
                        (
                            <Skeleton
                                containerClassName="avatar-skeleton"
                            />
                        ) : (
                            <Card.Title className="d-flex align-items-center justify-content-between my-1">
                                <div className="card-price d-flex align-items-center">
                                    <Image src={SEIIcon} width="20" className="me-2"/>{price} {network}
                                </div>
                                {/* <small className="card-reviews d-flex "><FaStar className="review-icon me-1" /><span>4.8</span></small> */}
                            </Card.Title>
                        )}
                    {loading ?
                        (
                            <Skeleton
                                containerClassName="avatar-skeleton"
                            />
                        ) : (
                            <Card.Subtitle className="my-1 normal-card-title">{title}</Card.Subtitle>
                        )}
                    {loading ?
                        (
                            <Skeleton
                                containerClassName="avatar-skeleton"
                            />
                        ) : (
                            <div className="d-flex align-items-center justify-content-between card-properties">
                                <div><FaRuler /><span className="ms-2">{size}</span></div>
                                <div><FaBath /><span className="ms-2">{bath}</span></div>
                                <div><FaBed /><span className="ms-2">{bed}</span></div>
                            </div>
                        )}
                </Link>
            </Card.Body>
        </Card>
    )
}

export const FavoriteCard = ({ title, network, price, images, bed, bath, size }) => {
    const [loading, setLoading] = useState(true);
    const [header, setHeader, updateHeader] = store.useState('Header');
    const [mode, setMode, updateMode] = store.useState('Mode');
    setTimeout(() => {
        setLoading(false)
    }, "3000");

    return (
        <Card className="NormalCard my-2">
            <Card.Body className="position-relative">
                <FaRegHeart className="heart-icon" />
                {loading ?
                    (
                        <Skeleton
                            height="200px"
                            width="200px"
                            containerClassName="avatar-skeleton"
                        />
                    ) : (
                        <Carousel>
                            {
                                images.map((item, idx) => (
                                    <Carousel.Item>
                                        {mode == "BUY" ? (
                                            <Link className="nav-link" to="/dashboard/buy/favorite/detail/1" onClick={() => setHeader('BUY')}><Image src={item} key={idx} height="200" width="200" className="w-100 object-fit-cover border rounded" style={{ objectFit: "cover" }} /></Link>
                                        ) : (
                                            <Link className="nav-link" to="/dashboard/rent/favorite/detail/1" onClick={() => setHeader('BUY')}><Image src={item} key={idx} height="200" width="200" className="w-100 object-fit-cover border rounded" style={{ objectFit: "cover" }} /></Link>
                                        )} 
                                       
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    )}

                <Link className="nav-link" to={mode == "BUY" ? ("/dashboard/buy/favorite/detail/1") : "/dashboard/rent/favorite/detail/1"} onClick={() => setHeader('BUY')}>
                    {loading ?
                        (
                            <Skeleton
                                containerClassName="avatar-skeleton"
                            />
                        ) : (
                            <Card.Title className="d-flex align-items-center justify-content-between my-1">
                                <div className="card-price d-flex align-items-center">
                                    <Image src={SEIIcon} width="20" className="me-2"/>{price} {network}
                                </div>
                                <small className="card-reviews d-flex "><FaStar className="review-icon me-1" /><span>4.8</span></small>
                            </Card.Title>
                        )}
                    {loading ?
                        (
                            <Skeleton
                                containerClassName="avatar-skeleton"
                            />
                        ) : (
                            <Card.Subtitle className="my-1 normal-card-title">{title}</Card.Subtitle>
                        )}
                    {loading ?
                        (
                            <Skeleton
                                containerClassName="avatar-skeleton"
                            />
                        ) : (
                            <div className="d-flex align-items-center justify-content-between card-properties">
                                <div><FaRuler /><span className="ms-2">{size}</span></div>
                                <div><FaBath /><span className="ms-2">{bath}</span></div>
                                <div><FaBed /><span className="ms-2">{bed}</span></div>
                            </div>
                        )}
                </Link>
            </Card.Body>
        </Card>
    )
}

export const NormalRentCard = ({ title, network, price, images, bed, bath, size }) => {
    const [loading, setLoading] = useState(true);
    const [header, setHeader, updateHeader] = store.useState('Header');
    setTimeout(() => {
        setLoading(false)
    }, "5000");
    return (
        <Card className="NormalCard my-2">
            <Card.Body className="position-relative">
                <FaRegHeart className="heart-icon" />
                {loading ?
                    (
                        <Skeleton
                            height="245px"
                            containerClassName="avatar-skeleton"
                        />
                    ) : (
                        <Carousel>
                            {
                                images.map((item, idx) => (
                                    <Carousel.Item>
                                        <Link className="nav-link" to="/detail/rent/1" onClick={() => setHeader('RENT')}><Image src={item} key={idx} height="245" className="w-100 object-fit-cover border rounded" style={{ objectFit: "cover" }} /></Link>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    )}

                <Link className="nav-link" to="/detail/rent/1" onClick={() => setHeader('RENT')}>
                    {loading ?
                        (
                            <Skeleton
                                containerClassName="avatar-skeleton"
                            />
                        ) : (
                            <Card.Title className="d-flex align-items-center justify-content-between my-1">
                                <div className="card-price d-flex align-items-center">
                                    <Image src={SEIIcon} width="20" className="me-2"/>{price} {network}
                                </div>
                                <small className="card-reviews d-flex "><FaStar className="review-icon me-1" /><span>4.8</span></small>
                            </Card.Title>
                        )}
                    {loading ?
                        (
                            <Skeleton
                                containerClassName="avatar-skeleton"
                            />
                        ) : (
                            <Card.Subtitle className="my-1 normal-card-title">{title}</Card.Subtitle>
                        )}
                    {loading ?
                        (
                            <Skeleton
                                containerClassName="avatar-skeleton"
                            />
                        ) : (
                            <div className="d-flex align-items-center justify-content-between card-properties">
                                <div><FaRuler /><span className="ms-2">{size}</span></div>
                                <div><FaBath /><span className="ms-2">{bath}</span></div>
                                <div><FaBed /><span className="ms-2">{bed}</span></div>
                            </div>
                        )}
                </Link>
            </Card.Body>
        </Card>
    )
}

export const TraitCard = ({ title, value }) => {
    return (
        <div className="TraitCard my-2 col-4">
            <Card>
                <Card.Body>
                    <div className="opacity-50 text-center">{title}</div>
                    <div className="fw-semibold opacity-75 text-center">{value}</div>
                </Card.Body>
            </Card>
        </div>
    )
}

export const TraitCard1 = ({ title, value }) => {
    return (
        <div className="TraitCard my-2 col-6">
            <Card>
                <Card.Body>
                    <div className="opacity-50 text-center">{title}</div>
                    <div className="fw-semibold opacity-75 text-center">{value}</div>
                </Card.Body>
            </Card>
        </div>
    )
}

export const VerifyCard = ({ }) => {
    return (
        <div className="VerifyCard my-1 mb-3">
            <Card>
                <Card.Body className="d-flex align-items-center justify-content-between">
                    <div>
                        <div className="fs-5 fw-bold mb-2">Verify Identify</div>
                        <SecondPrimaryBtn title="Start" />
                    </div>
                    <div className="border border-2 rounded-circle p-2">
                        <Image src={VerifyIcon} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export const UploadCard = ({ }) => {
    return (
        <div className="UploadCard my-1">
            <Card>
                <Card.Body className="d-flex align-items-center justify-content-between">
                    <div>
                        <div className="fs-5 mb-2 fw-bold">Upload Document</div>
                        <SecondPrimaryBtn title="Start" />
                    </div>
                    <div className="border border-2 rounded-circle p-2">
                        <Image src={UploadIcon} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export const MintCard = () => {
    return (
        <div className="MintCard my-1">
            <Card>
                <Card.Body>
                    <div className="py-5 text-center  border border-1 rounded-2">
                        <Image src={MintIcon} width="70" />
                    </div>
                    <div className="text-center mt-3"><SecondPrimaryBtn title="Mint" /></div>
                </Card.Body>
            </Card>
        </div>
    )
}

export const MintedPropertiesCard = () => {
    return (
        <div className="MintedPropertiesCard my-1">
            <Card className="shadow">
                <Card.Body>
                    <Row>
                        <Col sm={12} md={6}>
                            <UnverifiedCardCarousel images={UnVerifyNFTData[0].images} />
                        </Col>
                        <Col sm={12} md={6}>
                            <MintedPropertiesCardCarousel images={VerifyNFTData[2].images} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export const ListPropertiesCard = () => {
    return (
        <div className="MintedPropertiesCard my-1">
            <Card className="shadow">
                <Card.Body>
                    <Row>
                        <ListCardCarousel images={ListCarouselData[0].images} />
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export const PropertyInfoCard = () => {
    return (
        <div className="PropertyInfoCard mt-4">
            <Card className="shadow ">
                <Card.Body className="d-flex align-items-center row">
                    <Col sm={12} md={3} className="d-flex align-items-center">
                        <Image src={BarChartIcon} width="75" height="75" />
                        <div className="ms-3 d-flex flex-column justify-content-around">
                            <div className="fs-5 fw-bold my-2">Your Real Estate NFT Stats</div>
                            <div className="opacity-50 my-2">3 items</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={SumIcon} />
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Total NFTs</div>
                            <div className="fs-6 fw-bold">2</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={AmountListIcon} />
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Total NFTs listed</div>
                            <div className="fs-6 fw-bold">1</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={BidIcon} width="35"/>
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Active bids</div>
                            <div className="fs-6 fw-bold">300</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={ActiveIcon} width="35"/>
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Active offers</div>
                            <div className="fs-6 fw-bold">748</div>
                        </div>
                    </Col>
                </Card.Body>
            </Card>
        </div>
    )
}

export const FavouritInfoCard = () => {
    return (
        <div className="PropertyInfoCard mt-4 shadow">
            <Card>
                <Card.Body className="d-flex align-items-center row">
                    <Col sm={12} md={3} className="d-flex align-items-center">
                        <Image src={FHeartIcon} width="100" height="100" />
                        <div className="ms-3 d-flex flex-column justify-content-around">
                            <div className="fs-5 fw-bold my-2">My favorites</div>
                            <div className="opacity-50 my-2">3 items</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={BuildingIcon} />
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Total favorites</div>
                            <div className="fs-6 fw-bold">748</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={UpIcon} />
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Highest Price</div>
                            <div className="fs-6 fw-bold">1249 SEI</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={DownIcon} />
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Lowest Price</div>
                            <div className="fs-6 fw-bold">300 SEI</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={BidIcon} />
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">My Bid</div>
                            <div className="fs-6 fw-bold">748 SEI</div>
                        </div>
                    </Col>
                </Card.Body>
            </Card>
        </div>
    )
}

export const ListPropertyCard = ({ title, price, currency, images }) => {
    const [type, setType, updateType] = store.useState("DetailType");
    return (
        <div className="ListPropertyCard col-sm-12 col-md-2">
            <Card className="border-0">
                <Card.Body>
                    <Link to="/dashboard/buy/properties/1" className="nav-link" onClick={() => setType("verify")}>
                        <DetailCarousel images={images} />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="fw-bold">{title}</div>
                            <div className="d-flex align-items-center">
                                <Image src={SEIIcon} width="20" className="me-2"/><span className="opacity-50 ">{price}</span>
                            </div>
                        </div>
                    </Link>
                    <Button className="w-100 fw-bold text-dark-purple bg-white border-dark-purple">List</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export const MListPropertyCard = ({ title, price, currency, images }) => {
    const [type, setType, updateType] = store.useState("DetailType");
    return (
        <div className="ListPropertyCard col-sm-12 col-md-2">
            <Card className="border-0">
                <Card.Body>
                    <Link to="/dashboard/buy/properties/1" className="nav-link" onClick={() => setType("listing")}>
                        <DetailCarousel images={images} />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="fw-bold">{title}</div>
                            <div className="d-flex align-items-center">
                                <Image src={SEIIcon} width="20" className="me-2"/><span className="opacity-50 ">{price}</span>
                            </div>
                        </div>
                    </Link>
                    <Button className="w-100 fw-bold text-dark-purple bg-white border-dark-purple">Unlist</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export const UnVerifyPropertyCard = ({ title, images }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="ListPropertyCard col-sm-12 col-md-2">
            <Card className="border-0">
                <Card.Body>
                    <Link className="nav-link">
                        <DetailCarousel images={images} />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="fw-bold">{title}</div>
                        </div>
                    </Link>
                    <Button className="w-100 fw-bold text-dark-purple bg-white border-dark-purple" onClick={handleShow}>Verify</Button>
                </Card.Body>
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header className="d-flex align-items-center justify-content-between">
                    <Image src={Logo} height="50" />
                    <Button className="border-gray rounded-5 border bg-white text-dark-purple" onClick={handleClose}>Save & exit</Button>
                </Modal.Header>
                <Modal.Body className="position-relative">
                    <VerifyMode />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export const MyNFTCard = () => {
    return (
        <div className="MyNFTCard col-sm-12 col-md-2">
            <Card className="border-0">
                <Card.Body>
                    <Image src={BuildingImage} width="100%" height="250" className="rounded mb-3" />
                    <Link to="/dashboard/properties/1" className="nav-link">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="fw-bold">Kent Avenue #310</div>
                        </div>
                    </Link>
                    <Button className="w-100 fw-bold text-dark-purple bg-white border-dark-purple">View</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export const BidPropertyCard = ({ title, bPrice, price, currency, images }) => {
    const [type, setType, updateType] = store.useState("DetailType");
    return (
        <div className="BidPropertyCard col-sm-12 col-md-2">
            <Card className="border-0">
                <Card.Body>
                    <NavLink to="/dashboard/buy/properties/1" onClick={() => setType("bid")} className="nav-link"> <DetailCarousel images={images} />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="fw-bold">{title}</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <Button className="fw-bold text-dark-purple bg-white border-dark-purple">{bPrice} {currency}</Button>
                            <div className="text-end">
                                <div className="opacity-50">Offer</div>
                                <div className="d-flex align-items-center">
                                    <Image src={SEIIcon} width="20" className="me-2"/><span className="opacity-50 ">{price}</span><span className="ms-2 opacity-50 fw-semibold">{currency}</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    )
}