import { Box, Text, Flex, Card } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useFindAllRaces } from '../../lib/hooks'
import RaceCard from '../../components/raceCard'

const RacesMain = () => {
  const { races } = useFindAllRaces()

  return (
    <Box width="100%" height="100%" bg="green">
      <Box width="100wh" height="100px" bg="red">
        <Flex align="end" justifyContent="end">
          <Box padding="20px 20px 0 0">
            <NextLink href="/races/createrace">
              <Button>Agregar Carrera</Button>
            </NextLink>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex>
          {races?.map((race) => (
            <Box margin="20px">
              {console.log(race)}
              <RaceCard data={race.name} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default RacesMain
