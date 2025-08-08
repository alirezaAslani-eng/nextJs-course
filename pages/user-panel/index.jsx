import { useRouter } from "next/router";
import React from "react";

function index() {
  const { back, push, replace } = useRouter();
  function backToHistory() {
    back();
  }
  function navigator() {
    push("/article/234");
    //  or
    push({
      pathname: "/article/[id]",
      query: {
        id: "1",
      },
    });
  }
  function replaceRoute() {
    replace("/");
  }
  return (
    <>
      <button onClick={backToHistory}>back</button>
      <button onClick={navigator}>go to a page</button>
      <button onClick={replaceRoute}>replace home</button>
      <div>Welcome</div>
    </>
  );
}

export default index;
