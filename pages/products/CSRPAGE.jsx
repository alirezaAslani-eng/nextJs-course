import React, { useEffect, useState } from "react";

function CSRPAGE() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch here
  });
  return <div>CSRPAGE</div>;
}

export default CSRPAGE;

export function getServerSideProps() {
  return { props: { data: "server side data" } };
}
