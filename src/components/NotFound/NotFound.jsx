import './NotFound.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className='content'>
      <section className='not-found'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Ничего не найдено</p>
        <button
        type='button'
        className='not-found__btn'
        onClick={() => navigate(-1)}>Вернуться назад</button>
      </section>
    </main>
  );
}
