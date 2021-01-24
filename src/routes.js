import React from "react";

//links
export const LinkPageView1 = "/view1";

//auth routes
export const LinkPageAuth = "/main/auth";

//linknames
export const linkNamesPageView1 = "View 1";
export const linkNamesPageAuth = "Authenticated Page";

//imports
const View1 = React.lazy(() => import("./components/views/View1"));

//routes
const routes = [
  {
    path: LinkPageView1,
    exact: true,
    name: linkNamesPageView1,
    component: View1,
  },
];

export default routes;
