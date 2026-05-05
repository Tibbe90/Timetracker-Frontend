import CategorySelect from "../components/categorySelect";
import CreateCategory from "../components/createCategory";

function userdashboard(){
    console.log();
    
    return(
        <main>
        <h1>TajmTrackR</h1>
        <div>
            <div>
            <CategorySelect/>
            </div>
            <div>
                
            </div>
            <div>
            <CreateCategory/>
                
            </div>
        </div>
        </main>

    )
}

export default userdashboard;