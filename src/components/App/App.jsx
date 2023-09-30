import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Login from '../Login/Login';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
