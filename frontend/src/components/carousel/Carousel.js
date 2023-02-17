import { Badge, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const DetailCarousel = ({images}) => {
  return (
    <Carousel className="my-2 DetailCarousel">
        {
            images.map((item, idx) => (
                <Carousel.Item key={idx}>
                    <Image src={item.src} width="100%" height="500" className="rounded-1" style={{objectFit : "cover"}}/>
                </Carousel.Item>
            ))
        }      
    </Carousel>
  );
};

export const MintedPropertiesCardCarousel = ({images}) => {
  return (
    <Carousel className="MintedPropertiesCardCarousel">
        {
            images.map((item, idx) => (
                <Carousel.Item key={idx} className="position-relative text-center">
                  <Badge className="text-dark-purple">Verify</Badge>
                    <Link to="/dashboard/buy/properties"><Image src={item.src} width="100%" height="240" className="rounded-1" style={{objectFit:"cover"}}/></Link>
                </Carousel.Item>
            ))
        }      
    </Carousel>
  );
};

export const UnverifiedCardCarousel = ({images}) => {
  return (
    <Carousel className="MintedPropertiesCardCarousel">
        {
            images.map((item, idx) => (
                <Carousel.Item key={idx} className="position-relative text-center">
                  <Badge className="text-dark-purple">Not Verify</Badge>
                  <Link to="/dashboard/buy/properties"><Image src={item.src} width="100%" height="240" className="rounded-1" style={{objectFit:"cover"}}/></Link>
                </Carousel.Item>
            ))
        }      
    </Carousel>
  );
};