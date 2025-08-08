import { useRouter } from "next/router";
import React from "react";

function ProjectDetails() {
  const {
    query: { admin_id, pj_id },
  } = useRouter();

  return <div>this is the details for this admin : {admin_id} their project info with id :{pj_id}</div>;
}

export default ProjectDetails;
