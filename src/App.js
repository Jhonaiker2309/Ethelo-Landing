import Navbar from "./components/navbar";
import Home from "./views/home";
import Brands from "./views/brands";
import Open from "./views/open";
import Upcoming from "./views/upcoming";
import Location from "./views/location";
import Map from "./views/map";
import FooterSection from "./views/footer-section";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/*<Brands />*/}
      <Open />
      <Upcoming />
      <Location />
      <Map />
      <FooterSection />
    </div>
  );
}

export default App;
