import { notFound } from 'next/navigation'
import ProductPageTemplate from '../../../components/ProductPageTemplate'
import { productConfigs, ProductSlug } from '../../../data/productConfigs'

function normalizeSlug(input: string): ProductSlug | null {
  const lower = input.toLowerCase()
  if (lower === 'alpha-n' || lower === 'alphan' || lower === 'alpha_n' || lower === 'alpha-nn') return 'alpha-n'
  if (lower === 'alub' || lower === 'alustar') return 'alub'
  if (lower === 'alubmax' || lower === 'alu-bmax' || lower === 'alu-bmax') return 'alu-bmax'
  return (['alpha-n','alub','alu-bmax'] as ProductSlug[]).includes(lower as ProductSlug) ? (lower as ProductSlug) : null
}

export default async function ProductPage(props: { params: Promise<{ product: string }> }) {
  const params = await props.params;
  const normalized = normalizeSlug(params.product)
  if (!normalized) return notFound()

  const config = productConfigs[normalized]
  if (!config) return notFound()

  return <ProductPageTemplate config={config} />
}
