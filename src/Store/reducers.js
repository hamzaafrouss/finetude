import { combineReducers } from "redux";
import FormationsReducer from "./Formations/reducer";
import CentersReducer from "./Centers/reducer";
import ReservationsReducer from "./Reservation/reducer";

const appReducer = combineReducers({
    FormationsReducer,
    CentersReducer,
    ReservationsReducer
    
})



export default appReducer