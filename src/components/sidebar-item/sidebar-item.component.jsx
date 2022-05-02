import React from 'react';
import "./sidebar-item.styles.scss";


const SidebarItem = ({text , children , clickable ,light,lang}) => {
  return (
    <div className="sidebar-item"  title={!clickable ? "In Progress" : null}
    style={{
      cursor: clickable ? "pointer" : "not-allowed" 
    }}
    >
      {children} <h3 style={{
        color:light ? "var(--dark)" : "var(--light)"
      }}>{text}{lang ? "(en)" : null}</h3>
    </div>
  )
}


export default SidebarItem;