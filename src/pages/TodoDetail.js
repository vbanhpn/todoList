import { HOME, LOGIN } from "./pageType"; 
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
export default function TodoDetail({  handleChangePageType }) { 
    let {slug} = useParams()
  return (
    <div>
      <div> 
     <h1 >TODO DETAIL: {slug} </h1>
      </div>
    </div>
  );
}