import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  button: {
    width: '10rem',
    backgroundColor: '#1976d2',
    color: 'white',
    position: 'relative',
    top: 0,
    right: '-39%',
    margin: '8px',
  },
});

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const tableStyle = {
  width: '90%',
  marginTop: '8px',
  heigth: '70%',
};
