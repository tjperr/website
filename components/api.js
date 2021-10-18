import { useEffect, useState } from "react";

export function CallAPI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://3nlr2xgsh9.execute-api.us-east-1.amazonaws.com/Prod/dataread"
    )
      .then((res) => res.json())
      .then((dat) => setData(dat));
  }, []); //if you take these brackets away the data comes through - but not being rendered

  return <>{data && JSON.stringify(data)}</>;
}
