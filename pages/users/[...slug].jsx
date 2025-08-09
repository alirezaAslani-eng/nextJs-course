import { useRouter } from "next/router";
import React from "react";

function UserDetails() {
  const { query } = useRouter();
  const slug = query.slug || []; // here we said (query.slug || []) because at first it's undefined .

  return <div>{slug.length >= 3 && `${slug[0]}/${slug[1]}/${[slug[2]]}`}</div>;
}

export default UserDetails;
