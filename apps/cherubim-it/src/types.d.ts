import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { HTMLAttributes, ImageMetadata } from 'astro/types';

export interface Post {
  /** A unique ID number that identifies a post. */
  id: string;

  /** A post’s unique slug – part of the post’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
  slug: string;

  /**  */
  permalink: string;

  /**  */
  publishDate: Date;
  /**  */
  updateDate?: Date;

  /**  */
  title: string;
  /** Optional summary of post content. */
  excerpt?: string;
  /**  */
  image?: ImageMetadata | string;

  /**  */
  category?: Taxonomy;
  /**  */
  tags?: Taxonomy[];
  /**  */
  author?: string;

  /**  */
  metadata?: MetaData;

  /**  */
  draft?: boolean;

  /**  */
  Content?: AstroComponentFactory;
  content?: string;

  /**  */
  readingTime?: number;
}

export interface Taxonomy {
  slug: string;
  title: string;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  tagline2?: string;
  footer?: string;
  classes?: Record<string, string>;
}

interface TeamMember {
  name?: string;
  job?: string;
  image?: Image;
  socials?: Array<Social>;
  description?: string;
  classes?: Record<string, string>;
}

interface Social {
  icon?: string;
  href?: string;
}

export interface Stat {
  amount?: number | string;
  classes?: Record<string, string>;
  title?: string;
  icon?: string;
  lowerCase?: boolean;
  curve?: boolean;
}

export interface Item {
  title?: string;
  flag?: string;
  description?: string | { text: string; link?: boolean; subtitle?: boolean; classes?: Record<string, string> }[];
  description2?: { text: string; link?: string };
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
  link?: boolean;
}

export interface ItemLink {
  title: string;
  subtitle?: string;
  description?: string;
  url?: string;
  image?: {
    src: string | ImageMetadata;
    alt: string;
    width?: number;
    height?: number;
  };
  wider?: boolean;
  small?: boolean;
}

export interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
  impactFactor?: number | string;
  impactLabel?: string;
  items?: Array<Item>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
  medalColor?: 'gold' | 'silver' | 'bronze';
  position?: 'first' | 'second' | 'third';
  classes?: Record<string, string>;
}

export interface Testimonial {
  title?: string;
  testimonial?: string;
  extraContent?: string;
  name?: string;
  job?: string;
  image?: string | unknown;
  isPositive?: boolean;
  waveSm?: boolean;
  waveMd?: boolean;
  waveLg?: boolean;
}

export interface Input {
  type: HTMLInputTypeAttribute;
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
}

export interface Textarea {
  label?: string;
  name?: string;
  placeholder?: string;
  rows?: number;
}

export interface Disclaimer {
  label?: string;
}

// COMPONENTS
export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

export interface ItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Collapse {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
  classes?: Record<string, string>;
}

export interface Form {
  inputs?: Array<Input>;
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  description?: string;
}

// WIDGETS
export interface Hero extends Headline, Widget {
  content?: string;
  actions?: string | CallToAction[];
  isInfographics?: boolean;
  image?:
    | string
    | {
        src: string | ImageMetadata;
        alt?: string;
        class?: string;
        width?: number;
        height?: number;
        isInfographics?: boolean;
        link?: {
          href: string;
          target?: string;
          rel?: string;
        };
      };
  imageText?: string;
}

export interface Team extends Omit<Headline, 'classes'>, Widget {
  team?: Array<TeamMember>;
}

export interface Stats extends Omit<Headline, 'classes'>, Widget {
  stats?: Array<Stat>;
  image?:
    | string
    | {
        src: string | ImageMetadata;
        alt?: string;
        class?: string;
      };
}

export interface Pricing extends Omit<Headline, 'classes'>, Widget {
  animated?: boolean;
  impactFactors?: Array<Price>;
}

export interface Testimonials extends Omit<Headline, 'classes'>, Widget {
  testimonials?: Array<Testimonial>;
  callToAction?: CallToAction;
}

interface ImageTextSectionItem {
  title: string;
  name: string;
  content?: string;
  image: {
    src: string | ImageMetadata;
    alt: string;
  };
  isReversed?: boolean;
}

export interface ImageTextSection extends Omit<Headline, 'classes'>, Widget {
  items: Array<ImageTextSectionItem>;
}

export interface Brands extends Omit<Headline, 'classes'>, Widget {
  icons?: Array<string>;
  images?: Array<Image>;
}

export interface Features extends Omit<Headline, 'classes'>, Widget {
  animated?: boolean;
  image?: string | unknown;
  imageText?: string;
  video?: Video;
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
  callToAction?: CallToAction;
}

export interface GraphItem {
  icon?: { text: string; class?: string };
  title?: string;
  colorClass?: string;
  description?: string | { text: string; link?: boolean; subtitle?: boolean; classes?: Record<string, string> }[];
  subtitle?: { text1: string; text2: string };
  rows: Array<{ text1: string; text2?: string }>;
  classes?: Record<string, string>;
}

export interface GraphGrid extends Omit<Headline, 'classes'>, Widget {
  items?: Array<GraphItem>;
  columns?: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface Faqs extends Omit<Headline, 'classes'>, Widget {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
}

export interface Steps extends Omit<Headline, 'classes'>, Widget {
  items: Array<Item>;
  callToAction?: string | CallToAction;
  image?: string | Image;
  isReversed?: boolean;
  bigImage?: boolean;
}

export interface Content extends Omit<Headline, 'classes'>, Widget {
  animated?: boolean;
  content?: string;
  image?: string | unknown;
  imageText?: string;
  items?: Array<Item>;
  columns?: number;
  isReversed?: boolean;
  isAfterContent?: boolean;
  defaultIcon?: string;
  callToAction?: CallToAction;
}

export interface Contact extends Omit<Headline, 'classes'>, Form, Widget {}
