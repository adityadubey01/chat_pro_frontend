import React, { useState } from 'react'
import { Menu, Tooltip, MenuButton , MenuList , MenuItem , MenuDivider, Drawer, useDisclosure } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Box , Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useHistory } from 'react-router-dom';
//import { useDisclosure } from '@chakra-ui/hooks'

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState("");
  const [loadingchat, setLoadingChat] = useState("");
  
  const { user } = ChatState();
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  }

  return (<>
    <Box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
    >
      <Tooltip label="Serach Users to chat" hasArrow placement='bottom-end'>
        <Button variant="ghost">
          <i class="fas fa-search"></i>
          <Text d={{ base: "none", md: "flex" }} px="4">
            Search User
          </Text>
        </Button>
      </Tooltip>

      <Text fontSize="2xl" fontFamily="Work sans">
        Chat-A-Ture
      </Text>
      <div>
        <Menu>
          <MenuButton p={1}>
            <BellIcon fontSize="2xl" m={1} />
          </MenuButton>
          {/* <MenuList></MenuList> */}
        </Menu>

        <Menu>
          <MenuButton as = {Button} rightIcon = {<ChevronDownIcon />}>
            <Avatar
              size="sm"
              cursor="pointer"
              name={user.name}
              src={user.pic}
            />
          </MenuButton>
          <MenuList>
            <ProfileModal user = {user}>
              <MenuItem>My Profile</MenuItem>
            </ProfileModal>
            <MenuDivider/>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Box>

    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>

    </Drawer>
    </>
  )
}

export default SideDrawer;