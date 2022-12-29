import type { PageLoad } from './$types';

export const load = (({ params }) => {
  return { slug: '', title: 'Homepage' }
}) satisfies PageLoad;