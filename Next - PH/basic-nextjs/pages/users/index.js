import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/Users.module.css";

const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      usersData: data,
    },
  };
};

const index = ({ usersData }) => {
  const router = useRouter();

  return (
    <Layout title="Users Page">
      <>
        {usersData.map((user) => {
          const { id, name, email } = user;

          return (
            <div
              key={id}
              onClick={() => router.push(`/users/${id}`)}
              className={styles.card}
            >
              <p>{name}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </>
    </Layout>
  );
};

export default index;
export { getStaticProps };
