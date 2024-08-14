import React from 'react'
import './css/MenuAdmin.css'

interface MenuAdminProps {
  showMenuAdmin: boolean
}

const MenuAdmin = React.forwardRef<HTMLDivElement, MenuAdminProps>(({ showMenuAdmin }, ref) => {
  return (
    <>
    <div ref={ref} className={`menu-admin ${showMenuAdmin ? 'expanded' : 'hidden'}`}></div>
    </>
  )
})

export default MenuAdmin
