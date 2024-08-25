import { Navigate, Outlet,useNavigate } from "react-router-dom";

const Middleware=()=>{


    
    return(
       localStorage.getItem('authToken')?<Outlet/>:<Navigate to='/auth'/>
    )

}
export default Middleware