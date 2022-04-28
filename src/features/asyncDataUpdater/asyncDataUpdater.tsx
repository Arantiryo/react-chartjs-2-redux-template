import { useAppDispatch } from "../../app/hooks";
import { getAsyncData } from "./asyncDataUpdaterSlice";
import styles from "./asyncDataUpdater.module.css";

export function AsyncDataUpdater() {
  const DATA_LENGTH = 7;
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(getAsyncData(DATA_LENGTH))}
        >
          Change Async Data
        </button>
      </div>
    </div>
  );
}
