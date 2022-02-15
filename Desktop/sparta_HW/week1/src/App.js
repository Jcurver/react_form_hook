import React from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadDictFB, addDictFB } from "./redux/modules/dict";

// components
import Home from "./Home";
import Detail from "./Detail";

import NotFound from "./NotFound";

import Spinner from "./Spinner";
function App() {


  const [dictList, setDictList] = React.useState([
    {
      word: "첫번째 단어",
      explain: "이건설명입니다.",
      example: "이건 예시입니다.",
    },
  ]);
  console.log(dictList);
  const dispatch = useDispatch();

  const word = React.useRef(null);
  const explain = React.useRef(null);
  const example = React.useRef(null);

  React.useEffect(() => {
    dispatch(loadDictFB());
  }, []);

  const addDictList = () => {
    dispatch(
      addDictFB({
        word: word.current.value,
        explain: explain.current.value,
        example: example.current.value,
      })
    );
  };

  return (
    <div className="App">
      <Link to="/" exact style={{ textDecoration: "none" }}>
        <Header>JaeHyun's Dictionary</Header>
      </Link>
      <Body>
        <Switch>
          <Route path="/" exact>
            <Home list={dictList} />
          </Route>
          <Route path="/addword" exact>
            <AddContainer>
              <Title>단어 추가하기</Title>
              <InputDiv>
                <WordEx>단어</WordEx>
                <InputBox type="text" ref={word}></InputBox>
                <WordEx>설명</WordEx>
                <InputBox type="text" ref={explain}></InputBox>

                <WordEx>예시</WordEx>
                <InputBox type="text" ref={example}></InputBox>
                <AddButton onClick={addDictList}>추가하기</AddButton>
              </InputDiv>
            </AddContainer>
          </Route>
          <Route path="/detail/:index">
            <Detail />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Body>
    </div>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

const Header = styled.div`
  text-decoration: none;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 30px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: green;
  width: 450px;
  height: 76vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
  padding: 20px;
`;

const WordEx = styled.div`
  font-size: 15px;
`;
const InputBox = styled.input`
  margin-bottom: 20px;
  height: 50px;
`;

const InputDiv = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  padding: 20px;
  height: 340px;
  background-color: orange;
`;
const AddButton = styled.button`
  margin-top: 20px;
  background-color: pink;
  width: 348px;
  height: 30px;
`;
export default App;
