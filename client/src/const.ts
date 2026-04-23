export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
// ===== IMPORT IMAGES =====
import one from "./images/one.jpg";
import two from "./images/فاصل_البطاطس_المتخصص.jpg";
import three from "./images/مقشرة_البطاطس_الصناعية.jpg";
import four from "./images/معدات_تقطيع_البطاطس.jpeg";
import five from "./images/خطوط_معالجة_البطاطس.jpg";

import six from "./images/آلة_غسيل_الفواكه_والخضروات.jpeg";
import seven from "./images/فاصل_الفوكهة_المتخصص.jpeg";
import eight from "./images/معدات_تقطيع_الخضروات.jpeg";
import nine from "./images/معادت_تجفيف_الفواكة_والخضروات.jpeg";
import ten from "./images/خطوط_معالجة_الفواكهة_والخضرات.jpeg";

import eleven from "./images/أنابيب_PVC_عالية_الجودة.jpeg";
import twelve from "./images/مواسير_الحديد_المجلفن.jpeg";
import thirteen from "./images/أنابيب_الفولاذ_المقاوم_للصدأ.jpeg";

import fourteen from "./images/أنابيب_HDPE.jpeg";
import fifteen from "./images/تجهيزات_الأنابيب_والمواسير.jpeg";
import sixteen from "./images/وصلات_ومحابس_الانابيب.jpeg";

import seventeen from "./images/تجهيزات_الحمام_الصحية.jpeg";
import eighteen from "./images/مقاعد_المراحض_الحديثة.jpeg";
import nineteen from "./images/أحواض_الاستحمام_والمغاسل.jpeg";
import twenty from "./images/خلاطات_المياة_والصرف_الصحي.jpeg";
import twentyOne from "./images/أنظمة_التهوية_والإضاءة.jpeg";

import twentyTwo from "./images/معدات_معالجة_المياة.jpeg";
import twentyThree from "./images/أنظمة_تحلية_المياة.jpeg";
import twentyFour from "./images/مرشحات_المياه_المتقدمة.jpeg";
import twentyFive from "./images/أنظمة_الضخ_والتوزيع.jpeg";
import twentySix from "./images/خزانات_تخزين_المياه.jpeg";

import twentySeven from "./images/معدات_التعبئة_والتغليف.jpeg";
import twentyEight from "./images/معدات_التبريد_والتجميد.jpeg";
import twentyNine from "./images/معدات_الفرز_والتصنيف.jpeg";
import thirty from "./images/أنظمة_المراقبة_والتحكم.jpeg";
import thirtyOne from "./images/خدمات_الصيانة_والدعم_الفني.jpeg";

import thirtyTwo from "./images/معدات_السيارات_والصيانة.jpeg";
import thirtyThree from "./images/مكاوي_البخار_الصناعية.jpeg";
import thirtyFour from "./images/معدات_الغسيل_الصناعية.jpeg";
import thirtyFive from "./images/معدات_الخياطة_والتطريز.jpeg";
import thirtySix from "./images/المعدات_والأدوات_الكهربائية.jpeg";
import thirtySeven from "./images/معدات_البناء_والتشييد.jpeg";
import thirtyEight from "./images/المعدات_والأجهزة_الطبية.jpeg";
import thirtyNine from "./images/معدات_الوصول_وتسهيل_الحركة.jpg";

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
    image: one,
  },
  {
    id: 'potato-washing-2',
    category: 'potatoWashing',
    titleAr: 'فاصل البطاطس المتخصص',
    titleEn: 'Specialized Potato Separator',
    descriptionAr: 'فاصل متقدم لفصل البطاطس حسب الحجم والجودة تلقائياً',
    descriptionEn: 'Advanced separator for automatic sorting potatoes by size and quality',
    image: two,
  },
  {
    id: 'potato-washing-3',
    category: 'potatoWashing',
    titleAr: 'مقشرة البطاطس الصناعية',
    titleEn: 'Industrial Potato Peeler',
    descriptionAr: 'مقشرة صناعية عالية الإنتاجية لتقشير البطاطس بدقة',
    descriptionEn: 'High-capacity industrial peeler for precise potato peeling',
    image: three,
  },
  {
    id: 'potato-washing-4',
    category: 'potatoWashing',
    titleAr: 'معدات تقطيع البطاطس',
    titleEn: 'Potato Cutting Equipment',
    descriptionAr: 'معدات متخصصة لتقطيع البطاطس بأشكال وأحجام مختلفة',
    descriptionEn: 'Specialized equipment for cutting potatoes in various shapes and sizes',
    image: four,
  },
  {
    id: 'potato-washing-5',
    category: 'potatoWashing',
    titleAr: 'خطوط معالجة البطاطس الكاملة',
    titleEn: 'Complete Potato Processing Lines',
    descriptionAr: 'خطوط معالجة متكاملة من الغسيل إلى التعبئة',
    descriptionEn: 'Integrated processing lines from washing to packaging',
    image: five,
  },

  // ========== معدات مغاسل الفواكه والخضروات ==========
  {
    id: 'fruit-veg-1',
    category: 'fruitVegetable',
    titleAr: 'آلة غسيل الفواكه والخضروات',
    titleEn: 'Fruit and Vegetable Washing Machine',
    descriptionAr: 'آلة غسيل متقدمة للفواكه والخضروات بتقنية الرش والنقع',
    descriptionEn: 'Advanced washing machine for fruits and vegetables with spray and soak technology',
    image: six,
  },
  {
    id: 'fruit-veg-2',
    category: 'fruitVegetable',
    titleAr: 'فاصل الفواكه والخضروات',
    titleEn: 'Fruit and Vegetable Separator',
    descriptionAr: 'فاصل متخصص لفصل الفواكه والخضروات حسب الحجم والنوع',
    descriptionEn: 'Specialized separator for sorting fruits and vegetables by size and type',
    image: seven,
  },
  {
    id: 'fruit-veg-3',
    category: 'fruitVegetable',
    titleAr: 'معدات تقطيع الخضروات',
    titleEn: 'Vegetable Cutting Equipment',
    descriptionAr: 'معدات متقدمة لتقطيع الخضروات بأشكال متعددة',
    descriptionEn: 'Advanced equipment for cutting vegetables in multiple shapes',
    image: eight,
  },
  {
    id: 'fruit-veg-4',
    category: 'fruitVegetable',
    titleAr: 'معدات تجفيف الفواكه والخضروات',
    titleEn: 'Fruit and Vegetable Drying Equipment',
    descriptionAr: 'معدات متخصصة لتجفيف الفواكه والخضروات بكفاءة عالية',
    descriptionEn: 'Specialized equipment for efficient drying of fruits and vegetables',
    image: nine,
  },
  {
    id: 'fruit-veg-5',
    category: 'fruitVegetable',
    titleAr: 'خطوط معالجة الفواكه والخضروات',
    titleEn: 'Fruit and Vegetable Processing Lines',
    descriptionAr: 'خطوط معالجة متكاملة للفواكه والخضروات',
    descriptionEn: 'Integrated processing lines for fruits and vegetables',
    image: ten,
  },

  // ========== أنابيب ومواسير ==========
  {
    id: 'pipes-pvc-1',
    category: 'pipes',
    titleAr: 'أنابيب PVC عالية الجودة',
    titleEn: 'High-Quality PVC Pipes',
    descriptionAr: 'أنابيب PVC بمواصفات عالمية ومتانة عالية جداً',
    descriptionEn: 'PVC pipes with international specifications and excellent durability',
    image: eleven,
  },
  {
    id: 'pipes-galvanized-1',
    category: 'pipes',
    titleAr: 'مواسير الحديد المجلفن',
    titleEn: 'Galvanized Steel Pipes',
    descriptionAr: 'مواسير حديد مجلفن مقاومة للصدأ والتآكل',
    descriptionEn: 'Rust and corrosion-resistant galvanized steel pipes',
    image: twelve,
  },
  {
    id: 'pipes-stainless-1',
    category: 'pipes',
    titleAr: 'أنابيب الفولاذ المقاوم للصدأ',
    titleEn: 'Stainless Steel Pipes',
    descriptionAr: 'أنابيب فولاذ مقاوم للصدأ عالية الجودة',
    descriptionEn: 'High-quality stainless steel pipes',
    image: thirteen,
  },
  {
    id: 'pipes-hdpe-1',
    category: 'pipes',
    titleAr: 'أنابيب HDPE',
    titleEn: 'HDPE Pipes',
    descriptionAr: 'أنابيب HDPE مرنة وآمنة للمياه',
    descriptionEn: 'Flexible and safe HDPE pipes for water',
    image: fourteen,
  },
  {
    id: 'pipes-fittings-1',
    category: 'pipes',
    titleAr: 'تجهيزات الأنابيب والمواسير',
    titleEn: 'Pipe Fittings and Accessories',
    descriptionAr: 'تجهيزات متكاملة للأنابيب والمواسير من أفضل الماركات',
    descriptionEn: 'Complete pipe fittings and accessories from top brands',
    image: fifteen,
  },
  {
    id: 'pipes-connectors-1',
    category: 'pipes',
    titleAr: 'وصلات ومحابس الأنابيب',
    titleEn: 'Pipe Connectors and Valves',
    descriptionAr: 'وصلات ومحابس عالية الجودة لجميع أنواع الأنابيب',
    descriptionEn: 'High-quality connectors and valves for all pipe types',
    image: sixteen,
  },

  // ========== المواد الصحية ==========
  {
    id: 'sanitary-bathroom-1',
    category: 'sanitaryMaterials',
    titleAr: 'تجهيزات الحمامات الصحية',
    titleEn: 'Sanitary Bathroom Fixtures',
    descriptionAr: 'تجهيزات حمامات عالية الجودة وآمنة من أفضل الماركات',
    descriptionEn: 'High-quality and safe bathroom fixtures from top brands',
    image: seventeen,
  },
  {
    id: 'sanitary-bathroom-2',
    category: 'sanitaryMaterials',
    titleAr: 'مقاعد المرحاض الحديثة',
    titleEn: 'Modern Toilet Seats',
    descriptionAr: 'مقاعد مرحاض حديثة وآمنة بتصاميم متعددة',
    descriptionEn: 'Modern and safe toilet seats with multiple designs',
    image: eighteen,
  },
  {
    id: 'sanitary-bathroom-3',
    category: 'sanitaryMaterials',
    titleAr: 'أحواض الاستحمام والمغاسل',
    titleEn: 'Bathtubs and Sinks',
    descriptionAr: 'أحواض استحمام ومغاسل عالية الجودة',
    descriptionEn: 'High-quality bathtubs and sinks',
    image: nineteen,
  },
  {
    id: 'sanitary-bathroom-4',
    category: 'sanitaryMaterials',
    titleAr: 'خلاطات المياه والدش',
    titleEn: 'Water Mixers and Showers',
    descriptionAr: 'خلاطات مياه وأنظمة دش حديثة وآمنة',
    descriptionEn: 'Modern and safe water mixers and shower systems',
    image: twenty,
  },
  {
    id: 'sanitary-bathroom-5',
    category: 'sanitaryMaterials',
    titleAr: 'أنظمة التهوية والإضاءة',
    titleEn: 'Ventilation and Lighting Systems',
    descriptionAr: 'أنظمة تهوية وإضاءة متخصصة للحمامات',
    descriptionEn: 'Specialized ventilation and lighting systems for bathrooms',
    image: twentyOne,
  },

  // ========== معدات معالجة المياه ==========
  {
    id: 'water-treatment-1',
    category: 'waterTreatment',
    titleAr: 'معدات معالجة المياه',
    titleEn: 'Water Treatment Equipment',
    descriptionAr: 'معدات متخصصة لمعالجة وتنقية المياه بكفاءة عالية',
    descriptionEn: 'Specialized equipment for water treatment and purification with high efficiency',
    image: twentyTwo,
  },
  {
    id: 'water-treatment-2',
    category: 'waterTreatment',
    titleAr: 'أنظمة تحلية المياه',
    titleEn: 'Water Desalination Systems',
    descriptionAr: 'أنظمة تحلية مياه متقدمة وفعالة',
    descriptionEn: 'Advanced and efficient water desalination systems',
    image: twentyThree,
  },
  {
    id: 'water-treatment-3',
    category: 'waterTreatment',
    titleAr: 'مرشحات المياه المتقدمة',
    titleEn: 'Advanced Water Filters',
    descriptionAr: 'مرشحات مياه متقدمة لتنقية شاملة',
    descriptionEn: 'Advanced water filters for comprehensive purification',
    image: twentyFour,
  },
  {
    id: 'water-treatment-4',
    category: 'waterTreatment',
    titleAr: 'أنظمة الضخ والتوزيع',
    titleEn: 'Pumping and Distribution Systems',
    descriptionAr: 'أنظمة ضخ وتوزيع مياه عالية الأداء',
    descriptionEn: 'High-performance water pumping and distribution systems',
    image: twentyFive,
  },
  {
    id: 'water-treatment-5',
    category: 'waterTreatment',
    titleAr: 'خزانات تخزين المياه',
    titleEn: 'Water Storage Tanks',
    descriptionAr: 'خزانات تخزين مياه آمنة وموثوقة',
    descriptionEn: 'Safe and reliable water storage tanks',
    image: twentySix,
  },

  // ========== معدات أخرى ==========
  {
    id: 'equipment-other-1',
    category: 'otherEquipment',
    titleAr: 'معدات التعبئة والتغليف',
    titleEn: 'Packaging Equipment',
    descriptionAr: 'معدات متخصصة للتعبئة والتغليف الآلي',
    descriptionEn: 'Specialized equipment for automatic packaging',
    image: twentySeven,
  },
  {
    id: 'equipment-other-2',
    category: 'otherEquipment',
    titleAr: 'معدات التبريد والتجميد',
    titleEn: 'Cooling and Freezing Equipment',
    descriptionAr: 'معدات تبريد وتجميد عالية الأداء',
    descriptionEn: 'High-performance cooling and freezing equipment',
    image: twentyEight,
  },
  {
    id: 'equipment-other-3',
    category: 'otherEquipment',
    titleAr: 'معدات الفرز والتصنيف',
    titleEn: 'Sorting and Grading Equipment',
    descriptionAr: 'معدات متقدمة للفرز والتصنيف التلقائي',
    descriptionEn: 'Advanced equipment for automatic sorting and grading',
    image: twentyNine,
  },
  {
    id: 'equipment-other-4',
    category: 'otherEquipment',
    titleAr: 'أنظمة المراقبة والتحكم',
    titleEn: 'Monitoring and Control Systems',
    descriptionAr: 'أنظمة مراقبة وتحكم ذكية',
    descriptionEn: 'Smart monitoring and control systems',
    image: thirty,
  },
  {
    id: 'equipment-other-5',
    category: 'otherEquipment',
    titleAr: 'خدمات الصيانة والدعم الفني',
    titleEn: 'Maintenance and Technical Support',
    descriptionAr: 'خدمات صيانة دورية ودعم فني متخصص',
    descriptionEn: 'Regular maintenance services and specialized technical support',
    image: thirtyOne,
  },

  // ========== معدات السيارات ==========
  {
    id: 'automotive-1',
    category: 'automotive',
    titleAr: 'معدات السيارات والصيانة',
    titleEn: 'Automotive Equipment & Maintenance',
    descriptionAr: 'معدات متخصصة لصيانة وإصلاح السيارات',
    descriptionEn: 'Specialized equipment for vehicle maintenance and repair',
    image: thirtyTwo,
  },

  // ========== معدات الكي البخاري ==========
  {
    id: 'steam-iron-1',
    category: 'steamIron',
    titleAr: 'مكاوي البخار الصناعية',
    titleEn: 'Industrial Steam Irons',
    descriptionAr: 'مكاوي بخار عالية الأداء لكي الملابس والأقمشة',
    descriptionEn: 'High-performance steam irons for pressing clothes and fabrics',
    image: thirtyThree,
  },

  // ========== معدات الغسيل ==========
  {
    id: 'laundry-1',
    category: 'laundry',
    titleAr: 'معدات الغسيل الصناعية',
    titleEn: 'Industrial Laundry Equipment',
    descriptionAr: 'معدات غسيل متقدمة للمنشآت والفنادق',
    descriptionEn: 'Advanced laundry equipment for facilities and hotels',
    image: thirtyFour,
  },

  // ========== معدات الخياطة ==========
  {
    id: 'sewing-1',
    category: 'sewing',
    titleAr: 'معدات الخياطة والتطريز',
    titleEn: 'Sewing and Embroidery Equipment',
    descriptionAr: 'معدات خياطة وتطريز احترافية',
    descriptionEn: 'Professional sewing and embroidery equipment',
    image: thirtyFive,
  },

  // ========== معدات كهربائية ==========
  {
    id: 'electrical-1',
    category: 'electrical',
    titleAr: 'المعدات والأدوات الكهربائية',
    titleEn: 'Electrical Equipment and Tools',
    descriptionAr: 'معدات وأدوات كهربائية عالية الجودة',
    descriptionEn: 'High-quality electrical equipment and tools',
    image: thirtySix,
  },

  // ========== معدات البناء ==========
  {
    id: 'construction-1',
    category: 'construction',
    titleAr: 'معدات البناء والتشييد',
    titleEn: 'Construction Equipment',
    descriptionAr: 'معدات بناء وتشييد متقدمة',
    descriptionEn: 'Advanced construction and building equipment',
    image: thirtySeven,
  },

  // ========== معدات طبية ==========
  {
    id: 'medical-1',
    category: 'medical',
    titleAr: 'المعدات والأجهزة الطبية',
    titleEn: 'Medical Equipment and Devices',
    descriptionAr: 'معدات وأجهزة طبية معتمدة دولياً',
    descriptionEn: 'Internationally certified medical equipment and devices',
    image: thirtyEight,
  },

  // ========== معدات الوصول والحركة ==========
  {
    id: 'accessibility-1',
    category: 'accessibility',
    titleAr: 'معدات الوصول وتسهيل الحركة',
    titleEn: 'Accessibility and Mobility Equipment',
    descriptionAr: 'معدات متخصصة لتسهيل الوصول والحركة',
    descriptionEn: 'Specialized equipment for accessibility and mobility',
    image: thirtyNine,
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
