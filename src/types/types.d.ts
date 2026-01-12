export interface CallToAction {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'link';
    icon?: string;
}

export interface HeroProps {
    title?: string;
    tagline?: string;
    description?: string;
    actions?: string | CallToAction[];
}
