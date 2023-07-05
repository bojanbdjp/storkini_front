import './App.css';
import { useState } from 'react';

import WelcomePage from './components/Welcome/WelcomePage';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Outline from './components/Outline/Outline';
import MainCategory from './pages/Categories/MainCategory';
import Home from './pages/Home/Home';
import Objectasa from './pages/Object/Object';
import { StyledEngineProvider } from '@mui/material/styles';
import AdminMain from './pages/Admin/AdminMain/AdminMain';
import AdminAddObj from './pages/Admin/AdminAddObj/AdminAddObj';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import AdminDeleteObj from './pages/Admin/AdminDeleteObj/AdminDeleteObj';
import SubCategories from './pages/Categories/SubCategories/SubCategories';

function App() {

  // da li je welcome stranica zavrsila 
  const [stateWelcomeLoaded, setStateWelcomeLoaded] = useState(false);

  const showMainPage = () =>{
    setStateWelcomeLoaded(!stateWelcomeLoaded)
  }

  let welcomeLoaded = localStorage.getItem('welcomeLoaded')
  let welcome =
      <StyledEngineProvider injectFirst>
        <WelcomePage showMainPage={showMainPage}/>
      </StyledEngineProvider>
      
  return (
    (localStorage.getItem('welcomeLoaded') == null && !stateWelcomeLoaded) ? welcome : (
      // "homepage": "https://bojanbdjp.github.io/storkini_front",
      // basename={`${process.env.PUBLIC_URL}/`}
      <BrowserRouter >
        <Routes>
          <Route  path="/" element={<Outline />} >
              <Route index  element={<Home />} />
              <Route path="/catg/:catgId" element={<MainCategory />} />
              <Route path="/catg/sub/:subId" element={<SubCategories />} />
              <Route path="/obj/:objName" element={<Objectasa />} />
              <Route path="admin" element={<AdminMain />}/>
              <Route path="admin/newObj" element={<AdminAddObj />} />
              <Route path="admin/deleteObjs" element={<AdminDeleteObj />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
    </BrowserRouter>
    )

  );
}

export default App;
