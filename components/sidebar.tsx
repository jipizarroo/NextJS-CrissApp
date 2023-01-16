import NextImage from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'

import { FaUserCircle, FaHome, FaRunning } from 'react-icons/fa'

const navMenu = [
  {
    name: 'Home',
    icon: FaHome,
    route: '/',
  },
  {
    name: 'Perfil',
    icon: FaUserCircle,
    route: '/profile',
  },
  {
    name: 'Carreras',
    icon: FaRunning,
    route: '/races',
  },
]

const SideBar = () => {
  return (
    <Box width="250px" height="100vh" bg="black" paddingX="5px" color="grey">
      <Box marginBottom="20px">
        <List spacing={2}>
          {navMenu.map((menu) => (
            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
              <LinkBox>
                <NextLink href={menu.route} passHref>
                  <LinkOverlay>
                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                    {menu.name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default SideBar
