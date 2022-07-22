import Layout from "@/components/Layout";
import axios from "axios";
import styles from "@/styles/Blog.module.css";

const getServerSideProps = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = response.data;

  return {
    props: {
      dataBlog: data,
    },
  };
};

const blog = (props) => {
  const { dataBlog } = props;
  return (
    <Layout title="Blog Page">
      <div>
        {dataBlog.map((blog) => {
          return (
            <div key={blog.id} className={styles.card}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default blog;
export { getServerSideProps };
