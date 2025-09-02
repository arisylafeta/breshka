import { ProductPageConfig } from '../components/ProductPageTemplate'

export type ProductSlug = 'alpha-n' | 'alub' | 'alu-bmax'

export const productConfigs: Record<ProductSlug, ProductPageConfig> = {
  'alpha-n': {
    title: 'Alpha N',
    heroImage: '/images/AlphaN.jpg',
    heroDescKey: 'alphaNHeroDesc',
    productDescKey: 'alphaNProductDesc',
    carouselImages: ['/video.mp4', '/images/AlphaN.jpg'],
    useCarousel: true,
    detailsTitleKey: 'details',
    details: [
      { titleKey: 'qualityFacingConcrete', descKey: 'qualityFacingDesc' },
      { titleKey: 'alphaTechLock', descKey: 'alphaTechLockDesc' },
      { titleKey: 'multiFunctionCrossbeam', descKey: 'multiFunctionDesc' },
      { titleKey: 'anchoringSystem', descKey: 'anchoringSystemDesc' },
      { titleKey: 'identicalFaces', descKey: 'identicalFacesDesc' },
      { titleKey: 'layout', descKey: 'layoutDesc' },
      { titleKey: 'corners', descKey: 'cornersDesc' }
    ],
    techSpecsTitleKey: 'technicalSpecifications',
    techSpecs: [
      { labelKey: 'heights', valueKey: 'heightsValues' },
      { labelKey: 'widths', valueKey: 'widthsValues' },
      { labelKey: 'permissiblePressure', valueKey: 'pressureValue' },
      { labelKey: 'coating', valueKey: 'coatingValue' },
      { labelKey: 'painting', valueKey: 'paintingValue' },
      { labelKey: 'crane', valueKey: 'craneValue' },
      { labelKey: 'productionStandard', valueKey: 'productionStandardValue' },
      { labelKey: 'materialStandard', valueKey: 'materialStandardValue' },
      { labelKey: 'designStandard', valueKey: 'designStandardValue' },
      { labelKey: 'documentStandard', valueKey: 'documentStandardValue' }
    ],
    applicationsTitleKey: 'applicationExamples',
    applications: [
      { titleKey: 'residentialConstruction', descKey: 'residentialDesc' },
      { titleKey: 'commercialBuildings', descKey: 'commercialDesc' },
      { titleKey: 'infrastructureProjects', descKey: 'infrastructureDesc' }
    ],
    ctaTitleKey: 'interestedInAlphaFix',
    ctaDescKey: 'alphaFixContactDesc'
  },
  'alub': {
    title: 'AluB',
    heroImage: '/images/Alub.png',
    heroDescKey: 'aluBHeroDesc',
    productDescKey: 'aluBProductDesc',
    carouselImages: ['/images/Alub.png', '/images/Alub.png', '/images/Alub.png'],
    detailsTitleKey: 'keyBenefits',
    details: [
      { titleKey: 'manuportable', descKey: 'manuportableDesc' },
      { titleKey: 'lightweightEfficient', descKey: 'lightweightEfficientDesc' },
      { titleKey: 'optimalModularity', descKey: 'optimalModularityDesc' },
      { titleKey: 'qualityFinish', descKey: 'qualityFinishDesc' }
    ],
    techSpecsTitleKey: 'technicalCharacteristics',
    techSpecs: [
      { labelKey: 'panelCovering', valueKey: 'panelCoveringValue' },
      { labelKey: 'edgeProfileThickness', valueKey: 'edgeProfileValue' },
      { labelKey: 'standardDimensionsHeight', valueKey: 'standardHeightValue' },
      { labelKey: 'standardDimensionsWidths', valueKey: 'standardWidthsValue' },
      { labelKey: 'aluBWeight', valueKey: 'aluBWeightValue' },
      { labelKey: 'aluBAnchoring', valueKey: 'anchoringValue' },
      { labelKey: 'numberOfRods', valueKey: 'numberOfRodsValue' },
      { labelKey: 'permissibleConcretePressure', valueKey: 'concretePressureValue' },
      { labelKey: 'productionStandard', valueKey: 'productionStandardValue' },
      { labelKey: 'materialStandard', valueKey: 'materialStandardValue' },
      { labelKey: 'designStandard', valueKey: 'designStandardValue' },
      { labelKey: 'documentStandard', valueKey: 'documentStandardValue' }
    ],
    specHeaderKey: 'aluBDetailsHeader',
    applicationsTitleKey: 'applicationExamples',
    applications: [
      { titleKey: 'aluBCommercialConstruction', descKey: 'aluBCommercialConstructionDesc' },
      { titleKey: 'multiStoryBuildings', descKey: 'multiStoryBuildingsDesc' },
      { titleKey: 'infrastructureBridges', descKey: 'infrastructureBridgesDesc' }
    ],
    ctaTitleKey: 'interestedInAluStar',
    ctaDescKey: 'aluStarContactDesc'
  },
  'alu-bmax': {
    title: 'Alu BMax',
    heroImage: '/images/aluBMax.png',
    heroDescKey: 'aluBMaxHeroDesc',
    productDescKey: 'aluBMaxProductDesc',
    carouselImages: ['/images/aluBMax.png', '/images/new-product.png'],
    useCarousel: true,
    detailsTitleKey: 'aluBMaxDetailsTitle',
    details: [
      { titleKey: 'aluBMaxBottomUpAssemblyTitle', descKey: 'aluBMaxBottomUpAssemblyDesc' },
      { titleKey: 'aluBMaxIndustrialResidentialEfficiencyTitle', descKey: 'aluBMaxIndustrialResidentialEfficiencyDesc' },
      { titleKey: 'aluBMaxPrecisionJointTitle', descKey: 'aluBMaxPrecisionJointDesc' },
      { titleKey: 'aluBMaxPowderCoatedFrameTitle', descKey: 'aluBMaxPowderCoatedFrameDesc' },
      { titleKey: 'aluBMaxExtremeLoadSlabTitle', descKey: 'aluBMaxExtremeLoadSlabDesc' },
      { titleKey: 'aluBMaxMinimalCleaningTitle', descKey: 'aluBMaxMinimalCleaningDesc' },
      { titleKey: 'aluBMaxCustomSizesTitle', descKey: 'aluBMaxCustomSizesDesc' },
      // Keep standards in the technical specs table instead of detail bullets (avoid duplication)
    ],
    techSpecsTitleKey: 'technicalSpecifications',
    specHeaderKey: 'detailsHeader',
    techSpecs: [
      { labelKey: 'panelHeights', valueKey: 'panelHeightsValue' },
      { labelKey: 'panelWidths', valueKey: 'panelWidthsValue' },
      { labelKey: 'anchoringMethods', valueKey: 'anchoringMethodsValue' },
      { labelKey: 'productionStandard', valueKey: 'productionStandardValue' },
      { labelKey: 'materialStandard', valueKey: 'materialStandardValue' },
      { labelKey: 'designStandard', valueKey: 'designStandardValue' },
      { labelKey: 'documentStandard', valueKey: 'documentStandardValue' }
    ],
    applicationsTitleKey: 'applicationExamples',
    applications: [
      { titleKey: 'aluBMaxHighRise', descKey: 'aluBMaxHighRiseDesc' },
      { titleKey: 'aluBMaxIndustrialFacilities', descKey: 'aluBMaxIndustrialFacilitiesDesc' },
      { titleKey: 'aluBMaxInfrastructureProjects', descKey: 'aluBMaxInfrastructureProjectsDesc' }
    ],
    ctaTitleKey: 'aluBMaxInterested',
    ctaDescKey: 'aluBMaxContactDesc'
  }
}
