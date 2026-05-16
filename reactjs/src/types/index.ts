export type ComponentVariant = "mui" | "chakra" | "daisy";

export interface NavItem {
  label: string;
  path: string;
  variant: ComponentVariant | "home" | "query";
}
