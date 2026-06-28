import { useState, useEffect } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";
import "./TaskForm.css";


function TaskForm({ getTasks, selectedTask, setSelectedTask }) {


const [task,setTask] = useState({

title:"",
description:"",
status:"Pending"

});



useEffect(()=>{

if(selectedTask){

setTask(selectedTask);

}

},[selectedTask]);





const handleChange=(e)=>{

setTask({

...task,

[e.target.name]:e.target.value

});

};





const submitHandler = async(e)=>{

e.preventDefault();


try{


if(!task.title){

toast.error("Title required");

return;

}





if(selectedTask){


await API.put(`/tasks/${selectedTask._id}`,task);


toast.success("Task Updated Successfully 🎉");


setSelectedTask(null);



}

else{


await API.post("/tasks",task);


toast.success("Task Added Successfully 🚀");


}




setTask({

title:"",
description:"",
status:"Pending"

});



getTasks();



}

catch(error){


console.log(error.response?.data || error.message);


toast.error("Something went wrong ❌");


}



};






return (

<div className="form-box">


<h2>

{selectedTask ? "Update Task":"Add Task"}

</h2>




<form onSubmit={submitHandler}>




<input

type="text"

name="title"

placeholder="Enter title"

value={task.title}

onChange={handleChange}

/>





<textarea

name="description"

placeholder="Enter description"

value={task.description}

onChange={handleChange}

/>





<select

name="status"

value={task.status}

onChange={handleChange}

>


<option value="Pending">

Pending

</option>


<option value="Completed">

Completed

</option>



</select>





<button type="submit">

{selectedTask ? "Update Task":"Save Task"}

</button>




</form>



</div>

)


}


export default TaskForm;