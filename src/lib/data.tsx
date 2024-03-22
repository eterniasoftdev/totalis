interface cityDataInterface {
  [key: string]: Array<{
    storeName: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
    location: string;
    address: string;
    contactNumber: string;
    describe: string;
  }>;
}

interface stateDataInterface {
  [key: string]: cityDataInterface;
}

interface storeDataInterface {
  [key: string]: stateDataInterface;
}

export const storeData: storeDataInterface = {
  India: {
    Jharkhand: {
      Ranchi: [
        {
          storeName: "Store 1",
          pincode: "834005",
          city: "City Name",
          state: "Jharkhand",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
        },
        {
          storeName: "Store 2",
          pincode: "834005",
          city: "City Name",
          state: "Jharkhand",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
        },
      ],

      Jamshedpur: [
        {
          storeName: "Store 3",
          pincode: "834005",
          city: "City Name",
          state: "Jharkhand",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
        },
        {
          storeName: "Store 4",
          pincode: "834005",
          city: "City Name",
          state: "Jharkhand",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
        },
      ],
    },
    Maharstra: {
      Mumbai: [
        {
          storeName: "Store 221",
          pincode: "834005",
          city: "City Name",
          state: "Jharkhand",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
        },
        {
          storeName: "Store 293",
          pincode: "834005",
          city: "City Name",
          state: "Jharkhand",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
        },
      ],
      Pune: [
        {
          storeName: "Store 929",
          pincode: "834005",
          city: "City Name",
          state: "Jharkhand",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
        },
        {
          storeName: "Store 948",
          pincode: "834005",
          city: "City Name",
          state: "Jharkhand",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
        },
      ],
    },
  },
};
