import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { deleteTask } from '../redux/actions/taskActions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  if (!Array.isArray(tasks)) {
    return <div>No tasks available</div>;
  }

  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item key={task.id} className={`list-group-item-${task.priority.toLowerCase()}`}>
          <Row>
            <Col>{task.name} <span className={`badge badge-${task.priority.toLowerCase()}`}>{task.priority}</span></Col>
            <Col xs="auto">
              <Button
                variant="danger"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
