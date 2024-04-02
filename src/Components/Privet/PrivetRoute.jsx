
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    
    const {user,loading} =useContext(AuthContext)
    if(loading){
     return   (
     <span className="loading loading-dots loading-lg"></span>
        
        )

    }else{
        console.log("ffffffff")
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/login'></Navigate>
    )
};
PrivetRoute.propTypes = {
    children : PropTypes.node

}

export default PrivetRoute;