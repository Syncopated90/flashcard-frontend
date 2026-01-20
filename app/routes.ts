import { type RouteConfig, index, route } from "@react-router/dev/routes";

//
export default [index("routes/home.tsx"), route("user", "./presenters/UserPresenter.jsx")] satisfies RouteConfig;
