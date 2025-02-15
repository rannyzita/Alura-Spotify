import './App.css';
import Header from './Header/Header.js';
import Sidebar from './Sidebar/Sidebar.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js'
function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Footer></Footer>
      <Main></Main>
    </div>
  );
}

export default App;
