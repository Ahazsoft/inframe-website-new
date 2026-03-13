// projectData.ts
import full_image from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-1.jpg';
import full_image_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg';
import port_img_1 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg';
import port_img_2 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg';
import port_img_3 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg';
import port_img_4 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg';
import port_img_5 from '@/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg';

export type ProjectType = {
  id: number;
  title: string;
  category: string;
  year: string;
  agency?: string;

  heroImage?: any;
  heroVideo?: string;
  youtubeUrl?: string;

  makingVideo?: string;
  makingFrame?: string;
  // heroVideoPoster?: string;
  heroVideoFallbackImage?: any;

  thumbnailImage?: any;
  gallery?: any[];
  btsGallery?: any[];

  introTitle?: string;
  introText?: string[];
  goalTitle?: string;
  goalText?: string[];
  link: string;

  featured?: boolean;
  grid?: boolean;
};


export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "ZTE – Video Production",
    category: "TV Commercials",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/a48c464296ccef327d79f945f1829c91/manifest/video.m3u8",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "/assets/img/portfolio/ZTE/herofallback.png",
    heroImage:"/assets/img/portfolio/ZTE/heroimage.png",
    thumbnailImage: "/assets/img/portfolio/ZTE/heroimage.jpg",
    gallery: ["/assets/img/portfolio/ZTE/gallery1.png","/assets/img/portfolio/ZTE/gallery2.png"],

    btsGallery:[
      "/assets/img/bts/ZTE/1.png",
      "/assets/img/bts/ZTE/2.png",  
    ],
    introTitle: "Sleek Modern Commercial",
    introText: [
      "A sleek, modern commercial showcasing ZTE smartphones through bold color design, confident talent presence, and polished cinematic lighting. The production emphasizes product elegance, camera detail, and lifestyle appeal with a premium commercial finish."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Deliver a premium, cinematic TV commercial that highlights product elegance and brand identity. Create a strong visual language for both broadcast and digital platforms."
    ],
    link: "https://www.tiktok.com/@inframeproduction1/video/7600856647677906194",
    featured: true,
    grid: true
  },

  {
    id: 2,
    title: "Negus Malt – Video Production",
    category: "TV Commercials",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/53674618e9c1b3996f4c0aecb2b4ae54/manifest/video.m3u8",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/793f560a-a935-4719-52d3-9ed8b3d1aa00/public",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/062564aa-2d99-4194-f6e9-1938dd245200/public",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/4e5d4878-5fa3-4d9a-9451-e8bd0bcd5b00/public","https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/bcd495ff-07ff-43cc-1b49-81f2c9366100/public"],
    btsGallery:[
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/062aa799-dfe0-4ad7-ba56-a3137b86dc00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/7d49e2ce-b742-4ed3-46e8-e5789e71c800/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/3632b516-ce6a-4bcf-793e-551f6451e500/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/00e9f920-ce00-4474-6aac-706c11634000/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/2fa53f3c-c3b4-47b7-7ecf-56338a82ea00/public"
    ],
    introTitle: "Warm Lifestyle Commercial",
    introText: [
      "A warm, lifestyle-driven commercial capturing everyday moments through soft natural light, authentic performances, and rich cinematic color grading.The production blends storytelling and product focus to create a relatable, premium brand experience."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Capture real human moments with cinematic lighting and emotional storytelling. Build a premium brand image that feels authentic and relatable."
    ],
    link: "",
    featured: true,
    grid: true
  },

  {
    id: 3,
    title: "Largo Detergent – Video Production",
    category: "TV Commercials",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/2dff2d1c3dc1b7e071951de3a5698ed4/manifest/video.m3u8",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/b8d6f9a6-59f8-4e06-552b-69705fa36400/public",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/601555d3-dc83-4425-18d4-79bbc13e6600/public",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/118cd25d-2f3d-47c3-b2c8-d89eeb3bf600/public","https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/e6a6e842-ed6a-4a62-fff6-f0bd106f8b00/public"],
    btsGallery:[
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/23368e40-5c6a-412e-dd20-4745a43bac00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/90b821bc-345a-4a43-4b58-2396a7093b00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/21037c2c-8bf6-4bf9-f5b5-3c2204754e00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/3304c7e3-599e-43aa-720c-998aab036c00/public",
      
    ],
    introTitle: "Bright Family Commercial",
    introText: [
      "A bright, family-centered commercial highlighting everyday care through natural performances, fresh lighting, and clean visual storytelling. The production emphasizes trust, cleanliness, and generational connection with a warm, relatable commercial tone."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create a clean, warm commercial that connects with families and showcases trust and deliver a bright and optimistic visual style suitable for TV and digital."
    ],
    link: "",
    featured: false,
    grid: true
  },

  {
    id: 4,
    title: "Castel Wine – Valentine’s Day Campaign",
    category: "TV Commercials",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/614cdbb97d15076ee4d7a2e675c6eacc/manifest/video.m3u8",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/4d8c99c4-8a72-48dd-3332-8d72d8e5d400/public",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/8469e744-70bf-4138-5d06-9858642bb400/public",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/9d65b2a8-c23b-46fe-8269-60b20b770900/public","https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/c5d2c122-fdf1-4141-4014-cc4214196d00/public"],
    btsGallery:[
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/10732bde-6cbf-4e50-042c-a49564398100/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/69b0df0e-4c39-4552-206b-7dd4dda3a300/public"
    ],
    introTitle: "Romantic Cinematic Campaign",
    introText: [
      "A romantic, cinematic commercial capturing intimate moments through warm lighting, elegant styling, and refined visual storytelling.The production highlights connection, celebration, and the premium character of Castel Wine in a sophisticated Valentine’s atmosphere."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Showcase premium brand identity through cinematic storytelling and romantic visuals and create campaign content suitable for social media and digital platforms."
    ],
    link: "",
    featured: true,
    grid: false
  },

  {
    id: 5,
    title: "Ethiopian Airlines – “The New Spirit of Africa”",
    category: "TV Commercials",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/2241693b0e60959bf39e268a92f7ab8f/manifest/video.m3u8",
    // youtubeUrl: "https://youtu.be/ZI49B85NjOI?si=Ae7yytxIxEW3DeMo",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/7ec36b05-ade8-495a-3dae-2bf10754b400/public",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/336fc083-35e1-4559-a152-e12a42af9200/public",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/95bb890f-ab39-484f-9de8-546009307600/public","https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/d3609145-2f7a-4307-689c-9e7b413ada00/public"],
    btsGallery:[
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/1d4d11e5-114a-470d-0795-45a67a5e7c00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/f22bd4cb-0d23-4a9d-c9a3-c5475204eb00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/a94c2223-9dd0-479e-500e-1482c8cac600/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/32794823-bd9d-410f-265a-eecad51f3f00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/d29427e0-6513-4448-5946-173a12014500/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/33707e71-2c80-4661-fe4c-9e6d23dbfe00/public"
    ],
    introTitle: "Cinematic Brand Campaign",
    introText: [
      "A cinematic brand campaign blending Ethiopian heritage, live music, and a modern travel experience. The production combines refined storytelling, rich visuals, and immersive sound design to celebrate national identity while showcasing Ethiopian Airlines’ world-class journey."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Capture the spirit of national identity with cinematic storytelling. Highlight travel experience and modern luxury with premium visuals."
    ],
    link: "#",
    featured: true,
    grid: false
  },

  // {
  //   id: 6,
  //   title: "Yewendoch Guday × TECNO Mobile – Brand Collaboration Campaign",
  //   category: "TV Commercials",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroVideo: "/assets/img/portfolio/YG-Techno/herovideo.mp4",
  //   // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
  //   heroVideoFallbackImage: "/assets/img/portfolio/YG-Techno/herofallback.png",
  //   thumbnailImage: "/assets/img/portfolio/YG-Techno/heroimage.png",
  //   gallery: ["/assets/img/portfolio/YG-Techno/gallery1.png","/assets/img/portfolio/YG-Techno/gallery2.png"],
  //   // btsGallery:[
  //   //   "/assets/img/portfolio/YG-Techno/bts1.png",
  //   //   "/assets/img/portfolio/YG-Techno/bts2.png",
  //   //   "/assets/img/portfolio/YG-Techno/bts3.png",
  //   //   "/assets/img/portfolio/YG-Techno/bts4.png",
  //   //   "/assets/img/portfolio/YG-Techno/bts5.png",
  //   //   "/assets/img/portfolio/YG-Techno/bts6.png",
  //   //   "/assets/img/portfolio/YG-Techno/bts7.png"
  //   // ],

  //   btsGallery:[
  //     "/assets/img/bts/YWG/1.png",
  //     "/assets/img/bts/YWG/2.png",
  //     "/assets/img/bts/YWG/3.png",
  //     "/assets/img/bts/YWG/4.png",
  //     "/assets/img/bts/YWG/5.png",
      
  //   ],
  //   introTitle: "Story-Driven Brand Campaign",
  //   introText: [
  //     "A story-driven brand campaign blending everyday craftsmanship and human connection with TECNO’s innovative technology.",
  //     "The production uses warm cinematic lighting, authentic performances, and lifestyle storytelling to position the smartphone as part of real work, creativity, and progress."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Showcase the phone as part of real life, creativity, and progress.",
  //     "Create warm, cinematic content optimized for social platforms."
  //   ],
  //   link: "#",
  //   featured: false,
  //   grid: true
  // },


  {
    id: 6,
    title: "Yewendoch Guday × TECNO Mobile – Brand Campaign",
    category: "TV Commercials",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/665a3ae4f25d3bb367319bda85c73b0f/manifest/video.m3u8",
    heroVideoFallbackImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/841b0ac1-f6b8-48c9-7356-080d50704600/public",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/841b0ac1-f6b8-48c9-7356-080d50704600/public",
    gallery: [
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/583728bc-925b-4209-d9de-54932b859000/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/f005b1b0-2a64-4e84-86c6-4de6dec78b00/public",
      
      
    ],
    btsGallery: [

      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/3a8626e2-952a-42c1-36e0-1fd5df7ce100/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/5663c49e-e916-478c-65e9-84c8fa805600/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/e13fb416-62a3-4ee8-0170-e69c23bb8500/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/77418854-f5dd-421d-2784-ca4a6f932400/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/5ad627fe-c85c-4e90-a701-9925b518e400/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/1697a427-bb0b-4231-6058-b14cc4243f00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/1caad5f0-aed6-46d4-7119-e80889d09800/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/97283e98-2cc9-4be8-10aa-fc673bbe7700/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/f42601a4-740f-4018-47e1-b7bbf0074b00/public",
    ],
    introTitle: "Story-Driven Brand Campaign",
    introText: [
      "A story-driven brand campaign blending everyday craftsmanship and human connection with TECNO’s innovative technology.The production uses warm cinematic lighting, authentic performances, and lifestyle storytelling to position the smartphone as part of real work, creativity, and progress. Narrative-driven photography is integrated to capture real craftsmanship and human stories with cinematic visual treatment."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Showcase the phone as part of real life, creativity, and progress.Create warm, cinematic content optimized for social platforms.Tell a story through photography using cinematic lighting and real human moments.Create emotionally engaging visuals that feel authentic."
    ],
    link: "https://www.tiktok.com/@inframeproduction1/video/7574841813484293387",
    featured: true,
    grid: true
  },

  {
    id: 7,
    title: "Senq Malt – Mother’s Day Campaign",
    category: "TV Commercials",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/f9f6d62fbb3c87e25b0bac32198baf1a/manifest/video.m3u8",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/3e6c762d-e28d-43a7-15ee-afe8f2f24700/public",

    heroVideoFallbackImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/ecd7f34b-4837-44ef-3f42-7c1ee1ef4000/public",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/4e55b58b-8a3c-4e6d-8f8b-5333f6e2a800/public",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/cfdaf174-d14b-4d3c-4f74-ba8994ded400/public","https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/50f9ecca-158b-4aa9-8cca-1208da0ff400/public"],
    introTitle: "Heartfelt Family Campaign",
    introText: [
      "A heartfelt, family-centered brand campaign celebrating motherhood through intimate moments, soft natural lighting, and emotional storytelling.",
      "The production captures love, care, and everyday joy, positioning Senq Malt as part of meaningful family connections."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create emotional storytelling with soft lighting and intimate moments.",
      "Position the brand as part of family love and celebration."
    ],
    link: "",
    featured: false,
    grid: true
  },

  {
    id: 8,
    title: "Ethio Telecom – 5G Launch Campaign",
    category: "TV Commercials",
    year: "2024",
    agency: "Berry Advertising",
    heroVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/7154a39d8978faa89fce3cb78df5f50f/manifest/video.m3u8",
    // heroVideoFallbackImage: "/assets/img/portfolio/EthioTelecom/herofallback.png",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/bc18daa6-d482-4561-73ce-db995e45bf00/public",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/bc18daa6-d482-4561-73ce-db995e45bf00/public","https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/48a24184-6a56-4356-233f-4fac49735400/public"],
    
    // btsGallery:[
    //   "/assets/img/portfolio/EthioTelecom/bts1.png",
    //   "/assets/img/portfolio/EthioTelecom/bts2.png",
    //   "/assets/img/portfolio/EthioTelecom/bts3.png"
    // ],
    introTitle: "Futuristic Brand Campaign",
    introText: [
      "A high-impact brand campaign introducing Ethio Telecom’s 5G network through futuristic visuals, dynamic motion graphics, and cinematic storytelling.The production connects education, innovation, and urban connectivity, positioning 5G as a catalyst for national progress and digital transformation."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create futuristic visuals to introduce 5G network benefits. Deliver campaign content that supports national digital transformation."
    ],
    link: "",
    featured: false,
    grid: true
  },

  {
    id: 9,
    title: "TECNO Mobile – Lifestyle Ambassador Campaign",
    category: "Social Media and Digital Campaigns",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/71dbd2db369e2ab887a8b0da222b7efa/manifest/video.m3u8",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/b79d7145-cf1c-4a90-a4dd-199e54c19600/public",
    gallery: [
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/c70ba95d-3e2e-4495-7819-1b14b3d6a300/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/fcd23a50-337a-48c7-e41d-149820981d00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/c1d345ef-a0e3-4bd6-8312-c36b3bb43300/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/22936e3c-f106-4b2e-7140-e976c153ef00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/423a3d21-dfa3-4281-8c94-f5d5d0d96900/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/82e64dc8-c0fa-4776-ff72-a33e9c0e0500/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/9e61e5b5-da05-472b-1512-0c0f0bb87100/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/7aea4c3b-e600-4c78-51fe-a15f0686f300/public",
    ],

    introTitle: "Lifestyle Ambassador Campaign",
    introText: [
      "A lifestyle-driven brand campaign featuring Abubeker Nura and Danayit Mekbib, showcasing TECNO smartphones as part of everyday performance and balance. The production blends authentic moments, clean cinematic lighting, and modern storytelling to highlight connectivity, productivity, and smart living."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Showcase modern productivity and balance using authentic storytelling. Create social-first content optimized for digital platforms."
    ],
    link: "",
    featured: false,
    grid: true
  },

  {
    id: 10,
    title: "RIIFO – PPR & PVC Product Campaign",
    category: "TV Commercials",
    year: "2024",
    agency: "Berry Advertising",
    heroVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/1add8ddea88aa2c82e98dd5624120938/manifest/video.m3u8",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/165adbff-134f-4b5a-eff4-8336dac60900/public",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/18dea330-6159-4582-1f98-188591ec6200/public","https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/09e0d4ae-efcb-44a9-d326-05840527dc00/public"],
    btsGallery:[
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/eca652fc-8b8a-476d-4b7c-4c6ad09e0500/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/0b71252f-2e18-44eb-2490-1dd11cc43e00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/e474dc65-51c5-4871-87b5-ea0a1087dd00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/c168506a-4fb3-4d3d-6929-c429a839a900/public"
    ],
    introTitle: "Clean Product Campaign",
    introText: [
      "A clean, modern product campaign showcasing RIIFO’s PPR and PVC systems through precision visuals, well-lit showroom environments, and informative lifestyle demonstrations.",
      "The production emphasizes durability, quality, and smart engineering with a professional, corporate visual language."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create precise product visuals that show quality and engineering.",
      "Deliver a corporate style campaign suitable for B2B marketing."
    ],
    link: "",
    featured: false,
    grid: true
  },

  // {
  //   id: 11,
  //   title: "Addis Ababa City – Night Life & Convention Center Commercial",
  //   category: "Events",
  //   year: "2024",
  //   agency: "Berry Advertising",
  //   heroImage: full_image,
  //   thumbnailImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Cinematic City Film",
  //   introText: [
  //     "A cinematic city film capturing Addis Ababa’s vibrant nightlife, iconic convention center, and premium hotels through dynamic night cinematography, elegant lighting, and urban storytelling.",
  //     "The production highlights the city’s energy, hospitality, and modern destination appeal."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Showcase Addis Ababa as a modern, premium destination.",
  //     "Capture nightlife energy with dynamic night cinematography."
  //   ],
  //   link: "#"
  // },

  {
    id: 12,
    title: "Wenchi Eco Lodge – PMO Documentary",
    category: "Documentary and Brand Film",
    year: "2024",
    agency: "Berry Advertising",
    
    youtubeUrl: "https://www.youtube.com/watch?v=rjSHkAs338Y", 
    heroImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/d7804be2-d9c5-4563-529d-67bfd20f5b00/public",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/d7804be2-d9c5-4563-529d-67bfd20f5b00/public",
    // gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
    introTitle: "Eco Lodge Documentary",
    introText: [
      "A cinematic documentary capturing the natural beauty, community life, and sustainable vision of Wenchi Eco Lodge.",
      "Produced for the PMO as part of the Gebeta Le Hager project, the film blends authentic storytelling and scenic cinematography."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Highlight eco-tourism and sustainability through cinematic visuals.",
      "Tell authentic community stories in a national development context."
    ],
    link: ""
  },

  {
    id: 13,
    title: "Chebera Churchura Lodge – Gebeta Le Hager",
    category: "Documentary and Brand Film",
    year: "2024",
    agency: "Berry Advertising",
    heroImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/cc79e6e7-aa3e-4cf8-f835-391dad5d1400/public",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/cc79e6e7-aa3e-4cf8-f835-391dad5d1400/public",
    youtubeUrl: "https://youtu.be/9W9zJ2YCyZA?si=B4MURXxytpoHFKbS",
    
    introTitle: "Eco Tourism Documentary",
    introText: [
      "A cinematic documentary highlighting the natural beauty, cultural environment, and eco-tourism potential of Cubera Churchura Lodge.",
      "Produced as part of the Gebeta Le Hager project, the film focuses on sustainable hospitality and conservation."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Showcase sustainable hospitality and eco-tourism potential.",
      "Capture authentic cultural and natural storytelling."
    ],
    link: ""
  },

  // {
  //   id: 14,
  //   title: "National Palace Museum – Cultural Heritage Documentary",
  //   category: "Documentary and Brand Film",
  //   year: "2024",
  //   agency: "Berry Advertising",
  //   heroImage: full_image,
  //   thumbnailImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Heritage Documentary",
  //   introText: [
  //     "A cinematic documentary capturing the historical significance, architecture, and cultural legacy of the National Palace Museum.",
  //     "The production combines refined visuals and thoughtful storytelling to present the site as a symbol of national identity."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Highlight heritage preservation through cinematic storytelling.",
  //     "Showcase architecture and history with premium visuals."
  //   ],
  //   link: "#"
  // },

  {
    id: 15,
    title: "Beynouna Village – Gebeta Le Hager Project",
    category: "Documentary and Brand Film",
    year: "2024",
    agency: "Berry Advertising",
    // heroVideo: "/assets/img/portfolio/Beynouna/herovideo.mp4",
    youtubeUrl: "https://www.youtube.com/watch?v=7Eqhk3ABQYk&feature=youtu.be",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/65fefc6c-109d-4890-6daf-ee1ec1f48d00/public",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/8a4592e1-c809-43b9-e0d5-a4db54093300/public","https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/40c066cf-18d9-40f6-7458-d465fba6b700/public"],
    btsGallery:[
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/7ac6d502-167e-4441-c37b-8984ad121200/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/b7ede5c9-9da9-48e5-14e9-5e3e78ac8d00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/fab945d8-a6d9-4337-4ee5-7210f6ead900/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/6aa5e62d-f765-4ba9-02bb-029a7410e900/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/42873349-25b6-4ecc-f50d-6c13d7f4a500/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/cbc94b7b-2d0d-431d-f6f5-4543793e2b00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/ec407a93-923d-4a45-2474-62f56c8ecc00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/e71cdd06-c08f-4f45-3687-31a39fee6100/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/3e0798da-39b2-4d77-606f-e19a5e23a700/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/e011ef23-c898-4eb9-bb32-a03179d83000/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/9d2bd17f-bc6d-4754-f2d6-d3b4762e6000/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/745f52ec-8b35-4d1a-c6b0-1ac8d40f4100/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/94a2450e-fc11-4461-cf30-7f7e7b6a1700/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/f9d29135-b2fe-4875-bbbe-97a4348fa000/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/18c11e81-0fc3-4d95-d484-be7415b32200/public"
    ],
    introTitle: "Village Documentary",
    introText: [
      "A cinematic documentary showcasing the natural setting, community life, and sustainable tourism vision of Beynouna Village.",
      "Produced as part of the Gebeta Le Hager project, the film highlights cultural heritage and eco-tourism."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Tell a story of sustainable tourism and cultural heritage.",
      "Create cinematic visuals that highlight village life and natural beauty."
    ],
    link: "",
    featured: false,
    grid: true
  },

  {
    id: 16,
    title: "Teracon Coffee – Brand Documentary & Commercial Film",
    category: "Documentary and Brand Film",
    year: "2024",
    agency: "Inframe Production",
    heroImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/bfb9d217-686b-479d-bfad-24f25ea08a00/public",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/83d5056f-0c50-4837-fab4-3c687e409f00/public",
    gallery: [ "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/d494d946-6c5a-44bf-45ae-dabaf3e0ed00/public" ,  "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/577430bd-71a8-4dbe-db81-211e9a4b1100/public"],
    btsGallery:[
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/68d175bb-052d-4207-caca-7e6227c7aa00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/a8d0b943-069a-4798-20e4-c6261b228100/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/ddfba81d-130f-447c-b72c-ab6c343b0300/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/6bca1a0b-43ef-4651-ebeb-adc1de0d7a00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/5f24e40f-d021-486d-a6d8-ea1a935bb000/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/f4b21a3b-58a0-4a3f-810e-fe7b7d4a6300/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/1b3b20a0-cacf-41a1-38c9-a4803c97ed00/public",

    ],
    introTitle: "Coffee Brand Film",
    introText: [
      "A cinematic brand film capturing the journey of Teracon Coffee from farm to cup. The production blends authentic storytelling, scenic plantation visuals, and refined product cinematography."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Showcase coffee craftsmanship and heritage through cinematic storytelling. Deliver content for brand positioning and digital platforms."
    ],
    link: ""
  },

  // {
  //   id: 17,
  //   title: "Event Campaigns",
  //   category: "Events",
  //   year: "2025",
  //   agency: "Inframe Production",
  //   // heroImage: "/assets/img/portfolio/InfinixEvent/heroimage.png",
  //   thumbnailImage: "/assets/img/portfolio/InfinixEvent/heroimage.png",
  //   btsGallery: [
  //     "/assets/img/portfolio/InfinixEvent/gallery1.png", 
  //     "/assets/img/portfolio/InfinixEvent/gallery2.png",
  //      "/assets/img/portfolio/InfinixEvent/gallery3.png", 
  //      "/assets/img/portfolio/InfinixEvent/gallery4.png"],
  //   introTitle: "Gaming Event Campaign",
  //   introText: [
  //     "A dynamic event campaign capturing the energy of competitive gaming through fast-paced cinematography, immersive lighting, and live-event storytelling.",
  //     "The production blends esports culture and Infinix innovation to create a bold, youth-driven brand experience."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Capture esports energy with dynamic cinematography.",
  //     "Create youth-driven content for digital and event platforms."
  //   ],
  //   link: ""
  // },

  // {
  //   id: 18,
  //   title: "TECNO × Selam Tesfaye – Social Media Campaign",
  //   category: "Social Media and Digital Campaigns",
  //   year: "2024",
  //   agency: "Berry Advertising",
  //   heroImage: "/assets/img/portfolio/infinix - ST/gallery1.png",
  //   thumbnailImage: "/assets/img/portfolio/infinix - ST/heroimage.png",
  //   gallery: ["/assets/img/portfolio/infinix - ST/gallery1.png","/assets/img/portfolio/infinix - ST/gallery2.png"],
  //   btsGallery:[
  //     "/assets/img/portfolio/infinix - ST/bts1.png",
  //     "/assets/img/portfolio/infinix - ST/bts2.png",
  //     "/assets/img/portfolio/infinix - ST/heroimage.png"
  //   ],
  //   introTitle: "Influencer Social Campaign",
  //   introText: [
  //     "A lifestyle-driven social media campaign featuring Selam Tesfaye, blending authentic storytelling with clean, cinematic visuals.The production highlights TECNO smartphones through relatable moments and platform-optimized content."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Create social-first content optimized for engagement.Showcase modern lifestyle visuals with clean cinematic treatment."
  //   ],
  //   link: "#",
  //   featured: false,
  //   grid: true
  // },

  {
  id: 18,
  title: "TECNO × Selam Tesfaye – Social Media Campaign",
  category: "Social Media and Digital Campaigns",
  year: "2024",
  agency: "Berry Advertising",

  thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/e5259d73-223c-4633-6392-d822ee193b00/public",

  gallery: [
    "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/5079923b-10e6-4003-c502-c089001c1200/public",
    "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/801f7b4e-8be0-47ae-9557-c94c2198cb00/public",
    "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/81123a39-3fa9-4f44-06b5-dadc04d2b500/public",
    "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/bac3e860-5f43-422e-76e3-03a2087c3e00/public",
    "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/d3e494ef-c58e-4169-9dd1-9aeb076a3900/public",
    "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/3ab125a1-5e45-4166-7b98-b2c07ee59800/public",
    "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/401d3de4-e81a-4feb-c01f-424a87794700/public",
    "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/e82dfb66-7d35-4778-13e9-4effc2f83300/public",
    "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/005968ed-a4d8-4651-adf4-737405796d00/public",
    "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/47d113d0-1e32-4511-b310-f87778a3e000/public"
  ],

  makingVideo: "https://customer-nxmkxhnsavbizlm1.cloudflarestream.com/6bb21a0b98c74309a12043bfa81925a9/manifest/video.m3u8",
  makingFrame: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/bac3e860-5f43-422e-76e3-03a2087c3e00/public",

  introTitle: "Influencer Social Campaign",
  introText: [
    "A lifestyle-driven social media campaign featuring Selam Tesfaye, blending authentic storytelling with clean cinematic visuals. The production highlights TECNO smartphones through relatable moments and platform-optimized content. Create social-first content optimized for engagement. Showcase modern lifestyle visuals with a clean cinematic treatment."
  ],

  // goalText: [
  //   "Create social-first content optimized for engagement. Showcase modern lifestyle visuals with a clean cinematic treatment."
  // ],

  link: "",
  featured: false,
  grid: true
},

  {
    id: 19,
    title: "Jetson Doro – Social Media Photography & Video",
    category: "Social Media and Digital Campaigns",
    year: "2024",
    agency: "Inframe Production",
    // heroImage: "/assets/img/portfolio/Jetson/heroimage.jpg",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/39b58179-c100-41e7-7662-a0b9c8784400/public",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/f22426ae-17b0-4ba5-f177-1a0beba23a00/public", "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/39b58179-c100-41e7-7662-a0b9c8784400/public"],

    btsGallery:[
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/17dd366d-7dcb-4ff3-4500-0369b3a6f200/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/c4602a28-63f6-4a58-f11c-d0167739e800/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/1e174dff-71ea-4e7e-81f9-bad0dfdd2600/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/439bdaa6-dbe8-46ad-2680-577736fb1f00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/9273fde3-fb9f-4d2d-4f66-da6469b5df00/public"
    ],
    introTitle: "Food & Lifestyle Campaign",
    introText: [
      "Appetizing social media photography and video content crafted to highlight Jetson Doro’s quality and freshness.",
      "The production uses clean lighting, rich textures, and lifestyle storytelling to create engaging, platform-optimized visuals."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create appetizing visuals optimized for social media.",
      "Highlight product quality through premium composition and lighting."
    ],
    link: ""
  },

  {
    id: 20,
    title: "STG Buhe Camping – Beer Photography",
    category: "Photography",
    year: "2024",
    agency: "Inframe Production",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/4a8f3b7e-72dd-4f72-6772-ffe2e0b07f00/public","https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/f021b101-77ea-4f2a-604b-e9a248987a00/public"],
    introTitle: "Dramatic Beer Photography",
    introText: [
      "Dramatic indoor beer photography using low-key lighting, rich contrast, and moody highlights to emphasize atmosphere, texture, and social energy."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create moody, high-contrast beer visuals with premium lighting.",
      "Highlight texture and atmosphere in a cinematic style."
    ],
    link: "",
    featured: false,
    grid: true
  },

  {
    id: 21,
    title: "Jenboro – Real Estate Lifestyle Photography",
    category: "Photography",
    year: "2024",
    agency: "Inframe Production",
    gallery: ["https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/a06bcff6-6bd8-460a-7e93-2f7e1001be00/public","https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/affeb8e7-8dbe-4bd8-6ba5-87f9beae6800/public"],
    introTitle: "Humanized Real Estate",
    introText: [
      "Humanized real estate photography with light, funny moments, capturing everyday life and personality to make spaces feel relatable and lived-in."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Make spaces feel lived-in and relatable through natural moments.Use light, playful storytelling to humanize the property."
    ],
    link: "https://www.tiktok.com/@inframeproduction1/video/7304294403789671685",
    featured: false,
    grid: true
  },

  // {
  //   id: 22,
  //   title: "Castel Beer – Product Photography",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   thumbnailImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Premium Product Photography",
  //   introText: [
  //     "Clean, high-contrast product photography focusing on bottle detail, branding, and premium lighting for a bold commercial look."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Create premium bottle visuals with clean lighting and high contrast.",
  //     "Highlight brand identity and packaging detail."
  //   ],
  //   link: "#"
  // },

  // {
  //   id: 23,
  //   title: "TECNO Dinayet – Lifestyle Photography",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   thumbnailImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Modern Lifestyle Photography",
  //   introText: [
  //     "Lifestyle photography capturing authentic moments with clean compositions and modern styling optimized for digital platforms."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Capture authentic lifestyle moments with clean visuals.",
  //     "Create platform-ready content for digital engagement."
  //   ],
  //   link: "#"
  // },

  // {
  //   id: 24,
  //   title: "TECNO Wendoc Guday – Storytelling Photography",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroVideo: "/assets/img/portfolio/YG-Techno-SR/herovideo.mp4",
  //   btsGallery:[
  //     "/assets/img/portfolio/YG-Techno-SR/bts1.png",
  //     "/assets/img/portfolio/YG-Techno-SR/bts2.png",
  //     "/assets/img/portfolio/YG-Techno-SR/bts3.png",
  //     "/assets/img/portfolio/YG-Techno-SR/bts4.png",
  //     "/assets/img/portfolio/YG-Techno-SR/bts5.png"
  //   ],
  //   introTitle: "Narrative Photography",
  //   introText: [
  //     "Narrative-driven photography blending real craftsmanship and human stories with cinematic visual treatment."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Tell a story through photography using cinematic lighting and real human moments.",
  //     "Create emotionally engaging visuals that feel authentic."
  //   ],
  //   link: "#",
  //   featured: true,
  //   grid: false
  // },

  // {
  //   id: 25,
  //   title: "TECNO Abubeker – Ambassador Photography",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   thumbnailImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Ambassador Lifestyle Photography",
  //   introText: [
  //     "Lifestyle and performance photography featuring Abubeker, highlighting balance, confidence, and modern productivity."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Showcase confidence and productivity through modern visuals.",
  //     "Create content suitable for digital and brand identity."
  //   ],
  //   link: "#"
  // },

  // {
  //   id: 26,
  //   title: "Infinix × Selam Tesfaye – Social Media Photography",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   thumbnailImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Influencer Photography",
  //   introText: [
  //     "Stylish influencer photography combining fashion, personality, and clean visual aesthetics for social media engagement."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Create high-engagement influencer content with modern styling.",
  //     "Optimize visuals for social media platforms."
  //   ],
  //   link: "#"
  // },

  // {
  //   id: 27,
  //   title: "Nigus Malt – Commercial Photography",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   thumbnailImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Warm Family Photography",
  //   introText: [
  //     "Warm, family-oriented commercial photography using soft light and emotional framing to highlight everyday moments."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Create emotional family moments using soft lighting.",
  //     "Showcase product integration in real life with warmth and trust."
  //   ],
  //   link: "#"
  // },

  // {
  //   id: 28,
  //   title: "Product Detergent – Product Photography",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   thumbnailImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Clean Product Photography",
  //   introText: [
  //     "Bright, clean product photography emphasizing freshness, care, and functional clarity with a minimal commercial style."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Create bright, clean visuals for product clarity.",
  //     "Showcase freshness and care through minimal style."
  //   ],
  //   link: "#"
  // },

  {
    id: 29,
    title: "Leykun – Album Art Photography (Vol. 1 & 2)",
    category: "Photography",
    year: "2024",
    agency: "Inframe Production",
    heroImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/b493f201-4709-40fa-e858-f435bfbf8000/public",
    // gallery: ["/assets/img/portfolio/Leykun/gallery1.png","/assets/img/portfolio/Leykun/gallery2.png"],
    btsGallery:[
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/b493f201-4709-40fa-e858-f435bfbf8000/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/e696726e-924d-4e14-8540-fc68620cf500/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/d9007e7a-2ccd-486f-3ffd-d9c12ead0f00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/4eb056d9-0cd8-47b6-c335-767dfb7c9900/public",
    ],
    introTitle: "Album Art Photography",
    introText: [
      "Concept-driven album art photography using mood, color, and strong visual identity to support musical storytelling."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create strong visual identity through mood and color. Support musical storytelling with bold artistic photography."
    ],
    link: "https://www.tiktok.com/@inframeproduction1/video/7493510514786487607",
    featured: false,
    grid: true
  },

  // {
  //   id: 30,
  //   title: "Jetson Doro – Food Photography",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   thumbnailImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Appetizing Food Photography",
  //   introText: [
  //     "Appetizing food photography highlighting texture, freshness, and warmth through controlled lighting and premium composition."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Create mouth-watering food visuals with premium lighting.",
  //     "Showcase texture and freshness with cinematic composition."
  //   ],
  //   link: "#"
  // }

    {
    id: 31,
    title: "Gorgora Documentary",
    category: "Documentary and Brand Film",
    year: "2024",
    agency: "Berry Advertising",
    heroImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/2e8a9814-5947-451b-b823-09d85ec1fa00/public",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/2e8a9814-5947-451b-b823-09d85ec1fa00/public",
    youtubeUrl: "https://youtu.be/oqmvvoDMK2Q?si=ek4nQfSysqltWGuU",
    
    introTitle: "Heritage Documentary",
    introText: [
      "",
      ""
    ],
    goalTitle: "The Goal",
    goalText: [
      "Highlight heritage preservation through cinematic storytelling.",
      "Showcase architecture and history with premium visuals."
    ],
    link: ""
  },
  //     {
  //   id: 32,
  //   title: "Halala Kela Documentary",
  //   category: "Documentary and Brand Film",
  //   year: "2024",
  //   agency: "Berry Advertising",
  //   heroImage: "/assets/img/portfolio/Halala Kela/heroimage.jpg",
  //   thumbnailImage: "/assets/img/portfolio/Halala Kela/heroimage.jpg",
  //   introTitle: "Heritage Documentary",
  //   introText: [
  //     "",
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "",
  //     ""
  //   ],
  //   link: "#"
  // },

  {
    id: 33,
    title: "Zemen Gebeya",
    category: "Documentary and Brand Film",
    year: "2024",
    agency: "TTree",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/4ad5dbcc-aef3-4a40-1012-bbb6991df700/public",
    introTitle: "Heritage Documentary",
    introText: [
      ""
    ],
    goalTitle: "The Goal",
    goalText: [
      "",
      ""
    ],
    link: ""
  },

   {
    id: 34,
    title: "Product Photography",
    category: "Photography",
    year: "2024",
    agency: "Berry Advertising",
    thumbnailImage: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/830bd816-8847-40d1-2619-01b825f6f000/public",
    introTitle: "",
    introText: [
      ""
    ],
    goalTitle: "",
    goalText: [
      "",
      ""
    ],
    btsGallery:[
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/a9b6920a-a4b4-4813-de11-2bf7d2775800/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/fbdfc24e-3422-4e98-df04-0510bccc1e00/public", 
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/a9b6920a-a4b4-4813-de11-2bf7d2775800/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/15069b13-2039-497a-984a-576f7532e500/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/830bd816-8847-40d1-2619-01b825f6f000/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/7187b70e-ef86-4982-3ae0-80ba63333e00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/2d8dd04b-2e47-461d-e657-6a0528f3fd00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/664d34c0-07b6-46fb-a94e-281277e1e000/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/f3a541e1-e146-42bc-a13b-6533de33c800/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/33f4f7a6-8781-4e04-12e5-3f3a17931500/public", 
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/bbca110c-fa55-43fd-2c5b-3a5d90f19f00/public",
      "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/0606c016-79a5-499c-1049-82c9dd922600/public"
      
    ],
    link: ""
  },

  //  {
  //   id: 35,
  //   title: "Product Photography",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Berry Advertising",
  //   thumbnailImage: "/assets/img/portfolio/Vitrex/heroimage.jpg",
  //   introTitle: "",
  //   introText: [
  //     ""
  //   ],
  //   goalTitle: "",
  //   goalText: [
  //     "",
  //     ""
  //   ],
  //   link: "#"
  // },

  //  {
  //   id: 36,
  //   title: "Vega",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Berry Advertising",
  //   thumbnailImage: "/assets/img/portfolio/Vega/heroimage.jpg",
  //   introTitle: "",
  //   introText: [
  //     ""
  //   ],
  //   goalTitle: "",
  //   goalText: [
  //     "",
  //     ""
  //   ],
  //   link: "#"
  // },
];
