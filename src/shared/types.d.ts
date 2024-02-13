import { ReactElement } from 'react';

// WIDGETS
type HeroProps = {
    title?: string | ReactElement;
    subtitle?: string | ReactElement;
    tagline?: string;
    callToAction?: CallToActionType;
    callToAction2?: CallToActionType;
    image?: Image;
};

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

type CallToActionProps = Widget & {
    title: string;
    subtitle: string;
    callToAction?: CallToActionType;
    items?: Array<Item>;
};

type ToggleMenuProps = {
    handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
    isToggleMenuOpen: boolean;
};

type AnnouncementProps = {
    title: string;
    callToAction?: CallToActionType;
    callToAction2?: CallToActionType;
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