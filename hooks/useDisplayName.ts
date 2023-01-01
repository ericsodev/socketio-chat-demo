import { useEffect, useState } from "react";
import { getUser, setUser } from "../util/user";

export function useDisplayName() {
  const [displayName, setDisplayName] = useState<string>("");
  const setName = (name: string) => {
    setDisplayName(name);
    setUser(name);
  };

  useEffect(() => {
    setDisplayName(getUser());
  }, [setDisplayName]);

  return { displayName, setName };
}
