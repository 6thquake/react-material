import react from 'react'
import FlexGrid from 'material-ui/Grid'
import RMgrid from '../RMgrid'

function Grid(props){
  const {type, ...other} = props
  const Component = type === 'float'? RMgrid : FlexGrid
  return (
    <Component {...other}/>
  )
}
export default Grid