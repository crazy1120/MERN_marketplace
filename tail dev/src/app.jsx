import { Routes, Route, Navigate } from "react-router-dom";

import routes from "@/routes";

const App = () => {
  return (
    <Routes>
      {routes.map(
        ({ path, element }, key) =>
          element && <Route key={key} exact path={path} element={element} />
      )}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;
