import logo from './logo.svg';
import './assets/styles/all.scss';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}