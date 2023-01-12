import React from 'react';
import {FilterType, moneyType} from "./Filter";

type propsType = {
    currentMoney: Array<moneyType>
    onClicFilterHandler: (taskId: FilterType) => void
}
function ButtonComponent(props: propsType) {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr: moneyType ,index: number) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.onClicFilterHandler("all")}>all</button>
                <button onClick={() => props.onClicFilterHandler("RUBLS")}>ruble</button>
                <button onClick={() => props.onClicFilterHandler("Dollars")}>dollar</button>
            </div>
        </div>
    );
}

export default ButtonComponent;