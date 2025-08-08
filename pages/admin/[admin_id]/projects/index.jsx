import React from "react";

import Link from "next/link";
function projects() {
  return (
    <div>
      projects 
      <br />
      <Link href={"/admin/123/projects/34"}>one project</Link>
    </div>
  );
}

export default projects;
