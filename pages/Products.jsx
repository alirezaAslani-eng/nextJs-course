import Link from "next/link";
import React from "react";

function Products() {
  return (
    <div>
      <Link href={"/products/1"} prefetch>
        one product
      </Link>
    </div>
  );
}

export default Products;
