/** Global CSS styles */
import "antd/dist/antd.min.css";

import { ApolloProvider } from "@apollo/client";
import RepositoryList from "./repository/RepositoryList";
import { createApolloClient } from "./config/apollo";
import { Layout } from "./layout";

const App = () => {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <Layout>
        <RepositoryList />
      </Layout>
    </ApolloProvider>
  );
};

export default App;
