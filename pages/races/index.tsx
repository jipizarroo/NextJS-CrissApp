import { Box, Text, Flex, Card } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useFindAllRaces } from '../../lib/hooks'

const RacesMain = () => {
  const { races } = useFindAllRaces()
  return (
    <Box width="100%" height="100%" bg="green">
      <Box width="100wh" height="100px" bg="red">
        <Flex align="end" justifyContent="end">
          <Box padding="20px 20px 0 0">
            <NextLink href="/races/">
              <Button>Agregar Carrera</Button>
            </NextLink>
          </Box>
        </Flex>
      </Box>
      <Box>
        {races?.length === 0 ? 'No tenemos carreras' : 'Tenemos carreritas :B'}
      </Box>
    </Box>
  )
}

export default RacesMain
