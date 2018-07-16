import React from 'react'
const TableContext = React.createContext()
const TableProvider = TableContext.Provider
const TableConsumer = TableContext.Consumer

export {
  TableProvider,
  TableConsumer
}
export default TableContext