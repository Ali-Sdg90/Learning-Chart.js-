"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auto_1 = __importDefault(require("chart.js/auto"));
const chartjs_plugin_datalabels_1 = __importDefault(require("chartjs-plugin-datalabels"));
auto_1.default.register(chartjs_plugin_datalabels_1.default);
const womenData = [
    3.6, 4, 4.6, 6, 6.6, 7.1, 7.4, 7.4, 6.7, 7.2, 7.5, 7.4, 6.8, 5.3, 4.8, 3.3,
    2.3, 1.5, 0.6, 0.1, 0.001,
];
const menData = [
    3.7, 4.1, 5.1, 6.7, 7.5, 7.4, 8, 7.1, 5.9, 6.3, 7.6, 7.6, 6.4, 5.4, 4.1, 3,
    2.1, 1.3, 0.6, 0.1, 0.001,
];
auto_1.default.register(chartjs_plugin_datalabels_1.default);
var data = {
    labels: [],
    datasets: [
        {
            label: "WOMEN",
            stack: "Stack 0",
            backgroundColor: "#CA6DFF4D",
            data: [],
            borderRadius: 10,
            borderColor: "#CA6DFF",
            borderWidth: 2,
        },
        {
            label: "MEN",
            stack: "Stack 0",
            backgroundColor: "#FF5C5F4D",
            data: [],
            borderRadius: 10,
            borderColor: "#FF5C5F",
            borderWidth: 2,
        },
    ],
};
for (let age = 0; age <= 100; age += 5) {
    let label;
    if (age === 100) {
        label = "100 years and over";
    }
    else {
        label = age + " to " + (age + 4) + " years";
    }
    data.labels.unshift(label);
    console.log(data.labels);
    data.datasets[0].data.unshift(-womenData[age / 5]);
    data.datasets[1].data.unshift(menData[age / 5]);
}
var options = {
    indexAxis: "y",
    plugins: {
        datalabels: {
            display: true,
            anchor: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value < 0 ? "start" : "end";
            },
            align: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value < 0 ? "start" : "end";
            },
            padding: 4,
            color: "#647882",
            font: {
                family: "sans-serif",
                size: 14,
                style: "normal",
            },
            formatter: (value) => {
                return Math.abs(value).toFixed(2);
            },
        },
        tooltip: {
            callbacks: {
                label: (c) => {
                    const value = Number(c.raw);
                    const positiveOnly = value < 0 ? -value : value;
                    return `${c.dataset.label}: ${positiveOnly.toString()}`;
                },
            },
        },
        legend: {
            display: true,
            position: "top",
            color: "#00323F",
        },
        subtitle: {
            display: true,
            text: "Age range",
            padding: {
                bottom: 10,
            },
            rotation: 270,
            position: "left",
            font: {
                size: 16,
                family: "sans-serif",
                weight: "bold",
                lineHeight: 1.2,
            },
            color: "#00323F",
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: "Percentage of population",
                color: "#00323F",
                font: {
                    size: 16,
                    family: "sans-serif",
                    weight: "bold",
                    lineHeight: 1.2,
                },
                padding: 14,
            },
            ticks: {
                font: {
                    size: 14,
                    family: "sans-serif",
                    weight: "medium",
                    lineHeight: 1.2,
                },
                color: "#00323F",
                stepSize: 1,
                callback: (v) => (v < 0 ? -v : v),
            },
            min: -10,
            max: 10,
        },
        y: {
            ticks: {
                font: {
                    size: 14,
                    family: "sans-serif",
                    weight: "medium",
                    lineHeight: 1.2,
                },
                color: "#00323F",
                stepSize: 1,
            },
        },
    },
};
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("myChart").getContext("2d");
    new auto_1.default(ctx, {
        type: "bar",
        options: options,
        data: data,
    });
});
//# sourceMappingURL=app6.js.map