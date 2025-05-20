import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import service from "../../springboot backend/auth";
import {logout} from "../../store/authSlice";

function LogoutBtn(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logoutHandler = () =>{
        service.logout().then(() => dispatch(logout()));
        navigate("/login")
    }
    return (
        <button className="inline-block px-6 py-2 duration-200
        hover:bg-blue-100 rounded-full" onClick={logoutHandler}>Logout</button>
    );
}

export default LogoutBtn;