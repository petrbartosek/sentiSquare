import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";



  const Barchart = ({rechartsData}) => {

    return (
      <>
        <h5 className="h5 lead">I. Entities frequency barchart example</h5>
        <BarChart
          width={1000}
          height={300}
          data={rechartsData}
          margin={{
            top: 30,
            right: 20,
            left: 20,
            bottom: 20
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="entity" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#dd0e80" />
        </BarChart>
      </>
    );
  }

  export default Barchart;