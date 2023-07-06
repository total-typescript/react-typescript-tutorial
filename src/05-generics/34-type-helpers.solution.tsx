type Icon = "home" | "settings" | "about";
type ButtonVariant = "primary" | "secondary" | "tertiary";

type LooseIcon = LooseAutocomplete<Icon>;
type LooseButtonVariant = LooseAutocomplete<ButtonVariant>;

/**
 * Comment explaining what LooseAutocomplete does
 */
type LooseAutocomplete<T> = T | (string & {});

const looseAutocomplete = (t: any) => {
  return "hello";
};

export const icons: LooseIcon[] = [
  "home",
  "settings",
  "about",
  "any-other-string",
  // I should get autocomplete if I add a new item here!
];

export const buttonVariants: LooseButtonVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "any-other-string",
  // I should get autocomplete if I add a new item here!
];
