import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams();

  return (
    <>
      <h1>Halaman Blog Detail</h1>
      <p>Halo ini adalah detail {slug}</p>
    </>
  );
};

export default BlogDetail;
