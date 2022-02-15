import React from "react";
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
// 액션 타입을 정해줍니다.
const LOAD = "dict/LOAD";
const CREATE = "dict/CREATE";


const initialState = {

  list: [
    { word: "첫번째 단어", explain: "이건설명입니다.", example: "이건 예시입니다." },
    { word: "두번째 단어", explain: "이건설명입니다.2", example: "이건 예시입니다.22" },
    { word: "세번째 단어", explain: "이건설명입니다.2", example: "이건 예시입니다.33" },
  ],

  // list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// 액션 생성 함수예요.
// 액션을 만들어줄 함수죠!

export function loadDict(dict_list) {
  return { type: LOAD, dict_list };
}

export function createDict(dict) {
  return { type: CREATE, dict };
}

// middlewares
export const loadDictFB = () => {
  return async function (dispatch) {
    const dict_data = await getDocs(collection(db, "dict"));

    let dict_list = [];
    dict_data.forEach((doc) => {
      dict_list.push({ id: doc.id, ...doc.data() });
    });
    dispatch(loadDict(dict_list));
  };
};

export const addDictFB = (dict) => {
  return async function (dispatch) {

    const docRef = await addDoc(collection(db, "dict"), dict);
    const dict_data = { id: docRef.id, ...dict };

    dispatch(createDict(dict_data));
    // console.log((await getDoc(docRef)).data());
  };
};


// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dict/LOAD": {
      return {list: action.dict_list}
      // return { list: action.bucket_list, is_loaded: true };
    }

    case "dict/CREATE": {
      const new_dict_list = [...state.list, action.dict];
      return { ...state, list: new_dict_list }; 
    }

    default:
      return state;

  }
}
