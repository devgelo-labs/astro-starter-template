export interface CallToAction {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "link";
  icon?: string;
}

export interface HeroProps {
  title?: string;
  tagline?: string;
  description?: string;
  actions?: string | CallToAction[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
  iconClass?: string;
}

export type Value = Feature;

export interface Service {
  title: string;
  description: string;
  icon: string;
}
