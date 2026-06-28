import API from "../../services/api";
import { toast } from "react-toastify";
import "./TaskList.css";

function TaskList({tasks,getTasks,editTask}) {
const deleteTask = async(id)=>{
try{
await API.delete(`/tasks/${id}`);
toast.success("Task Deleted Successfully 🗑️");
getTasks();
}
catch(error){
console.log(error.response?.data || error.message);
toast.error("Delete failed ❌");
}
};

return(
<div className="list">
<h2>Tasks</h2>
{
tasks.map((task)=>(
<div className="task-card" key={task._id}>
<h3>{task.title}</h3>
<p>{task.description}</p>
<p>Status : {task.status}</p>

<button onClick={()=>editTask(task)}>Edit</button>

<button onClick={()=>deleteTask(task._id)}> Delete</button>
</div>
))}

</div>
)}
export default TaskList;