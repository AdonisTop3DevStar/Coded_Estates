import { Badge, Carousel, Image } from "react-bootstrap";

export const DetailCarousel = ({images}) => {
  return (
    <Carousel className="p-3 border border-1 rounded-1 DetailCarousel">
        {
            images.map((item, idx) => (
                <Carousel.Item key={idx}>
                    <Image src={item.src} width="100%" height="500" className="rounded-1"/>
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
                  <Badge>Verify</Badge>
                    <Image src={item.src} width="100%" height="240" className="rounded-1"/>
                </Carousel.Item>
            ))
        }      
    </Carousel>
  );
};
