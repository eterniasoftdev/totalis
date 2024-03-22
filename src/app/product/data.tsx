export interface productInterface {
  [key: string]: {
    [key: string]: Array<{
      imageURL: string[];
      title: string;
      subtitle: string;
      description: string;
      name: string;
      key: string;
      specification: string[];
      performanceParameters: Array<{ value: string; subValue: string }>;
    }>;
  };
}
export const products: productInterface = {
  windows: {
    "Sliding Windows": [
      {
        imageURL: [
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-SD LITE",
        key: "TOT-SD LITE",
        specification: [
          "Specification 1",
          "Specification 2",
          "Specification 3",
        ],
        performanceParameters: [
          { value: "Main value: 123Kg", subValue: "Sub value" },
          { value: "Main value: 200Kg", subValue: "Sub value" },
          { value: "Main value: 300Kg", subValue: "Sub value" },
        ],
      },
      {
        imageURL: [
          "/img/Collaterals/stock-photo-glass-window-frame-house-interior-on-white-wall-1947458206.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-SD",
        key: "TOT-SD",
        specification: [
          "Specification 1",
          "Specification 2",
          "Specification 3",
        ],
        performanceParameters: [
          { value: "Main value: 123Kg", subValue: "Sub value" },
          { value: "Main value: 200Kg", subValue: "Sub value" },
          { value: "Main value: 300Kg", subValue: "Sub value" },
        ],
      },
    ],
    "Openable Windows": [
      {
        imageURL: [
          "/img/Collaterals/stock-photo-four-panels-commercial-aluminium-frame-bi-fold-doors-642894877.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "ETP CS",
        key: "ETP CS",
        specification: [
          "Specification 1",
          "Specification 2",
          "Specification 3",
        ],
        performanceParameters: [
          { value: "Main value: 123Kg", subValue: "Sub value" },
          { value: "Main value: 200Kg", subValue: "Sub value" },
          { value: "Main value: 300Kg", subValue: "Sub value" },
        ],
      },
      {
        imageURL: [
          "/img/Collaterals/stock-photo-black-frame-aluminium-windows-of-building-2183061193.jpg",
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-SD LITE",
        key: "TOT-SD LITE",
        specification: [
          "Specification 1",
          "Specification 2",
          "Specification 3",
        ],
        performanceParameters: [
          { value: "Main value: 123Kg", subValue: "Sub value" },
          { value: "Main value: 200Kg", subValue: "Sub value" },
          { value: "Main value: 300Kg", subValue: "Sub value" },
        ],
      },
    ],
  },
  doors: {
    "Casement Series": [
      {
        imageURL: [
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-SD LITE",
        key: "TOT-SD LITE",
        specification: [
          "Specification 1",
          "Specification 2",
          "Specification 3",
        ],
        performanceParameters: [
          { value: "Main value: 123Kg", subValue: "Sub value" },
          { value: "Main value: 200Kg", subValue: "Sub value" },
          { value: "Main value: 300Kg", subValue: "Sub value" },
        ],
      },
      {
        imageURL: [
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-SD LITE",
        key: "TOT-SD LITE",
        specification: [
          "Specification 1",
          "Specification 2",
          "Specification 3",
        ],
        performanceParameters: [
          { value: "Main value: 123Kg", subValue: "Sub value" },
          { value: "Main value: 200Kg", subValue: "Sub value" },
          { value: "Main value: 300Kg", subValue: "Sub value" },
        ],
      },
    ],
    "Openable Doors": [
      {
        imageURL: [
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-SD LITE",
        key: "TOT-SD LITE",
        specification: [
          "Specification 1",
          "Specification 2",
          "Specification 3",
        ],
        performanceParameters: [
          { value: "Main value: 123Kg", subValue: "Sub value" },
          { value: "Main value: 200Kg", subValue: "Sub value" },
          { value: "Main value: 300Kg", subValue: "Sub value" },
        ],
      },
      {
        imageURL: [
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
          "/img/Collaterals/stock-photo-closeup-of-plastic-pvc-window-with-white-metal-frame-and-handle-installed-at-house-view-on-blurred-2206747419.jpg",
          "/img/Collaterals/stock-photo-aluminum-window-with-cock-spur-window-handle-on-an-aluminium-window-with-mountain-view-782963743.jpg",
        ],
        title: "Title",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
        name: "TOT-SD LITE",
        key: "TOT-SD LITE",
        specification: [
          "Specification 1",
          "Specification 2",
          "Specification 3",
        ],
        performanceParameters: [
          { value: "Main value: 123Kg", subValue: "Sub value" },
          { value: "Main value: 200Kg", subValue: "Sub value" },
          { value: "Main value: 300Kg", subValue: "Sub value" },
        ],
      },
    ],
  },
  railing: {},
};
