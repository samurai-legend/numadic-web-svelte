import type { PageLoad } from './$types';

export const load = (({ params }) => {
  return { slug: 'contact-us', title: 'Contact Us' }
}) satisfies PageLoad;