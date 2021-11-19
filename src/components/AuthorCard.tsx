import {
  Heading,
  Link,
  AspectRatio,
  Container,
  Box,
  IconButton,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  HStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaResearchgate } from "react-icons/fa";

export default function AuthorCard() {
  return (
    <Container maxW="100vw" px={0}>
      <Box
        maxW={"100vW"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        overflow={"hidden"}
      >
        <Box
          h={"20rem"}
          w={"full"}
          bg={useColorModeValue("black", "gray.500")}
          objectFit={"cover"}
        >
          <Heading
            as="h1"
            size="2xl"
            mb="2"
            py="2rem"
            fontFamily="Roboto"
            textAlign="center"
            color={useColorModeValue("white", "black")}
          >
            Welcome to Gilberto&apos;s personal page
          </Heading>
        </Box>
        <Flex justify={"center"} mt="-10rem">
          <AspectRatio width="20rem" ratio={1}>
            <Image
              rounded="50%"
              src={"/images/card.jpg"}
              alt={"Author"}
              objectFit="cover"
              css={{
                border: "2px solid white",
              }}
            />
          </AspectRatio>
        </Flex>

        <Box p={3}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading
              fontSize={{ base: "2rem", sm: "3rem" }}
              fontWeight={500}
              fontFamily={"body"}
            >
              Gilberto Borges{" "}
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "0.75rem", sm: "1rem" }}>
              Software Engineer | Physicist Ph.D
            </Text>
          </Stack>

          <Stack direction={"row"} justifyContent="center" spacing={8} my="5">
            <IconButton
              as={Link}
              href="https://www.linkedin.com/in/gilberto-borges-a048439a/"
              variant="ghost"
              size="xl"
              isRound={false}
              aria-label="Author LinkedIn"
              icon={<FaLinkedin size="3rem" />}
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
              size="xl"
              isRound={true}
              aria-label="Author github"
              icon={<FaGithub size="3rem" />}
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
              size="lg"
              isRound={false}
              aria-label="Author Research Gate"
              icon={<FaResearchgate size="3rem" />}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              isExternal
            />
          </Stack>
          <Flex justifyContent={"center"} alignItems={"center"} mt={2}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={9}
              w={{ base: "full", sm: "auto" }}
            >
              <Button
                as={Link}
                href="/author"
                colorScheme="black"
                variant="outline"
                rounded="md"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                About me
              </Button>
              <Button
                bg={useColorModeValue("#151f21", "white")}
                color={useColorModeValue("white", "black")}
                rounded="md"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Contact me
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
