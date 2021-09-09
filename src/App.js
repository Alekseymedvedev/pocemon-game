import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout ';
import bgImg from './images/bg2.jpg';
import bgImg2 from './images/bg3.jpg';

function App() {
  return (
    <div className="App">
        <Header title="This is title" descr="This is Description!"/>
        <Layout title="This is title" descr="This is Description!" urlBg ={bgImg}/>
        <Layout title="This is title" descr="This is Description!" colorBg/>
        <Layout title="This is title" descr="This is Description!" urlBg ={bgImg2}/>
        <Footer />
    </div>
  );
}

export default App;
