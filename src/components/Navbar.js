import React, { useState } from "react";
import { Avatar, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { ChatIcon, SettingsIcon } from "@chakra-ui/icons";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const [toggleChat, setToggleChat] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Flex
        w="60px"
        h="100%"
        bg="blackAlpha.900"
        // borderEnd="1px solid"
        // borderColor="whiteAlpha.200"
        direction="column"
        align="center"
      >
        <Avatar
          src=""
          _hover={{
            bgColor: "gray",
            cursor: "pointer",
          }}
          size="sm"
          m={3}
        />
        <IconButton
          _hover={{
            bgColor: "blue",
          }}
          bgColor="blackAlpha.100"
          size="lg"
          m={2}
          // onClick={() => setToggleChat(!toggleChat)}
          icon={<ChatIcon />}
        />

        <Spacer />
        <IconButton
          _hover={{
            bgColor: "blue",
          }}
          bgColor="blackAlpha.100"
          m={2}
          size="lg"
          icon={<RiLogoutCircleLine />}
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("jwt");
            navigate("/");
          }}
        />
      </Flex>
    </>
  );
};

export default Navbar;
