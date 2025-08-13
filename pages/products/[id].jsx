import { useRouter } from "next/router";
import React from "react";

function Products({ data, id }) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return "Loading";
  }
  return (
    <div>
      Hello {data?.title || ""} with id : {id}
    </div>
  );
}

export default Products;

export async function getServerSideProps(context) {
  const productID = context.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${productID}`
  );
  if (res.status == 404) {
    return { notFound: true };
  }

  const data = await res.json();
  return {
    props: { data: data, id: crypto.randomUUID() },
  };
}
