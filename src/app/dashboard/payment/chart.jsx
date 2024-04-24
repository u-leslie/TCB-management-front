"use client"
import React from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement , Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend,LineElement);

const Graph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "April", "May","June","July","Aug","Sept","Oct","Nov","Dec"],
    datasets: [
      {
        label: 'Paid',
        data: [100, 150, 200, 250, 350,400,450,50,100,209,300,100],
        borderColor: "#5B7C99",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#5B7C99",
        pointBorderColor: "#5B7C99",
        pointBorderWidth: 2,
      },
      {
        label: 'Unpaid',
        data: [60, 100, 200, 150, 350,300,150,50,10,29,300,100],
        borderColor: "#846C5B",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#846C5B",
        pointBorderColor: "#846C5B",
        pointBorderWidth: 2,
      }
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    height: 700,
  };

  return (
    <div className="grid-cols-3 w-11/12 h-[500px] p-10">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
