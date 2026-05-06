import useCategory from "../hooks/useCategory";

interface TimerProps {
  categoryId: string
}

function TimerList({categoryId}: TimerProps) {
 const category = useCategory(categoryId)
 console.log(category);
 
  return (
  <div>
    <table>
        <thead>
            <tr>
                <th>Elapsed Time</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
  </div>
  )
}

export default TimerList;
