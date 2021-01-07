import React, { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import styles from "../styles/Filter.module.css";
export default function ActiveFilters() {
  const { filters, dispatch } = useContext(FilterContext);
  return (
    <>
      {filters.length > 0 && (
        <div className={styles.activeFilters}>
          <ul className={styles.filters}>
            {filters.map((filter) => {
              return (
                <li key={filter} className={styles.filter}>
                  {filter}
                  <button
                    onClick={() => {
                      dispatch({ type: "REMOVE_FILTER", payload: { filter } });
                    }}
                    className={styles.rmF}
                  >
                    <img src="./images/icon-remove.svg" alt="" />
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              dispatch({ type: "CLEAR_ALL", payload: {} });
            }}
            className={styles.clear}
          >
            Clear
          </button>
        </div>
      )}
    </>
  );
}
