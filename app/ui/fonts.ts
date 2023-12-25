import { Montserrat, Poppins, Lusitana } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });

export const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
