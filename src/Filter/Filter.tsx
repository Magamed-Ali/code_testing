import React, {useState} from 'react';
import ButtonComponent from "./ButtonComponent";

export  type moneyType = {
    banknots: string
    value: number
    number: string
}

export type FilterType = "all" | "Dollars" | "RUBLS"
export const Filter = () => {

    const [money, setMoney] = useState<Array<moneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [nameButton, setNameButton] = useState<FilterType>("all")

    let currentMoney = money;

    if (nameButton === "RUBLS") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")

    } else if (nameButton === "Dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }


    const onClicFilterHandler = ((item: FilterType) => {
        setNameButton(item)
    })

    return (
        <div>
            <ButtonComponent currentMoney={currentMoney} onClicFilterHandler={onClicFilterHandler}/>
        </div>
    );
}
