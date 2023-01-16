import { useEffect, useState } from 'react'
import { Box, Text, Flex } from '@chakra-ui/layout'
import { Button, Select } from '@chakra-ui/react'
import { useRouter } from 'next/router'
// import Select from 'react-select'

import FoodCard from '../../components/foodCard'
import { useFindAllPublicFoods } from '../../lib/hooks'
import { foodsData } from '../../prisma/firstFoods'

const CreateStrategy = () => {
  const { publicfoods } = useFindAllPublicFoods()
  const router = useRouter()
  const [pickedFoodsIds, setPickedFoodsIds] = useState([])
  const [pickedFoods, setPickedFoods] = useState([])

  const handlePickedFood = (e) => {
    e.preventDefault()
    const pickedFoodId = Number(e.target.value)
    const pickedFood = publicfoods.find(
      (element) => element.id === pickedFoodId
    )
    setPickedFoodsIds([...pickedFoodsIds, { pickedFoodId, picked: true }])
    setPickedFoods([...pickedFoods, { pickedFood, picked: true }])
  }

  const handlDeleteFood = (e, id) => {
    e.preventDefault()
    setPickedFoods(pickedFoods.filter((food) => food.id !== id))
  }
  const data = router.query

  return (
    <Box width="100vw" height="100vh" bg="green">
      <Box width="300px" paddingTop="100px">
        <Select
          placeholder="Seleccione las opciones"
          onChange={(e) => handlePickedFood(e)}
        >
          {publicfoods?.map((food) => (
            <option key={food?.id} value={food?.id}>
              {food?.brand ? food.brand : 'Generico'} - {food?.name}
            </option>
          ))}
        </Select>
      </Box>
      <Text margin="20px"> Comidas Seleccionadas </Text>
      {pickedFoods.map((food) => (
        <FoodCard
          food={food}
          key={food.id}
          id={food.id}
          handlDeleteFood={handlDeleteFood}
        />
      ))}
    </Box>
  )
}

export default CreateStrategy
