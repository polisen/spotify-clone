import styled from "styled-components";
import { ReactComponent as Clock } from "../../svg/Clock.svg";
// import { Item } from "./TableItem";
import { ReactNode } from "react";
import {Track} from './TableItem';
const HeaderLayout = styled.div`
  border: 1px #444444;
  border-bottom-style: solid;
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;

export interface HeaderItem {
  slug: string;
  text?: string;
  icon?: ReactNode;
}

export const Header = () => {
  /**
   * TODO: put config into redux
   */
  const items: HeaderItem[] = [
    {
      slug: "index",
      text: "#",
    },
    {
      slug: "title",
      text: "TITLE",
    },
    {
      slug: "album",
      text: "ALBUM",
    },
    {
      slug: "date",
      text: "DATE ADDED",
    },
    {
      icon: <Clock />,
      slug: 'time'
    },
  ];

  return (
        <HeaderLayout>
          {items.map((i) => (
            <Track.HeaderText {...i} />
          ))}
        </HeaderLayout>
  );
};
