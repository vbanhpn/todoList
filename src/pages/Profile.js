import { HOME, LOGIN } from "./pageType"; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Profile({  handleChangePageType }) {
  return (
    <div>
      <div> 
      <Link to ="/"> Logout </Link>
      <Link to ="/home"> Home </Link>
        {/* <button onClick={() => handleChangePageType (LOGIN) }> Logout</button>
        <button onClick={() => handleChangePageType (HOME) }> Home </button> */}
      </div>
    </div>
  );
}
