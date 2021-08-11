import React, { useReducer } from "react";
import styled from "styled-components";
import { Resizable } from "re-resizable";

const Layout = styled.div`
  width: 100vw;
  height: calc(100vh - 3em);
  display: flex;
  overflow: hidden;
`;

const SidebarLayout = styled(Resizable)`
  width: 30%;
  height: 100%;
  background-color: blue;
`;

const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: yellow;
`;

const SidebarLayoutProps = {
  defaultSize: {
    width: "20%",
    height: "100%",
  },
  maxWidth: "30%",
  minWidth: "20%",
};

export const MainContent = () => {
  return (
    <Layout>
      <SidebarLayout {...SidebarLayoutProps}></SidebarLayout>
      <MainLayout></MainLayout>
    </Layout>
  );
};
