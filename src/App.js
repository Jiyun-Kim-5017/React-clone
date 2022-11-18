import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState, useRef } from "react";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (name, content, emotion) => {
    const created_date = new Date().getTime();

    const newItem = {
      name,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((e) => e.id !== targetId);
    setData(newDiaryList);
    alert("일기가 삭제되었습니다.");
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((el) =>
        el.id === targetId ? { ...el, content: newContent } : el
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
