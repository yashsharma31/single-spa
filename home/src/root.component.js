import React from "react";
import styled from "@emotion/styled";
import useStore from "../../src/store";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  background: ${(props) => (props.theme === "dark" ? "#2c3e50" : "white")};
  color: ${(props) => (props.theme === "dark" ? "white" : "#2c3e50")};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background: #2980b9;
  }
`;

export default function Root(props) {
  const { theme, setTheme } = useStore();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Container>
      <Title>Welcome to Dashboard Home</Title>
      <Card theme={theme}>
        <p>This is the home page of your micro frontend application.</p>
        <p>Current theme: {theme}</p>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </Card>
    </Container>
  );
}
