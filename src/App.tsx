import { Outlet } from "react-router-dom";
import Navbar from "@organisms/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-4rem)] overflow-y-auto">
        <Outlet />
      </main>
    </>
  );
}
