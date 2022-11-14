/** Global CSS styles */
import "antd/dist/antd.min.css";

import { ApolloProvider } from "@apollo/client";
import RepositoryList from "./repository/RepositoryList";
import { createApolloClient } from "../config/apollo";
import { Layout } from "./layout";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";

const App = () => {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <RepositoryList />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
