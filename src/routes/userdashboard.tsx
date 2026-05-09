import { useEffect, useState } from "react";
import CategorySelect from "../components/CategorySelect";
import CreateCategory from "../components/createCategory";
import RenameCategory from "../components/RenameCategory";
import type { Category, User } from "../types/types";
import useCategories from "../hooks/useCategories";
import Stopwatch from "../components/Stopwatch";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User>();
  const [currentCategory, setCurrentCategory] = useState<Category>()
  const categories = useCategories(currentUser?.id);
   
  useEffect(() => {
      const stringedUser = localStorage.getItem("user");
      if (stringedUser) {
          const parseUser: User = JSON.parse(stringedUser);
          setCurrentUser(parseUser);
        }
    },[]);

  return (
    <main>
      <h1>Welcome back, {currentUser?.username}!</h1>
      <h1>TajmTrackR</h1>
      <div>
        <div>
          <CategorySelect categories={categories} setNewCategory={setCurrentCategory} />
        </div>
        <div>
            <Stopwatch currentUserId={currentUser?.id ?? null} currentCategoryId={currentCategory?.id ?? null}/>
        </div>
        <div>
          <CreateCategory />
        </div> 
        <div>
        <RenameCategory categoryId={currentCategory?.id ?? ""} />
        </div>
        <div>
        <button className="button" onClick={() => navigate("/history")}>View tracking history</button>
        <button className="button" onClick={() => navigate("/timerList")}>View list of timers</button>
        </div>
      </div>
      <div>
        <button className="button" onClick={() => navigate("/")}>Back to home</button></div>
        <button className="button" onClick={() => navigate("/admin")}>I'm admin</button>
    </main>
  );
}

export default UserDashboard;
