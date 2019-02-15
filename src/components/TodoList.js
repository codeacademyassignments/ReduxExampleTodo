import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {

  const fun = ()=>(index) => {
    onTodoClick(index)
  }
  
  return(
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={fun(index)} />
    ))}
  </ul>
  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList