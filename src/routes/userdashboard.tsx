import { useEffect, useState } from "react";
import CategorySelect from "../components/categorySelect";
import CreateCategory from "../components/createCategory";
import type { User } from "../types/types";
import useCategories from "../hooks/useCategories";
import Stopwatch from "../components/Stopwatch";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User>();
  const [currentCategory, setCurrentCategory] = useState<string>("")
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
            <Stopwatch currentUserId={currentUser?.id ?? null} currentCategoryId={currentCategory}/>
        </div>
        <div>
          <CreateCategory />
        </div>
        <div>
        <button className="button" onClick={() => navigate("/history")}>View tracking history</button>
        </div>
      </div>
    </main>
  );
}

export default UserDashboard;
