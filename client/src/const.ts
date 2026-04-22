export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

// Products Data - Comprehensive Product List
export const PRODUCTS = [
  // ========== معدات مغاسل البطاطس ==========
  {
    id: 'potato-washing-1',
    category: 'potatoWashing',
    titleAr: 'آلة غسيل البطاطس الأوتوماتيكية',
    titleEn: 'Automatic Potato Washing Machine',
    descriptionAr: 'آلة غسيل متقدمة بتقنية حديثة لتنظيف البطاطس بكفاءة عالية وسرعة',
    descriptionEn: 'Advanced washing machine with modern technology for efficient and fast potato cleaning',
    image: '../src/images/آلة غسيل البطاطس الأوتوماتيكية.jpg',
  },
  {
    id: 'potato-washing-2',
    category: 'potatoWashing',
    titleAr: 'فاصل البطاطس المتخصص',
    titleEn: 'Specialized Potato Separator',
    descriptionAr: 'فاصل متقدم لفصل البطاطس حسب الحجم والجودة تلقائياً',
    descriptionEn: 'Advanced separator for automatic sorting potatoes by size and quality',
    image:'../src/images/فاصل البطاطس المتخصص.jpg',
  },
  {
    id: 'potato-washing-3',
    category: 'potatoWashing',
    titleAr: 'مقشرة البطاطس الصناعية',
    titleEn: 'Industrial Potato Peeler',
    descriptionAr: 'مقشرة صناعية عالية الإنتاجية لتقشير البطاطس بدقة',
    descriptionEn: 'High-capacity industrial peeler for precise potato peeling',
    image: '../src/images/مقشرة البطاطس الصناعية.jpg',
  },
  {
    id: 'potato-washing-4',
    category: 'potatoWashing',
    titleAr: 'معدات تقطيع البطاطس',
    titleEn: 'Potato Cutting Equipment',
    descriptionAr: 'معدات متخصصة لتقطيع البطاطس بأشكال وأحجام مختلفة',
    descriptionEn: 'Specialized equipment for cutting potatoes in various shapes and sizes',
    image: '../src/images/معدات تقطيع البطاطس.jpeg',
  },
  {
    id: 'potato-washing-5',
    category: 'potatoWashing',
    titleAr: 'خطوط معالجة البطاطس الكاملة',
    titleEn: 'Complete Potato Processing Lines',
    descriptionAr: 'خطوط معالجة متكاملة من الغسيل إلى التعبئة',
    descriptionEn: 'Integrated processing lines from washing to packaging',
    image: '../src/images/خطوط معالجة البطاطس الكاملة.jpg',
  },

  // ========== معدات مغاسل الفواكه والخضروات ==========
  {
    id: 'fruit-veg-1',
    category: 'fruitVegetable',
    titleAr: 'آلة غسيل الفواكه والخضروات',
    titleEn: 'Fruit and Vegetable Washing Machine',
    descriptionAr: 'آلة غسيل متقدمة للفواكه والخضروات بتقنية الرش والنقع',
    descriptionEn: 'Advanced washing machine for fruits and vegetables with spray and soak technology',
    image: '../src/images/آلة غسيل الفواكه والخضروات.jpeg',
  },
  {
    id: 'fruit-veg-2',
    category: 'fruitVegetable',
    titleAr: 'فاصل الفواكه والخضروات',
    titleEn: 'Fruit and Vegetable Separator',
    descriptionAr: 'فاصل متخصص لفصل الفواكه والخضروات حسب الحجم والنوع',
    descriptionEn: 'Specialized separator for sorting fruits and vegetables by size and type',
    image: '../src/images/فاصل الفواكه والخضروات.jpeg',
  },
  {
    id: 'fruit-veg-3',
    category: 'fruitVegetable',
    titleAr: 'معدات تقطيع الخضروات',
    titleEn: 'Vegetable Cutting Equipment',
    descriptionAr: 'معدات متقدمة لتقطيع الخضروات بأشكال متعددة',
    descriptionEn: 'Advanced equipment for cutting vegetables in multiple shapes',
    image: '../src/images/معدات تقطيع الخضروات.jpeg',
  },
  {
    id: 'fruit-veg-4',
    category: 'fruitVegetable',
    titleAr: 'معدات تجفيف الفواكه والخضروات',
    titleEn: 'Fruit and Vegetable Drying Equipment',
    descriptionAr: 'معدات متخصصة لتجفيف الفواكه والخضروات بكفاءة عالية',
    descriptionEn: 'Specialized equipment for efficient drying of fruits and vegetables',
    image: '../src/images/معدات تجفيف الفواكه والخضروات.jpeg',
  },
  {
    id: 'fruit-veg-5',
    category: 'fruitVegetable',
    titleAr: 'خطوط معالجة الفواكه والخضروات',
    titleEn: 'Fruit and Vegetable Processing Lines',
    descriptionAr: 'خطوط معالجة متكاملة للفواكه والخضروات',
    descriptionEn: 'Integrated processing lines for fruits and vegetables',
    image: '../src/images/خطوط معالجة الفواكه والخضروات.jpeg',
  },

  // ========== أنابيب ومواسير ==========
  {
    id: 'pipes-pvc-1',
    category: 'pipes',
    titleAr: 'أنابيب PVC عالية الجودة',
    titleEn: 'High-Quality PVC Pipes',
    descriptionAr: 'أنابيب PVC بمواصفات عالمية ومتانة عالية جداً',
    descriptionEn: 'PVC pipes with international specifications and excellent durability',
    image: '../src/images/أنابيب PVC عالية الجودة.jpeg',
  },
  {
    id: 'pipes-galvanized-1',
    category: 'pipes',
    titleAr: 'مواسير الحديد المجلفن',
    titleEn: 'Galvanized Steel Pipes',
    descriptionAr: 'مواسير حديد مجلفن مقاومة للصدأ والتآكل',
    descriptionEn: 'Rust and corrosion-resistant galvanized steel pipes',
    image: '../src/images/مواسير الحديد المجلفن.jpeg',
  },
  {
    id: 'pipes-stainless-1',
    category: 'pipes',
    titleAr: 'أنابيب الفولاذ المقاوم للصدأ',
    titleEn: 'Stainless Steel Pipes',
    descriptionAr: 'أنابيب فولاذ مقاوم للصدأ عالية الجودة',
    descriptionEn: 'High-quality stainless steel pipes',
    image: '../src/images/أنابيب الفولاذ المقاوم للصدأ.jpeg',
  },
  {
    id: 'pipes-hdpe-1',
    category: 'pipes',
    titleAr: 'أنابيب HDPE',
    titleEn: 'HDPE Pipes',
    descriptionAr: 'أنابيب HDPE مرنة وآمنة للمياه',
    descriptionEn: 'Flexible and safe HDPE pipes for water',
    image: '../src/images/أنابيب HDPE.jpeg',
  },
  {
    id: 'pipes-fittings-1',
    category: 'pipes',
    titleAr: 'تجهيزات الأنابيب والمواسير',
    titleEn: 'Pipe Fittings and Accessories',
    descriptionAr: 'تجهيزات متكاملة للأنابيب والمواسير من أفضل الماركات',
    descriptionEn: 'Complete pipe fittings and accessories from top brands',
    image: '../src/images/تجهيزات الأنابيب والمواسير.jpeg',
  },
  {
    id: 'pipes-connectors-1',
    category: 'pipes',
    titleAr: 'وصلات ومحابس الأنابيب',
    titleEn: 'Pipe Connectors and Valves',
    descriptionAr: 'وصلات ومحابس عالية الجودة لجميع أنواع الأنابيب',
    descriptionEn: 'High-quality connectors and valves for all pipe types',
    image: '../src/images/وصلات ومحابس الأنابيب.jpeg',
  },

  // ========== المواد الصحية ==========
  {
    id: 'sanitary-bathroom-1',
    category: 'sanitaryMaterials',
    titleAr: 'تجهيزات الحمامات الصحية',
    titleEn: 'Sanitary Bathroom Fixtures',
    descriptionAr: 'تجهيزات حمامات عالية الجودة وآمنة من أفضل الماركات',
    descriptionEn: 'High-quality and safe bathroom fixtures from top brands',
    image: '../src/images/تجهيزات الحمامات الصحية.jpeg',
  },
  {
    id: 'sanitary-bathroom-2',
    category: 'sanitaryMaterials',
    titleAr: 'مقاعد المرحاض الحديثة',
    titleEn: 'Modern Toilet Seats',
    descriptionAr: 'مقاعد مرحاض حديثة وآمنة بتصاميم متعددة',
    descriptionEn: 'Modern and safe toilet seats with multiple designs',
    image: '../src/images/مقاعد المرحاض الحديثة.jpeg',
  },
  {
    id: 'sanitary-bathroom-3',
    category: 'sanitaryMaterials',
    titleAr: 'أحواض الاستحمام والمغاسل',
    titleEn: 'Bathtubs and Sinks',
    descriptionAr: 'أحواض استحمام ومغاسل عالية الجودة',
    descriptionEn: 'High-quality bathtubs and sinks',
    image: '../src/images/أحواض الاستحمام والمغاسل.jpeg',
  },
  {
    id: 'sanitary-bathroom-4',
    category: 'sanitaryMaterials',
    titleAr: 'خلاطات المياه والدش',
    titleEn: 'Water Mixers and Showers',
    descriptionAr: 'خلاطات مياه وأنظمة دش حديثة وآمنة',
    descriptionEn: 'Modern and safe water mixers and shower systems',
    image: '../src/images/خلاطات المياه والدش.jpeg',
  },
  {
    id: 'sanitary-bathroom-5',
    category: 'sanitaryMaterials',
    titleAr: 'أنظمة التهوية والإضاءة',
    titleEn: 'Ventilation and Lighting Systems',
    descriptionAr: 'أنظمة تهوية وإضاءة متخصصة للحمامات',
    descriptionEn: 'Specialized ventilation and lighting systems for bathrooms',
    image: '../src/images/أنظمة التهوية والإضاءة.jpeg',
  },

  // ========== معدات معالجة المياه ==========
  {
    id: 'water-treatment-1',
    category: 'waterTreatment',
    titleAr: 'معدات معالجة المياه',
    titleEn: 'Water Treatment Equipment',
    descriptionAr: 'معدات متخصصة لمعالجة وتنقية المياه بكفاءة عالية',
    descriptionEn: 'Specialized equipment for water treatment and purification with high efficiency',
    image: '../src/images/معدات معالجة المياه.jpeg',
  },
  {
    id: 'water-treatment-2',
    category: 'waterTreatment',
    titleAr: 'أنظمة تحلية المياه',
    titleEn: 'Water Desalination Systems',
    descriptionAr: 'أنظمة تحلية مياه متقدمة وفعالة',
    descriptionEn: 'Advanced and efficient water desalination systems',
    image: '../src/images/أنظمة تحلية المياه.jpeg',
  },
  {
    id: 'water-treatment-3',
    category: 'waterTreatment',
    titleAr: 'مرشحات المياه المتقدمة',
    titleEn: 'Advanced Water Filters',
    descriptionAr: 'مرشحات مياه متقدمة لتنقية شاملة',
    descriptionEn: 'Advanced water filters for comprehensive purification',
    image: '../src/images/مرشحات المياه المتقدمة.jpeg',
  },
  {
    id: 'water-treatment-4',
    category: 'waterTreatment',
    titleAr: 'أنظمة الضخ والتوزيع',
    titleEn: 'Pumping and Distribution Systems',
    descriptionAr: 'أنظمة ضخ وتوزيع مياه عالية الأداء',
    descriptionEn: 'High-performance water pumping and distribution systems',
    image: '../src/images/أنظمة الضخ والتوزيع.jpeg',
  },
  {
    id: 'water-treatment-5',
    category: 'waterTreatment',
    titleAr: 'خزانات تخزين المياه',
    titleEn: 'Water Storage Tanks',
    descriptionAr: 'خزانات تخزين مياه آمنة وموثوقة',
    descriptionEn: 'Safe and reliable water storage tanks',
    image: '../src/images/خزانات تخزين المياه.jpeg',
  },

  // ========== معدات أخرى ==========
  {
    id: 'equipment-other-1',
    category: 'otherEquipment',
    titleAr: 'معدات التعبئة والتغليف',
    titleEn: 'Packaging Equipment',
    descriptionAr: 'معدات متخصصة للتعبئة والتغليف الآلي',
    descriptionEn: 'Specialized equipment for automatic packaging',
    image: '../src/images/معدات التعبئة والتغليف.jpeg',
  },
  {
    id: 'equipment-other-2',
    category: 'otherEquipment',
    titleAr: 'معدات التبريد والتجميد',
    titleEn: 'Cooling and Freezing Equipment',
    descriptionAr: 'معدات تبريد وتجميد عالية الأداء',
    descriptionEn: 'High-performance cooling and freezing equipment',
    image: '../src/images/معدات التبريد والتجميد.jpeg',
  },
  {
    id: 'equipment-other-3',
    category: 'otherEquipment',
    titleAr: 'معدات الفرز والتصنيف',
    titleEn: 'Sorting and Grading Equipment',
    descriptionAr: 'معدات متقدمة للفرز والتصنيف التلقائي',
    descriptionEn: 'Advanced equipment for automatic sorting and grading',
    image: '../src/images/معدات الفرز والتصنيف.jpeg',
  },
  {
    id: 'equipment-other-4',
    category: 'otherEquipment',
    titleAr: 'أنظمة المراقبة والتحكم',
    titleEn: 'Monitoring and Control Systems',
    descriptionAr: 'أنظمة مراقبة وتحكم ذكية',
    descriptionEn: 'Smart monitoring and control systems',
    image: '../src/images/أنظمة المراقبة والتحكم.jpeg',
  },
  {
    id: 'equipment-other-5',
    category: 'otherEquipment',
    titleAr: 'خدمات الصيانة والدعم الفني',
    titleEn: 'Maintenance and Technical Support',
    descriptionAr: 'خدمات صيانة دورية ودعم فني متخصص',
    descriptionEn: 'Regular maintenance services and specialized technical support',
    image: '../src/images/خدمات الصيانة والدعم الفني.jpeg',
  },

  // ========== معدات السيارات ==========
  {
    id: 'automotive-1',
    category: 'automotive',
    titleAr: 'معدات السيارات والصيانة',
    titleEn: 'Automotive Equipment & Maintenance',
    descriptionAr: 'معدات متخصصة لصيانة وإصلاح السيارات',
    descriptionEn: 'Specialized equipment for vehicle maintenance and repair',
    image: '../src/images/معدات السيارات والصيانة.jpeg',
  },

  // ========== معدات الكي البخاري ==========
  {
    id: 'steam-iron-1',
    category: 'steamIron',
    titleAr: 'مكاوي البخار الصناعية',
    titleEn: 'Industrial Steam Irons',
    descriptionAr: 'مكاوي بخار عالية الأداء لكي الملابس والأقمشة',
    descriptionEn: 'High-performance steam irons for pressing clothes and fabrics',
    image: '../src/images/مكاوي البخار الصناعية.jpeg',
  },

  // ========== معدات الغسيل ==========
  {
    id: 'laundry-1',
    category: 'laundry',
    titleAr: 'معدات الغسيل الصناعية',
    titleEn: 'Industrial Laundry Equipment',
    descriptionAr: 'معدات غسيل متقدمة للمنشآت والفنادق',
    descriptionEn: 'Advanced laundry equipment for facilities and hotels',
    image: '../src/images/معدات الغسيل الصناعية.jpeg',
  },

  // ========== معدات الخياطة ==========
  {
    id: 'sewing-1',
    category: 'sewing',
    titleAr: 'معدات الخياطة والتطريز',
    titleEn: 'Sewing and Embroidery Equipment',
    descriptionAr: 'معدات خياطة وتطريز احترافية',
    descriptionEn: 'Professional sewing and embroidery equipment',
    image: '../src/images/معدات الخياطة والتطريز.jpeg',
  },

  // ========== معدات كهربائية ==========
  {
    id: 'electrical-1',
    category: 'electrical',
    titleAr: 'المعدات والأدوات الكهربائية',
    titleEn: 'Electrical Equipment and Tools',
    descriptionAr: 'معدات وأدوات كهربائية عالية الجودة',
    descriptionEn: 'High-quality electrical equipment and tools',
    image: '../src/images/المعدات والأدوات الكهربائية.jpeg',
  },

  // ========== معدات البناء ==========
  {
    id: 'construction-1',
    category: 'construction',
    titleAr: 'معدات البناء والتشييد',
    titleEn: 'Construction Equipment',
    descriptionAr: 'معدات بناء وتشييد متقدمة',
    descriptionEn: 'Advanced construction and building equipment',
    image: '../src/images/معدات البناء والتشييد.jpeg',
  },

  // ========== معدات طبية ==========
  {
    id: 'medical-1',
    category: 'medical',
    titleAr: 'المعدات والأجهزة الطبية',
    titleEn: 'Medical Equipment and Devices',
    descriptionAr: 'معدات وأجهزة طبية معتمدة دولياً',
    descriptionEn: 'Internationally certified medical equipment and devices',
    image: '../src/images/المعدات والأجهزة الطبية.jpeg',
  },

  // ========== معدات الوصول والحركة ==========
  {
    id: 'accessibility-1',
    category: 'accessibility',
    titleAr: 'معدات الوصول وتسهيل الحركة',
    titleEn: 'Accessibility and Mobility Equipment',
    descriptionAr: 'معدات متخصصة لتسهيل الوصول والحركة',
    descriptionEn: 'Specialized equipment for accessibility and mobility',
    image: '../src/images/معدات الوصول وتسهيل الحركة.jpg',
  },
];

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/201028288800',
  email: 'mailalouts@gmail.com',
};

export const CONTACT_INFO = { 
  phone: '+20 102 828 8800',  
  email: 'mailalouts@gmail.com',
  address: 'Egypt',
};
