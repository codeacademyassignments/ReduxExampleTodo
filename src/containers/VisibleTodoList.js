import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos,filter)=>{
  switch(filter){
    case 'SHOW_ALL':
    return todos
    case 'SHOW_COMPLETED':
    return todos.filter(e=>e.completed)
    case 'SHOW_ACTIVE':
    return todos.filter(e=>!e.completed)
    default:
    return todos
  }
}

const mapStateToProps = state=>{
  return {
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    onTodoClick:id=>{
      dispatch(toggleTodo(id));
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;