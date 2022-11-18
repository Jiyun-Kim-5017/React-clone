import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <div>
        {diaryList.map((e) => (
          <DiaryItem key={e.id} {...e} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
