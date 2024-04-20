import { Chart } from 'react-google-charts';
const CandleStick = ({data}) => {
    const chartData = [
        ['Day', 'Low', 'Opening price', 'Closing price', 'High'],
        ...data.map(({ date, low, open, close, high }) => [
          date.toString(),
          low,
          open,
          close,
          high
        ])
    ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Chart
            width={'800px'}
            height={'400px'}
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
                legend: 'none',
                animation: {
                startup: true,
                easing: 'linear',
                duration: 1500,
                },
                candlestick: {
                fallingColor: { strokeWidth: 0, fill: '#a52714' },
                risingColor: { strokeWidth: 0, fill: '#0f9d58' },
                },
            }}
        />
    </div>
  )
}

export default CandleStick