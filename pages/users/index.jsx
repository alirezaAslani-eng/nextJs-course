import Link from "next/link";
import React from "react";

function index() {
  return (
    <div>
      All users
      <br />
      <Link href={"/users/123/mohamad/mhd123"}>One user</Link>
    </div>
  );
}

export default index;
