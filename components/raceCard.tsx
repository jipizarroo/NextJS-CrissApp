import { Box } from '@chakra-ui/layout'
import SideBar from './sidebar'

const RaceCard = ({ data }) => {
  return (
    <Box width="200px" height="200px" background="red">
      {data}
    </Box>
  )
}

export default RaceCard
