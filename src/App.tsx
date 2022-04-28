import { AsyncDataUpdater } from "./features/asyncDataUpdater/asyncDataUpdater";
import "./App.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useAppSelector } from "./app/hooks";
import { selectCount } from "./features/asyncDataUpdater/asyncDataUpdaterSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

function App() {
  const dataset1Data = useAppSelector<number[]>(selectCount);
  console.log("dataset data", dataset1Data);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dataset1Data.map((val) => val.toString()),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => (Math.random() * 100).toFixed(0)),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="App">
      <Line options={options} data={data} />
      <br />
      <AsyncDataUpdater />
    </div>
  );
}

export default App;
