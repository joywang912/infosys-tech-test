import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Link from "./components/Link";
import PinGeneratePage from "./pages/PinGeneratePage";
import PinDisplayPage from "./pages/PinDisplayPage";

interface NavLinkProps {
  active: boolean;
}

interface PanelProps {
  active: boolean;
}

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
`;

const NavLink = styled(Link)<NavLinkProps>`
  border-bottom: 1px solid transparent;
  border-color: ${(props) => (props.active ? "#007bff" : "transparent")};
`;

const Panel = styled.div<PanelProps>`
  display: ${(props) => (props.active ? "block" : "none")};
  padding: 30px 50px;
  background-color: #f8f9fa;
`;

function App() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="App">
      <Nav>
        <NavLink
          href="#"
          active={!!(activePage === 1)}
          onClick={() => setActivePage(1)}
        >
          Generate
        </NavLink>
        <NavLink
          href="#"
          active={!!(activePage === 2)}
          onClick={() => setActivePage(2)}
        >
          Saved
        </NavLink>
      </Nav>
      <div>
        <Panel active={!!(activePage === 1)}>
          <PinGeneratePage />
        </Panel>

        <Panel active={!!(activePage === 2)}>
          <PinDisplayPage />
        </Panel>
      </div>
    </div>
  );
}

export default App;
