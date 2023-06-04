// import { render } from "@testing-library/react";
import React from "react";
import data from '../Data.json';


const HistogramPlot = () => {

  // const datareturn = () => {
  //   var uniqueNames = new Set();
  //   for (let i = 0; i < data.length; i++) {
  //     if (!uniqueNames.has(data[i].Status)) {
  //       uniqueNames.add(data[i].Status);
  //     }

  //   }
  //   // return uniqueNames
  //   // for (const item in uniqueNames)
  //   //   console.log(item);

  // }

  const renderAttackList = data.map((data, i) => {
    // return (data.Status === "Entry" ? console.log(data.Name) : null)

    return (
      data.Status === "Candidate" ? (
        <div className="item" key={i}>
          <div className="content">
            <div className="header">Name : {data.Name}</div>
          </div>
        </div>
      ) : null
    )

  })

  return (
    <div className='ui celled list'>
      {/* {datareturn} */}
      {renderAttackList}
    </div>
  )

}

export default HistogramPlot;