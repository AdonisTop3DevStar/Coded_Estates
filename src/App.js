import { useContext } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DashboardLayout, HomeLayout } from "./components/layout/Layout";
import { Style } from "./assets/style/index";
import { ThemeContext, ThemeProvider } from "./configs/ThemeProvider";
import AboutPage from "./screens/about/AboutPage";
import BuyPage from "./screens/buy/BuyPage";
import ActivityPage from "./screens/dashboard/activity/ActivityPage";
import FavoritesPage from "./screens/dashboard/favorite/FavoritesPage";
import HoldingPage from "./screens/dashboard/holding/HoldingPage";
import MessagePage from "./screens/dashboard/message/MessagePage";
import OffersPage from "./screens/dashboard/offer/OffersPage";
import OverviewPage from "./screens/dashboard/overview/OverviewPage";
import PropertiesPage from "./screens/dashboard/properties/PropertiesPage";
import RewardsPage from "./screens/dashboard/rewards/RewardsPags";
import HomePage from "./screens/home/HomePage";
import RentPage from "./screens/rent/RentPage";
import SellPage from "./screens/sell/SellPage";
import { DetailPage } from "./screens/buy/DetailPage";
import PropertiesDetail from "./screens/dashboard/properties/Details";


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
              <Route path="/" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/buy" element={<BuyPage/>}/>
              <Route path="/sell" element={<SellPage/>}/>
              <Route path="/rent" element={<RentPage/>}/>
              <Route path="/detail/:detailID" element={<DetailPage/>}/>
            </Route>
            <Route element={<DashboardLayout/>}>
              <Route path="/dashboard/overview" element={<OverviewPage/>}/>
              <Route path="/dashboard/properties" element={<PropertiesPage/>}/>
              <Route path="/dashboard/properties/:detailID" element={<PropertiesDetail/>}/>
              <Route path="/dashboard/message" element={<MessagePage/>}/>
              <Route path="/dashboard/favorite" element={<FavoritesPage/>}/>
              <Route path="/dashboard/activity" element={<ActivityPage/>}/>
              <Route path="/dashboard/offers" element={<OffersPage/>}/>
              <Route path="/dashboard/rewards" element={<RewardsPage/>}/>
              <Route path="/dashboard/holding" element={<HoldingPage/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
