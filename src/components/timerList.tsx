import useCategory from "../hooks/useCategory";

const url = 'http://localhost:8080/api/my-categories';

interface TimerProps {
  categoryId: string
}

function TimerList({categoryId}: TimerProps) {
const category = useCategory(categoryId)
console.log("category from timerlist: ", category);

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
