import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MovieCard({ id, title, poster, overview }) {
  return (
    <Card maxW="sm">
      <CardHeader>
        <Image
          src={poster}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
      </CardHeader>
      <CardBody>
        <Heading>{title}</Heading>
        <Text>{overview}</Text>
      </CardBody>
      <CardFooter>
        <Link to={`/movies/${id}`}>
          <Button variant="solid" colorScheme="blue">
            View joke & more
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default MovieCard;
