import React, { Fragment, useState } from "react";

import { Header, Container, Form, Button, List } from "semantic-ui-react";

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
        const newTodos: ITodo[] = [...todos];
        newTodos[index].complete = !newTodos[index].complete;
        setTodos(newTodos);
    };

    const handleRemoveToto = (index: number): void => {
        let newTodos: ITodo[] = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <Fragment>
            <Container>
                <Header as="h1">Todo List</Header>
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
                    <Button type="submit">Add</Button>
                </Form>

                <List divided selection>
                    {todos.map((todo: ITodo, index: number) => {
                        return (
                            <Fragment key={index}>
                                <List.Item
                                    style={{
                                        textDecoration: todo.complete
                                            ? "line-through red"
                                            : "",
                                    }}
                                >
                                    {todo.task}
                                    <Button
                                        type="button"
                                        size="small"
                                        className={
                                            todo.complete
                                                ? "ml-4 ui gray button"
                                                : "ml-4 ui blue button"
                                        }
                                        onClick={() =>
                                            handleCompleteTodo(index)
                                        }
                                    >
                                        {" "}
                                        {todo.complete
                                            ? "Incomplete"
                                            : "Complete"}{" "}
                                    </Button>
                                    <Button
                                        type="button"
                                        size="small"
                                        className="ml-4 ui gray button"
                                        onClick={() => handleRemoveToto(index)}
                                    >
                                        Remove
                                    </Button>
                                </List.Item>
                            </Fragment>
                        );
                    })}
                </List>
            </Container>
        </Fragment>
    );
}

export default App;
