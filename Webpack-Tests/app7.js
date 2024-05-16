import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

const data = {
    labels: [
        "Age 1",
        "Age 2",
        "Age 3",
        "Age 4",
        "Age 5",
        "Age 6",
        "Age 7",
        "Age 8",
        "Age 9",
        "Age 10",
        "Age 11",
        "Age 12",
        "Age 13",
        "Age 14",
        "Age 15",
        "Age 16",
        "Age 17",
        "Age 18",
        "Age 19",
        "Age 20",
        "Age 21",
    ],
    datasets: [
        {
            label: "WOMEN",
            stack: "Stack 0",
            backgroundColor: "#CA6DFF4D",
            data: [
                3.6, 4, 4.6, 6, 6.6, 7.1, 7.4, 7.4, 6.7, 7.2, 7.5, 7.4, 6.8,
                5.3, 4.8, 3.3, 2.3, 1.5, 0.6, 0.1, 0.001,
            ],
            borderRadius: 10,
            // borderSkipped: false,
            borderColor: "#CA6DFF",
            borderWidth: 2,
        },
        {
            label: "MEN",
            stack: "Stack 0",
            backgroundColor: "#FF5C5F4D",
            data: [
                -3.7, -4.1, -5.1, -6.7, -7.5, -7.4, -8, -7.1, -5.9, -6.3, -7.6,
                -7.6, -6.4, -5.4, -4.1, -3, -2.1, -1.3, -0.6, -0.1, -0.001,
            ],
            borderRadius: 10,
            // borderSkipped: false,
            borderColor: "#FF5C5F",
            borderWidth: 2,
        },
    ],
};

document.addEventListener("DOMContentLoaded", function () {
    var ctx = (
        document.getElementById("myChart")).getContext("2d");

    new Chart(ctx, {
        options: {
            indexAxis: "y",
            plugins: {
                datalabels: {
                    display: true,
                    anchor: (context) => {
                        const value =
                            context.dataset.data[context.dataIndex];
                        return value < 0 ? "start" : "end";
                    },
                    align: (context) => {
                        const value =
                            context.dataset.data[context.dataIndex];
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
                            return `${
                                c.dataset.label
                            }: ${positiveOnly.toString()}`;
                        },
                    },
                },
                legend: {
                    display: true,
                    position: "top",
                    labels: {
                        color: "#00323F",
                    },
                },
                subtitle: {
                    display: true,
                    text: "Age range",
                    font: {
                        size: 16,
                        family: "sans-serif",
                        weight: "bold",
                        lineHeight: 1.2,
                    },
                    padding: {
                        bottom: 10,
                    },
                    position: "left",
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
                            weight: "normal",
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
                            weight: "normal",
                            lineHeight: 1.2,
                        },
                        color: "#00323F",
                        stepSize: 1,
                    },
                },
            },
        },

        type: "bar",
        data: data,
        plugins: [ChartDataLabels],
    });
});
