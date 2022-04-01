import React from 'react';
import "./sidebar-item.styles.scss";


const SidebarItem = ({text,children,clickable,light}) => {
  return (
    <div className="sidebar-item" style={{
      cursor: clickable ? "pointer" : "not-allowed"
    }}>
      {children}<h3 style={{
        color:light ? "var(--dark)" : "var(--light)"
      }}>{text}</h3>
    </div>
  )
}

export default SidebarItem;