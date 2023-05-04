import React from 'react'
import { FormWrapper, Input, Button} from './todolistStyle';


const AddTask = ({ onSubmit }) => {
    const [task, setTask] = React.useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(task);
      setTask('');
    };
  
    const handleInputChange = (event) => {
      setTask(event.target.value);
    };
    
    return (
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Agregar Nueva Tarea"
          value={task}
          onChange={handleInputChange}
        />
        <Button color type="submit">Agregar tarea</Button>
      </FormWrapper>
    );
  };

export default AddTask