import React, { useState } from "react";
import "./userOptions.scss";
import {useNavigate} from "react-router-dom"
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import {useAlert} from "react-alert";
import {logout} from "../../../actions/userAction";
import {useDispatch,useSelector} from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const UserOptions = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const {cartItems} = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  const alert = useAlert();
  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <ShoppingCartIcon style={{color: cartItems.length > 0 ? "tomato" : "unset"}} />, name: `Cart(${cartItems.length})`, func: cart },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];
  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  function dashboard() {navigate("/admin/dashboard")};
  function orders() {navigate("/orders")};
  function account() {navigate("/account")};
  function cart() {navigate("/cart")};
  function logoutUser(){
    dispatch(logout());
    navigate("/")
    alert.success("User logout Successfully");
  };
  
  return (
    <>
    <Backdrop 
        open={open}
        style={{zIndex:"7"}}
    />
      <SpeedDial
      style={{zIndex:"7"}}
      className="speedDial"
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "Profile.png"}
            alt="PROFILE"
          />
        }
      >{options.map((item,index)=>(
       <SpeedDialAction key={index} icon={item.icon} tooltipOpen={window.innerWidth <= 600 ? true : false} tooltipTitle={item.name} onClick={item.func}/>
      ))}
      </SpeedDial>
    </>
  );
};

export default UserOptions;
