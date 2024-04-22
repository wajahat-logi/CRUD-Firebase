import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';



const minMaxYear = (min,max)=>{
  const years = [];
  for(let i=min; i<= max ; i++){
    years.push(new Date(i, 1, 1))
  }
  return years
}


export const TPYRWChart = ({min,max,series}) => {
  return (
    <BarChart
      series={series}
      grid={{ horizontal: true }}
      height={300}
      xAxis={[{ scaleType: 'band', 
      data: minMaxYear(min,max),
      valueFormatter: (value) => value.getFullYear().toString(), }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}


export function MRWSChart({dataset}) {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'direction' }]}
      series={[{ dataKey: 'value', valueFormatter: (value: number | null) => `${value}mm` }]}
      layout="horizontal"
      width= {500}
      height= {400}
    />
  );
}


export function TQRRWChart({series}) {
  return (
    <PieChart
      series={series}
      width={400}
      height={200}
    />
  );
}


export const MVWSChart = ({series}) => {
  return (
    <BarChart
    series={series}
    grid={{ horizontal: true }}
    height={300}
    xAxis={[{ scaleType: 'band', 
    data: ['a','b','c','d'],
    }]}
    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
  />
  );
}

export const TVSChart = ({series}) => {
  return (
    <BarChart
    series={series}
    grid={{ horizontal: true }}
    height={300}
    xAxis={[{ scaleType: 'band', 
    data: ['a','b','c','d'],
    }]}
    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
  />
  );
}


export const MAPYWSChart = ({series}) => {
  return (
    <BarChart
    series={series}
    grid={{ horizontal: true }}
    height={300}
    xAxis={[{ scaleType: 'band', 
    data: ['a','b','c','d'],
    }]}
    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
  />
  );
}
