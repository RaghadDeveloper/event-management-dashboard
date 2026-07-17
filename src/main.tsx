import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./styles/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/query/client";
import { Provider } from "react-redux";
import { store } from "./store";
import AppBootstrap from "./components/common/AppBootstrap";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AppBootstrap />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
