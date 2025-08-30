import { notFound } from 'next/navigation'
import ProductPageTemplate from '../../../components/ProductPageTemplate'
import { productConfigs, ProductSlug } from '../../../data/productConfigs'

function normalizeSlug(input: string): ProductSlug | null {
  const lower = input.toLowerCase()
  if (lower === 'alpha-n' || lower === 'alphan' || lower === 'alpha_n' || lower === 'alpha-nn') return 'alpha-n'
  if (lower === 'alub' || lower === 'alustar') return 'alub'
  if (lower === 'alubmax' || lower === 'alu-bmax' || lower === 'alub-max' || lower === 'startecxt') return 'alub-max'
  return (['alpha-n','alub','alub-max'] as ProductSlug[]).includes(lower as ProductSlug) ? (lower as ProductSlug) : null
}

export default function ProductPage({ params }: { params: { product: string } }) {
  const normalized = normalizeSlug(params.product)
  if (!normalized) return notFound()

  const config = productConfigs[normalized]
  if (!config) return notFound()

  return <ProductPageTemplate config={config} />
}
