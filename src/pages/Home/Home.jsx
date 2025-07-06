import OurProduct from "../../components/Home/OurProduct/OurProduct";
import Navbar from "../../Layout/NavBar/Navbar.jsx";
import MainSection from '../../components/Home/MainSection/MainSection.jsx';
import BrowseRange from '../../components/Home/BrowseRange/BrowseRange.jsx';
import Footer from '../../Layout/Footer/Footer.jsx';


export default function Home() {

    return (
        <>
        <Navbar/>
        <MainSection/>
        <BrowseRange/>
        <Footer/>
        </>
    )
    
}