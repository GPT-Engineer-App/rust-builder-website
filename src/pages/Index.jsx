// Personal website for Heidar Anwari
import { Box, Container, Heading, Text, VStack, SimpleGrid, Image, Link, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Header />
        <Biography />
        <BlogSection />
        <ProjectShowcase />
      </VStack>
    </Container>
  );
};

const Header = () => {
  return (
    <Box textAlign="center">
      <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMEhlaWRhciUyMEFud2FyaXxlbnwwfHx8fDE3MTQwNTk4NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Heidar Anwari" mb={4} />
      <Heading as="h1" size="xl">
        Heidar Anwari
      </Heading>
      <Text fontSize="lg" color="gray.500">
        Software Developer | Rust Enthusiast
      </Text>
      <SocialLinks />
    </Box>
  );
};

const SocialLinks = () => {
  return (
    <HStack spacing={4} justify="center" mt={4}>
      <Link href="https://github.com/heidaranwari" isExternal>
        <FaGithub size="28px" />
      </Link>
      <Link href="https://linkedin.com/in/heidaranwari" isExternal>
        <FaLinkedin size="28px" />
      </Link>
      <Link href="https://twitter.com/heidaranwari" isExternal>
        <FaTwitter size="28px" />
      </Link>
    </HStack>
  );
};

const Biography = () => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">Biography</Heading>
      <Text mt={4}>Heidar Anwari is a passionate software developer with a keen interest in systems programming, particularly using Rust. With a background in computer science and several years of experience in the tech industry, Heidar has developed a strong skill set in problem-solving and efficient coding practices. He is dedicated to learning and sharing his knowledge through writing and speaking engagements.</Text>
    </Box>
  );
};

const BlogSection = () => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">Blog on Rust Programming</Heading>
      <VStack align="start" spacing={3} mt={4}>
        <Link href="#" isExternal>
          Understanding Ownership in Rust
        </Link>
        <Link href="#" isExternal>
          Concurrency in Rust: Fearless Multithreading
        </Link>
        <Link href="#" isExternal>
          Using Rust WebAssembly for Faster Web Apps
        </Link>
      </VStack>
    </Box>
  );
};

const ProjectShowcase = () => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">Project Showcase: Building the Last Piece of Software</Heading>
      <Text mt={4}>"Building the Last Piece of Software" is an ambitious project aimed at creating a highly scalable, fault-tolerant software architecture using Rust. This project showcases Heidar's expertise in designing systems that are not only robust but also maintainable and efficient.</Text>
    </Box>
  );
};

export default Index;
