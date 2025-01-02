import './App.css';
import Navbar from'./components/navbar';
import Banner from './components/banner';
import Category from './components/categorybox';
import Productbox from './components/productbox';
import Specials from './components/specials';
import Footer from './components/footer';
import Adminlogin from './pages/adminlogin';


function App() {
  return (
    <div className="App">




      <Navbar/>

      <Banner headline="Special New Year Stock Online! Check before it runs out " ></Banner>

      <Category Categoryname ="Nvidia GPUs" ></Category>

      <Category Categoryname="Processors" ></Category>

      <Specials headline="Our Best Categories" ></Specials>

      <Category Categoryname="New Year Specials" ></Category>


      <Footer></Footer>




    </div>
  );
}

export default App;
