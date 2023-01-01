import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import { Message } from "../../types/Message";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
  displayName: string;
  msgs: Message[];
}
export function ChatLog({ displayName, msgs }: Props): JSX.Element {
  const [msgRef] = useAutoAnimate<HTMLDivElement>();
  return (
    <div ref={msgRef}>
      {msgs.map((val, i) => {
        return (
          <Grid key={i} templateColumns="repeat(6, 1fr)" gap={2}>
            <GridItem colSpan={2}>{val.name}:</GridItem>
            <GridItem colSpan={4}>{val.msg}</GridItem>
          </Grid>
        );
      })}
    </div>
  );
}
