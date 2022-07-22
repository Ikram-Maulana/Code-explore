import Head from "next/head";
import { useRouter } from "next/router";

const detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Users Detail Page</title>
      </Head>

      <main>
        <p>Users Detail Pages {id}</p>
      </main>
    </div>
  );
};

export default detail;
