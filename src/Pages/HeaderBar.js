import React, { useContext } from "react";
import CreateTask from "../CreateTask";
import UserBar from "../User/UserBar";
import Header from "../Header";
import ChangeTheme from "../ChangeTheme";
import { ThemeContext, StateContext } from "../Contexts";
import { Link } from "react-navi";

export default function HeaderBar({ setTheme }) {
  const theme = useContext(ThemeContext);
  const { state } = useContext(StateContext);
  const { user } = state;
  return (
    <>
      <Header text="My Todo List" />
      <ChangeTheme theme={theme} setTheme={setTheme} />
      <React.Suspense fallback={"Loading..."}>
        <UserBar /> <br />
      </React.Suspense>
      {user && <Link href="/task/create">Create New Task</Link>}
      <br />
    </>
  );
}
