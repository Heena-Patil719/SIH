import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";  // ✅ import plugin
import "./detailsPage.css";

// Register chart.js components + datalabels
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const details = {
    id: "NAM002.015",
    title: "Pitta Vriddhi",
    definition:
      "Pitta Vriddhi (पित्त वृद्धि) literally means “increase or aggravation of Pitta dosha” in Ayurvedic terminology. It refers to when the Pitta dosha becomes excessive in the body, resulting in its characteristic symptoms (heat, burning, yellowish discoloration etc.). (Wisdom Library)",
    namaste: "NAM002.015",
    icd: "ICD-11 TM2: TM-AA02.1",
    biomedicine: "K30",
    level: "Ayurvedic / TM condition / dosha vaishamya state",
    conditions: [
      "Hyperthyroidism",
      "Amlapitta (Hyperacidity/Gastritis)",
      "Kamala (Jaundice/Hepatitis)",
      "Skin conditions",
      "Abnormal menstrual bleeding (Asrigdara)",
    ],
    cases: 30,
  };

  const data = {
    labels: ["Pitta Vriddhi Cases", "Other Cases"],
    datasets: [
      {
        data: [details.cases, 100 - details.cases],
        backgroundColor: ["#f39c12", "#3498db"],
        hoverOffset: 10,
      },
    ],
  };

  // ✅ Chart options with % labels
  const options = {
    plugins: {
      datalabels: {
        color: "#fff",
        font: { weight: "bold", size: 12 },
        formatter: (value, context) => {
          let sum = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          let percentage = ((value / sum) * 100).toFixed(1) + "%";
          return percentage;
        },
      },
    },
  };

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <h2>{details.title}</h2>
      <p className="definition">{details.definition}</p>

      <div className="codes">
        <p><strong>NAMASTE Code:</strong> {details.namaste}</p>
        <p><strong>ICD-11 Code:</strong> {details.icd}</p>
        <p><strong>Biomedicine Mapping:</strong> {details.biomedicine}</p>
        <p><strong>Level:</strong> {details.level}</p>
      </div>

      <div className="conditions">
        <h4>Health conditions which cause it:</h4>
        <ul>
          {details.conditions.map((cond, idx) => (
            <li key={idx}>{cond}</li>
          ))}
        </ul>
      </div>

      <div className="chart-section">
        <h4>Case Distribution: </h4>
        <div className="small-chart">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
