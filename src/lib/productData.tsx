export interface individualProductType {
  imageURL: string[];
  assembly: Array<{ imageurl: string; title: string }>;
  typologies: Array<{ imageurl: string; title: string; className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  name: string;
  category: string;
  key: string;
  specification: string[];
  performanceParameters: Array<{ value: string; subValue: string }>;
}
export interface productInterface {
  [key: string]: {
    [key: string]: Array<individualProductType>;
  };
}
export const products: productInterface = {
  Sliding: {
    "TOT-SD Lite": [
      {
        imageURL: [
          "/img/products/tot_sd_lite/general/declan-sun-x50nOv5eXEw-unsplash.jpg",
          "/img/products/tot_sd_lite/general/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg",
          "/img/products/tot_sd_lite/general/r-mo-w-_iZqdviAo-unsplash.jpg",
          "/img/products/tot_sd_lite/general/s-group-official-pqRud0Gx-dg-unsplash.jpg",
        ],
        assembly: [
          {
            imageurl:
              "/img/products/tot_sd_lite/assemblies/Screenshot 2024-03-28 103851.png",
            title: "",
          },
          {
            imageurl:
              "/img/products/tot_sd_lite/assemblies/Screenshot 2024-03-28 104034.png",
            title: "",
          },
        ],
        typologies: [
          {
            imageurl: "/img/typology/2T2S.gif",
            title: "2T 2S",
          },
          {
            imageurl: "/img/typology/3T3S.gif",
            title: "2T 3S",
          },
          {
            imageurl: "/img/typology/FixedOpenable.gif",
            title: "Fixed + Openable",
          },
          {
            imageurl: "/img/typology/2T4S.gif",
            title: "2T 4S",
          },
          {
            imageurl: "/img/typology/2T2SFixed.gif",
            title: "2T 2S + Fixed",
          },
        ],
        title: "Sliding Windows",
        subtitle: "TOT-SD LITE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-SD Lite",
        key: "TOT-SD LITE",
        category: "Sliding",
        specification: [
          "Max Sash Height (mm): 1500",
          "Max Sash Width (mm): 800",
          "Glass Range (mm): 4-6",
        ],
        performanceParameters: [
          {
            value: "Windload: 1.6 kpa",
            subValue: "as per class 4A (BS EN12210: 2000)",
          },
          {
            value: "Air Tightness: 150 Pa",
            subValue: "as per class 2 (BS EN12207: 2000)",
          },
          {
            value: "Water Tightness: 150 Pa",
            subValue: "as per Class 4A (BS EN12207:2000)",
          },
        ],
      },
    ],
    "TOT-SD": [
      {
        imageURL: [
          "/img/products/tot_sd/general/med-badr-chemmaoui-xtDpXi_a-YQ-unsplash.jpg",
          "/img/products/tot_sd/general/stephan-cassara-u1AV4Xc30cs-unsplash.jpg",
          "/img/products/tot_sd/general/stock-photo-glazed-terrace-in-the-countryside-with-sliding-glass-1375252976.jpg",
          "/img/products/tot_sd/general/yum-cheol-ho-LumHIwjuQeA-unsplash.jpg",
        ],
        typologies: [
          {
            imageurl: "/img/typology/2T2S.gif",
            title: "2T 2S",
          },
          {
            imageurl: "/img/typology/3T3S.gif",
            title: "2T 3S",
          },
          {
            imageurl: "/img/typology/FixedOpenable.gif",
            title: "Fixed + Openable",
          },
          {
            imageurl: "/img/typology/2T4S.gif",
            title: "2T 4S",
          },
          {
            imageurl: "/img/typology/2T2SFixed.gif",
            title: "2T 2S + Fixed",
          },
        ],
        assembly: [
          {
            imageurl:
              "/img/products/tot_sd/assembly/Screenshot 2024-04-08 193244.png",
            title: "",
          },
          {
            imageurl:
              "/img/products/tot_sd/assembly/Screenshot 2024-04-08 193340.png",
            title: "",
          },
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-SD",
        key: "TOT-SD",
        category: "Sliding",
        specification: [
          "Max Sash Height (mm): 2100",
          "Max Sash Width (mm): 1000",
          "Glass Range (mm): 5, 6, 8",
        ],
        performanceParameters: [
          {
            value: "Windload: 1.6 kpa",
            subValue: "as per Class 4A (BS EN12210: 2000)",
          },
          {
            value: "Air Tightness: 150 Pa",
            subValue: "as per class 2 (BS EN12207: 2000)",
          },
          {
            value: "Water Tightness: 150 Pa",
            subValue: "as per Class 4A (BS EN12207: 2000)",
          },
        ],
      },
    ],
    "TOT-SD PLUS": [
      {
        imageURL: [
          "/img/products/tot_sd_plus/general/don-kaveen-NFbwes_e-jI-unsplash.jpg",
          "/img/products/tot_sd_plus/general/toa-heftiba-FV3GConVSss-unsplash.jpg",
          "/img/products/tot_sd_plus/general/webaliser-_TPTXZd9mOo-unsplash.jpg",
          "/img/products/tot_sd_plus/general/webaliser-_TPTXZd9mOo-unsplash.jpg",
        ],
        typologies: [
          {
            imageurl: "/img/typology/2T2S.gif",
            title: "2T 2S",
          },
          {
            imageurl: "/img/typology/3T3S.gif",
            title: "2T 3S",
          },
          {
            imageurl: "/img/typology/FixedOpenable.gif",
            title: "Fixed + Openable",
          },
          {
            imageurl: "/img/typology/2T4S.gif",
            title: "2T 4S",
          },
          {
            imageurl: "/img/typology/2T2SFixed.gif",
            title: "2T 2S + Fixed",
          },
        ],
        assembly: [
          {
            imageurl:
              "/img/products/tot_sd_plus/assembly/Screenshot 2024-04-08 194200.png",
            title: "",
          },
          {
            imageurl:
              "/img/products/tot_sd_plus/assembly/Screenshot 2024-04-08 194217.png",
            title: "",
          },
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-SD PLUS",
        key: "TOT-SD PLUS",
        category: "Sliding",
        specification: [
          "Max Sash Height (mm): 2400",
          "Max Sash Width (mm): 1200",
          "Glass Range (mm): 5-20",
        ],
        performanceParameters: [
          {
            value: "Windload: 2 kpa",
            subValue: "as per Class C5 (BS EN12210: 2000)",
          },
          {
            value: "Air Tightness: 300 Pa ",
            subValue: "as per class 2 (BS EN12207: 2000)",
          },
          {
            value: "Water Tightness: 150 Pa",
            subValue: "as per Class 4A (BS EN12207: 2000)",
          },
        ],
      },
    ],
  },
  Casement: {
    "TOT-CS": [
      {
        imageURL: [
          "/img/products/tot-cs/general/lucas-calloch-_OdDX7w__F4-unsplash.jpg",
          "/img/products/tot-cs/general/alexandra-gornago-LrrADFcX80w-unsplash.jpg",
          "/img/products/tot-cs/general/hans-isaacson-Nq2KRhZI7NY-unsplash.jpg",
          "/img/products/tot-cs/general/jessica-hearn-d1QmOZL1nmQ-unsplash.jpg",
        ],
        assembly: [
          {
            imageurl:
              "/img/products/tot-cs/assembly/Screenshot 2024-04-08 194604.png",
            title: "",
          },
          {
            imageurl:
              "/img/products/tot-cs/assembly/Screenshot 2024-04-08 194619.png",
            title: "",
          },
        ],
        typologies: [
          {
            imageurl: "/img/typology/2T2S.gif",
            title: "2T 2S",
          },
          {
            imageurl: "/img/typology/3T3S.gif",
            title: "2T 3S",
          },
          {
            imageurl: "/img/typology/2T4S.gif",
            title: "2T 4S",
          },
          {
            imageurl: "/img/typology/2T2SFixed.gif",
            title: "2T 2S + Fixed",
          },
          {
            imageurl: "/img/typology/SideHung.gif",
            title: "Side Hung",
          },
          {
            imageurl: "/img/typology/TopHung.gif",
            title: "Top Hung",
          },
          {
            imageurl: "/img/typology/BottomHung.gif",
            title: "Bottom Hung",
          },
          {
            imageurl: "/img/typology/TopHungFixed.gif",
            title: "Top Hung + Fixed",
          },
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-CS",
        key: "TOT-CS",
        category: "Casement",
        specification: [
          "Max Sash Height (mm): Door-2400, Window - 1500",
          "Max Sash Width (mm): Door - 900, Window - 750",
          "Glass Range (mm): 5 - 20",
        ],
        performanceParameters: [
          {
            value: "Windload: 1.6 kpa",
            subValue: "as per Class C5 (BS EN12210: 2000)",
          },
          {
            value: "Air Tightness: 150 Pa ",
            subValue: "as per class 2 (BS EN12207: 2000)",
          },
          {
            value: "Water Tightness: 150 Pa",
            subValue: "as per Class 4A (BS EN12207: 2000)",
          },
        ],
      },
    ],
  },
  railing: {},
};
