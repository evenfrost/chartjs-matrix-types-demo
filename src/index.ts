import { Chart } from 'chart.js';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';

Chart.register(MatrixController, MatrixElement);

import type { ChartData } from 'chart.js';

const chartData: ChartData<'matrix'> = {
  datasets: [{
    data: [{
      x: 'foo',
      y: 'bar',
      d: 'baz',
      v: 0,
    }],
  }],
};
