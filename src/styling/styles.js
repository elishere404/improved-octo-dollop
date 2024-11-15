import styled, { createGlobalStyle } from "styled-components";
import backgroundImageLight from "../assets/dark.png"; 
import backgroundImageDark from "../assets/light.png";


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



export { 
  AppContainer, 
  ContentContainer, 
  Header, 
  InputContainer, 
  Input, 
  Flex, 
  ThemeToggle, 
  TodoList, 
  TodoItem, 
  Checkbox, 
  TodoText, 
  DeleteButton, 
  FooterContainer, 
  FooterText, 
  FooterButton,
  lightTheme,
  darkTheme,
  GlobalStyle
};
