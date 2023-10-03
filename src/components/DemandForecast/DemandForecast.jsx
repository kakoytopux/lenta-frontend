import Filters from '../Filters/Filters';
import Header from '../Header/Header';
import './DemandForecast.scss';

export default function DemandForecast() {
  return (
    <>
      <Header />
      <main className='content'>
        <Filters />
      </main>
    </>
  );
}
