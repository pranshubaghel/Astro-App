import './App.css';
import LandingPage from './Blog/LandingPage';
import Login from './Blog/LogIn_Page/Login';
import AstrovedMembership from './Blog/Monthly_Specials/AstrovedMembership';
import BirthdayAstrology from './Blog/Monthly_Specials/BirthdayAstrology';
import BusinessAstrology from './Blog/Monthly_Specials/BusinessAstrology';
import FamilyAstrology from './Blog/Monthly_Specials/FamilyAstrology';
import GloumSpecial from './Blog/Monthly_Specials/GloumSpecial';
import Astroved_Loyalty from './Blog/Servicess_offering/Astroved_Loyalty';
import Instant_Pooja from './Blog/Servicess_offering/Instant_Pooja';
import Monthly_Homa from './Blog/Servicess_offering/Monthly_Homa';
import Monthly_SP_Event from './Blog/Servicess_offering/Monthly_SP_Event';
import Nadi_astrology from './Blog/Servicess_offering/Nadi_astrology';
import Remedies from './Blog/Servicess_offering/Remedies';
import Special_Birthday from './Blog/Servicess_offering/Special_Birthday';
import Yearlong from './Blog/Servicess_offering/Yearlong';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Blog/Sign_Up_Page/SignUp';
import KundaliData from './Blog/KundaliBirthChart/BirthData';
import Horoscope from './Blog/Horoscope/Horoscope';
import MatchingData from './Blog/KundaliMatching/MatchingData';
import PanchangDetails from './Blog/Panchang/PanchangDetail';
import TodayPanchang from './Blog/Panchang/TodayPanchang';
import SelectLocation from './Blog/KundaliBirthChart/SelectLocation';
import Contact from './Blog/ContactUs/Contact';
import BirthdaySpecial from './Blog/Servicess_offering/Special_Birthday';
// import Consult from './Blog/Consult/Consult';
// import Gallery from './Blog/Gallery/Gallery';
import Blog from './Blog/Blog_Page/Blog';
import Baglamukhi from './Blog/Blog_Page/Baglamukhi';
import AstroBlog from './Blog/Blog_Page/AstroBlog';
import DurgaPooja from './Blog/Blog_Page/DurgaPooja';
function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        
        <Route path="/select-location" element={<SelectLocation />} />
        <Route path="/kundali-data" element={<KundaliData />} />
        <Route path="/matching-data" element={<MatchingData />} />
        <Route path="/today-panchang" element={<TodayPanchang />} />
        <Route path="/panchang-details" element={<PanchangDetails />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/contact_us" element={<Contact />} />
        {/* <Route path="/consult" element={<Consult />} /> */}
        <Route path="/blog" element={<Blog/>} />
        {/* <Route path="/gallery" element={<Gallery/>} /> */}
        <Route path="/baglamukhi" element={<Baglamukhi/>} />
        <Route path="/astro_blog" element={<AstroBlog/>} />
        <Route path="/durga_pooja" element={<DurgaPooja/>} />

        <Route exact path="/gloumSpecial" element={<GloumSpecial />} />
        <Route exact path="/family_astrology" element={<FamilyAstrology />} />
        <Route exact path="/astroVed_membership" element={<AstrovedMembership />} />
        <Route exact path="/business_astrology" element={<BusinessAstrology />} />
        <Route exact path="/birthday_special_ritual" element={<BirthdaySpecial />} />

        <Route exact path="/monthly-special-events" element={<Monthly_SP_Event />} />
        <Route exact path="/instant-poojas-homas" element={<Instant_Pooja />} />
        <Route exact path="/wealth-prosperity" element={<Remedies />} />
        <Route exact path="/yearlong-programs" element={<Yearlong />} />
        <Route exact path="/monthly-homa-donation" element={<Monthly_Homa />} />
        <Route exact path="/special-birthday-packages" element={<Special_Birthday/>} />
        <Route exact path="/nadi-astrology" element={<Nadi_astrology/>} />
        <Route exact path="/loyalty-program" element={<Astroved_Loyalty />} />
        <Route  exact path="/astro-month-sale" element={<Contact />} />
      </Routes>

      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <PanchangDetail/> */}
    </>
  );
}

export default App;
