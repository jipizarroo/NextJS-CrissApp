import { Box, Text, Flex, Card } from '@chakra-ui/layout'
import {
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
} from '@chakra-ui/react'
import { usePublicFoods } from '../lib/hooks'

const Home = () => {
  const { publicfoods } = usePublicFoods()
  return <Box>Olis</Box>
}

export default Home
