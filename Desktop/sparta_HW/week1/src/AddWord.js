import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";

function AddWord() {

  const [dictList, setDictList] = React.useState([
    {
      word: "첫번째 단어",
      explain: "이건설명입니다.",
      example: "이건 예시입니다.",
    },
  ]);

  // const word = React.useRef(null);
  // const explain = React.useRef(null);
  // const example = React.useRef(null);
  const addDictList = () => {
    setDictList([
      ...dictList,
      {
        word: word.current.value,
        explain: explain.current.value,
        example: example.current.value,
      },
    ]);
  };

  return (
    <>
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
    </>
  );
}

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

export default AddWord;
