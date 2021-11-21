import buste001 from '@/assets/features/buste001.png';
import buste002 from '@/assets/features/buste002.png';
import buste003 from '@/assets/features/buste003.png';
import buste004 from '@/assets/features/buste004.png';
import clothing001 from '@/assets/features/clothing001.png';
import clothing002 from '@/assets/features/clothing002.png';
import clothing003 from '@/assets/features/clothing003.png';
import clothing004 from '@/assets/features/clothing004.png';
import hair001 from '@/assets/features/hair001.png';
import hair002 from '@/assets/features/hair002.png';
import hair003 from '@/assets/features/hair003.png';
import hair004 from '@/assets/features/hair004.png';
import mouth001 from '@/assets/features/mouth001.png';
import mouth002 from '@/assets/features/mouth002.png';
import mouth003 from '@/assets/features/mouth003.png';
import mouth004 from '@/assets/features/mouth004.png';
import nose001 from '@/assets/features/nose001.png';
import nose002 from '@/assets/features/nose002.png';
import nose003 from '@/assets/features/nose003.png';
import nose004 from '@/assets/features/nose004.png';
import oeildroit001 from '@/assets/features/oeildroit001.png';
import oeildroit002 from '@/assets/features/oeildroit002.png';
import oeildroit003 from '@/assets/features/oeildroit003.png';
import oeildroit004 from '@/assets/features/oeildroit004.png';
import oeilgauche001 from '@/assets/features/oeilgauche001.png';
import oeilgauche002 from '@/assets/features/oeilgauche002.png';
import oeilgauche003 from '@/assets/features/oeilgauche003.png';
import oeilgauche004 from '@/assets/features/oeilgauche004.png';

export interface Feature {
  index: number;
  name: string;
  type: string;
  data: string;
}

export const Features: Array<Feature> = [
  {
    index: 0,
    name: 'buste001',
    type: 'buste',
    data: buste001
  },
  {
    index: 1,
    name: 'buste002',
    type: 'buste',
    data: buste002
  },
  {
    index: 2,
    name: 'buste003',
    type: 'buste',
    data: buste003
  },
  {
    index: 3,
    name: 'buste004',
    type: 'buste',
    data: buste004
  },
  {
    index: 0,
    name: 'clothing001',
    type: 'clothing',
    data: clothing001
  },
  {
    index: 1,
    name: 'clothing002',
    type: 'clothing',
    data: clothing002
  },
  {
    index: 2,
    name: 'clothing003',
    type: 'clothing',
    data: clothing003
  },
  {
    index: 3,
    name: 'clothing004',
    type: 'clothing',
    data: clothing004
  },
  {
    index: 0,
    name: 'hair001',
    type: 'hair',
    data: hair001
  },
  {
    index: 1,
    name: 'hair002',
    type: 'hair',
    data: hair002
  },
  {
    index: 3,
    name: 'hair003',
    type: 'hair',
    data: hair003
  },
  {
    index: 3,
    name: 'hair004',
    type: 'hair',
    data: hair004
  },
  {
    index: 0,
    name: 'mouth001',
    type: 'mouth',
    data: mouth001
  },
  {
    index: 1,
    name: 'mouth002',
    type: 'mouth',
    data: mouth002
  },
  {
    index: 2,
    name: 'mouth003',
    type: 'mouth',
    data: mouth003
  },
  {
    index: 3,
    name: 'mouth004',
    type: 'mouth',
    data: mouth004
  },
  {
    index: 0,
    name: 'nose001',
    type: 'nose',
    data: nose001
  },
  {
    index: 1,
    name: 'nose002',
    type: 'nose',
    data: nose002
  },
  {
    index: 2,
    name: 'nose003',
    type: 'nose',
    data: nose003
  },
  {
    index: 3,
    name: 'nose004',
    type: 'nose',
    data: nose004
  },
  {
    index: 0,
    name: 'oeildroit001',
    type: 'oeildroit',
    data: oeildroit001
  },
  {
    index: 1,
    name: 'oeildroit002',
    type: 'oeildroit',
    data: oeildroit002
  },
  {
    index: 2,
    name: 'oeildroit003',
    type: 'oeildroit',
    data: oeildroit003
  },
  {
    index: 3,
    name: 'oeildroit004',
    type: 'oeildroit',
    data: oeildroit004
  },
  {
    index: 0,
    name: 'oeilgauche001',
    type: 'oeilgauche',
    data: oeilgauche001
  },
  {
    index: 1,
    name: 'oeilgauche002',
    type: 'oeilgauche',
    data: oeilgauche002
  },
  {
    index: 2,
    name: 'oeilgauche003',
    type: 'oeilgauche',
    data: oeilgauche003
  },
  {
    index: 3,
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