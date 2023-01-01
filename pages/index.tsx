import { useDisplayName } from "../hooks/useDisplayName";
import React, { useState } from "react";
import { Center } from "@chakra-ui/react";
import { Chat } from "../components/chat";

export default function Home() {
  const { displayName, setName } = useDisplayName();
  const [formName, setFormName] = useState("random user");

  const handleNameInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(formName);
  };

  if (displayName) {
    return (
      <Center w="full" h="full">
        <Chat
          displayName={displayName}
          logout={() => {
            setName("");
          }}
        ></Chat>
      </Center>
    );
  } else {
    return (
      <Center w="full" h="full">
        <form onSubmit={handleNameInput}>
          <input
            placeholder="enter name here"
            onChange={(e) => {
              setFormName(e.target.value);
            }}
          ></input>
        </form>
      </Center>
    );
  }
}
