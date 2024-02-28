import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

type CallToActionType = {
    text?: string;
    href: string;
    icon?: Icon;
    targetBlank?: boolean;
};

type LinkOrButton = {
    callToAction?: CallToActionType;
    containerClass?: string;
    linkClass?: string;
    iconClass?: string;
};
type Image = {
    link?: string;
    src: string | StaticImageData;
    alt: string;
};
type ToggleMenuProps = {
    handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
    isToggleMenuOpen: boolean;
};
// WIDGETS
type HeroProps = {
    title?: string | ReactElement;
    subtitle?: string | ReactElement;
    tagline?: string;
    callToAction?: CallToActionType;
    callToAction2?: CallToActionType;
    image?: Image;
};

type FAQsProps = Widget & {
    header?: Header;
    items?: Array<Item>;
    columns?: number;
    tabs?: Array<Tab>;
    callToAction?: CallToActionType;
};


type CallToActionProps = Widget & {
    title: string;
    subtitle: string;
    callToAction?: CallToActionType;
    items?: Array<Item>;
};

type AnnouncementProps = {
    title: string;
    callToAction?: CallToActionType;
    callToAction2?: CallToActionType;
};

type SocialProofProps = Widget & {
    images: Array<Image>;
};


type FooterProps = {
    title?: string;
    links?: Array<Link>;
    columns: Array<Links>;
    socials: Array<Link>;
    footNote?: string | ReactElement;
    theme?: string;
};

type HeaderProps = {
    links?: Array<MenuLink>;
    actions?: Array<CallToActionType>;
    // actions?: Array<ActionLink>;
    isSticky?: boolean;
    showToggleTheme?: boolean;
    showRssFeed?: boolean;
    position?: 'center' | 'right' | 'left';
};
