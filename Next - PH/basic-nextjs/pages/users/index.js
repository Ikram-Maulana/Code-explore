import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/Users.module.css";
import axios from "axios";

const getStaticProps = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  let data = response.data;

  return {
    props: {
      dataUsers: data,
    },
  };
};

const index = (props) => {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout title="Users Page">
      <>
        {dataUsers.map((user) => {
          return (
            <div
              key={user.id}
              onClick={() => router.push(`/users/${user.id}`)}
              className={styles.card}
            >
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </>
    </Layout>
  );
};

export default index;
export { getStaticProps };
