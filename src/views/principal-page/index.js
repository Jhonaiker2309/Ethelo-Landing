import Home from "../home";
import Open from "../open";
import Upcoming from "../upcoming";
import Location from "../location";
import Map from "../map";
import FooterSection from "../footer-section";

function PrincipalPage() {
    return (
        <div>
            <Home />
            <Open />
            <Upcoming />
            <Location />
            <Map />
            <FooterSection />
        </div>
    );
}

export default PrincipalPage;
