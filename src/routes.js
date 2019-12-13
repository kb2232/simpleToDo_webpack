import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/App';
import Todolist from './components/todoList';

const Routes = ()=>{
  return(
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/api/todolist" exact component={Todolist} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Routes;