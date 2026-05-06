import { useEffect, useState } from "react";
import CategorySelect from "../components/categorySelect";
import CreateCategory from "../components/createCategory";
import TimerList from "../components/timerList";
import type { User, Category } from "../types/types";
import useCategories from "../hooks/useCategories";
import Stopwatch from "../components/Stopwatch";

function UserDashboard() {
  const [currentUser, setCurrentUser] = useState<User>();
  const [currentCategory, setCurrentCategory] = useState<string>("")
  const [currentTimer, setCurrentTimer] = useState<string>("")
  const [currentTime, setCurrentTime] = useState<number>(0)
  const categories = useCategories(currentUser?.id);
  
//   useEffect(() => {
//     console.log(currentCategory),
//     []
//   });
  useEffect(() => {

  })
  useEffect(() => {
      const stringedUser = localStorage.getItem("user");
      if (stringedUser) {
          const parseUser: User = JSON.parse(stringedUser);
          setCurrentUser(parseUser);
        }
    },[]);

  return (
    <main>
      <h1>TajmTrackR</h1>
      <div>
        <div>
          <CategorySelect categories={categories} setNewCategory={setCurrentCategory} />
        </div>
        <div>
            <TimerList categoryId={currentCategory}/>
            <Stopwatch setCurrentTime={setCurrentTime} currentUserId={currentUser?.id ?? null} currentCategoryId={currentCategory}/>
        </div>
        <div>
          <CreateCategory />
        </div>
      </div>
    </main>
  );
}

export default UserDashboard;
