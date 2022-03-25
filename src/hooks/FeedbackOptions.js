function FeedbackOptions({ onCLickBtnGoog, onClickBtnNeutral, onClickBtnBad }) {
  //   console.log(onCLickBtnGoog);
  return (
    <div>
      <button onClick={() => onCLickBtnGoog()}>Good</button>
      <button onClick={() => onClickBtnNeutral()}>Neutral</button>
      <button onClick={() => onClickBtnBad()}>Bad</button>
    </div>
  );
}

export default FeedbackOptions;
