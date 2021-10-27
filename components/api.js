import { ResponsiveCalendarCanvas, day } from "@nivo/calendar";
import { useEffect, useState } from "react";

function transform(response) {
  // transform the data to the formate expected by the calendar component
  return Object.entries(response).map((entry) => {
    const [key, value] = entry;
    return { value: Number(value), day: key };
  });
}

function minMaxDate(data) {
  // Return the minimum and maximum date in the data - for setting the bounds of the chart
  const days = data.map((entry) => {
    return entry["day"];
  });
  days.sort();
  return [days[0], days.slice(-1)[0]];
}

function colourScale() {
  var hex_numbers = [];

  for (let i = 16 * 16 - 1; i > 16 - 1; i--) {
    hex_numbers.push(i.toString(16));
  }

  var cols = hex_numbers.map((x) => {
    return "#" + x.toString() + x.toString() + x.toString();
  });
  cols = ["#00bd32", ...cols];
  return cols;
}

export function CallAPI() {
  const [data, setData] = useState([{ value: 0, day: "2021-01-01" }]);

  useEffect(() => {
    fetch(
      "https://3nlr2xgsh9.execute-api.us-east-1.amazonaws.com/Prod/dataread"
    )
      .then((res) => res.json())
      .then((data) => setData(transform(data)));
  }, []);

  return (
    <div style={{ height: 500 }}>
      <ResponsiveCalendarCanvas
        data={data}
        maxValue={30}
        minValue={0}
        from={minMaxDate(data)[0]}
        to={minMaxDate(data)[1]}
        emptyColor="#ffffff"
        colors={colourScale()}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={20}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: "right-to-left",
          },
        ]}
      />
    </div>
  );
}
