import './App.scss';
import './Style/About.scss';
import './Style/Contacts.scss';
import './Style/Hero.scss';
import './Style/Nav-dropdown.scss';
import './Style/NavBar.scss';
import './Style/Projects.scss';
import NavBar from './Components/Navbar';
import Hero from './Components/Hero'
import Projects from './Components/Projects';
import About from './Components/About';
import Game from './Game/Game';

function App() {
  return (
<div className="main-container">
<NavBar/>
<Hero/>
<Projects/>
<About/>
<Game/>
</div>
);
}
export default App;
