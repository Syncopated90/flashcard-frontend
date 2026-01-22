import { type RouteConfig, index, route } from "@react-router/dev/routes";

//route("account", "./presenters/AccountPresenter.jsx"),
export default [index("routes/home.tsx"), 
  route("AddFlashcard", "./presenters/FlashcardPresenter.jsx"),
] satisfies RouteConfig;
