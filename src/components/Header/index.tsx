import MegaMenu1 from "../MegaMenu1";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Image,
  Link,
  IconButton,
  Flex,
  UnorderedList,
  ListItem,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Input,
  Container,
} from "@chakra-ui/react";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);

  return (
    <Flex
      {...props}
      borderColor="light_green_100_02"
      borderBottomWidth="1px"
      borderStyle="solid"
      bg="orange.50"
      alignItems="center"
      position="relative"
      p="10px"
      as="header"
    >
      <Container
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="1292px"
        gap="20px"
        px="0px"
        mx="auto"
        flexDirection={{ md: "row", base: "column" }}
      >
        <Flex
          w={{ md: "44%", base: "100%" }}
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Flex gap="4px" alignItems="center">
            <Link href="#">
              <Image src="images/img_logo_1.png" alt="Logoone" h="46px" fit="cover" />
            </Link>
            <Image src="images/img_settings.svg" alt="Settings" h="22px" w="56%" fit="contain" />
          </Flex>
          <InputGroup w={{ base: "100%", sm: "52%" }} size="xs">
            <InputLeftElement>
              <Image src="images/img_search.svg" alt="Search" h="14px" w="16px" fit="contain" />
            </InputLeftElement>
            <Input
              colorScheme="white_A700_7a"
              placeholder={"Search"}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              color="gray.700"
              gap="10px"
              borderColor="light_green.200"
              borderWidth="1px"
              borderRadius="8px"
            />
            <InputRightElement>
              {searchBarValue?.length > 0 ? <CloseIcon onClick={() => setSearchBarValue("")} /> : null}
            </InputRightElement>
          </InputGroup>
        </Flex>
        <UnorderedList
          styleType="none"
          gap="28px"
          display="flex"
          alignItems="center"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <ListItem>
            <Link href="#">
              <Text color="blue_gray.900" fontWeight={500}>
                Listings
              </Text>
            </Link>
          </ListItem>
          <ListItem
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
          >
            <Flex gap="4px" alignItems="center" cursor="pointer">
              <Text color="blue_gray.900" fontWeight={500}>
                Features
              </Text>
              <Image src="images/img_arrow_down.svg" alt="Arrowdown" h="20px" w="20px" />
            </Flex>
            {menuOpen ? <MegaMenu1 /> : null}
          </ListItem>
          <ListItem
            onMouseLeave={() => {
              setMenuOpen1(false);
            }}
            onMouseEnter={() => {
              setMenuOpen1(true);
            }}
          >
            <Flex gap="4px" alignItems="center" cursor="pointer">
              <Text color="blue_gray.900" fontWeight={500}>
                Community & News
              </Text>
              <Image src="images/img_arrow_down.svg" alt="Arrowdown" h="20px" w="20px" />
            </Flex>
            {menuOpen1 ? <MegaMenu1 /> : null}
          </ListItem>
          <ListItem
            onMouseLeave={() => {
              setMenuOpen2(false);
            }}
            onMouseEnter={() => {
              setMenuOpen2(true);
            }}
          >
            <Flex gap="4px" alignItems="center" cursor="pointer">
              <Text color="blue_gray.900" fontWeight={500}>
                Resources
              </Text>
              <Image src="images/img_arrow_down.svg" alt="Arrowdown" h="20px" w="20px" />
            </Flex>
            {menuOpen2 ? <MegaMenu1 /> : null}
          </ListItem>
        </UnorderedList>
        <Flex gap="16px" w={{ md: "10%", base: "100%" }} justifyContent="center" alignItems="center">
          <Link href="#">
            <IconButton
              size="xs"
              icon={<Image src="images/img_brightness.svg" />}
              aria-label="brightness"
              boxShadow="sm"
              w="22px"
              borderRadius="10px"
            />
          </Link>
        </Flex>
      </Container>
      <Box h="36px" w="100%" position="relative" px="4px">
        <Link href="#">
          <Image
            src="images/img_bell_01.svg"
            alt="Bellone"
            h="22px"
            position="absolute"
            left="0px"
            bottom="0px"
            right="0px"
            top="0px"
            m="auto"
          />
        </Link>
        <Text
          color="white.a700"
          fontFamily="DM Sans"
          fontSize="12px"
          bg="red.500"
          justifyContent="center"
          display="flex"
          alignItems="center"
          textAlign="center"
          w="16px"
          h="16px"
          position="absolute"
          right="4px"
          top="0px"
          m="auto"
          borderRadius="8px"
        >
          7
        </Text>
      </Box>
      <Box
        h="40px"
        borderColor="black.900_14"
        borderWidth="0.75px"
        borderStyle="solid"
        w="40px"
        borderRadius="20px"
      />
    </Flex>
  );
}