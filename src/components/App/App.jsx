import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import DemandForecast from '../DemandForecast/DemandForecast';
import FutureForecasts from '../FutureForecasts/FutureForecasts';
import QualityForecasts from '../QualityForecasts/QualityForecasts';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PastForecasts from '../PastForecasts/PastForecasts';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<ProtectedRoute element={DemandForecast} />}>
        <Route path='/demand-forecast' index element={<FutureForecasts />} />
        <Route path='/demand-forecast/past' element={<PastForecasts />} />
        <Route path='/demand-forecast/quality' element={<QualityForecasts />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
