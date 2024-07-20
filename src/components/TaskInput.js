import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';
import { Form, Button } from 'react-bootstrap';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      dispatch(addTask({ name: taskName, priority }));
      setTaskName('');
      setPriority('Medium');
    }
  };

  return (
    <Form className="task-input p-4 rounded shadow-sm bg-white">
      <Form.Group controlId="formTaskName">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formTaskPriority">
        <Form.Label>Priority</Form.Label>
        <Form.Control
          as="select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" onClick={handleAddTask}>Add Task</Button>
    </Form>
  );
};

export default TaskInput;
