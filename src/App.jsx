import logo from './logo.svg';
import 'animate.css';
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"
import './assets/styles/all.scss';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import NotFound from './pages/NotFound';

import { Provider } from 'react-redux';
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Provider>
  );
}