import BarChart from "components/BarChart";
import { salesActions, salesRequest } from "modules/slice/chart/salesSlice";
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";

const Chart = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
      alert('test1')
      dispatch(salesActions.salesRequest())
    },[])

    return(
        <div>
            <h3> Chart Page</h3>
            <BarChart/>
        </div>
    )
}
export default Chart;