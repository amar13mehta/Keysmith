export type ThemeColors = {
  background: string;
  foreground: string;
  card: string;
  "card-foreground": string;
  popover: string;
  "popover-foreground": string;
  primary: string;
  "primary-foreground": string;
  secondary: string;
  "secondary-foreground": string;
  muted: string;
  "muted-foreground": string;
  accent: string;
  "accent-foreground": string;
  destructive: string;
  "destructive-foreground": string;
  border: string;
  input: string;
  ring: string;
};

export type Theme = {
  name: string;
  id: string;
  author?: string;
  description?: string;
  colors: ThemeColors;
  variables?: Record<string, string>;
};

export type ThemeCategory = {
  name: string;
  description: string;
  themes: Theme[];
}; 