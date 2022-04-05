import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function SWRtest() {
  const { data, error } = useSWR("../api/test_date.js", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>hello {data.name}!</div>;
}

export default SWRtest;
