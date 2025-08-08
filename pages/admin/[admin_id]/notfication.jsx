import { useRouter } from "next/router";
import React from "react";

function notfication() {
  const {
    query: { admin_id },
  } = useRouter();

  return <div>notfication for admin with id : {admin_id}</div>;
}

export default notfication;
