const DiaryItem = ({ name, content, emotion, created_date, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {name} | 기분: {emotion}
        </span>
        <div className="date">{new Date(created_date).toLocaleString()}</div>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;
