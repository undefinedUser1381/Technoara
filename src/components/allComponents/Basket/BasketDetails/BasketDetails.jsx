import React , {memo, useContext} from 'react'
import TopBox from './TopBox/TopBox';
import BottomBox from './BottomBox/BottomBox';
import dataContext from '@/context/dataContext/dataContext';

const BasketDetails = memo(() => {

    const dataBasket = useContext(dataContext)

    console.log(dataBasket.basketData.postWay , "afa");

    console.log("Basket detail");
    return(
      <div>
        <TopBox />
        <BottomBox />
      </div>
    )
})

export default BasketDetails;