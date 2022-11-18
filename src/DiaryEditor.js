import React, { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const [state, setState] = useState({ name: "", content: "", emotion: 1 });
  const nameInput = useRef();
  const contentInput = useRef();

  const handleChangeState = (e) => {
    // console.log(state);
    // console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.name.length < 1) {
      alert("이름은 1글자 이상 입력해 주세요.");
      nameInput.current.focus();
      return;
    }

    if (state.content.length < 1) {
      alert("내용은 1글자 이상 입력해 주세요.");
      contentInput.current.focus();
      return;
    }

    onCreate(state.name, state.content, state.emotion);
    alert("저장 성공 :)");
    setState({
      name: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={nameInput}
          name="name"
          value={state.name}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div className="emotionBtn">
        <span>오늘의 기분 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
