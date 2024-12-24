
import {ChangeEvent, useEffect} from 'react'
import { Button } from './Button'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./App/store";
import {invalidAC, isInputChangedAC, maxValueAC, startValueAC} from "./settingsReducer";
import {setCountAC} from "./countReducer";


export const Settings = () => {
  const {maxValue, startValue, invalid, isInputChanged} = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();
  useEffect(() => {
  }, [startValue]);

  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, +e.currentTarget.value)
    dispatch(maxValueAC(value))
    dispatch(invalidAC(value <= startValue || value <= 0))
    dispatch(isInputChangedAC(true))
  }
  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max( 0, +e.currentTarget.value)
    dispatch(startValueAC(value))
    dispatch(invalidAC(value >= maxValue || value < 0))
    dispatch(isInputChangedAC(true))
  }
  const getInputInvalid = (invalid: boolean) => {
  return invalid ? 'error' : ''
  }
  const onApply = () => {
    if (!invalid) {
      dispatch(setCountAC(startValue));
      dispatch(startValueAC(startValue));
      dispatch(isInputChangedAC(false));
    }
  }
  return (
    <div className="counter">
      <div className="box-number">
        <label className="discription">
          max value:
          <input className={getInputInvalid(invalid)} type="number" value={maxValue} onChange={onChangeMaxHandler} />
        </label>
        <label className="discription">
          start value:
          <input className={getInputInvalid(invalid)} type="number" value={startValue} onChange={onChangeStartHandler} />
        </label>
      </div>
      <div className="box__button">
        <Button title={'set'} onClick={onApply} disabled={invalid} className="button" />
      </div>
    </div>
  )
}
