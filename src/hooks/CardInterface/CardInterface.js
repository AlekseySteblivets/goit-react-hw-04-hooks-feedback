import s from './CardInterface.module.css';

export default function Section({ children }) {
  return <div className={s.card}>{children}</div>;
}
