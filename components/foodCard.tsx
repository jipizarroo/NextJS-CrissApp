import { Box, Flex } from '@chakra-ui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const FoodCard = ({ food, handlDeleteFood, id }) => {
  return (
    <Box id={id} width="300px" height="max-content" background="blue">
      <Flex minWidth="max-content" alignItems="end">
        <Box margin="8px 8px 0 0" cursor="pointer">
          <AiOutlineCloseCircle
            size={25}
            onClick={(e) => handlDeleteFood(e, food.id)}
          />
        </Box>
      </Flex>
      <Box padding="10px">
        {food.brand} - {food.name}
        <Box>Calorias: {food.calories}</Box>
        <Box>Carbs: {food.calories}</Box>
      </Box>
    </Box>
  )
}

export default FoodCard
