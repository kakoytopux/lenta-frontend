import { useOutletContext } from "react-router-dom";
import Chart from "../Chart/Chart";
import ChartBox from "../ChartBox/ChartBox";
import './FutureForecasts.scss';
import { useState } from "react";

export default function FutureForecasts() {
  const [product, complex] = useOutletContext();
  const [sumDemand, setSumDemand] = useState(0);

  return (
    <section className="future-forecasts">
      {
        product.map((item, index) =>
          <ChartBox
          time='Будущий'
          product={item}
          sumDemand={sumDemand}
          complex={complex}
          key={index}
          element={<Chart
            setSumDemand={setSumDemand}
            product={item}
            complex={complex} />} />
        )
      }
    </section>
  );
}
