import { useState } from "react";
import CategoryNameUpdate from "../api/CategoryNameUpdate";

interface RenameCategoryProps {
    categoryId: string
}

function RenameCategory(props: RenameCategoryProps) {
const [newCategoryName, setNewCategoryName] = useState<string>("")

  const saveCategoryName = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
     await CategoryNameUpdate(props.categoryId, newCategoryName)
  };


    return (
        <main>
      <section>
      <h4>Rename current category</h4>
        <form onSubmit={saveCategoryName}>
          <input
            type="text"
            required
            placeholder="new category name"
            name="newCategoryName"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            />
            <button className="button" type="submit">
            Update category
          </button>
            </form>
            </section>
            </main>
            )
        }

export default RenameCategory