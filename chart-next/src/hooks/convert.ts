import { data } from "components/chart/BarChart"

export const convert = () => { 
    let todata:any[] = []
    const keys = Object.keys(data[0])
    console.log('>>>>>todata:',keys)
    todata.push(keys)
    for (let i = 0; i < data.length; i++){
      const values = Object.values(data[i])
      console.log('>>>>>todata:', values)
      todata.push(values)
    }
    return todata
  }