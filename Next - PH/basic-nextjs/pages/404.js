import { useRouter } from "next/router";
import { useEffect } from "react";

const CustomNotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="container-not-found">
      <h1 className="title-not-found">Ooops...</h1>
      <p className="title-not-found">Page not found</p>
    </div>
  );
};

export default CustomNotFound;
