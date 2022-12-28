import { Box, Text, Flex, Card } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const CreateStrategy = () => {
  const router = useRouter()

  const data = router.query

  return (
    <Box width="100%" height="100%" bg="green">
      oli
    </Box>
  )
}

export default CreateStrategy
