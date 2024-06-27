import React from "react";

const PageWrapper = ({ children, style }) => {
  return (
    <main className="page-wrapper" style={style}>
      {children}
    </main>
  );
};

export default PageWrapper;
