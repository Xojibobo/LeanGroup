
import { Fragment } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import News from './components/news/News';
import HeaderSlider from './components/heading-slider/HeadingSlider';
import About from './components/about/About';
import Quality from './components/quality/Quality';
import Tabs from './components/tabs/Tabs';

function App() {


  return (
    <Fragment>
      <Header />
      <HeaderSlider />
      <About />
      <Quality />
      <Tabs />
      <News />

      <Footer />
    </Fragment>
  );
}

export default App;
