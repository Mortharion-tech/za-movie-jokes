import { Button } from "@chakra-ui/react";

function JokesGenerator() {
  return (
    <Button
      isLoading={jokeStatus === "loading"}
      variant="solid"
      bg="green.300"
      color="white"
      w="100%"
      onClick={handleGenerateJoke}
    >
      {joke ? "Regenerate" : "Generate"} Joke
    </Button>
  );
}

export default JokesGenerator;
