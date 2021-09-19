import React from 'react';
import usePagination from '@mui/material/usePagination';
import styled from '@emotion/styled'


const List = styled.ul`
  listStyle: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-weight: ${({ selected }) => selected ? 'bold' : 'normal'};
  background: #1e242f;
  color: ${({ selected }) => selected ? '#0971f1' : '#fff'};
  font-size: 20px;
  border: ${({ selected }) => selected ? '1px solid #0971f1' : 'none'};
  height: 32px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  border-radius: 0px;
  border-radius: 60%;
  border: 1px solid;
`;

const Dot = styled.span`
  color: #fff;
  font-size: 24px;
`;

const Item = styled.li`
  margin: 3px;
`;

const Pagination = ({ onPageChange, count}) => {
  const { items } = usePagination({
    count,
    onChange: (e, page) => {
      onPageChange(page);
    }
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          let value = type;
          // console.log('type', page);
          if (type === 'previous') {
            value = '<';
          }
          if (type === 'next') {
            value = '>'
          }
          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = <Dot>…</Dot>;
          } else if (type === 'page') {
            children = (
              <Button
                type="button"
                selected={selected}
                {...item}
              >
                {page}
              </Button>
            );
          } else {
            children = (
              <Button type="button" {...item}>
                {value}
              </Button>
            );
          }

          return <Item key={index}>{children}</Item>;
        })}
      </List>
    </nav>
  );
}

export default Pagination;
