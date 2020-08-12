import React, { useContext, useState } from 'react';
import { Context as DataContext } from '../../context/dataContext';
import MaterialTable from 'material-table';

import { useStyles, tableStyle, TableContainer } from './BlogContainer.styles';
import { Button } from '@material-ui/core';
import PostCopmonent from '../CreatePost/CreatePostComponent';


const Table = () => {
  const {
    state: { blogData },
  } = useContext(DataContext);
  const [showModal, setModalState] = useState(false);
  const [showPost, setshowPost] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [rowData, setRowData] = useState([]);
  const styles = useStyles();

  const [state, setState] = useState({
    columns: [
      { title: 'Title', field: 'title' },
      { title: 'Contents', field: 'content' },
      { title: 'Date', field: 'date' },
    ],
  });

  const handleRowClick = (type, e, rowData) => {
    setRowData(rowData);
    if (type === 'viewPost') {
      setModalState(true);
      setshowPost(true);
    } else if (type === 'edit') {
      setModalState(true);
      setIsEdit(true);
    } else if (type === 'delete') {
      setModalState(true);
      setIsDelete(true);
    }
  };

  const handleOnClose = () => {
    setModalState(false);
    setIsEdit(false);
    setshowPost(false);
    setIsDelete(false);
  };

  if (!blogData.length) return null;
  return (
    <TableContainer>
      <MaterialTable
        style={tableStyle}
        title='My Post Compilation'
        columns={state.columns}
        data={blogData}
        onRowClick={(e, rowData) => {
          handleRowClick('viewPost', e, rowData);
        }}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit Post',
            onClick: (e, rowData) => handleRowClick('edit', e, rowData),
          },
          {
            icon: 'delete',
            tooltip: 'Delete Post',
            onClick: (e, rowData) => handleRowClick('delete', e, rowData),
          },
        ]}
      />
      <Button
        ariant='contained'
        color='primary'
        className={styles.button}
        onClick={() => setModalState(true)}
      >
        Add POst
      </Button>
      {showModal ? (
        <PostCopmonent
          rowData={rowData}
          
          showModal={showModal}
          onClose={() => handleOnClose()}
          deleteItem={isDelete}
          showPost={showPost}
          editItem={isEdit}
        />
      ) : null}
    </TableContainer>
  );
};

export default Table;
