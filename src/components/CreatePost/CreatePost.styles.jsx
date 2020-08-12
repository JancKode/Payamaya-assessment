import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const CreateFormWrapper = styled.div`
    width: 50%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    background-color: white;
    margin-top: 1.5rem;
    flex-direction: column;
    border-radius: 10px;
}`;

export const ButtonWrapper = styled.div`
  display: flex;
`

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  texField: {
    width: '60%',
  },
  deleteButton: {
    backgroundColor: '#4c63ea',
    marginBottom: '.8rem',
    width: '80%',
    height: '3rem',
    margin: '0 5px',
    marginLeft: '8px'
  },
  cancelButton: {
    backgroundColor: '#97b0da',
    width: '80%',
    height: '3rem',
    margin: '0 5px',
    marginLeft: '8px'
  },
  inputLabel: {
    fontSize: '1rem',
    marginBottom: '.8rem',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#4c63ea',
    height: '3rem',
    marginLeft: '8px'
  }
}));
