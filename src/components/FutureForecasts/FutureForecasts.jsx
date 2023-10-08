import { useOutletContext } from "react-router-dom";
import Chart from "../Chart/Chart";
import ChartBox from "../ChartBox/ChartBox";
import './FutureForecasts.scss';
import { mainApi } from "../../utils/MainApi";

export default function FutureForecasts() {
  const [product, complex] = useOutletContext();

  mainApi.forecastData(localStorage.getItem('token'), complex, '14.10.2023')
  .then(res => console.log(res))
  .catch(err => console.log(err))
  
  return (
    <section className="future-forecasts">
      {
        product.map((item, index) =>
          <ChartBox
          time='Будущий'
          product={item}
          complex={complex}
          key={index}
          element={<Chart />} />
        )
      }
    </section>
  );
}
