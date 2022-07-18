import BarChart from "components/chart/BarChart";
import LineChart from "components/chart/LineChart";
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
            <h3> BarChart</h3>
            <BarChart />
            <h3>LineChart</h3>
            <LineChart />
        </div>
    )
}
export default Chart;