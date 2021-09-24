import { Magazine } from './interface';

// Record
type Page = 'home' | 'about' | 'contact';

type PageInfo = {
  title: string;
};

const data: Record<Page, PageInfo> = {
  home: { title: 'home' },
  about: { title: 'about' },
  contact: { title: 'contact' }
};

type obj = Record<string, string | undefined>;

const newObj: obj = {
  name: 'lll',
  // age: 55, // non assignable to string
  correctAge: '55',
};

export const superPerson: Record<Page, Magazine> = {
  home: {
    title: 'home',
    publisher: 'string',
  },
  about: {
    title: 'about',
    publisher: 'string',
  },
  contact: {
    title: 'contact',
    publisher: 'string',
  },
};