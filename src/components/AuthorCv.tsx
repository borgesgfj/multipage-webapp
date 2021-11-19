import {
  Center,
  Link,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Flex,
  HStack,
  Stack,
  Image,
  AspectRatio,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaResearchgate } from "react-icons/fa";
import { GiBrazilFlag } from "react-icons/gi";
import SkillCard from "./SkillCard";

export default function AuthorCv() {
  return (
    <Grid templateColumns="1fr 2fr" gap="3" mt={3}>
      <GridItem span={{ base: 2, md: 1 }}>
        <SideBar />
      </GridItem>
    </Grid>
  );
}

function AuthorCardCv() {
  return (
    <Box
      w="45%"
      bg={useColorModeValue("gray.200", "gray.800")}
      overflow={"hidden"}
      boxShadow="2xl"
    >
      <Center w="full" flexDirection="column">
        <Box
          h={"13rem"}
          w={"full"}
          bg={useColorModeValue("black", "gray.300")}
          objectFit={"cover"}
        ></Box>
        <Flex justify={"center"} mt="-5rem">
          <AspectRatio width="10rem" ratio={1}>
            <Image
              rounded="full"
              src={"/images/card.jpg"}
              alt={"Author"}
              objectFit="cover"
              css={{
                border: "2px solid white",
              }}
            />
          </AspectRatio>
        </Flex>
      </Center>
      <Box p={3}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading
            fontSize={{ base: "1rem", sm: "2rem" }}
            fontWeight={500}
            fontFamily={"body"}
          >
            Gilberto Borges{" "}
          </Heading>
          <Text color={"gray.500"} fontSize={{ base: "0.75rem", sm: "1rem" }}>
            Software Engineer | Physicist Ph.D
          </Text>
          <Text
            color={useColorModeValue("gray.700", "white")}
            fontSize={{ base: "0.5rem", sm: "0.85rem" }}
            maxW="80%"
          >
            Brazilian, Physicist Ph.D, Internship Software Engineer at PodCodar
            Code School.
          </Text>
        </Stack>

        <Stack direction={"row"} justifyContent="center" spacing={8} my="5">
          <IconButton
            as={Link}
            href="https://www.linkedin.com/in/gilberto-borges-a048439a/"
            variant="ghost"
            size="md"
            isRound={false}
            aria-label="Author LinkedIn"
            icon={<FaLinkedin size="md" />}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "xl",
            }}
            isExternal
          />
          <IconButton
            as={Link}
            href="https://github.com/borgesgfj"
            variant="ghost"
            size="md"
            isRound={true}
            aria-label="Author github"
            icon={<FaGithub size="md" />}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            isExternal
          />
          <IconButton
            as={Link}
            href="https://www.researchgate.net/profile/Gilberto-Borges-2"
            variant="ghost"
            size="md"
            isRound={false}
            aria-label="Author Research Gate"
            icon={<FaResearchgate size="md" />}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            isExternal
          />
        </Stack>
      </Box>
      <Box
          h={"0.5rem"}
          w={"full"}
          bg={useColorModeValue("black", "gray.300")}
          objectFit={"cover"}
        ></Box>
    </Box>
  );
}

function SideBar() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <AuthorCardCv />
      <SkillCard />
    </Flex>
  );
}
