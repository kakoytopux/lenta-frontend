import { Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import './App.scss';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
