import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// components

function Home(props) {
  let history = useHistory();
  const dispatch = useDispatch();


  console.log("Home",props);

  const dict_lists = useSelector((state) => state.dict.list);
  console.log(dict_lists);

  return (
    <>
      <DictContainer>
        <Title>My DICTIONARY</Title>
        <DictDiv>
          {dict_lists.map((list, idx) => {
            return (
              <Dict
                key={idx}
                onClick={() => {
                  history.push("/detail/" + idx);
                }}
              >
                <WordEx>단어</WordEx>
                <h3>{list.word}</h3>
                <WordEx>설명</WordEx>
                <h3>{list.explain}</h3>
                <WordEx>예시</WordEx>
                <h3>{list.example}</h3>

              </Dict>
            );
          })}
        </DictDiv>
        <Link to="/addword" style={{ textDecoration: "none" }}>
          <AddWordButton>+</AddWordButton>
        </Link>
      </DictContainer>
    </>
  );
}



const DictContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: green;
  width: 450px;
  height: 680px;
  margin: 20px;
`;
const Title = styled.div`
  font-size: 24px;
  color: white;
  padding: 20px;
`;
const AddWordButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 40px;
  top:40px;
  background-color: blue;
  color: white;
  font-size: 40px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;
const Dict = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  padding: 20px;
  height: 260px;
  background-color: orange;
  margin-bottom: 20px;
`;
const DictDiv = styled.div`
  overflow: auto;
`;
const WordEx = styled.div`
  font-size: 15px;
`;
const DeleteButton = styled.button``

export default Home;
