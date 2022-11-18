const DiaryItem = ({ onDelete, name, content, emotion, created_date, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {name} | 기분: {emotion}
        </span>
        <div className="date">{new Date(created_date).toLocaleString()}</div>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default DiaryItem;
