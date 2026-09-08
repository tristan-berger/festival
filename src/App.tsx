
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Menu from './skeleton/menu'
import PageHome from './pages/home';
import PageProgramme from './pages/programme';
import PageContact from './pages/contact';

function Home() {
  return <PageHome/>;
}

function Programme() {
  return <PageProgramme/>;
}

function Contact() {
  return <PageContact/>;
}


function App() { return (

    <div id='skeleton'>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>

)}

export default App
