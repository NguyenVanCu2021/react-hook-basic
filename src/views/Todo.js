import React from 'react';

function Todo(props) {
    // const { todos, title} = props;
    const todos = props.myData;
    const handleDeleteData = props.handleDeleteData;

    const handleDelete = (id) => {
      handleDeleteData(id)
    }

    return (
        <div className="todos-container">
            <div className="title">
              {props.title}
            </div>
            {
              todos.map(todo => {
                return (
                  <div key={todo.id}>
                    <li className="todos-child">
                      {todo.title} 
                      &nbsp;
                      <span onClick={() => handleDelete(todo.id)}>x</span>
                    </li>
                  </div>
                )
              })
            }
          <hr />
        </div>
    );
}

export default Todo;