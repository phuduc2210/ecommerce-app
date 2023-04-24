import { useContext } from "react";
import { CoreContext } from "./CoreProvider";

const useCoreContext = () => {
  console.log('============= test')
  return useContext(CoreContext);
};

export default useCoreContext;
