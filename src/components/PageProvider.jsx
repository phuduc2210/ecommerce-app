import React, { useState } from "react";
import { CoreContextProvider } from "../common/CoreProvider";
// import PropTypes from 'prop-types'

const PageProvider = (props) => {
  const [carts, setCarts] = useState(0);
  const [orders, setOrders] = useState(10);
  console.log('============= test')

  const data = {
    carts,
    setCarts,
    orders,
    setOrders,
    ...props,
  };
  return <CoreContextProvider {...data}>{props.children}</CoreContextProvider>;
};

// PageProvider.defaultProps = {}

// PageProvider.propTypes = {}

export default React.memo(PageProvider);
