import { ChakraProvider as Chakra, defaultSystem } from "@chakra-ui/react";
import type { ReactNode } from "react";

export function ChakraProvider({ children }: { children: ReactNode }) {
  return <Chakra value={defaultSystem}>{children}</Chakra>;
}
