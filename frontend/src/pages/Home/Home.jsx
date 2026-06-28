import {useEffect,useState} from "react";

import API from "../../services/api";

import TaskForm from "../../components/TaskForm/TaskForm";

import TaskList from "../../components/TaskList/TaskList";

import "./Home.css";



function Home(){


const [tasks,setTasks] = useState([]);

const [selectedTask,setSelectedTask] = useState(null);





const getTasks = async()=>{


try{


const res = await API.get("/tasks");


setTasks(res.data);



}

catch(error){


console.log(
error.response?.data || error.message
);


}



};





useEffect(()=>{


getTasks();


},[]);







return(


<div className="home">



<h1>
Task Tracker
</h1>




<TaskForm

getTasks={getTasks}

selectedTask={selectedTask}

setSelectedTask={setSelectedTask}

/>





<TaskList

tasks={tasks}

getTasks={getTasks}

editTask={setSelectedTask}

/>



</div>



)


}



export default Home;