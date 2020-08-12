import React, { useContext, useState } from 'react';
import { CreateFormWrapper, ButtonWrapper } from './CreatePost.styles';
import { TextField, Button } from '@material-ui/core';
import { useStyles } from './CreatePost.styles';
import { Context as DataContext } from '../../context/dataContext';
import ModalComponent from '../Modal/Modal';
import { InputLabel } from '@material-ui/core';

const CreatePostComponent = ({
  showModal,
  onClose,
  rowData,
  editItem,
  deleteItem,
  showPost,
}) => {
  const styles = useStyles();
  const { addBlog, deletePost, editPost } = useContext(DataContext);
  const [title, setTitle] = useState(
    deleteItem || showPost || editItem ? rowData.title : ''
  );
  const [content, setContent] = useState(
    deleteItem || showPost || editItem ? rowData.content : ''
  );
  const [loading, setIsLoading] = useState(false);

  function onClickHander() {
    addBlog(title, content);
    setIsLoading(true);
    setTimeout(() => {
      setContent('');
      setTitle('');
      setIsLoading(false);
      onClose();
    }, 2000);
  }

  function handleClick(type) {
    switch (type) {
      case 'delete':
        deletePost(rowData.id);
        setTimeout(() => {
          setContent('');
          setTitle('');
          onClose();
        }, 1600);
      case 'edit':
        editPost(rowData.id, content, title);
        setTimeout(() => {
          setContent('');
          setTitle('');
          onClose();
        }, 1600);
      default:
        return null;
    }
  }

  const showButtons = () => {
    if (showPost) {
      return (
        <Button className={styles.confirmButton} onClick={() => onClose()}>
          Done
        </Button>
      );
    } else if (editItem) {
      return (
        <ButtonWrapper>
          <Button
            className={styles.deleteButton}
            onClick={() => handleClick('edit')}
          >
            Save
          </Button>
          <Button className={styles.cancelButton} onClick={() => onClose()}>
            Cancel
          </Button>{' '}
        </ButtonWrapper>
      );
    } else if (deleteItem) {
      return (
        <ButtonWrapper>
          <Button
            className={styles.deleteButton}
            onClick={() => handleClick('delete')}
          >
            Delete
          </Button>
          <Button className={styles.cancelButton} onClick={() => onClose()}>
            Cancel
          </Button>{' '}
        </ButtonWrapper>
      );
    } else {
      return (
        <Button
          className={styles.confirmButton}
          onClick={() => onClickHander()}
          disabled={loading || !title.length || !content.length}
        >
          Create Post
        </Button>
      );
    }
  };
  

  return (
    <ModalComponent showModal={showModal} onClose={onClose}>
      <CreateFormWrapper>
        <InputLabel className={styles.inputLabel}>
          {deleteItem
            ? 'Are you sure you want to delete this item?'
            : 'Post Details'}
        </InputLabel>
        <TextField
          className={`${styles.root} ${styles.texField}`}
          label='Title'
          value={title}
          variant='outlined'
          onChange={(e) => setTitle(e.target.value)}
          InputProps={{
            readOnly: showPost || deleteItem,
          }}
        />
        <TextField
          className={`${styles.root} ${styles.texField}`}
          label='Content'
          variant='outlined'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline={true}
          rows={15}
          InputProps={{
            readOnly: showPost || deleteItem,
          }}
        />
        {showButtons()}
      </CreateFormWrapper>
    </ModalComponent>
  );
};

export default CreatePostComponent;
