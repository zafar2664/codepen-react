import { combineReducers } from "redux"
import userAuthReducer from "./userAuthReducer"
//import { Projects } from "../../container";
import projectReducer from "./projectReducer";


const myReducer = combineReducers({
    user: userAuthReducer,
    Projects: projectReducer
})

export default myReducer;