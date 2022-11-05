import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;

          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          } // Nếu có layout thì lấy layout đó, nếu layout === null thì không có layout, còn lại nó sẽ lấy
          // mặc định là DefaultLayout

          return (
            <Route
              key={index}
              path={route.path}
              element={
                //Content của DefaultLayout nhận children nên nó sẽ ôm hết page
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
