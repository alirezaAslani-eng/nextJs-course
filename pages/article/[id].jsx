import React from "react";
import { useRouter } from "next/router";
function OneArticle() {
  const {
    query: { id },
  } = useRouter();
  return <div>show data base on this id {id}</div>;
}

export default OneArticle;
