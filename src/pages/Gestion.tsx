import { useRef, useState } from 'react'
import ButtonAdd from '../components/buttons/ButtonAdd'
import './css/Gestion.css'
import MenuAdmin from '../components/menus/MenuAdmin'
import useOutsideClick from '../components/hooks/UseOutsideClick'
import TableData from '../components/tables/TableData'

interface Apertura {
  username: string
  date: string
}

interface Usuario {
  username: string
  role: string
  added: string
}

const Gestión = () => {
  const [apertura, setApertura] = useState<Apertura[]>([])
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const menuAdminRef = useRef<HTMLDivElement>(null)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  useOutsideClick(menuAdminRef, () => {
    setOpenMenu(false)
  })

  const columnsApertura = [
    { Header: 'Usuario', accessor: 'username', className: 'usuario', cellClassName: 'align-left' },
    { Header: 'Fecha', accessor: 'date', className: 'fecha' }
  ]

  const columnsUsers = [
    { Header: 'Usuario', accessor: 'username', className: 'usuario', cellClassName: 'align-left' },
    { Header: 'Rol', accessor: 'role', className: 'role', cellClassName: 'align-left' },
    { Header: 'Creado el', accessor: 'added', className: 'fecha' }
  ]


    return (
      <>
        <div className="system-cont">
          <MenuAdmin
          ref={menuAdminRef}
          showMenuAdmin={openMenu}
          />
          <div className='system-menu'>
            <h1>Sistema de Administración</h1>
            <ButtonAdd
              type='button'
              alText='abrir menu'
              onClick={handleOpenMenu}
            />
          </div>
          <div className='apertura'>
            <h3>Registro de Apertura</h3>
            <TableData
              className='apertura-table'
              columns={columnsApertura}
              data={apertura}
            />
          </div>
        </div>
      </>
    )
  }
  
  export default Gestión
