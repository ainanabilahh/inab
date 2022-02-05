<template>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="hello" ref="chartdiv"></div>
            </div>
        </div>
    </div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import useDashboard from '../composables/dashboard'

export default {
    mounted() {
         const {
            dashboard,
            getDashboard
        } = useDashboard()

        getDashboard()

        let root = am5.Root.new(this.$refs.chartdiv);

        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: false,
                layout: root.verticalLayout
            })
        );

        // Define data
        setTimeout(() => {
            let data = dashboard.value

            // Create Y-axis
            let yAxis = chart.yAxes.push(
                am5xy.ValueAxis.new(root, {
                    min: 0,
                    renderer: am5xy.AxisRendererY.new(root, {}),
                })
            );

            // Create X-Axis
            let xAxis = chart.xAxes.push(
                am5xy.CategoryAxis.new(root, {
                    renderer: am5xy.AxisRendererX.new(root, {}),
                    categoryField: "month"
                })
            );
            xAxis.data.setAll(data);

            // Create series
            let series = chart.series.push(
                am5xy.ColumnSeries.new(root, {
                    name: "Series",
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: "value",
                    categoryXField: "month",
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueY}"
                    })
                })
            );

              series.columns.template.setAll({
                  cornerRadiusTL: 5,
                  cornerRadiusTR: 5
              });

              series.columns.template.adapters.add("fill", (fill, target) => {
                  return chart.get("colors").getIndex(series.columns.indexOf(target));
              });

              series.columns.template.adapters.add("stroke", (stroke, target) => {
                  return chart.get("colors").getIndex(series.columns.indexOf(target));
              });

            series.data.setAll(data);

            // let series2 = chart.series.push(
            //     am5xy.ColumnSeries.new(root, {
            //         name: "Series",
            //         xAxis: xAxis,
            //         yAxis: yAxis,
            //         valueYField: "value2",
            //         categoryXField: "month"
            //     })
            // );
            // series2.data.setAll(data);

            // Add legend
            let legend = chart.children.push(am5.Legend.new(root, {}));
            legend.data.setAll(chart.series.values);

            // Add cursor
            chart.set("cursor", am5xy.XYCursor.new(root, {}));

            this.root = root;
        }, 2000);

        return [
            dashboard
        ]
    },

    beforeDestroy() {
        if (this.root) {
            this.root.dispose();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    width: 100%;
    height: 500px;
}
</style>
