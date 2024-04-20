import CandleStick from "./CandleStick";

function App() {
  const data = [
    { date: new Date('2024-04-01'), open: 100, high: 110, low: 95, close: 105 },
    { date: new Date('2024-04-02'), open: 105, high: 115, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 120, high: 112, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 70, close: 113 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 100, close: 111 },
    { date: new Date('2024-04-01'), open: 100, high: 110, low: 95, close: 105 },
    { date: new Date('2024-04-02'), open: 105, high: 115, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 120, high: 112, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 70, close: 113 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 100, close: 111 },
    { date: new Date('2024-04-01'), open: 100, high: 110, low: 95, close: 105 },
    { date: new Date('2024-04-02'), open: 105, high: 115, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 120, high: 112, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 70, close: 113 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 100, close: 111 },
    { date: new Date('2024-04-01'), open: 100, high: 110, low: 95, close: 105 },
    { date: new Date('2024-04-02'), open: 105, high: 115, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 120, high: 112, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 70, close: 113 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 100, close: 111 },
    { date: new Date('2024-04-01'), open: 100, high: 110, low: 95, close: 105 },
    { date: new Date('2024-04-02'), open: 105, high: 115, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 120, high: 112, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 70, close: 113 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 100, close: 111 },
    { date: new Date('2024-04-01'), open: 100, high: 110, low: 95, close: 105 },
    { date: new Date('2024-04-02'), open: 105, high: 115, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 120, high: 112, low: 100, close: 110 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 70, close: 113 },
    { date: new Date('2024-04-02'), open: 100, high: 100, low: 100, close: 111 },
  ];
  return (
    <>
      <CandleStick data={data} />
    </>
  )
}

export default App
