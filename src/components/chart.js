import React from 'react';
import * as V from 'victory';



export default function Chart(props) {
  let sortedData = [];
  if (props.data.length === 1) {
    sortedData.push(props.data[0]);
  } else {
    for (let i = props.data.length - 1; i > 0; i--) {
      sortedData.push(props.data[i]);
    }

  }

  return (
    <V.VictoryChart
      theme={V.VictoryTheme.material}
      height={200}
    >

      <V.VictoryLabel
        text="Closing price" x={70} y={30}
        textAnchor="middle"
        style={{
          fill: "#c43a31",
          fontFamily: "inherit",
          fontSize: 10,
          fontStyle: "italic"
        }}
      />
      <V.VictoryLabel
        text="Opening price" x={140} y={30}
        textAnchor="middle"
        style={{
          fill: "#51de31",
          fontFamily: "inherit",
          fontSize: 10,
          fontStyle: "italic"
        }}
      />

      <V.VictoryLabel
        text="Highest price" x={210} y={30}
        textAnchor="middle"
        style={{
          fill: "#0733e6",
          fontFamily: "inherit",
          fontSize: 10,
          fontStyle: "italic"
        }}
      />

      <V.VictoryLabel
        text="Lowest price" x={280} y={30}
        textAnchor="middle"
        style={{
          fill: "#db07e6",
          fontFamily: "inherit",
          fontSize: 10,
          fontStyle: "italic"
        }}
      />

      <V.VictoryAxis
        tickFormat={(t) => {
          if (props.data.length < 10) {
            return t.slice(2, 10);
          }
          if (props.data.length === 100 && t.slice(8, 10) % 30 === 0) {
            return t.slice(2, 10);
          }
          if (t.slice(8, 10) % 30 === 0 && t.slice(5, 7) % 6 === 0) {
            return t.slice(2, 10);
          }
        }}
      />
      <V.VictoryAxis dependentAxis />

      <V.VictoryLine
        style={{
          data: { stroke: "#c43a31", strokeWidth: 1 },
          parent: { border: "1px solid #ccc" }
        }}
        data=
        {sortedData.map((stock) => (
          { x: stock.date, y: stock.close }
        ))}
      />


      <V.VictoryLine
        style={{
          data: { stroke: "#51de31", strokeWidth: 1 },
          parent: { border: "1px solid #ccc" }
        }}
        data={sortedData.map((stock) => (
          { x: stock.date, y: stock.open }
        ))}
      />

      <V.VictoryLine
        style={{
          data: { stroke: "#0733e6", strokeWidth: 1 },
          parent: { border: "1px solid #ccc" }
        }}
        data={sortedData.map((stock) => (
          { x: stock.date, y: stock.high }
        ))}
      />

      <V.VictoryLine
        style={{
          data: { stroke: "#db07e6", strokeWidth: 1 },
          parent: { border: "1px solid #ccc" }
        }}
        data={sortedData.map((stock) => (
          { x: stock.date, y: stock.low }
        ))}
      />
    </V.VictoryChart>
  );
}