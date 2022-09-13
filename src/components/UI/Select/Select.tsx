import React from "react";
import BackgroundGradientVisible from "../BackgoundGradient/BackgoundGradientVisible";
import ReactPortal from "../../ReactPortal/ReactPortal";
import classes from './Select.module.scss';

interface SelectProps {
    handleVisibility: Function;
}

const Select = ({handleVisibility}: SelectProps) => {

    const setYearHandler = () => {

    }

    return(
        <ReactPortal wrapperId="root">
            <BackgroundGradientVisible>
                <div onClick={() => handleVisibility((prev) => !prev)} className={classes.select}>
                    <div className={classes.select__container}>
                        <label className={classes.select__label}>
                            Filter by year
                        </label>
                        <select className={classes.select__select} onChange={setYearHandler}>
                            <option value='2022'>2022</option>
                            <option value='2021'>2021</option>
                            <option value='2020'>2020</option>
                            <option value='2019'>2019</option>
                        </select>
                        <div className={classes["select__close-btn"]}>
                            x
                        </div>
                    </div>
                </div>
            </BackgroundGradientVisible>
        </ReactPortal>
    )    
}

export default Select;