import React from "react";

function PrivatePage() {
  return <div>PrivatePage</div>;
}

export default PrivatePage;

export async function getServerSideProps(context) {
  const productID = context.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${productID}`
  );
  if (res.status == 401) {
    return { redirect: { destination: "/login", permanent: false } };
  }
  if (res.status == 404) {
    return { notFound: true };
  }
  const data = await res.json();
  return {
    props: { data: data, id: crypto.randomUUID() },
  };
}
