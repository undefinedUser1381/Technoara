import { createContext } from "react";

const dataContext = createContext({
  basketSteps: 1,
  nextStep: () => {},
  changeStep: () => {},
  updatePostStatus: () => {},
});

export default dataContext
