"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auto_1 = __importDefault(require("chart.js/auto"));
const chartjs_plugin_datalabels_1 = __importDefault(require("chartjs-plugin-datalabels"));
auto_1.default.register(chartjs_plugin_datalabels_1.default);
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("myChart").getContext("2d");
    new auto_1.default(ctx, {
        type: "pie",
        data: {
            datasets: [
                {
                    data: [16, 34, 28, 10, 12],
                    backgroundColor: [
                        "#FF5C5F",
                        "#FF8436",
                        "#FFD45F",
                        "#8282CA",
                        "#CA6DFF",
                    ],
                    label: "Dataset 1",
                    borderColor: [
                        "#FFFFFF",
                        "#FFFFFF",
                        "#FFFFFF",
                        "#FFFFFF",
                        "#FFFFFF",
                    ],
                    borderWidth: 2,
                },
                {
                    data: [17, 34, 28, 10, 11],
                    backgroundColor: [
                        "#FF8D8F",
                        "#FFA972",
                        "#FFE18F",
                        "#A2A2CA",
                        "#DA99FF",
                    ],
                    label: "Dataset 2",
                    borderColor: [
                        "#FFFFFF",
                        "#FFFFFF",
                        "#FFFFFF",
                        "#FFFFFF",
                        "#FFFFFF",
                    ],
                    borderWidth: 2,
                },
            ],
            labels: [
                "Less than 15 minutes",
                "15 to 29 minutes",
                "30 to 44 minutes",
                "45 to 59 minutes",
                "60 minutes and over",
            ],
        },
        options: {
            plugins: {
                title: {
                    display: false,
                },
                legend: {
                    display: true,
                    position: "right",
                    labels: {
                        boxWidth: 10,
                        font: {
                            size: 10,
                        },
                        color: "#647882",
                    },
                },
                datalabels: {
                    display: true,
                    color: "#00323f",
                    font: {
                        size: 8,
                        weight: "bold",
                    },
                    formatter: function (value) {
                        return value + "%";
                    },
                },
            },
            cutout: "50%",
            circumference: 360,
        },
    });
});
//# sourceMappingURL=app2.js.map