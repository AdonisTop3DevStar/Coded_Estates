import { Row, Col } from "react-bootstrap";
import { FavoriteCard, FavouritInfoCard, NormalCard } from "../../../components/card/card";
import { FavoriteData, buyPageData } from "../../../utils/data";

function FavoritesPage() {
    return (
      <div className="FavoritesPage">
        <div className="fs-4 fw-bold">My Favorites</div>
        <div className="fs-6 opacity-50">Welcome to Coede Estate Property Admin</div>
        <FavouritInfoCard/>
        <Row className="mt-5 FavoritesPage-body position-relative">
        {     
          FavoriteData.map((item, idx) => (
            <Col xs={12} sm={12} md={2}>
              <FavoriteCard key={item.idx} title={item?.address?.city + " , " + item?.address?.state} network={item?.currency} price={item?.price} bed={item?.bedrooms} bath={item?.bathrooms} size={item?.size} images={item?.photos} />
            </Col>
          ))
        }
        {/* {
                buyPageData.map((item, idx) => (
                    <Col xs={12} sm={12} md={2}>
                        <NormalCard key={idx} title={item.title} network={item.network} price={item.price} images={item.images}/>
                    </Col>
                ))
            } */}
        </Row>
      </div>
    );
  }
  
  export default FavoritesPage;
  