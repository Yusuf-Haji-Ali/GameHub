import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export const GenreList = ({ onSelectGenre }: Props) => {
  const { data, loading, error } = useGenres();

  if (error) return null;

  return (
    <List>
      {loading
        ? data.map((genre) => (
            <HStack marginBottom={"5px"}>
              <Skeleton boxSize={"32px"} key={genre.id} />
              <SkeletonText noOfLines={1} width={"125px"} />
            </HStack>
          ))
        : data.map((genre) => (
            <ListItem key={genre.id} paddingY={"5px"}>
              <HStack>
                <Image
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant={"link"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};
