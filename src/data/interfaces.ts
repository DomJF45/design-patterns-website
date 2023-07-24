export interface NavItem {
  name: string;
  ref: React.RefObject<HTMLElement>;
  subNav?: NavItem[];
}
