const OddEven = ({ count }) => {
  return <div>{count % 2 === 0 ? "짝수" : "홀수"}</div>;
};

export default OddEven;
