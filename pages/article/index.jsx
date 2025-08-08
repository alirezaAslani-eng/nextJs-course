import Link from "next/link";
import React from "react";

function index() {
  return (
    <div>
      all articles
      <br />
      <Link href={"/article/23"}>one article</Link>
    </div>
  );
}

export default index;
