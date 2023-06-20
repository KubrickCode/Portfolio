import Layout from "./Layout/Layout";
import Router from "./Router";

const App = () => {
  return (
    <>
      <Layout>
        <div className="py-10 px-40">
          <Router />
        </div>
      </Layout>
    </>
  );
};

export default App;
