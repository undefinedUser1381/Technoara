import React , {memo} from 'react'
import TopBox from './TopBox/TopBox';
import BottomBox from './BottomBox/BottomBox';

const BasketDetails = memo(() => {

    console.log("Basket detail");
    return(
      <div>
        <TopBox />
        <BottomBox />
      </div>
    )
})

export default BasketDetails;