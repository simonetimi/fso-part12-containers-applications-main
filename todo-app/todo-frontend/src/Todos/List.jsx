import Todo from "./Todo.jsx";

const TodoList = ({ todos, deleteTodo, completeTodo}) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => {
       return <Todo onClickDelete={onClickDelete} onClickComplete={onClickComplete} todo={todo} />
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
