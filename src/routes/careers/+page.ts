import type { PageLoad } from './$types';

export const load = (({ params }) => {
  return { slug: 'careers', title: 'Careers' }
}) satisfies PageLoad;