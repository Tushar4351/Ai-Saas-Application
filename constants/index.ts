export const homeNavLinks = [
  {
    label: "Main",
    route: "#main", // ID for the About section
  },
  {
    label: "About",
    route: "#about", // ID for the About section
  },
  {
    label: "Features",
    route: "#features", // ID for the Features section
  },
  {
    label: "Pricing",
    route: "#pricing", // ID for the Pricing section
  },
];
//About us section
export const projects = [
  {
    title: "Our Mission",
    description:
      "Whether it's simplifying complex workflows, fostering collaboration, or driving technological advancements, we are dedicated to empowering businesses and life to thrive in the digital age.",
  },
  {
    title: "Our Role",
    description:
      "Our role extends beyond being a service provider — we are your strategic partner in navigating the challenges and opportunities of the digital landscape.",
  },
  {
    title: "Our Values",
    description:
      "We believe in pushing the boundaries of what's possible. Innovation is at the core of everything we do, driving us to create solutions that anticipate and meet the needs of tomorrow.",
  },
];
export const features = [
  {
    imageUrl: "/assets/icons/image.svg",
    title: "Image Restore",
    bgColor: "#fee2e2",
    description:
      "Restore damaged or corrupted images to their original condition using advanced algorithms and techniques to repair and enhance image quality.",
  },
  {
    imageUrl: "/assets/icons/stars.svg",
    title: "Generative Fill",
    bgColor: "#dcfce7",
    description:
      "Fill in missing or incomplete parts of an image using generative AI models to generate realistic and seamless content based on the surrounding context.",
  },
  {
    imageUrl: "/assets/icons/scan.svg",
    title: "Object Remove",
    bgColor: "#e0e7ff",
    description:
      "Remove unwanted objects or elements from an image using advanced object detection and masking techniques, leaving a clean and seamless background.",
  },
  {
    imageUrl: "/assets/icons/filter.svg",
    title: "Object Recolor",
    bgColor: "#e9d5ff",
    description:
      "Change the color of specific objects or elements in an image using advanced image processing algorithms to precisely target and recolor desired areas.",
  },
  {
    imageUrl: "/assets/icons/camera.svg",
    title: "Background Remove",
    bgColor: "#fefce8",
    description:
      "Remove the background from an image, leaving the subject isolated and ready for compositing or further editing, using advanced segmentation techniques.",
  },
];
// Navigation links for the sidebar
export const navLinks = [
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: "/assets/icons/home.svg",
    bgColor: "rgba(219, 234, 254, var(--tw-bg-opacity))",
  },
  {
    label: "Image Restore",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
    bgColor: "rgba(254, 226, 226, var(--tw-bg-opacity))",
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
    bgColor: "rgba(220, 252, 231, var(--tw-bg-opacity))",
  },
  {
    label: "Object Remove",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
    bgColor: "rgba(224, 231, 255, var(--tw-bg-opacity))",
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
    bgColor: "rgba(233, 213, 255, var(--tw-bg-opacity))",
  },
  {
    label: "Background Remove",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
    bgColor: "rgba(254, 252, 232, var(--tw-bg-opacity))",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
    bgColor: "rgba(224, 231, 255, var(--tw-bg-opacity))",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
    bgColor: "rgba(220, 252, 231, var(--tw-bg-opacity))",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;
