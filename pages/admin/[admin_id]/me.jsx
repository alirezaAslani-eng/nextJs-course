import { useRouter } from "next/router";
import React from "react";

function me() {
  const {
    query: { admin_id },
  } = useRouter();
  return <div>this is my id : {admin_id}</div>;
}

export default me;
