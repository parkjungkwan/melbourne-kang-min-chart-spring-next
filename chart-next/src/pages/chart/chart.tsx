import BarChart from "components/chart/BarChart";
import { salesActions, salesRequest } from "modules/slice/chart/salesSlice";
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";

const Chart = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(salesActions.salesRequest())
    },[dispatch])

    return(
        <div>
            <h3> Chart Page</h3>
            <BarChart/>
        </div>
    )
}
export default Chart;