import { useEffect, useState } from "react";

import { ResponsiveCalendarCanvas } from "@nivo/calendar";

function transform(d) {
  return Object.entries(d).map((entry) => {
    const [key, value] = entry;
    return { value: Number(value), day: key };
  });
}

export function CallAPI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://3nlr2xgsh9.execute-api.us-east-1.amazonaws.com/Prod/dataread"
    )
      .then((res) => res.json())
      .then((dat) => setData(transform(dat)));
  }, []);

  return (
    <div style={{ height: 200 }}>
      <p>{JSON.stringify(data)}</p>
      <ResponsiveCalendarCanvas
        data={data}
        from="2021-03-01"
        to="2022-07-12"
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
