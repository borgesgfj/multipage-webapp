import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Progress,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaReact,
  FaHtml5,
  FaGit,
  FaJs,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import { SiChakraui, SiNextdotjs } from "react-icons/si";

export default function SkillCard() {
  return (
    <Center py={6} w="40vW">
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize="1.5rem"
            fontWeight="600"
            fontFamily="Roboto"
            p={2}
            px={3}
            color={useColorModeValue("black.100", "white")}
          >
            Computational Tools
          </Text>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <Stack direction="row" align="center" justify="center">
                <ListIcon as={FaHtml5} color="red.500" fontSize="2rem" />
                <Progress colorScheme="green" w="100%" size="sm" max={10} value={9.5} />
              </Stack>
            </ListItem>

            <ListItem>
              <Stack direction="row" align="center" justify="center">
                <ListIcon as={FaJs} color="yellow.400" fontSize="2rem" />
                <Progress colorScheme="green" w="100%" size="sm" max={10} value={8.5} />
              </Stack>
            </ListItem>

            <ListItem>
              <Stack direction="row" align="center" justify="center">
                <ListIcon as={FaCss3Alt} color="blue.500" fontSize="2rem" />
                <Progress colorScheme="green" w="100%" size="sm" max={10} value={9.0} />
              </Stack>
            </ListItem>

            <ListItem>
              <Stack direction="row" align="center" justify="center">
                <ListIcon as={FaBootstrap} color="purple.500" fontSize="2rem" />
                <Progress colorScheme="green" w="100%" size="sm" max={10} value={9.5} />
              </Stack>
            </ListItem>

            <ListItem>
              <Stack direction="row" align="center" justify="center">
                <ListIcon as={FaReact} color="teal.400" fontSize="2rem" />
                <Progress colorScheme="green" w="100%" size="sm" max={10} value={4.0} />
              </Stack>
            </ListItem>

            <ListItem>
              <Stack direction="row" align="center" justify="center">
                <ListIcon as={SiChakraui} color="teal.300" fontSize="2rem" />
                <Progress colorScheme="green" w="100%" size="sm" max={10} value={3.0} />
              </Stack>
            </ListItem>

            <ListItem>
              <Stack direction="row" align="center" justify="center">
                <ListIcon as={SiNextdotjs} color="black" fontSize="2rem" />
                <Progress colorScheme="green" w="100%" size="sm" max={10} value={3.0} />
              </Stack>
            </ListItem>

            <ListItem>
              <Stack direction="row" align="center" justify="center">
                <ListIcon as={FaPython} color="blue.300" fontSize="2rem" />
                <Progress colorScheme="green" w="100%" size="sm" max={10} value={3.0} />
              </Stack>
            </ListItem>

            <ListItem>
              <Stack direction="row" align="center" justify="center">
                <ListIcon as={FaGit} color="black" fontSize="2rem" />
                <Progress colorScheme="green" w="100%" size="sm" max={10} value={6.0} />
              </Stack>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Center>
  );
}
