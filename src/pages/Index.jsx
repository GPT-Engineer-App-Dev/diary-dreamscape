import { Box, Container, Flex, Heading, Link, Text, VStack, Button, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaTrash as DeleteIcon } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Box as="header" bg={useColorModeValue("brand.800", "gray.800")} color={useColorModeValue("white", "gray.200")} py={4} mb={8}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg" ml={4}>
            My Personal Blog
          </Heading>
          <Flex as="nav" mr={4}>
            <Link as={RouterLink} to="/" mx={2} color="white">
              Home
            </Link>
            <Link as={RouterLink} to="#" mx={2} color="white">
              About
            </Link>
            <Link as={RouterLink} to="#" mx={2} color="white">
              Contact
            </Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box as="main" flex="1" bg={useColorModeValue("white", "gray.900")}>
        <Button as={RouterLink} to="/add-post" colorScheme="blue" mb={4}>
          Add New Post
        </Button>
        <VStack spacing={4} align="stretch">
          {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Flex justify="space-between" align="center">
              <Box>
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
              </Box>
              <IconButton
                aria-label="Delete post"
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={() => handleDelete(index)}
              />
            </Flex>
          </Box>
        ))}
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Blog Post Title</Heading>
            <Text mt={4}>This is a placeholder for a blog post. More content coming soon!</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Another Blog Post</Heading>
            <Text mt={4}>This is another placeholder for a blog post. Stay tuned for updates!</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg={useColorModeValue("brand.800", "gray.800")} color={useColorModeValue("white", "gray.200")} py={4} mt={8}>
        <Text textAlign="center">© 2023 My Personal Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;