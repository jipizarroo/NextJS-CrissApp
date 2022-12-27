import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Text, Flex, Card } from '@chakra-ui/layout'
import { Button, Input } from '@chakra-ui/react'
import { createRaceAPI } from '../../lib/mutation'
import { validateToken } from '../../lib/auth'
import { useMe } from '../../lib/hooks'

const CreateRaceForm = () => {
  const [name, setName] = useState(null)
  const [stage1, setStage1] = useState(null)
  const [stage2, setStage2] = useState(null)
  const [stage3, setStage3] = useState(null)
  const [stages, setStages] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  const { user } = useMe()
  const belongsTo = user?.id

  const router = useRouter()

  useEffect(() => {
    setStages({
      stage1,
      stage2,
      stage3,
    })
  }, [stage1, stage2, stage3, user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    await createRaceAPI({ name, stages, belongsTo })

    setIsLoading(false)

    // router.push('/races')
  }

  return (
    <Box height="100vh" width="100vw" bg="grey" color="white">
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Nombre carrera"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Distancia Etapa 1"
            type="number"
            onChange={(e) => setStage1(e.target.value)}
          />
          <Input
            placeholder="Distancia Etapa 2"
            type="number"
            onChange={(e) => setStage2(e.target.value)}
          />
          <Input
            placeholder="Distancia Etapa 3"
            type="number"
            onChange={(e) => setStage3(e.target.value)}
          />
          <Button
            type="submit"
            bg="green.500"
            isLoading={isLoading}
            sx={{ '&:hover': { bg: 'green.300' } }}
          >
            Crear carrera
          </Button>
        </form>
      </Flex>
    </Box>
  )
}
export default CreateRaceForm
