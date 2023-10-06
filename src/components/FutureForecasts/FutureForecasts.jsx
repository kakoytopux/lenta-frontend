import { useOutletContext } from "react-router-dom";
import Chart from "../Chart/Chart";
import ChartBox from "../ChartBox/ChartBox";
import './FutureForecasts.scss';

export default function FutureForecasts() {
  const [product, complex] = useOutletContext();

  return (
    <section className="future-forecasts">
      {
        product.map((item, index) =>
          <ChartBox
          product={item}
          complex={complex}
          key={index}
          element={<Chart />} />
        )
      }
    </section>
  );
}
