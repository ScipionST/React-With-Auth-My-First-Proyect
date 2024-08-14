import React from 'react'
import './css/TableData.css'

interface Column {
  Header: string
  accessor: string
  className?: string
  headerClassName?: string
  cellClassName?: string
}

interface TableDataProps {
  className?: string
  columns: Column[]
  data: Record<string, any>[]
}

const TableData: React.FC<TableDataProps> = ({ className, columns, data }) => {
  return (
    <table className={`table-data ${className || ''}`}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor} className={`${column.className || ''} ${column.headerClassName || ''}`}>
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns?.map((column) => (
              <td key={column.accessor} className={`${column.className || ''} ${column.cellClassName || ''}`}>
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableData
