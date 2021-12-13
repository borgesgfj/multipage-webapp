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
    <Grid templateColumns="1fr 2fr" gap="3" my={3}>
      <GridItem span={{ base: 2, md: 1 }}>
        <SideBar />
      </GridItem>
      <GridItem span={{ base: 2, md: 1 }}>
        <Grid w="90%" gap="8">
          <CoverLetter />
          <Experiences />
          <Education />
        </Grid>
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

function CoverLetter() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bg={useColorModeValue("white", "gray.600")}
    >
      <Box h={"0.5rem"} w="100%" bg="blue.500" objectFit={"cover"}></Box>
      <Stack mt={2} spacing={2} px="2">
        <Heading
          as="h2"
          color={useColorModeValue("gray.700", "white")}
          fontSize="4xl"
          fontFamily="Roboto"
        >
          Cover Letter
        </Heading>
        <Text
          color={useColorModeValue("gray.700", "white")}
          fontSize="2xl"
          fontFamily="Times New Roman"
        >
          Hi, my name is Gilberto, I&apos;m software engineer and physicist
          Ph.D.
        </Text>
        <Text
          color={useColorModeValue("gray.700", "white")}
          fontSize="2xl"
          fontFamily="Times New Roman"
        >
          I started my software engineer studies in 2021 at PodCodar Code School
          with focus in Front-End delopment.
        </Text>
        <Text
          color={useColorModeValue("gray.700", "white")}
          fontSize="2xl"
          fontFamily="Times New Roman"
        >
          My initial studies topcis included: vanilla JavaScript, CSS, HTML 5,
          programming logic and also tools like Git, Bootstrap, API Rest,
          React.js, Next.js and Chakra-UI.
        </Text>
        <Text
          color={useColorModeValue("gray.700", "white")}
          fontSize="2xl"
          fontFamily="Times New Roman"
        >
          Currently I&apos;m software engineer at PodCodar where I work
          developing the new web app of this community.
        </Text>
        <Text
          color={useColorModeValue("gray.700", "white")}
          fontSize="2xl"
          fontFamily="Times New Roman"
        >
          I&apos;m a strongly motivated person which like to learning and solve
          problems that require creativity and logical reasoning.
        </Text>
        <Text
          color={useColorModeValue("gray.700", "white")}
          fontSize="2xl"
          fontFamily="Times New Roman"
        >
          Thanks for visit my CV, and I hope we could be in contact.
        </Text>
      </Stack>
      <Box h={"0.5rem"} w="100%" bg="blue.500" objectFit={"cover"}></Box>
    </Flex>
  );
}

function Experiences() {
  return (
    <Flex
      flexDirection="column"
      bg={useColorModeValue("white", "gray.600")}
    >
      <Box h={"0.5rem"} w="100%" bg="pink.500" objectFit={"cover"}></Box>
      <Stack mt={2} spacing={6} px="2">
        <Heading
          as="h2"
          color={useColorModeValue("gray.700", "white")}
          fontSize="4xl"
          fontFamily="Roboto"
        >
          Professional Experiences
        </Heading>
        <Box>
          <Heading as="h3" color={useColorModeValue("gray.700", "white")} fontSize="2xl">
            Jr. Software Development Engineer
          </Heading>
          <Text mb="0.5rem" color={useColorModeValue("gray.700", "white")} >
            Podcodar Code School, Nov 2021 - present
          </Text>
          <Text mb="0.5rem" fontSize="1.5rem" color={useColorModeValue("black.500", "white")}>
            Podcodar is a technology education community focused on training professionals. Besides acts as developer in Podcodar web platform project, I&apos;m also monitor in initial study clicle of community (Mentoring track).
          </Text>
        </Box>
        <Box>
          <Heading as="h3" color={useColorModeValue("gray.700", "white")} fontSize="2xl">
            Substitute Professor
          </Heading>
          <Text mb="0.5rem" color={useColorModeValue("gray.700", "white")} >
            Federal University of Uberlândia (UFU), Mar 2019 - Jan 2021
          </Text>
          <Text mb="0.5rem" fontSize="1.5rem" color={useColorModeValue("black.500", "white")}>
            Here I worked as substitute professor vinculated to Physics Institute. I taught basic physics classes to engineering and exact science students.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" color={useColorModeValue("gray.700", "white")} fontSize="2xl">
            Substitute Professor
          </Heading>
          <Text mb="0.5rem" color={useColorModeValue("gray.700", "white")} >
            Federal University of Uberlândia (UFU), Mar 2013 - Mar 2014
          </Text>
          <Text mb="0.5rem" fontSize="1.5rem" color={useColorModeValue("black.500", "white")}>
            Here I worked as substitute professor vinculated to Physics Institute. I taught basic physics classes to engineering and exact science students.
          </Text>
        </Box>
      </Stack>
      <Box h={"0.5rem"} w="100%" bg="pink.500" objectFit={"cover"}></Box>
    </Flex>
  );
}

function Education() {
  return (
    <Flex
      flexDirection="column"
      bg={useColorModeValue("white", "gray.600")}
    >
      <Box h={"0.5rem"} w="100%" bg="red.600" objectFit={"cover"}></Box>
      <Stack mt={2} spacing={6} px="2">
        <Heading
          as="h2"
          color={useColorModeValue("gray.700", "white")}
          fontSize="4xl"
          fontFamily="Roboto"
        >
          Education
        </Heading>
        <Box>
          <Heading as="h3" color={useColorModeValue("gray.700", "white")} fontSize="2xl">
            Physics Ph.D
          </Heading>
          <Text mb="0.5rem" color={useColorModeValue("gray.700", "white")} >
            Federal University of Minas Gerais (UFMG), Mar 2014 - Apr 2018
          </Text>
          <Text mb="0.5rem" fontSize="1.5rem" color={useColorModeValue("black.500", "white")}>
            During my Ph.D I developed reserach in experiemental Quantum optics.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" color={useColorModeValue("gray.700", "white")} fontSize="2xl">
            Master Degree in Physics
          </Heading>
          <Text mb="0.5rem" color={useColorModeValue("gray.700", "white")} >
          Federal University of Minas Gerais (UFMG), Mar 2011 - Jun 2014
          </Text>
          <Text mb="0.5rem" fontSize="1.5rem" color={useColorModeValue("black.500", "white")}>
            During my Master degree I developed reserach in experiemental Quantum optics.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" color={useColorModeValue("gray.700", "white")} fontSize="2xl">
            Material Physics, Bachelor
          </Heading>
          <Text mb="0.5rem" color={useColorModeValue("gray.700", "white")} >
            Federal University of Uberlândia (UFU), Mar 2007 - Dez 2010
          </Text>
          <Text mb="0.5rem" fontSize="1.5rem" color={useColorModeValue("black.500", "white")}>
            During my undergraduate I developed reserach in Scientif Iniciation programm studying light emission properties of organic coumpounds.
          </Text>
        </Box>
      </Stack>
      <Box h={"0.5rem"} w="100%" bg="red.600" objectFit={"cover"}></Box>
    </Flex>
  );
}