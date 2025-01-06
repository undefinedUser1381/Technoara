import { createContext } from "react";

const dataContext = createContext({
  basketSteps: 1,
  nextStep: () => {},
  changeStep: () => {},
  updatePostStatus: () => {},
  basketData : {
    products : [],
    postWay : "" ,
    locationData : {},
    moreInfos : {}
  },
});

export default dataContext
