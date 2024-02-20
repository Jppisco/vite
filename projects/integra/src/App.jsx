import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <>
      <TwitterFollowCard userName="midudev" name="Miguel Angel" />
      <TwitterFollowCard userName="valdur" name="Juan David" />
      <TwitterFollowCard userName="pisco" name="Juan Pablo" />;
    </>
  );
}
