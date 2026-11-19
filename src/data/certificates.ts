export interface CertificateStaticMeta {
  id:
    | 'frontend-extra'
    | 'frontend-advanced'
    | 'frontend-basic'
    | 'coursera-web'
    | 'coursera-java'
    | '1c-prof';
  number: string;
  image?: string;
}

export const CERTIFICATES_META: CertificateStaticMeta[] = [
  {
    id: 'coursera-web',
    number: '01',
    image: '/certificates/coursera-web.webp',
  },
  {
    id: 'coursera-java',
    number: '02',
    image: '/certificates/coursera-java.webp',
  },
  {
    id: '1c-prof',
    number: '03',
    image: '/certificates/1c-prof.webp',
  },
  {
    id: 'frontend-extra',
    number: '04',
    image: '/certificates/frontend-extra.webp',
  },
  {
    id: 'frontend-advanced',
    number: '05',
    image: '/certificates/frontend-advanced.webp',
  },
  {
    id: 'frontend-basic',
    number: '06',
    image: '/certificates/frontend-basic.webp',
  },
];
