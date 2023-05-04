import './App.css';
import GeneralWrapper from './components/GeneralWrapper/GeneralWrapper';
import Todolist from './components/toDoList/handleAddTask';

function App() {
  return (
    <>
      <GeneralWrapper>
        <Todolist></Todolist>
      </GeneralWrapper>
    </>
    
  );
}

export default App;
