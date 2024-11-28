import React from 'react'; 
import Header from './header';
import Content from './content'   

const TaskLogging : React.FC = () => {  
  return (

    <div className="notificationsFrame">
     <div className="panel">
        <Header/>
        <Content/>
     </div>
    </div>
);

}

export default TaskLogging;
