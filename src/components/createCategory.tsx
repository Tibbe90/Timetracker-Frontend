import { useEffect, useState } from "react";
import type { NewCategory, User } from "../types/types";
import { useNavigate } from "react-router-dom";
import { url } from "../data.tsx";

function createCategory() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const [newCategory, setnewCategory] = useState<NewCategory>({
    userId: "",
    categoryName: "",
  });

  const handleNewCategory = () => {
    setnewCategory({
      userId,
      categoryName,
    });
  };

  useEffect(() => {
    const stringedUser = localStorage.getItem("user");
    if (stringedUser) {
      const parseUser: User = JSON.parse(stringedUser);
      setUserId(parseUser.id);
    }
  }, []);

  const saveCategory = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(`${url}api/${userId}/category`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newCategory,
      }),
    });
    if (response.ok) {
      alert(`Category ${newCategory.categoryName} will appear next time you navigate`)
      navigate("/userdashboard");
      return;
    } else {
      console.log(await response.text());
    }
  };

  return (
    <main>
      <section className="dashboard">
        <h4>Add another category</h4>
        <form onSubmit={saveCategory}>
          <input
            type="text"
            required
            placeholder="new category name"
            name="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <button type="submit" onClick={handleNewCategory}>
            Add category
          </button>
        </form>
      </section>
    </main>
  );
}

export default createCategory;
