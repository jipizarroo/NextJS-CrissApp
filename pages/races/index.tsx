import { Box, Text, Flex, Card } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useFindAllRaces } from '../../lib/hooks'
import RaceCard from '../../components/raceCard'

const RacesMain = () => {
  const { races } = useFindAllRaces()

  const handleRacePick = (e) => {
    e.preventDefault()
  }

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
            <NextLink
              href={{
                pathname: '/strategy/createstrat',
                query: race,
              }}
              as="/strategy/createstrat"
              key={race.id}
            >
              <Box margin="20px" cursor="pointer">
                <RaceCard data={race.name} />
              </Box>
            </NextLink>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default RacesMain
