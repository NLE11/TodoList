import React, { useContext } from "react";
// import CreateTask from "../CreateTask";
import UserBar from "../User/UserBar";
import Header from "../Header";
// import ChangeTheme from "../ChangeTheme";
import { ThemeContext, StateContext } from "../Contexts";
import { Link } from "react-navi";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function HeaderBar({ setTheme }) {
  const theme = useContext(ThemeContext);
  const { state } = useContext(StateContext);
  const { user } = state;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Header text="MY TODO" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user.username && (
              <Nav.Link>
                <Link href="/task/create">Create New Task</Link>
              </Nav.Link>
            )}
            {
              <Nav.Link>
                <Link href="/users">User List</Link>
              </Nav.Link>
            }
            {/* <ChangeTheme theme={theme} setTheme={setTheme} /> */}
          </Nav>
          <React.Suspense fallback={"Loading..."}>
            <UserBar />
          </React.Suspense>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
