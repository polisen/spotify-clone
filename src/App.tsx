import React from "react";
import styled from "styled-components";
import {MainContent} from './components/MainContent'
function App() {
  return (
    <>
      <MainContent/>
      <ControlBar />
    </>
  );
}


const ControlBarLayout = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #181818;
  position: fixed;
  height: 3em;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const ControlBar = () => {
  return <ControlBarLayout></ControlBarLayout>;
};


export default App;
