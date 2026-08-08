import { useState } from "react";
import { Outlet } from "react-router";

import { useInitializeAuth } from "../../features/authentication/hooks/useInitializeAuth";
import { useDocumentDirection } from "../../hooks/useDocumentDirection";

import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

const AppLayout = () => {
  const [closeSidebar, setCloseSidebar] = useState(false);

  useInitializeAuth();
  useDocumentDirection();

  return (
    <section
      className={`grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen ${
        closeSidebar && "grid-cols-[auto_1fr]"
      }`}
    >
      <Header />
      <Sidebar isClose={closeSidebar} setIsClose={setCloseSidebar} />
      <main className="bg-bg-secondary text-text-main p-5 overflow-auto">
        <Outlet />
      </main>
    </section>
  );
};

export default AppLayout;
