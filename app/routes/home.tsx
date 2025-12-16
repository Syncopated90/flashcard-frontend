import type { Route } from "./+types/home";
import { Welcome } from "../welcome";
import MainPresenter from "../presenters/MainPresenter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flashcard" },
    { name: "description", content: "Fredriks flashcard app" },
  ];
}

export default function Home() {
  return (<>
    <MainPresenter/>
  </>);
}
