import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/route";

export default function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}
