
import { Button } from './Button'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./App/store";
import {setCountAC} from "./countReducer";
import {maxValueAC, startValueAC} from "./settingsReducer";
import {useEffect} from "react";


export const Counter = () => {
  const {maxValue, invalid, isInputChanged} = useSelector((state: RootState) => state.settings);
  const count = useSelector((state: RootState) => state.count.count)
  const dispatch = useDispatch();
    useEffect(() => {
    }, [count]);

  const incrementHandler = () => {
    if (count < maxValue) {
      dispatch(setCountAC(count + 1))
    }
  }
  const resetHandler = () => {
    dispatch(setCountAC(0))
    dispatch(maxValueAC(0))
    dispatch(startValueAC(0))
  }
  let displayContent = invalid ? (
            <span className="count__number">ERROR</span>
        ) : isInputChanged ? (
            <span>Нажмите Set</span>
        ) : (
            <span className={count === maxValue ? 'count__number' : ''}>{count}</span>
        );
  return (
    <div className="counter">
      <div className="box-number">
        {displayContent}
      </div>
      <div className="box__button">
        <Button
          title={'inc'}
          onClick={incrementHandler}
          disabled={count === maxValue}
          className="button"
        />
        <Button title={'reset'} onClick={resetHandler} disabled={count === 0} className="button" />
      </div>
    </div>
  )
}
