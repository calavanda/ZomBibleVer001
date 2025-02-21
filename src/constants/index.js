import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap2,
    roadmap3,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
    logo1,
    logo2,
    logo3,
    logo4,
    bo2,
    bo3,
    bo4,
    ww2,
    coldwar,
    vandguard,
    mwiii,
    bo6,
    sale,
    ammo,
    hammer,
    bomb,
    skull,
    pro,
    map,
    estrategia,
    skip,
    game,
    ee,
    group,
    i1,
    i2,
    i3,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Caracteristicas",
      url: "#features",
    },
    // {
    //   id: "1",
    //   title: "Colaborar",
    //   url: "#pricing",
    // },
    {
      id: "2",
      title: "Easter Eggs",
      url: "/easter-eggs",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "Como se usa",
      url: "#how-to-use",
    },
    {
      id: "5",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "6",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];

  export const textD = [
    {
      id: "1",
      name: "BoydVT",
      url: "https://www.instagram.com/boyd_vt/"
    },
    {
      id: "2",
      name: "Calavanda",
      url: "https://www.instagram.com/_calavanda_/"
    },
    {
      id: "3",
      name: "Alessander",
      url: "#"
    },
    {
      id: "4",
      name: "Fentgram",
      url: "https://x.com/_calavanda_"
    },
  ];
  
  export const heroIcons = [homeSmile, file02, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [logo1, logo2, logo3, logo4];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    ammo,
    hammer,
    skull,
    sale,
    bomb
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Hacer las guías lo más entendibles y facíles de seguir",
      text: "Haciendo que cualquier persona complete un Easter Egg",
      date: "Próximamente",
      status: "progress",
      imageUrl: i1,
      colorful: true,
    },
    {
      id: "1",
      title: "Añadiendo imágenes y videos a las guías",
      text: "Hacer las guías más visuales con imágenes y clips explicativos.",
      date: "Feb 25",
      status: "done",
      imageUrl: i2,
    },
    {
      id: "2",
      title: "Sugeriendo estilos de juego",
      text: "Equipaciones de armamento, mejoras de perks, etc",
      date: "Feb 28",
      status: "done",
      imageUrl: roadmap2,
    },
    {
      id: "3",
      title: "Filtrar guías por dificultad y tipo de Easter Egg",
      text: "Clasificación por dificultad, requisitos y tiempo estimado.",
      date: "Próximamente",
      status: "progress",
      imageUrl: i3,
      colorful: true,
    },
  ];
  
  export const collabText = "ZomBible es la guía definitiva para encontrar todos los Easter Eggs en Call of Duty Zombies, proporcionando detalles completos sobre cada mapa y estrategia.";

  export const collabText2 = "Con ZomBible, tendrás acceso a una base de datos completa y actualizada de Easter Eggs de Call of Duty Zombies, para que puedas mejorar tus habilidades y completar todos los desafíos ocultos del juego.";

  export const collabContent = [
    {
      id: "0",
      title: "Completa todos los Easter Eggs",
      text: collabText,
    },
    {
      id: "1",
      title: "Guías detalladas",
    },
    {
      id: "2",
      title: "Explora todos los mapas",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Bo6",
      icon: bo6,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "MWIII",
      icon: mwiii,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Cold War",
      icon: coldwar,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Bo2",
      icon: bo2,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Bo3",
      icon: bo3,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Bo4",
      icon: bo4,
      width: 26,
      height: 34,
    },
    {
      id: "6",
      title: "WW2",
      icon: ww2,
      width: 34,
      height: 34,
    },
    {
      id: "7",
      title: "Vandguard",
      icon: vandguard,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
export const benefits = [
  {
    id: "0",
    title: "Encuentra cualquier Easter Egg",
    text: "Accede rápidamente a guías detalladas sobre cada Easter Egg en Call of Duty Zombies sin perder tiempo buscando.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: ee,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Mejora tu estrategia",
    text: "Aprende las mejores tácticas y rutas para sobrevivir más rondas y completar desafíos con eficiencia.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: estrategia,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Juega en equipo como un pro",
    text: "Descubre estrategias de cooperación para completar los Easter Eggs con amigos y maximizar tu desempeño.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: pro,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Resuelve misterios en segundos",
    text: "Olvídate de búsquedas largas, encuentra soluciones a cualquier acertijo o puzzle en un solo lugar.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: skip,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Explora cada mapa",
    text: "Conoce cada rincón de los mapas de Zombies y encuentra ubicaciones clave como cajas misteriosas, Pack-a-Punch y más.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: map,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Domina cada modo de juego",
    text: "Desde rondas infinitas hasta desafíos de alto nivel, conviértete en un experto en cualquier modo de Zombies.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: game,
    imageUrl: benefitImage2,
  },
];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "https://x.com/_calavanda_",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/_calavanda_/",
    },
  ];