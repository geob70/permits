import {
  ChartCard,
  CanvasContainer,
  ChartContainer,
  Legend,
  LegendItem,
  Box,
} from "./styles";
import { Chart, registerables } from "chart.js";
import { useRef, useEffect, FC, useState, useCallback } from "react";
import { IPermit } from "../../models/IPermit";

Chart.register(...registerables);

interface Props {
  chartData: IPermit[];
}

// const MyChart = ({ chartData }: Props) => {

const MyChart: FC<Props> = ({ chartData }) => {
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabel] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  // helper function to format chart data since you do this twice
  const formatData = useCallback(() => {
    return {
      labels: labels,
      datasets: [{ data: data, backgroundColor: colors }],
    };
  }, [data, labels, colors]);

  const createChartData = useCallback((_permits: IPermit[]) => {
    let permit_types: any = {};

    let _data: number[] = [];
    let _labels: string[] = [];
    let _colors: string[] = [
      "rgb(255, 99, 132)",
      "rgb(46, 78, 207)",
      "rgb(235, 136, 54)",
      "rgb(255, 205, 86)",
    ];

    _permits.forEach((item: IPermit) => {
      if (permit_types[item.permit_type]) {
        permit_types = {
          ...permit_types,
          [item.permit_type]: permit_types[item.permit_type] + 1,
        };
      } else {
        permit_types = {
          ...permit_types,
          [item.permit_type]: 1,
        };
      }
    });

    for (let key of Object.keys(permit_types)) {
      let value: number = permit_types[key];
      _data.push(value);
      _labels.push(key);
    }

    setData(_data);
    setLabel(_labels);
    setColors(_colors);
  }, []);

  // use a ref to store the chart instance since it it mutable
  const chartRef = useRef<Chart | null>(null);

  // callback creates the chart on the canvas element
  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current?.destroy();
      chartRef.current = new Chart(ctx, {
        type: "pie",
        data: formatData(),
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "bottom",
              labels: {
                color: "black",
              },
            },
          },
        },
      });
    }
  };

  // effect to update the chart when props are updated
  useEffect(() => {
    // must verify that the chart exists
    if (chartRef.current) {
      createChartData(chartData);
      chartRef.current.data = formatData();
      chartRef.current.update();
    }

    // cleanup function - I had to remove this as it was causing errors
    /*return () => {
      chartRef.current?.destroy();
    };*/
  }, [chartData]);
  return (
    <>
      <ChartCard>
        <ChartContainer>
          <CanvasContainer>
            <canvas ref={canvasCallback}></canvas>
          </CanvasContainer>
          <Legend>
            {labels.map((item: string, index: number) => (
              <LegendItem key={index}>
                <Box key={index} color={colors[index]} />
                <span>{item}</span>
              </LegendItem>
            ))}
          </Legend>
        </ChartContainer>
      </ChartCard>
    </>
  );
};

export default MyChart;
