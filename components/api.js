import { useEffect, useState } from "react";

import { ResponsiveCalendarCanvas } from "@nivo/calendar";

function transform(data) {
  return Object.entries(data).map((entry) => {
    const [key, value] = entry;
    return { value: Number(value), day: key };
  });
}

function minMaxDate(data) {
  const days = data.map((entry) => {
    return entry["day"];
  });
  days.sort();
  return [days[0], days.slice(-1)[0]];
}

export function CallAPI() {
  const [data, setData] = useState([{ value: 2, day: "2020-01-01" }]);

  useEffect(() => {
    fetch(
      "https://3nlr2xgsh9.execute-api.us-east-1.amazonaws.com/Prod/dataread"
    )
      .then((res) => res.json())
      .then((data) => setData(transform(data)));
  }, []);

  return (
    <div style={{ height: 200 }}>
      <p>{JSON.stringify(data)}</p>

      <ResponsiveCalendarCanvas
        data={data}
        from={minMaxDate(data)[0]}
        to={minMaxDate(data)[1]}
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
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
