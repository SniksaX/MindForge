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
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Custom AI Strategy Development",
  "AI Integration & Automation Solutions",
  "Innovative AI Tool Selection"
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice Recognition Enhancement",
    text: "Integrate advanced voice recognition into our AI solutions, enabling intuitive, hands-free user interactions. This feature not only improves accessibility but also allows for more natural communication with various AI-powered applications.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Advanced Visual Recognition Capabilities",
    text: "Elevate our AI solutions with sophisticated visual recognition technology, allowing them to analyze and interpret images for a range of applications, from retail to security. This enhances the solution's ability to interact with the physical world in a meaningful way.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "AI Customization Tools",
    text: "Develop tools that enable users to customize AI behaviors and outputs, enhancing the versatility and applicability of our solutions across different sectors. This personalization improves user engagement and ensures our AI solutions meet specific client needs.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "API Integration for Comprehensive Data Access",
    text: "Enhance our AI solutions by integrating with external APIs, broadening their knowledge base and functional capabilities. Access to real-time data from various sources allows our AI to offer more accurate, contextually relevant insights and recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];
export const collabText =
  "";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Custom AI Consulting",
    description: "Unlock your business's potential with tailored AI strategies.",
    // price: "Contact for Pricing",
    features: [
      "Personalized business AI readiness assessment",
      "Strategic AI opportunity identification",
      "100% cashback if not satisfied",
    ],
  },
  {
    id: "1",
    title: "Chatbot Development",
    description: "Bespoke chatbot solutions tailored to enhance your customer engagement.",
    // price: "Contact for Pricing",
    features: [
      "Custom chatbot design to match your brand identity",
      "Seamless integration with your website, social media, and CRM systems",
      "Continuous support and optimization based on user feedback",
    ],
  },
  {
    id: "2",
    title: "Enterprise AI Package",
    description: "End-to-end AI solutions with analytics and dedicated support.",
    price: "",
    features: [
      "Custom AI chatbot development",
      "Custom AI Automation Logic",
      "Dedicated account management",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Tailored Consulting",
    text: "Dive deep into the realm of AI with our expert consulting services. We demystify AI technologies and strategize how to leverage them to propel your business forward.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Custom AI Selection",
    text: "Navigate the vast landscape of AI technologies with us. We guide you in selecting the AI tools and solutions that align perfectly with your business objectives.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Simplified AI Integration",
    text: "Embark on your AI journey with ease. Our team is here to streamline the integration of AI into your business, transforming complexity into simplicity.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Advanced Chatbots",
    text: "Elevate customer engagement with custom chatbots. From support to sales, our chatbots are designed to enhance user interaction and service.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Effortless Automation",
    text: "Reimagine efficiency with our AI-powered automation solutions. Free your business from tedious tasks and refocus on strategic growth.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Strategic Focus",
    text: "With our comprehensive AI solutions handling the operational complexities, your focus can remain undivided on scaling and expanding your business horizons.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
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
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
