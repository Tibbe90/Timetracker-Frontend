import { useEffect, useState } from "react";
import useTimeTrackerList from "../hooks/useTimeTrackerList";
import type { Category, Timer, User } from "../types/types";
import useCategories from "../hooks/useCategories";
import { Dropdown } from "react-bootstrap";
import UpdateTimerCategory from "../api/UpdateTimerCategory";
import { useNavigate } from "react-router-dom";

function TimerList() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User>();
  const timeTrackers: Timer[] = useTimeTrackerList(currentUser?.id);
  const myCategories = useCategories(currentUser?.id);

  useEffect(() => {
    const stringedUser = localStorage.getItem("user");
    if (stringedUser) {
      const parseUser: User = JSON.parse(stringedUser);
      setCurrentUser(parseUser);
    }
  }, []);

  const calculateTime = (duration: number) => {
    const totalHours = Math.floor(duration / 3600000);
    const totalMinutes = Math.floor((duration % 3600000) / 60000);
    const totalSeconds = Math.floor((duration % 60000) / 1000);
    return `${totalHours}:${totalMinutes}:${totalSeconds}`;
  };

  const getCategoryName = (categoryId: string) => {
    const category = myCategories.find(
      (category: Category) => category.id === categoryId,
    );
    return category?.categoryName;
  };

  const updateCategory = (eventKey: string | null, timerId: string) => {
    if (eventKey) {
      UpdateTimerCategory(timerId, eventKey);
    }
  };

  return (
    <div>
      <div>
        <button className="button" onClick={() => navigate("/userdashboard")}>
          Return to Dashboard
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <table style={{ margin: "0 auto"}}>
          <thead>
            <tr style={{borderBottom: "1px solid #020070"}}>
              <th style={{ width: "150px" }}>Date</th>
              <th style={{ width: "100px" }}>Category</th>
              <th style={{ width: "150px" }}>Hr:Min:Sec</th>
            </tr>
          </thead>
          <tbody>
            {timeTrackers.map((time) => (
              <tr style={{ borderRight: "1px solid #020070",  borderLeft: "1px solid #020070", borderBottom: "1px solid #020070"}} key={time.id}>
                <td style={{ borderRight: "1px solid #020070"}} >{new Date(time.creationDate).toDateString()}</td>
                <td style={{ borderRight: "1px solid #020070"}}>
                  <Dropdown
                    onSelect={(eventkey) => updateCategory(eventkey, time.id)}
                  >
                    <Dropdown.Toggle variant="outline-primary">
                      {getCategoryName(time.categoryId) ?? "Select category"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Change category?</Dropdown.Header>
                      {myCategories.map((category: Category) => (
                        <Dropdown.Item key={category.id} eventKey={category.id}>
                          {category.categoryName}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
                <td>{calculateTime(time.duration)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TimerList;
