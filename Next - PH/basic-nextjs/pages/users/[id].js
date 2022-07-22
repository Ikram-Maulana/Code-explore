import Layout from "@/components/Layout";

const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((user) => ({
    params: { id: `${user.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: {
      userData: data,
    },
  };
};

const detail = ({ userData }) => {
  const { name, email, phone, website } = userData;

  return (
    <Layout title="User Detail">
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
      </div>
    </Layout>
  );
};

export default detail;
export { getStaticPaths, getStaticProps };
