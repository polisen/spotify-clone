import styled from "styled-components";
import { ReactComponent as Clock } from "../../svg/Clock.svg";
import { Item } from "./TableItem";
import {ReactNode} from 'react'


const HeaderLayout = styled.div`
  border: 1px #444444;
  border-bottom-style: solid;
  display: flex;
  align-items: center;
`;



interface HeaderItem {
        key: string,
        text?: string,
        width: string,
        alignment: 'center' | 'start',
        secondaryColor: boolean
        icon?: ReactNode;
}


export const Header= () => {
  /**
   * TODO: put config into redux
   */
  const items: HeaderItem[] = [
    { key: "n", text: "#", width: "5%", alignment: "center", secondaryColor: true },
    { key: "title", text: "TITLE", width: "35%", alignment: "start", secondaryColor: true },
    { key: "album", text: "ALBUM", width: "25%", alignment: "start", secondaryColor: true },
    { key: "dateAdded", text: "DATE ADDED", width: "25%", alignment: "start", secondaryColor: true },
    { key: "time", icon: <Clock />, width: "10%", alignment: "center", secondaryColor: true },
  ];

  return (
    <HeaderLayout>
      {items.map((i) => (
        <Item {...i} />
      ))}
    </HeaderLayout>
  );
};



