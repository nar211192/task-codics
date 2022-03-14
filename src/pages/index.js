import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const ToDos = lazy(() => import("./ToDos"));
const ToDo = lazy(() => import("./ToDo"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<ToDos />} />
        <Route path="/todo/:id" element={<ToDo />} />
      </Routes>
    </Suspense>
  );
}
