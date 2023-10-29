import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export const GenreList = () => {
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
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};
