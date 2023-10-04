import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import DemandForecast from '../DemandForecast/DemandForecast';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/demand-forecast' element={<DemandForecast />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
