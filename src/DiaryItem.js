import { useState, useRef } from "react";

const DiaryItem = ({
  onEdit,
  onRemove,
  name,
  content,
  emotion,
  created_date,
  id,
}) => {
  const [editor, setEditor] = useState(false);
  const toggleEditor = () => setEditor(!editor);

  const [editContent, SetEditContent] = useState(content);
  const editContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setEditor(false);
    SetEditContent(content);
  };

  const handleCompleteEdit = () => {
    if (editContent.length < 1) {
      alert("내용은 1글자 이상 입력해 주세요.");
      editContentInput.current.focus();
      return;
    }

    if (window.confirm("일기를 수정하시겠습니까?")) {
      onEdit(id, editContent);
      toggleEditor();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {name} | 기분: {emotion}
        </span>
        <div className="date">{new Date(created_date).toLocaleString()}</div>
      </div>
      <div className="content">
        {editor ? (
          <>
            <textarea
              ref={editContentInput}
              value={editContent}
              onChange={(e) => SetEditContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      <div className="btns">
        {editor ? (
          <>
            <button onClick={handleCompleteEdit}>완료</button>
            <button onClick={handleQuitEdit}>취소</button>
          </>
        ) : (
          <>
            <button onClick={toggleEditor}>수정</button>
            <button onClick={handleRemove}>삭제</button>
          </>
        )}
      </div>
    </div>
  );
};

export default DiaryItem;
