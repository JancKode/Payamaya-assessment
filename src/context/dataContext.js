import createDataContext from './createDataContext';
import { v4 } from 'uuid';

const INITIAL_STATE = [
    {
      id: v4(),
      title: 'My Post',
      content: 'Lorem Ipsum',
      date: '2020-8-12 21:0:35',
    },
    {
      id: v4(),
      title: 'My Post2',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consequuntur quo omnis hic minima impedit vero! Libero, magnam saepe aliquam nesciunt doloremque voluptas qui eos recusandae nulla voluptatem, ea in!',
      date: '2020-8-12 21:0:35',
    },
    {
      id: v4(),
      title: 'My Post3',
      content: 'Lorem Ipsum',
      date: '2020-8-12 22:0:35',
    },
  ]

const dataReducer = (state, actions) => {
  switch (actions.type) {
    case 'add_post':
      return {
        ...state,
        blogData: [
          ...state.blogData,
          {
            id: v4(),
            title: actions.payload.title,
            content: actions.payload.content,
            date: actions.payload.dateTime,
          },
        ],
      };
    case 'delete_post':
      return {
        ...state,
        blogData: [
          ...state.blogData.filter((post) => post.id !== actions.payload.id),
        ],
      };
    case 'edit_post':
        return {
            ...state,
            ...state.blogData.find(post => {
                if(post.id === actions.payload.id){
                    post.content = actions.payload.content
                    post.title = actions.payload.title
                    post.date = actions.payload.dateTime
                }
            })
        }
    default:
      return state;
  }
};

const addBlog = (dispatch) => (title, content) => {
  let today = new Date();
  let date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let dateTime = date + ' ' + time;
  dispatch({ type: 'add_post', payload: { title, content, dateTime } });
};

const deletePost = (dispatch) => (id) => {
  dispatch({ type: 'delete_post', payload: { id } });
};

const editPost = (dispatch) => (id, content, title) => {
    let today = new Date();
    let date =
      today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = date + ' ' + time;
    dispatch({type: 'edit_post', payload: {id, content, title, dateTime}})
}

export const { Context, Provider } = createDataContext(
  dataReducer,
  { addBlog, deletePost, editPost },
  {
    blogData: INITIAL_STATE
  }
);
