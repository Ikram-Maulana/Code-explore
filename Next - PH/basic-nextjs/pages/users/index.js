import Layout from "../../components/Layout";

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
  return (
    <Layout title="Users Page">
      <>
        {usersData.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </>
    </Layout>
  );
};

export default index;
export { getStaticProps };
