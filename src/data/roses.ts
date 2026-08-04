import { RoseVariety, EthosPromise } from '../types';

import whiteRoseImg from '../assets/images/white_avalanche_rose_1785832097990.jpg';
import candyRoseImg from '../assets/images/candy_avalanche_rose_1785832117474.jpg';
import revivalRoseImg from '../assets/images/revival_pink_rose_1785832185596.jpg';
import jumiliaRoseImg from '../assets/images/jumilia_bicolour_rose_1785832214224.jpg';
import solarRoseImg from '../assets/images/solar_yellow_rose_1785832257545.jpg';
import founderImg from '../assets/images/founder_estelle_farms_1785832319658.jpg';
import farmLandscapeImg from '../assets/images/estelle_farm_landscape_1785832349542.jpg';
import estelleLogoImg from '../assets/images/estelle_farms_logo_1785833517778.jpg';
import heroRoseFarmBgImg from '../assets/images/hero_rose_farm_bg_1785833536027.jpg';
import founderPortraitImg from '../assets/images/founder_portrait_photo_1785835873007.jpg';
import farmTeamImg from '../assets/images/estelle_farm_team_photo_1785835889731.jpg';

export { founderImg, farmLandscapeImg, estelleLogoImg, heroRoseFarmBgImg, founderPortraitImg, farmTeamImg };

export const ROSE_COLLECTION: RoseVariety[] = [
  {
    id: 'white-avalanche',
    name: 'White Avalanche',
    tag: 'LUMINOUS & PURE',
    colorCategory: 'IVORY WHITE',
    description:
      'A crisp, luminous ivory bloom with a flawless spiral. White Avalanche is the quiet showstopper — timeless for weddings, editorial styling and monochrome luxury bouquets.',
    stemHeight: '50 cm',
    budSize: '3-5 cm',
    image: whiteRoseImg,
    accentColor: '#9C8F8A',
    bgTint: '#F7F3F1',
  },
  {
    id: 'candy-avalanche',
    name: 'Candy Avalanche',
    tag: 'SOFT & ROMANTIC',
    colorCategory: 'BLUSH CANDY PINK',
    description:
      'Petals brushed in a gentle candy blush that deepens toward the heart. Sweet without being saccharine — the romantic\'s rose for anniversaries and tender gestures.',
    stemHeight: '40 cm',
    budSize: '3-5 cm',
    image: candyRoseImg,
    accentColor: '#D9777F',
    bgTint: '#FBF0F2',
  },
  {
    id: 'revival',
    name: 'Revival',
    tag: 'WARM & GRACEFUL',
    colorCategory: 'VINTAGE PINK',
    description:
      'Deep classic pink with a vintage undertone and velvety sheen. Revival has a presence that lingers — a rich celebratory flower for grand occasions and deep expressions of love.',
    stemHeight: '60 cm',
    budSize: '3-5 cm',
    image: revivalRoseImg,
    accentColor: '#C84B5B',
    bgTint: '#FAF0F1',
  },
  {
    id: 'jumilia',
    name: 'Jumilia',
    tag: 'DELICATE & DUAL-TONE',
    colorCategory: 'PINK & CREAM BICOLOUR',
    description:
      'A dramatic rim of vivid pink tapering into a creamy white heart. Each bloom feels painterly, striking and rare — a florist\'s favourite for high-contrast centrepieces.',
    stemHeight: '60 cm',
    budSize: '3-5 cm',
    image: jumiliaRoseImg,
    accentColor: '#B8203E',
    bgTint: '#FAF2F3',
  },
  {
    id: 'solar',
    name: 'Solar',
    tag: 'SUN-KISSED & RADIANT',
    colorCategory: 'BRIGHT YELLOW BLOOM',
    description:
      'Unapologetically bright, glowing like midsummer sunshine. Solar brings warmth, energy and joy to any room, standing tall with stems that never droop.',
    stemHeight: '60 cm',
    budSize: '3-5 cm',
    image: solarRoseImg,
    accentColor: '#D97706',
    bgTint: '#FEF9EE',
  },
];

export const ETHOS_PROMISES: EthosPromise[] = [
  {
    number: '01',
    title: 'Grown by hand, refined by biotech',
    content:
      'Every stem begins in the soil of Karera, tended by hand through the patient arc of a season. A former teacher\'s precision meets a florist\'s devotion — data-led cultivation, careful genetics and clean discipline give each stem its signature height, colour and staying power.',
  },
  {
    number: '02',
    title: 'Soil-to-vase cold chain discipline',
    content:
      'Harvested early morning at peak hydration and immediately brought into climate-controlled care. Direct dispatch eliminates days in dark storage, ensuring maximum bloom expansion in your vase.',
  },
  {
    number: '03',
    title: 'Cut for a longer life',
    content:
      'Harvested at the perfect bud stage and handled cold from field to hand, our roses open slowly and last longer — the way luxury flowers are meant to.',
  },
];
