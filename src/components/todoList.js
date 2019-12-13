import React from 'react';

class TodoList extends React.Component{
  render(){
    return(
      <div>
        <div className="header">
          <Header />
        </div>
        <div>
          <Main />
        </div>
      </div>
    )
  }
}

export default TodoList;