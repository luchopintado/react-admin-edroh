const getChartTheme = (colors) => ({
    axis: {
        domain: {
            line: {
                stroke: colors.grey[100]
            }
        },
        legend: {
            text: {
                fill: colors.grey[100],
            }
        },
        ticks: {
            line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
            },
            text: {
                fill: colors.grey[100],
            }
        },
    },
    legends: {
        text: {
            fill: colors.grey[100]
        }
    },
    tooltip: {
        container: {
            color: colors.primary[500]
        }
    }
});

export default getChartTheme;
