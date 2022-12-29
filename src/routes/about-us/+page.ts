import type { PageLoad } from './$types';

export const load = (({ params }) => {
  return { slug: 'about-us', title: 'About Us' }
}) satisfies PageLoad;