// Overview: component to render the pie chart using chart.js

import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const labels = ["BLOG POSTS", "TEMPLATES", "COMPONENTS", "CSS COMPONENTS"];

const PieChart = (props) => {

    const { postCount, templatesCount, componentsCount, cssComponentsCount } = props;

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Contributions",
                backgroundColor: ["rgb(255, 255, 0)", 'rgb(54, 162, 235)', 'rgb(0,0, 0,0.45)', "rgb(0,0, 0,0.45)"],
                borderColor: "rgb(255,255,255)",
                data: [postCount, templatesCount, componentsCount, cssComponentsCount],
                borderWidth: 2,
                hoverBackgroundColor: ["rgb(255, 255, 0,0.5)", 'rgb(54, 162, 235,0.5)', 'rgb(0,0, 0,0.95)',"rgb(0,0, 0,0.95)"]

            },
        ],
        options: {
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        render: 'label'
                    }
                }
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    fontColor: "red",
                    fontSize: 36,
                    title: {
                        fontColor: "black",
                        fontSize: 35,
                        fontStyle: "bold",
                    },
                    body: {
                        fontColor: "black",
                        fontSize: 36,
                    },
                },
            },
        },

    };
    return (
        <div className="p-4 max-w-[550px] ">
            <Pie className="font-white" data={data} />
        </div>
    );
};
export default PieChart;