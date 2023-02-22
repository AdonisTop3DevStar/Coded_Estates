import { useContext } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DashboardLayout, HomeLayout } from "./components/layout/Layout";
import { Style } from "./assets/style/index";
import { ThemeContext, ThemeProvider } from "./configs/ThemeProvider";
import AboutPage from "./screens/about/AboutPage";
import BuyPage from "./screens/buy/BuyPage";
import TransactionPage from "./screens/dashboard/transaction/TransactionPage";
import FavoritesPage from "./screens/dashboard/favorite/FavoritesPage";
import HoldingPage from "./screens/dashboard/holding/HoldingPage";
import MessagePage from "./screens/dashboard/message/MessagePage";
import OffersPage from "./screens/dashboard/trip/TripsPage";
import OverviewPage from "./screens/dashboard/overview/OverviewPage";
import PropertiesPage from "./screens/dashboard/properties/PropertiesPage";
import RewardsPage from "./screens/dashboard/rewards/RewardsPags";
import HomePage from "./screens/home/HomePage";
import RentPage from "./screens/rent/RentPage";
import SellPage from "./screens/sell/SellPage";
import { DetailPage } from "./screens/buy/DetailPage";
import PropertiesDetail from "./screens/dashboard/properties/Details";
import TripsPage from "./screens/dashboard/trip/TripsPage";
import { TripsDetailPage } from "./screens/dashboard/trip/TripsDetailPage";
import ReservationPage from "./screens/dashboard/reservations/ReservationPage";
import ReviewsPage from "./screens/dashboard/reviews/ReviewsPage";
import ReviewDetailPage from "./screens/dashboard/reviews/ReviewDetailPage";
import { RentDetailPage } from "./screens/rent/DetailPage";
import TripActivePage from "./screens/dashboard/trip/TripActivePage";


const StyleTag = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <Helmet>
      <style>{Style(themeMode.theme)}</style>
    </Helmet>
  )
}

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <StyleTag/>
        <BrowserRouter>
          <Routes>
            <Route element={<HomeLayout/>}>
              {/* <Route path="/" element={<RentPage/>}/> */}
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/buy" element={<BuyPage/>}/>
              <Route path="/sell" element={<SellPage/>}/>
              <Route path="/rent" element={<RentPage/>}/>
              <Route path="/detail/buy/:detailID" element={<DetailPage/>}/>
              <Route path="/detail/rent/:detailID" element={<RentDetailPage/>}/>
            </Route>
            <Route element={<DashboardLayout/>}>
              <Route path="/dashboard/overview" element={<OverviewPage/>}/>
              <Route path="/dashboard/buy/properties" element={<PropertiesPage/>}/>
              <Route path="/dashboard/buy/properties/:detailID" element={<PropertiesDetail/>}/>
              <Route path="/dashboard/buy/message" element={<MessagePage/>}/>
              <Route path="/dashboard/buy/favorite" element={<FavoritesPage/>}/>
              <Route path="/dashboard/buy/transactions" element={<TransactionPage/>}/>
              <Route path="/dashboard/buy/offers" element={<OffersPage/>}/>
              <Route path="/dashboard/buy/rewards" element={<RewardsPage/>}/>
              <Route path="/dashboard/buy/holding" element={<HoldingPage/>}/>
            </Route>
            <Route element={<DashboardLayout/>}>
              <Route path="/dashboard/overview" element={<OverviewPage/>}/>
              <Route path="/dashboard/rent/properties" element={<PropertiesPage/>}/>
              <Route path="/dashboard/rent/properties/:detailID" element={<PropertiesDetail/>}/>
              <Route path="/dashboard/rent/message" element={<MessagePage/>}/>
              <Route path="/dashboard/rent/favorite" element={<FavoritesPage/>}/>
              <Route path="/dashboard/rent/transactions" element={<TransactionPage/>}/>
              <Route path="/dashboard/rent/rewards" element={<RewardsPage/>}/>
              <Route path="/dashboard/rent/holding" element={<HoldingPage/>}/>
              <Route path="/dashboard/rent/trips" element={<TripsPage/>}/>
              <Route path="/dashboard/rent/trips/active" element={<TripActivePage/>}/>
              <Route path="/dashboard/rent/trips/detail/:ID" element={<TripsDetailPage/>}/>
              <Route path="/dashboard/rent/reservations" element={<ReservationPage/>}/>
              <Route path="/dashboard/rent/reviews" element={<ReviewsPage/>}/>
              <Route path="/dashboard/rent/reviews/detail/:ID" element={<ReviewDetailPage/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/rent" replace/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
