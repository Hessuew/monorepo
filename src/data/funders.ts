import aarneLogo from '~/assets/images/funders/Aarne Koskelon Foundation.webp';
import idaMontinLogo from '~/assets/images/funders/Idamontin Insaatio Logo Dark.webp';
import kordelinLogo from '~/assets/images/funders/Kordelin.webp';
import pediatricLogo from '~/assets/images/funders/Lastentautien Tunnus.gif';
import leroyLogo from '~/assets/images/funders/Leroy Logo Navigation.webp';
import novoLogo from '~/assets/images/funders/Novo Nordisk.webp';
import orionLogo from '~/assets/images/funders/Orion Oyj Logo.svg';
import paavoNurmiLogo from '~/assets/images/funders/Paavo Nurmi Foundation Logo.webp';
import pauloLogo from '~/assets/images/funders/Paulon Saatio Logo.webp';
import pskLogo from '~/assets/images/funders/Pohjois Savon Kulttuurirahasto.webp';
import skrLogo from '~/assets/images/funders/Skr Logo.svg';
import uefLogo from '~/assets/images/funders/UEF Logo.png';
import wihuriLogo from '~/assets/images/funders/Wihuri Foundation Logo.svg';
import yjsLogo from '~/assets/images/funders/YJS Anniversary Logo.webp';
import type { ImageMetadata } from 'astro';

interface Funder {
  name: string;
  logo?: ImageMetadata;
  url: string;
  label?: {
    text: string;
    style: string;
  };
  wider?: boolean;
  small?: boolean;
}

const funders: Funder[] = [
  {
    name: 'Novo Nordisk Foundation',
    logo: novoLogo,
    url: 'https://novonordiskfonden.dk/en/',
  },
  {
    name: 'Central Finnish Cultural Foundation',
    logo: skrLogo,
    url: 'https://skr.fi/en',
  },
  {
    name: 'Jenny and Antti Wihuri Foundation',
    logo: wihuriLogo,
    url: 'https://wihurinrahasto.fi/?lang=en',
  },
  {
    name: 'The North Savo regional Finnish Cultural Foundation',
    logo: pskLogo,
    url: 'https://skr.fi/rahastot/pohjois-savon-rahasto',
    wider: true,
  },
  {
    name: 'Orion Research Foundation',
    logo: orionLogo,
    url: 'https://www.orion.fi/en/science/orion-research-foundation/',
    small: true,
  },
  {
    name: 'Aarne Koskelo Foundation',
    logo: aarneLogo,
    url: 'http://www.aarnekoskelonsaatio.fi/',
  },
  {
    name: 'Antti and Tyyne Soininen Foundation',
    logo: uefLogo,
    url: 'https://www.uef.fi/en/university-foundations',
  },
  {
    name: 'Paulo Foundation',
    logo: pauloLogo,
    url: 'https://paulo.fi/apurahat',
  },
  {
    name: 'Paavo Nurmi Foundation',
    logo: paavoNurmiLogo,
    url: 'https://www.paavonurmensaatio.fi/en/foundation/',
  },
  {
    name: 'Yrjö Jahnsson Foundation',
    logo: yjsLogo,
    url: 'https://www.yjs.fi/en/',
  },
  {
    name: 'Finnish Foundation for Cardiovascular Research',
    logo: leroyLogo,
    url: 'https://www.sydantutkimussaatio.fi/en/foundation',
  },
  {
    name: 'Pediatric Research Foundation',
    logo: pediatricLogo,
    url: 'https://www.lastentautientutkimussaatio.fi/',
    wider: true,
  },
  {
    name: 'Ida Montin Foundation',
    logo: idaMontinLogo,
    url: 'https://idamontininsaatio.fi/',
  },
  {
    name: 'Alfred Kordelin Foundation',
    logo: kordelinLogo,
    url: 'https://kordelin.fi/en/frontpage',
  },
];

export const items = funders.map((funder) => ({
  title: funder.name,
  subtitle: '',
  description: '',
  image: funder.logo
    ? {
        src: funder.logo,
        alt: `${funder.name} logo`,
      }
    : undefined,
  url: funder.url,
  wider: funder.wider,
  small: funder.small,
}));
