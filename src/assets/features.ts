import buste001 from '@/assets/buste001.png';
import buste002 from '@/assets/buste002.png';
import buste003 from '@/assets/buste003.png';
import buste004 from '@/assets/buste004.png';
import clothing001 from '@/assets/clothing001.png';
import clothing002 from '@/assets/clothing002.png';
import clothing003 from '@/assets/clothing003.png';
import clothing004 from '@/assets/clothing004.png';
import hair001 from '@/assets/hair001.png';
import hair002 from '@/assets/hair002.png';
import hair003 from '@/assets/hair003.png';
import hair004 from '@/assets/hair004.png';
import mouth001 from '@/assets/mouth001.png';
import mouth002 from '@/assets/mouth002.png';
import mouth003 from '@/assets/mouth003.png';
import mouth004 from '@/assets/mouth004.png';
import nose001 from '@/assets/nose001.png';
import nose002 from '@/assets/nose002.png';
import nose003 from '@/assets/nose003.png';
import nose004 from '@/assets/nose004.png';
import oeildroit001 from '@/assets/oeildroit001.png';
import oeildroit002 from '@/assets/oeildroit002.png';
import oeildroit003 from '@/assets/oeildroit003.png';
import oeildroit004 from '@/assets/oeildroit004.png';
import oeilgauche001 from '@/assets/oeilgauche001.png';
import oeilgauche002 from '@/assets/oeilgauche002.png';
import oeilgauche003 from '@/assets/oeilgauche003.png';
import oeilgauche004 from '@/assets/oeilgauche004.png';

export interface Feature {
  name: string;
  type: string;
  data: string;
}

export const Features: Array<Feature> = [
  {
    name: 'buste001',
    type: 'buste',
    data: buste001
  },
  {
    name: 'buste002',
    type: 'buste',
    data: buste002
  },
  {
    name: 'buste003',
    type: 'buste',
    data: buste003
  },
  {
    name: 'buste004',
    type: 'buste',
    data: buste004
  },
  {
    name: 'clothing001',
    type: 'clothing',
    data: clothing001
  },
  {
    name: 'clothing002',
    type: 'clothing',
    data: clothing002
  },
  {
    name: 'clothing003',
    type: 'clothing',
    data: clothing003
  },
  {
    name: 'clothing004',
    type: 'clothing',
    data: clothing004
  },
  {
    name: 'hair001',
    type: 'hair',
    data: hair001
  },
  {
    name: 'hair002',
    type: 'hair',
    data: hair002
  },
  {
    name: 'hair003',
    type: 'hair',
    data: hair003
  },
  {
    name: 'hair004',
    type: 'hair',
    data: hair004
  },
  {
    name: 'mouth001',
    type: 'mouth',
    data: mouth001
  },
  {
    name: 'mouth002',
    type: 'mouth',
    data: mouth002
  },
  {
    name: 'mouth003',
    type: 'mouth',
    data: mouth003
  },
  {
    name: 'mouth004',
    type: 'mouth',
    data: mouth004
  },
  {
    name: 'nose001',
    type: 'nose',
    data: nose001
  },
  {
    name: 'nose002',
    type: 'nose',
    data: nose002
  },
  {
    name: 'nose003',
    type: 'nose',
    data: nose003
  },
  {
    name: 'nose004',
    type: 'nose',
    data: nose004
  },
  {
    name: 'oeildroit001',
    type: 'oeildroit',
    data: oeildroit001
  },
  {
    name: 'oeildroit002',
    type: 'oeildroit',
    data: oeildroit002
  },
  {
    name: 'oeildroit003',
    type: 'oeildroit',
    data: oeildroit003
  },
  {
    name: 'oeildroit004',
    type: 'oeildroit',
    data: oeildroit004
  },
  {
    name: 'oeilgauche001',
    type: 'oeilgauche',
    data: oeilgauche001
  },
  {
    name: 'oeilgauche002',
    type: 'oeilgauche',
    data: oeilgauche002
  },
  {
    name: 'oeilgauche003',
    type: 'oeilgauche',
    data: oeilgauche003
  },
  {
    name: 'oeilgauche004',
    type: 'oeilgauche',
    data: oeilgauche004
  },
];

export const LeftEyes: Array<Feature> = Features.filter(f => f.type === 'oeilgauche');
export const RightEyes: Array<Feature> = Features.filter(f => f.type === 'oeildroit');
export const Noses: Array<Feature> = Features.filter(f => f.type === 'nose');
export const Mouths: Array<Feature> = Features.filter(f => f.type === 'mouth');
export const Hairs: Array<Feature> = Features.filter(f => f.type === 'hair');
export const Clothings: Array<Feature> = Features.filter(f => f.type === 'clothing');
export const Bodies: Array<Feature> = Features.filter(f => f.type === 'buste');