import React from "react";
import PageProvider from "./PageProvider";
import Navbar from "./Navbar";
// import PropTypes from 'prop-types'

const NavbarContent = (props) => {
    
  return (
    <PageProvider>
      <Navbar />
    </PageProvider>
  );
};

// NavbarContent.defaultProps = {}

// NavbarContent.propTypes = {}

export default React.memo(NavbarContent);
