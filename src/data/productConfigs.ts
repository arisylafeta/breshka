import { ProductPageConfig } from '../components/ProductPageTemplate'

export type ProductSlug = 'alpha-n' | 'alub' | 'alub-max'

export const productConfigs: Record<ProductSlug, ProductPageConfig> = {
  'alpha-n': {
    title: 'Alpha N',
    heroImage: '/images/AlphaN.jpg',
    heroDescKey: 'alphaNHeroDesc',
    productDescKey: 'alphaNProductDesc',
    carouselImages: ['/images/AlphaN.jpg', '/images/AlphaN.jpg', '/images/AlphaN.jpg'],
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
      { labelKey: 'crane', valueKey: 'craneValue' }
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
      { labelKey: 'permissibleConcretePressure', valueKey: 'concretePressureValue' }
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
  'alub-max': {
    title: 'AluB Max',
    heroImage: '/images/aluBMax.png',
    heroDescKey: 'aluBMaxHeroDesc',
    productDescKey: 'aluBMaxProductDesc',
    carouselImages: ['/images/aluBMax.png', '/images/aluBMax.png', '/images/aluBMax.png'],
    detailsTitleKey: 'aluBMaxDetailsTitle',
    details: [
      { titleKey: 'aluBMaxTripleAnchoringTitle', descKey: 'aluBMaxTripleAnchoringDesc' },
      { titleKey: 'aluBMaxHighLoadTitle', descKey: 'aluBMaxHighLoadDesc' },
      { titleKey: 'aluBMaxRobustSteelTitle', descKey: 'aluBMaxRobustSteelDesc' },
      { titleKey: 'aluBMaxVersatileTitle', descKey: 'aluBMaxVersatileDesc' }
    ],
    techSpecsTitleKey: 'technicalSpecifications',
    specHeaderKey: 'detailsHeader',
    techSpecs: [
      { labelKey: 'panelHeights', valueKey: 'panelHeightsValue' },
      { labelKey: 'panelWidths', valueKey: 'panelWidthsValue' },
      { labelKey: 'anchoringMethods', valueKey: 'anchoringMethodsValue' }
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
