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
  // heroVideoPoster?: string;
  heroVideoFallbackImage?: any;

  secondImage?: any;
  gallery?: any[];
  btsGallery?: any[];

  introTitle: string;
  introText: string[];
  goalTitle: string;
  goalText: string[];
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
    heroVideo: "/assets/img/portfolio/ZTE/herovideo.mp4",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "/assets/img/portfolio/ZTE/herofallback.png",
    secondImage: "/assets/img/portfolio/ZTE/heroimage.png",
    gallery: ["/assets/img/portfolio/ZTE/gallery1.png","/assets/img/portfolio/ZTE/gallery2.png"],
    introTitle: "Sleek Modern Commercial",
    introText: [
      "A sleek, modern commercial showcasing ZTE smartphones through bold color design, confident talent presence, and polished cinematic lighting.",
      "The production emphasizes product elegance, camera detail, and lifestyle appeal with a premium commercial finish."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Deliver a premium, cinematic TV commercial that highlights product elegance and brand identity.",
      "Create a strong visual language for both broadcast and digital platforms."
    ],
    link: "#",
    featured: true,
    grid: true
  },

  {
    id: 2,
    title: "Negus Malt – Video Production",
    category: "TV Commercials",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "/assets/img/portfolio/Negus/herovideo.mp4",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "/assets/img/portfolio/Negus/herofallback.png",
    secondImage: "/assets/img/portfolio/Negus/heroimage.png",
    gallery: ["/assets/img/portfolio/Negus/gallery1.png","/assets/img/portfolio/Negus/gallery2.png"],
    btsGallery:[
      "/assets/img/portfolio/Negus/bts1.png",
      "/assets/img/portfolio/Negus/bts2.png",
      "/assets/img/portfolio/Negus/bts3.png",
      "/assets/img/portfolio/Negus/bts4.png",
      "/assets/img/portfolio/Negus/bts5.png"
    ],
    introTitle: "Warm Lifestyle Commercial",
    introText: [
      "A warm, lifestyle-driven commercial capturing everyday moments through soft natural light, authentic performances, and rich cinematic color grading.",
      "The production blends storytelling and product focus to create a relatable, premium brand experience."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Capture real human moments with cinematic lighting and emotional storytelling.",
      "Build a premium brand image that feels authentic and relatable."
    ],
    link: "#",
    featured: true,
    grid: true
  },

  {
    id: 3,
    title: "Largo Detergent – Video Production",
    category: "TV Commercials",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "/assets/img/portfolio/Largo/herovideo.mp4",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "/assets/img/portfolio/Largo/herofallback.png",
    secondImage: "/assets/img/portfolio/Largo/heroimage.png",
    gallery: ["/assets/img/portfolio/Largo/gallery1.png","/assets/img/portfolio/Largo/gallery2.png"],
    introTitle: "Bright Family Commercial",
    introText: [
      "A bright, family-centered commercial highlighting everyday care through natural performances, fresh lighting, and clean visual storytelling.",
      "The production emphasizes trust, cleanliness, and generational connection with a warm, relatable commercial tone."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create a clean, warm commercial that connects with families and showcases trust.",
      "Deliver a bright and optimistic visual style suitable for TV and digital."
    ],
    link: "#",
    featured: false,
    grid: true
  },

  {
    id: 4,
    title: "Castel Wine – Valentine’s Day Campaign",
    category: "Social Media and Digital Campaigns",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "/assets/img/portfolio/Castle/herovideo.mp4",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "/assets/img/portfolio/Castle/herofallback.png",
    secondImage: "/assets/img/portfolio/Castle/heroimage.png",
    gallery: ["/assets/img/portfolio/Castle/gallery1.png","/assets/img/portfolio/Castle/gallery2.png"],
    btsGallery:[
      "/assets/img/portfolio/Castle/bts1.png",
      "/assets/img/portfolio/Castle/bts2.png"
    ],
    introTitle: "Romantic Cinematic Campaign",
    introText: [
      "A romantic, cinematic commercial capturing intimate moments through warm lighting, elegant styling, and refined visual storytelling.",
      "The production highlights connection, celebration, and the premium character of Castel Wine in a sophisticated Valentine’s atmosphere."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Showcase premium brand identity through cinematic storytelling and romantic visuals.",
      "Create campaign content suitable for social media and digital platforms."
    ],
    link: "#",
    featured: true,
    grid: false
  },

  {
    id: 5,
    title: "Ethiopian Airlines – “The New Spirit of Africa”",
    category: "Documentary and Brand Film",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "/assets/img/portfolio/EAL/herovideo.mp4",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "/assets/img/portfolio/EAL/herofallback.png",
    secondImage: "/assets/img/portfolio/EAL/heroimage.png",
    gallery: ["/assets/img/portfolio/EAL/gallery1.png","/assets/img/portfolio/EAL/gallery2.png"],
    btsGallery:[
      "/assets/img/portfolio/EAL/bts1.png",
      "/assets/img/portfolio/EAL/bts2.png",
      "/assets/img/portfolio/EAL/bts3.png",
      "/assets/img/portfolio/EAL/bts4.png",
      "/assets/img/portfolio/EAL/bts5.png"
    ],
    introTitle: "Cinematic Brand Campaign",
    introText: [
      "A cinematic brand campaign blending Ethiopian heritage, live music, and a modern travel experience.",
      "The production combines refined storytelling, rich visuals, and immersive sound design to celebrate national identity while showcasing Ethiopian Airlines’ world-class journey."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Capture the spirit of national identity with cinematic storytelling.",
      "Highlight travel experience and modern luxury with premium visuals."
    ],
    link: "#",
    featured: true,
    grid: false
  },

  {
    id: 6,
    title: "Yewendoch Guday × TECNO Mobile – Brand Collaboration Campaign",
    category: "Social Media and Digital Campaigns",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "/assets/img/portfolio/YG-Techno/herovideo.mp4",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "/assets/img/portfolio/YG-Techno/herofallback.png",
    secondImage: "/assets/img/portfolio/YG-Techno/heroimage.png",
    gallery: ["/assets/img/portfolio/YG-Techno/gallery1.png","/assets/img/portfolio/YG-Techno/gallery2.png"],
    btsGallery:[
      "/assets/img/portfolio/YG-Techno/bts1.png",
      "/assets/img/portfolio/YG-Techno/bts2.png",
      "/assets/img/portfolio/YG-Techno/bts3.png",
      "/assets/img/portfolio/YG-Techno/bts4.png",
      "/assets/img/portfolio/YG-Techno/bts5.png",
      "/assets/img/portfolio/YG-Techno/bts6.png",
      "/assets/img/portfolio/YG-Techno/bts7.png"
    ],
    introTitle: "Story-Driven Brand Campaign",
    introText: [
      "A story-driven brand campaign blending everyday craftsmanship and human connection with TECNO’s innovative technology.",
      "The production uses warm cinematic lighting, authentic performances, and lifestyle storytelling to position the smartphone as part of real work, creativity, and progress."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Showcase the phone as part of real life, creativity, and progress.",
      "Create warm, cinematic content optimized for social platforms."
    ],
    link: "#",
    featured: false,
    grid: true
  },

  {
    id: 7,
    title: "Senq Malt – Mother’s Day Campaign",
    category: "Social Media and Digital Campaigns",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "/assets/img/portfolio/Senq/herovideo.mp4",
    // heroVideoPoster: "/assets/img/portfolio/ZTE/herofallback.png",
    heroVideoFallbackImage: "/assets/img/portfolio/Senq/herofallback.png",
    secondImage: "/assets/img/portfolio/Senq/heroimage.png",
    gallery: ["/assets/img/portfolio/Senq/gallery2.png","/assets/img/portfolio/Senq/gallery1.png"],
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
    link: "#",
    featured: false,
    grid: true
  },

  {
    id: 8,
    title: "Ethio Telecom – 5G Launch Campaign",
    category: "Events",
    year: "2024",
    agency: "Berry Advertising",
    heroVideo: "/assets/img/portfolio/EthioTelecom/herovideo.mp4",
    heroVideoFallbackImage: "/assets/img/portfolio/EthioTelecom/herofallback.png",
    secondImage: "/assets/img/portfolio/EthioTelecom/gallery1.png",
    gallery: ["/assets/img/portfolio/EthioTelecom/heroimage.png","/assets/img/portfolio/EthioTelecom/gallery2.png"],
    btsGallery:[
      "/assets/img/portfolio/EthioTelecom/bts1.png",
      "/assets/img/portfolio/EthioTelecom/bts2.png",
      "/assets/img/portfolio/EthioTelecom/bts3.png"
    ],
    introTitle: "Futuristic Brand Campaign",
    introText: [
      "A high-impact brand campaign introducing Ethio Telecom’s 5G network through futuristic visuals, dynamic motion graphics, and cinematic storytelling.",
      "The production connects education, innovation, and urban connectivity, positioning 5G as a catalyst for national progress and digital transformation."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create futuristic visuals to introduce 5G network benefits.",
      "Deliver campaign content that supports national digital transformation."
    ],
    link: "#",
    featured: false,
    grid: true
  },

  {
    id: 9,
    title: "Abubeker Nura × TECNO Mobile – Ambassador Campaign",
    category: "Social Media and Digital Campaigns",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "/assets/img/portfolio/AmbCamp - Techno/herovideo.mp4",
    secondImage: "/assets/img/portfolio/AmbCamp - Techno/heroimage.png",
    gallery: ["/assets/img/portfolio/AmbCamp - Techno/gallery2.png","/assets/img/portfolio/AmbCamp - Techno/gallery1.png"],
    btsGallery:[
      "/assets/img/portfolio/AmbCamp - Techno/bts1.png",
      "/assets/img/portfolio/AmbCamp - Techno/bts2.png",
      "/assets/img/portfolio/AmbCamp - Techno/bts3.png"
    ],
    introTitle: "Lifestyle Ambassador Campaign",
    introText: [
      "A lifestyle-driven brand campaign featuring Abubeker Nura, showcasing TECNO smartphones as part of everyday performance and balance.",
      "The production blends authentic moments, clean cinematic lighting, and modern storytelling to highlight connectivity, productivity, and smart living."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Showcase modern productivity and balance using authentic storytelling.",
      "Create social-first content optimized for digital platforms."
    ],
    link: "#",
    featured: false,
    grid: true
  },

  {
    id: 10,
    title: "RIIFO – PPR & PVC Product Campaign",
    category: "TV Commercials",
    year: "2024",
    agency: "Berry Advertising",
    heroVideo: "/assets/img/portfolio/EZM/herovideo.mp4",
    secondImage: "/assets/img/portfolio/EZM/heroimage.png",
    gallery: ["/assets/img/portfolio/EZM/gallery1.png","/assets/img/portfolio/EZM/gallery2.png"],
    btsGallery:[
      "/assets/img/portfolio/EZM/bts1.png",
      "/assets/img/portfolio/EZM/bts2.png",
      "/assets/img/portfolio/EZM/bts3.png"
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
    link: "#",
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
  //   secondImage: full_image_2,
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

  // {
  //   id: 12,
  //   title: "Wenchi Eco Lodge – PMO Documentary",
  //   category: "Documentary and Brand Film",
  //   year: "2024",
  //   agency: "Berry Advertising",
  //   heroImage: full_image,
  //   secondImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Eco Lodge Documentary",
  //   introText: [
  //     "A cinematic documentary capturing the natural beauty, community life, and sustainable vision of Wenchi Eco Lodge.",
  //     "Produced for the PMO as part of the Gebeta Le Hager project, the film blends authentic storytelling and scenic cinematography."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Highlight eco-tourism and sustainability through cinematic visuals.",
  //     "Tell authentic community stories in a national development context."
  //   ],
  //   link: "#"
  // },

  // {
  //   id: 13,
  //   title: "Cubera Churchura Lodge – Gebeta Le Hager",
  //   category: "Documentary and Brand Film",
  //   year: "2024",
  //   agency: "Berry Advertising",
  //   heroImage: full_image,
  //   secondImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Eco Tourism Documentary",
  //   introText: [
  //     "A cinematic documentary highlighting the natural beauty, cultural environment, and eco-tourism potential of Cubera Churchura Lodge.",
  //     "Produced as part of the Gebeta Le Hager project, the film focuses on sustainable hospitality and conservation."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Showcase sustainable hospitality and eco-tourism potential.",
  //     "Capture authentic cultural and natural storytelling."
  //   ],
  //   link: "#"
  // },

  // {
  //   id: 14,
  //   title: "National Palace Museum – Cultural Heritage Documentary",
  //   category: "Documentary and Brand Film",
  //   year: "2024",
  //   agency: "Berry Advertising",
  //   heroImage: full_image,
  //   secondImage: full_image_2,
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
    heroVideo: "/assets/img/portfolio/Beynouna/herovideo.mp4",
    secondImage: "/assets/img/portfolio/Beynouna/heroimage.png",
    gallery: ["/assets/img/portfolio/Beynouna/gallery1.png","/assets/img/portfolio/Beynouna/gallery2.png"],
    btsGallery:[
      "/assets/img/portfolio/Beynouna/bts1.png",
      "/assets/img/portfolio/Beynouna/bts2.png",
      "/assets/img/portfolio/Beynouna/bts3.png",
      "/assets/img/portfolio/Beynouna/bts4.png",
      "/assets/img/portfolio/Beynouna/bts5.png",
      "/assets/img/portfolio/Beynouna/bts6.png",
      "/assets/img/portfolio/Beynouna/bts7.png",
      "/assets/img/portfolio/Beynouna/bts8.png",
      "/assets/img/portfolio/Beynouna/bts9.png",
      "/assets/img/portfolio/Beynouna/bts10.png",
      "/assets/img/portfolio/Beynouna/bts14.png",
      "/assets/img/portfolio/Beynouna/bts15.png",
      "/assets/img/portfolio/Beynouna/bts16.png",
      "/assets/img/portfolio/Beynouna/bts17.png"
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
    link: "#",
    featured: false,
    grid: true
  },

  // {
  //   id: 16,
  //   title: "Teracon Coffee – Brand Documentary & Commercial Film",
  //   category: "Documentary and Brand Film",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   secondImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Coffee Brand Film",
  //   introText: [
  //     "A cinematic brand film capturing the journey of Teracon Coffee from farm to cup.",
  //     "The production blends authentic storytelling, scenic plantation visuals, and refined product cinematography."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Showcase coffee craftsmanship and heritage through cinematic storytelling.",
  //     "Deliver content for brand positioning and digital platforms."
  //   ],
  //   link: "#"
  // },

  // {
  //   id: 17,
  //   title: "Infinix – PUBG 2025 Event Campaign",
  //   category: "Events",
  //   year: "2025",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   secondImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
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
  //   link: "#"
  // },

  {
    id: 18,
    title: "TECNO × Selam Tesfaye – Social Media Campaign",
    category: "Social Media and Digital Campaigns",
    year: "2024",
    agency: "Berry Advertising",
    heroImage: "/assets/img/portfolio/infinix - ST/gallery1.png",
    secondImage: "/assets/img/portfolio/infinix - ST/heroimage.png",
    gallery: ["/assets/img/portfolio/infinix - ST/bts1.png","/assets/img/portfolio/infinix - ST/gallery2.png"],
    btsGallery:[
      "/assets/img/portfolio/infinix - ST/gallery1.png",
      "/assets/img/portfolio/infinix - ST/bts2.png",
      "/assets/img/portfolio/infinix - ST/bts3.png"
    ],
    introTitle: "Influencer Social Campaign",
    introText: [
      "A lifestyle-driven social media campaign featuring Selam Tesfaye, blending authentic storytelling with clean, cinematic visuals.",
      "The production highlights TECNO smartphones through relatable moments and platform-optimized content."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create social-first content optimized for engagement.",
      "Showcase modern lifestyle visuals with clean cinematic treatment."
    ],
    link: "#",
    featured: false,
    grid: true
  },

  // {
  //   id: 19,
  //   title: "Jetson Doro – Social Media Photography & Video",
  //   category: "Social Media and Digital Campaigns",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   secondImage: full_image_2,
  //   gallery: [port_img_1, port_img_2, port_img_3, port_img_4, port_img_5],
  //   introTitle: "Food & Lifestyle Campaign",
  //   introText: [
  //     "Appetizing social media photography and video content crafted to highlight Jetson Doro’s quality and freshness.",
  //     "The production uses clean lighting, rich textures, and lifestyle storytelling to create engaging, platform-optimized visuals."
  //   ],
  //   goalTitle: "The Goal",
  //   goalText: [
  //     "Create appetizing visuals optimized for social media.",
  //     "Highlight product quality through premium composition and lighting."
  //   ],
  //   link: "#"
  // },

  {
    id: 20,
    title: "STG Buhe Camping – Beer Photography",
    category: "Photography",
    year: "2024",
    agency: "Inframe Production",
    gallery: ["/assets/img/portfolio/STG - Buhe/gallery1.png","/assets/img/portfolio/STG - Buhe/gallery2.png"],
    introTitle: "Dramatic Beer Photography",
    introText: [
      "Dramatic indoor beer photography using low-key lighting, rich contrast, and moody highlights to emphasize atmosphere, texture, and social energy."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create moody, high-contrast beer visuals with premium lighting.",
      "Highlight texture and atmosphere in a cinematic style."
    ],
    link: "#",
    featured: false,
    grid: true
  },

  {
    id: 21,
    title: "Jenboro – Real Estate Lifestyle Photography",
    category: "Photography",
    year: "2024",
    agency: "Inframe Production",
    gallery: ["/assets/img/portfolio/Jenboro/gallery1.png","/assets/img/portfolio/Jenboro/gallery2.png"],
    introTitle: "Humanized Real Estate",
    introText: [
      "Humanized real estate photography with light, funny moments, capturing everyday life and personality to make spaces feel relatable and lived-in."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Make spaces feel lived-in and relatable through natural moments.",
      "Use light, playful storytelling to humanize the property."
    ],
    link: "#",
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
  //   secondImage: full_image_2,
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
  //   secondImage: full_image_2,
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

  {
    id: 24,
    title: "TECNO Wendoc Guday – Storytelling Photography",
    category: "Photography",
    year: "2024",
    agency: "Inframe Production",
    heroVideo: "/assets/img/portfolio/YG-Techno-SR/herovideo.mp4",
    btsGallery:[
      "/assets/img/portfolio/YG-Techno-SR/bts1.png",
      "/assets/img/portfolio/YG-Techno-SR/bts2.png",
      "/assets/img/portfolio/YG-Techno-SR/bts3.png",
      "/assets/img/portfolio/YG-Techno-SR/bts4.png"
    ],
    introTitle: "Narrative Photography",
    introText: [
      "Narrative-driven photography blending real craftsmanship and human stories with cinematic visual treatment."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Tell a story through photography using cinematic lighting and real human moments.",
      "Create emotionally engaging visuals that feel authentic."
    ],
    link: "#",
    featured: true,
    grid: false
  },

  // {
  //   id: 25,
  //   title: "TECNO Abubeker – Ambassador Photography",
  //   category: "Photography",
  //   year: "2024",
  //   agency: "Inframe Production",
  //   heroImage: full_image,
  //   secondImage: full_image_2,
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
  //   secondImage: full_image_2,
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
  //   secondImage: full_image_2,
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
  //   secondImage: full_image_2,
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
    gallery: ["/assets/img/portfolio/Leykun/gallery1.png","/assets/img/portfolio/Leykun/gallery2.png"],
    introTitle: "Album Art Photography",
    introText: [
      "Concept-driven album art photography using mood, color, and strong visual identity to support musical storytelling."
    ],
    goalTitle: "The Goal",
    goalText: [
      "Create strong visual identity through mood and color.",
      "Support musical storytelling with bold artistic photography."
    ],
    link: "#",
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
  //   secondImage: full_image_2,
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
];
