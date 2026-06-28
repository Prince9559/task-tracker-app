import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App()
{
return(

<div>
<Home/>
<ToastContainer position="top-right" autoClose={3000}theme="colored"/>

</div>
)}

export default App;