import { useEffect, useState } from "react";
import type { Category, NewCategory, User } from "../types/types";
import { useNavigate } from "react-router-dom";
const url = 'http://localhost:8080/api/${userId}/category'

function createCategory() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState<string>("")
    const [categoryName, setCategoryName] = useState<string>("")
    const [newCategory, setnewCategory] = useState<NewCategory>({
        userId: "",
        categoryName: "",
    })

    const handleNewCategory = () => {
    setnewCategory({
        userId,
        categoryName
    });
  };
      
      useEffect(() => {
        const stringedUser = localStorage.getItem('user')
        if (stringedUser) {
          const parseUser: User = JSON.parse(stringedUser)
          setUserId(parseUser.id)
          console.log(parseUser.id);
          
        }
      }, [])
      

    const saveCategory = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `http://localhost:8080/api/${userId}/category`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newCategory,
        }),
      },
    )
      .then((response: Response) => response.json())
      .then(data => {
        console.log(data);
        navigate("/userdashboard")
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
    }

  return (
    <main>
      <section className="createCategory">
      <h4>Add another category</h4>
        <form onSubmit={saveCategory}>
          <input
            type="text"
            required
            placeholder="enter the name of your new category"
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
            )
}

export default createCategory;