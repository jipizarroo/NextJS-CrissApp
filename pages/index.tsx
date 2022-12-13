import { Box, Text, Flex } from '@chakra-ui/layout'
import { usePublicFoods } from '../lib/hooks'
import prisma from '../lib/prisma'

const Home = () => {
  const { publicfoods } = usePublicFoods()
  return (
    <Box>
      <Flex alignItems="center" justifyContent="center">
        <Text>{JSON.stringify(publicfoods)}</Text>
      </Flex>
    </Box>
  )
}

export default Home
