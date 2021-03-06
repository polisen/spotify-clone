import styled from 'styled-components';
import { Clock } from 'svg';
import React, { ReactNode } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Track } from './TableItem';

const HeaderLayout = styled.div`
  border: 1px #444444;
  border-bottom-style: solid;
  display: flex;
  height: 2em;
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
      slug: 'index',
      text: '#',
    },
    {
      slug: 'title',
      text: 'TITLE',
    },
    {
      slug: 'album',
      text: 'ALBUM',
    },
    {
      slug: 'date',
      text: 'DATE ADDED',
    },
    {
      icon: <Clock />,
      slug: 'time',
    },
  ];

  return (
    <HeaderLayout>
      {items.map((i) => (
        <Track.HeaderText key={nanoid()} {...i} />
      ))}
    </HeaderLayout>
  );
};
