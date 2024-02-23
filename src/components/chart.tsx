/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import {
  Chart as ChartJS,
  Filler, // 1. Import Filler plugin
} from 'chart.js';
import { Triangle } from 'lucide-react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import cn from '@/lib/cn';

import Typography from '@/components/ui/typography';

ChartJS.register(
  Filler // 1. Register Filler plugin
);

// interface DataStructure {
//   labels: string[];
//   data: {
//     income: number[];
//     expenses: number[];
//   };
// }

// interface Data {
//   today: DataStructure;
//   '7days': DataStructure;
//   '30days': DataStructure;
//   '6months': DataStructure;
//   year: DataStructure;
// }

// function generateRandomData(): Data {
//   const generateRandomArray = (length: number): number[] => {
//     return Array.from({ length }, () => Math.floor(Math.random() * 1000) + 1);
//   };

//   const generateRandomLabels = (length: number, prefix: string): string[] => {
//     return Array.from({ length }, (_, index) => `${prefix} ${index + 1}`);
//   };

//   return {
//     today: {
//       labels: generateRandomLabels(9, 'Hour'),
//       data: {
//         income: generateRandomArray(9),
//         expenses: generateRandomArray(9),
//       },
//     },
//     '7days': {
//       labels: generateRandomLabels(8, 'Day'),
//       data: {
//         income: generateRandomArray(8),
//         expenses: generateRandomArray(8),
//       },
//     },
//     '30days': {
//       labels: generateRandomLabels(6, 'Week'),
//       data: {
//         income: generateRandomArray(6),
//         expenses: generateRandomArray(6),
//       },
//     },
//     '6months': {
//       labels: generateRandomLabels(6, 'Month'),
//       data: {
//         income: generateRandomArray(6),
//         expenses: generateRandomArray(6),
//       },
//     },
//     year: {
//       labels: generateRandomLabels(6, 'Month'),
//       data: {
//         income: generateRandomArray(6),
//         expenses: generateRandomArray(6),
//       },
//     },
//   };
// }

const generateRandomArray = (length: number): number[] => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10) + 1);
};

interface TailwindChartProps {
  className?: string;
}

const TailwindChart = ({ className }: TailwindChartProps) => {
  const [chartData] = useState({
    date: 'today',
    options: [
      { label: 'Today', value: 'today' },
      { label: 'Last 7 Days', value: '7days' },
      { label: 'Last 30 Days', value: '30days' },
      { label: 'Last 6 Months', value: '6months' },
      { label: 'This Year', value: 'year' },
    ],
    showDropdown: false,
    selectedOption: 0,

    // generate random data
    data: {
      today: {
        labels: [
          '12am',
          '3am',
          '6am',
          '9am',
          '12pm',
          '3pm',
          '6pm',
          '9pm',
          '12am',
        ],
        data: {
          income: generateRandomArray(9),
          expenses: generateRandomArray(9),
        },
      },
      '7days': {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
        data: {
          income: [100, 200, 300, 400, 500, 600, 700, 800],
          expenses: [900, 800, 700, 600, 500, 400, 300, 200],
        },
      },
      '30days': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        data: {
          income: [100, 200, 300, 400, 500, 600],
          expenses: [900, 800, 700, 600, 500, 400],
        },
      },
      '6months': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        data: {
          income: [100, 200, 300, 400, 500, 600],
          expenses: [900, 800, 700, 600, 500, 400],
        },
      },
      year: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        data: {
          income: [100, 200, 300, 400, 500, 600],
          expenses: [900, 800, 700, 600, 500, 400],
        },
      },
    },
  });

  const chartD = {
    labels: chartData.data[chartData.date].labels,
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgba(102, 126, 234, 0.25)',
        borderColor: 'rgba(102, 126, 234, 1)',
        pointBackgroundColor: 'rgba(102, 126, 234, 1)',
        data: chartData.data[chartData.date].data.income,
        fill: {
          target: 'origin', // 3. Set the fill options
          above: 'rgba(102, 126, 234, 0.25)',
        },
      },
      {
        label: 'Expenses',
        backgroundColor: 'rgba(237, 100, 166, 0.25)',
        borderColor: 'rgba(237, 100, 166, 1)',
        pointBackgroundColor: 'rgba(237, 100, 166, 1)',
        data: chartData.data[chartData.date].data.expenses,
        fill: {
          target: 'origin', // 3. Set the fill options
          above: 'rgba(237, 100, 166, 0.25)',
        },
      },
    ],
  };

  const renderChart = () => {
    // const chartInstance = new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: chartData.data[chartData.date].data.labels,
    //     datasets: [
    //       {
    //         label: 'Income',
    //         backgroundColor: 'rgba(102, 126, 234, 0.25)',
    //         borderColor: 'rgba(102, 126, 234, 1)',
    //         pointBackgroundColor: 'rgba(102, 126, 234, 1)',
    //         data: chartData.data[chartData.date].data.income,
    //       },
    //       {
    //         label: 'Expenses',
    //         backgroundColor: 'rgba(237, 100, 166, 0.25)',
    //         borderColor: 'rgba(237, 100, 166, 1)',
    //         pointBackgroundColor: 'rgba(237, 100, 166, 1)',
    //         data: chartData.data[chartData.date].data.expenses,
    //       },
    //     ],
    //   },
    //   layout: {
    //     padding: {
    //       right: 10,
    //     },
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [
    //         {
    //           gridLines: {
    //             display: false,
    //           },
    //           ticks: {
    //             callback: function (value, index, array) {
    //               return value > 1000
    //                 ? value < 1000000
    //                   ? value / 1000 + 'K'
    //                   : value / 1000000 + 'M'
    //                 : value;
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
  };

  // const selectOption = (index) => {
  //   setChartData((prevChartData) => ({
  //     ...prevChartData,
  //     selectedOption: index,
  //     date: chartData.options[index].value,
  //   }));
  //   renderChart();
  //   setChartData((prevChartData) => ({
  //     ...prevChartData,
  //     showDropdown: false,
  //   }));
  // };

  const chartOptions = {
    indexAxis: 'x' as const,
    responsive: true,
    tension: 0.3,
    layout: {
      padding: {
        right: 10,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            callback: function (value: number) {
              return value > 1000
                ? value < 1000000
                  ? value / 1000 + 'K'
                  : value / 1000000 + 'M'
                : value;
            },
            maxTicksLimit: 3,
          },
        },
      ],
    },
  };

  // const chartData = {
  //   labels: dummyData[selectedOption].labels,
  //   datasets: [
  //     {
  //       label: 'Income',
  //       backgroundColor: 'rgba(102, 126, 234, 0.25)',
  //       borderColor: 'rgba(102, 126, 234, 1)',
  //       pointBackgroundColor: 'rgba(102, 126, 234, 1)',
  //       data: dummyData[selectedOption].income,
  //       fill: {
  //         target: 'origin', // 3. Set the fill options
  //         above: 'rgba(102, 126, 234, 0.25)',
  //       },
  //     },
  //     {
  //       label: 'Expenses',
  //       backgroundColor: 'rgba(237, 100, 166, 0.25)',
  //       borderColor: 'rgba(237, 100, 166, 1)',
  //       pointBackgroundColor: 'rgba(237, 100, 166, 1)',
  //       data: dummyData[selectedOption].expenses,
  //       fill: {
  //         target: 'origin', // 3. Set the fill options
  //         above: 'rgba(237, 100, 166, 0.25)',
  //       },
  //     },
  //   ],
  // };

  return (
    <div
      className={cn(
        'bg-layer text-foreground rounded border border-border py-5 px-5 w-full',
        className
      )}
    >
      {/* Rest of your JSX code */}
      <div className='flex w-full justify-between'>
        <div>
          <div className='flex flex-wrap items-end'>
            <div className='flex-1'>
              <Typography
                as='h2'
                variant='sm/regular'
                className='text-foreground-lighter'
              >
                Income
              </Typography>
            </div>
          </div>
          <div className='flex flex-wrap items-end gap-x-1'>
            <Typography as='h3' variant='lg/medium' className='inline-block'>
              $102,000
            </Typography>
            <div className='inline-flex items-end gap-x-1'>
              <Triangle className='w-3 fill-success text-success' />
              <Typography
                as='p'
                variant='base/semibold'
                className='text-success'
              >
                2.2%
              </Typography>
            </div>
          </div>
        </div>
        {/* <select
            className='h-fit rounded bg-gray-700 p-2 text-white'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}
      </div>
      <div className='mt-5'>
        <Line data={chartD} options={chartOptions} />
      </div>
    </div>
  );
};

export default TailwindChart;
