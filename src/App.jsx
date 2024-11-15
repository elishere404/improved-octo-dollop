import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import backgroundImageLight from '/public/assets/dark.png'; 
import backgroundImageDark from '/public/assets/light.png'; 
import { lightTheme, darkTheme } from './styling/themes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
  }
`;

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setTodos([
      { text: "do RE:SCHOOL homework", completed: true },
      { text: "endure my father's hate because i am playing games", completed: false },
      { text: "i really like games", completed: false },
      { text: "express my anger", completed: false },
      { text: "do stuff", completed: false },
    ]);
  }, []);

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([...todos, { text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const handleToggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const activeCount = todos.filter(todo => !todo.completed).length;

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <>
      <GlobalStyle theme={isDarkMode ? darkTheme : lightTheme} />
      <AppContainer isDarkMode={isDarkMode}>
        <Flex>
          <Header>TODO</Header>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? <img src="/assets/sun.png" alt="Light Mode"/> : <img src="/assets/moon.png" alt="Dark Mode"/>}
          </ThemeToggle>
        </Flex>
        <InputContainer>
        <Input
  type="text"
  placeholder="Create a new todo..."
  value={inputText}
  onChange={(e) => setInputText(e.target.value)}
  onKeyDown={handleKeyDown}
  isDarkMode={isDarkMode}
/>

        </InputContainer>
      </AppContainer>
      
      <ContentContainer>
      <TodoList>
  {filteredTodos.map((todo, index) => (
    <TodoItem key={index} isDarkMode={isDarkMode}>
      <Checkbox
        $active={todo.completed}
        onClick={() => handleToggleComplete(index)}
      />
      <TodoText $completed={todo.completed}>
        {todo.text}
      </TodoText>
      <DeleteButton onClick={() => handleDeleteTodo(index)}>
        ✕
      </DeleteButton>
    </TodoItem>
  ))}
</TodoList>

      </ContentContainer>
    </>
  );
}

export default TodoApp;

const AppContainer = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.isDarkMode ? backgroundImageLight : backgroundImageDark})`,
  }
  ,
}))`
  width: 100%;
  height: 300px;
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 220px;
  padding: 20px;
  background-color: ${({ theme }) => theme.todoBg}; /* Adjusts with theme */
  min-height: calc(100vh - 300px);
`;

const Header = styled.h1`
  color: white;
  font-size: 44px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  border: none;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#333" : "white")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;

  &:focus {
    outline: none;
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#444" : "#f7f7f7")};
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 400px;
  justify-content: center;
  width: 100%;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  outline: none;
`;

const TodoList = styled.div`
  width: 100%;
  max-width: 400px;

  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#333" : "white")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};

  &:hover {
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#444" : "#f7f7f7")};
  }
`;



const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: ${({ $active }) => ($active ? "#4caf50" : "transparent")}; /* Green for completed */
  cursor: pointer;
`;

const TodoText = styled.span`
  flex: 1;
  margin-left: 10px;
  color: black;
  ${({ $completed }) => $completed && `text-decoration: line-through; color: #434242;`} /* Gray color if completed */
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #a9a9a9;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  &:hover {
    color: #434242; 
  }
`;

const FooterContainer = styled.div`
  padding: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.footerBg}; /* Adjusts with theme */
  border-top: 1px solid ${({ theme }) => theme.todoBorder};
`;

const FooterText = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
  align-items: center;
  gap: 10px;
`;

const FooterButton = styled.button`
  background: none;
  border: none;
  color: gray;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  &:hover {
    color: #434242; 
  }
`;

