export const data = [
    { year: '2018', sales: 1000, cost: 400, profit: 200 },
    { year: '2019', sales: 1170, cost: 460, profit: 250 },
    { year: '2020', sales: 260, cost: 1120, profit: 300 },
    { year: '2021', sales: 1030, cost: 540, profit: 350 },
]
export const options = {
    chart: {
      title: "회사 성과표",
      subtitle: "매출, 비용, 이익: 2018-2021년도",
    },
  };

// export const data2 = [
//   ["Year", "Sales", "cost", "Profit"],
//   ["2018", 1000, 400, 200],
//   ["2019", 1170, 460, 250],
//   ["2020", 260, 1120, 300],
//   ["2021", 1030, 540, 350],
// ]

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