import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { useNavigate } from "react-router-dom";
import "../css/homepage.css";
import useCategories from "../hooks/useCategories";
import { useEffect, useState } from "react";
import type { Category, User } from "../types/types";
import { Bar } from 'react-chartjs-2';

//https://www.chartjs.org/docs/latest/getting-started/
//https://react-chartjs-2.js.org/components/bar
//https://react-chartjs-2.js.org/examples/vertical-bar-chart/

function history() {
    const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User>();
  const categories = useCategories(currentUser?.id);

  useEffect(() => {
    const stringedUser = localStorage.getItem("user");
    if (stringedUser) {
      const parseUser: User = JSON.parse(stringedUser);
      setCurrentUser(parseUser);
    }
  }, []);

  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Timetracking History',
    },
  },
};

const labels = (categories.map((category: Category) => (category.categoryName)))

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: categories.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return (
    <main>
      <h1>Tracking history</h1>
      <section>
        <button className="mainButton" onClick={() => navigate(`/userdashboard`)}>
          Back to dashboard
        </button>
      </section>
      <div>
        <Bar/>
      </div>
    </main>
  );
}

export default history;
