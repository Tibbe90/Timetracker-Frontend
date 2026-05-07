import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
 // Colors,
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
import { useEffect, useState } from "react";
import type { CategoryHistory, User } from "../types/types";
import { Bar } from 'react-chartjs-2';
import useCategoryHistory from '../hooks/useCategoryHistory';

//https://www.chartjs.org/docs/latest/getting-started/
//https://react-chartjs-2.js.org/components/bar
//https://react-chartjs-2.js.org/examples/vertical-bar-chart/

function history() {
    const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User>();
  const categories = useCategoryHistory(currentUser?.id);

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

const labels = (categories.map((category: CategoryHistory) => (category.categoryName)))
const historyData = (categories.map((category : CategoryHistory) => Math.round(category.totalDuration/ 60000)))
const detailedInfo: string[] = (categories.map((category : CategoryHistory) => {
  const spentTime = category.totalDuration
  const totalHours = Math.floor(spentTime / 3600000)
  const totalMinutes = Math.floor((spentTime % 3600000) / 60000)
  const totalSeconds = Math.floor((spentTime % 60000) / 1000)
  return `You spent: ${totalHours} hours, ${totalMinutes} minutes and ${totalSeconds} seconds on ${category.categoryName}`
}))

const data = {
  labels,
  datasets: [
    {
      label: 'Time spent in minutes',
      data: historyData,
      backgroundColor: 'rgba(249, 251, 252, 0.8)',
    }
  ],
};

  return (
    <main>
      <h1>Tracking history</h1>
      <section >
        <button className='button' onClick={() => navigate(`/userdashboard`)}>
          Back to dashboard
        </button>
      </section>
      <div>
        <Bar data={data} options={options}/>
      </div>
      {detailedInfo.map((info: string) => (
            <span>
              {info}<br /></span>))}
    </main>
  );
}

export default history;
