  import React from 'react';
  import { Box } from '@chakra-ui/react';
  import { Route, Routes } from 'react-router-dom';
  import NavBar from './components/NavBar/NavBar';

  // Importa los componentes diferidos
  import AboutMe from './components/AboutMe/AboutMe';
  import Technologies from './components/Technologies/Techonologies';
  import Portfolio from './components/Portfolio/Portfolio';
  import ContactMe from './components/ContactMe/ContactMe';
  import Init from './components/Init/Init';

  function App() {
    return (
      <Box bg='black' h='100vh'>
        <NavBar />
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/init" element={<Init />} />
        </Routes>
      </Box>
    );
  }

  export default App;
