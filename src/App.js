import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";

//https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((el) => {
      return {
        name: el.email,
        content: el.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []); //빈배열 인수 넣으면 마운트 시에 실행

  const onCreate = useCallback((name, content, emotion) => {
    const created_date = new Date().getTime();

    const newItem = {
      name,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData((data) => [newItem, ...data]); //함수형 업데이트
  }, []);

  const onRemove = useCallback((targetId) => {
    setData((data) => data.filter((e) => e.id !== targetId));
    alert("일기가 삭제되었습니다.");
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((el) =>
        el.id === targetId ? { ...el, content: newContent } : el
      )
    );
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    let emotionSum = 0;
    data.map((el) => (emotionSum += el.emotion));
    const emotionAverage = (emotionSum / data.length).toFixed(2);
    return emotionAverage;
  }, [data.length]);

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>일기 수: {data.length}</div>
      <div>기분 평균 점수: {getDiaryAnalysis}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
