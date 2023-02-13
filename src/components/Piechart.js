import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

export default function App({ rechartsData }) {
    // new data object
    const pieData = rechartsData.map(data => {
        return {
            name: data.entity,
            value: data.count,
        }
    })

    return (
        <div className="m-5 p-3 text-center d-flex justify-content-center flex-column">
            <h5 className="h5 lead">II. Entities frequency piechart example</h5>
            <PieChart width={1000} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={pieData}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#dd0e80"
                    label
                />
                <Pie
                    dataKey="value"
                    data={pieData}
                    cx={500}
                    cy={200}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#dd0e80"
                />
                <Tooltip />
            </PieChart>
        </div>
    );
}
