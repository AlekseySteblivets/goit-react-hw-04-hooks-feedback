import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onCLickBtnGoog, onClickBtnNeutral, onClickBtnBad }) {
  return (
    <div className={s.btnWrap}>
      <button className={s.btn} onClick={() => onCLickBtnGoog()}>
        Good
      </button>
      <button className={s.btn} onClick={() => onClickBtnNeutral()}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => onClickBtnBad()}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
