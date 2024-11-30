import routes from "./routes/routes";
import { useRoutes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import AuthProvider from "./context/AuthContext/AuthContext";

function App() {
  const router = useRoutes(routes);

  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <AuthProvider>{router}</AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
