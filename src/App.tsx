import React, { Fragment, useState } from "react";

import "./App.css";
import {
  Header,
  Container,
  Form,
  Button,
  Label,
  List,
} from "semantic-ui-react";

type formElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  task: string;
  complete: boolean;
}

function App() {
  const [taskValue, setTaskValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: formElement): void => {
    e.preventDefault();
    addTodo(taskValue);

    setTaskValue("");
  };

  const addTodo = (task: string): void => {
    const newTodos: ITodo[] = [...todos, { task: task, complete: false }];
    setTodos(newTodos);
  };

  const handleCompleteTodo = (index: number): void => {
    const newTodos: ITodo[] = todos;
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <Container>
        {/* <Header as="h1">Todo List</Header> */}
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <input
              type="text"
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
              placeholder="Task name"
              required
            />
          </Form.Field>
          <Button type="submit" on>
            Add
          </Button>
        </Form>

        <List divided selection>
          {todos.map((todo: ITodo, index: number) => {
            return (
              <Fragment key={index}>
                <List.Item>{todo.task}</List.Item>
                <Button type="button">Complete</Button>
              </Fragment>
            );
          })}
        </List>
      </Container>
    </Fragment>
  );
}

export default App;
