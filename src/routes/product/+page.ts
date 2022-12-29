import type { PageLoad } from './$types';

export const load = (({ params }) => {
  return { slug: 'product', title: 'Product' }
}) satisfies PageLoad;