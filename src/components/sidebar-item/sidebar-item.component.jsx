import React from 'react'
import "./sidebar-item.styles.scss"
const SidebarItem = ({iconURL,text,children,clickable}) => {
  return (
    <div className="sidebar-item" style={{
      cursor: clickable ? "pointer" : "not-allowed"
    }}>
      {children}<h3>{text}</h3>
    </div>
  )
}

export default SidebarItem;