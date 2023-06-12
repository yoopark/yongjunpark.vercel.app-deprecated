import { PeopleSvg } from './PeopleSvg';
import styles from './TeamLabel.module.css';

type TeamLabelProps = {
  count: number;
};

export const TeamLabel = ({ count }: TeamLabelProps) => {
  return (
    <div className={styles.label}>
      <PeopleSvg width="12px" height="12px" />
      <span className={styles.count}>{count}</span>
    </div>
  );
};
