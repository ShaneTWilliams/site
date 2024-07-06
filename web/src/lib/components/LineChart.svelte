<script>
    import { Line } from 'svelte-chartjs';

    import {
        Chart as ChartJS,
        Title as ChartTitle,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
    } from 'chart.js';

    ChartJS.defaults.font.family = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    ChartJS.register(
        ChartTitle,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
    );

    import { COLORS } from "$lib/style.js"
    import { isSize } from "$lib/utils.js"
    import { browser } from '$app/environment';

    export let data;

    export function getColor(color) {
        const COMPLIMENTS = {
            "sol-dark3": "sol-light3",
            "sol-dark2": "sol-light2",
            "sol-dark1": "sol-light1",
            "sol-dark0": "sol-light0",

            "sol-light0": "sol-dark0",
            "sol-light1": "sol-dark1",
            "sol-light2": "sol-dark2",
            "sol-light3": "sol-dark3",
        }
        return COLORS[darkMode && (color in COMPLIMENTS) ? COMPLIMENTS[color] : color];
    }

    $: darkMode = browser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    $: DEAFULT_DATA = {
        lineTension: 0.01,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: getColor("sol-dark2"),
        pointBackgroundColor: getColor("sol-light2"),
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: getColor("sol-dark2"),
        pointHoverBorderColor: getColor("sol-light2"),
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
    }

    let innerWidth;

    $: options = {
        responsive: true,
        scales: {
            x: {
                border: {
                    display: false
                },
                ticks: {
                    display: true,
                    autoSkip: isSize("md", innerWidth),
                    color: getColor("sol-dark3")
                },
                grid: {
                    color: getColor("sol-light2")
                }
            },
            y: {
                grid: {
                    color: getColor("sol-light2")
                },
                ticks: {
                    color: getColor("sol-dark3")
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: getColor("sol-dark3")
                }
            },
            tooltip: {
                displayColors: false,
                backgroundColor: getColor("sol-dark3") + "d0",
                titleColor: getColor("sol-light3"),
                bodyColor: getColor("sol-light3"),
            }
        }
    };

    $: finalData = {
        labels: data.yLabels,
        datasets: data.lines.map(
            (fields) => {
                return {
                    label: fields.label,
                    data: fields.data,
                    backgroundColor: getColor([fields.color]) + "40",
                    borderColor: getColor([fields.color]),
                    ...DEAFULT_DATA
                }
            }
        )
    }
</script>

<svelte:window bind:innerWidth />

{#key options}
<Line data={finalData} {options} />
{/key}
