export interface storeIndividualInterface {
  storeName: string;
  pincode: string;
  city: string;
  state: string;
  country: string;
  location: string;
  address: string;
  contactNumber: string;
  describe: string;
  email: string;
}
export interface cityDataInterface {
  [key: string]: Array<storeIndividualInterface>;
}

export interface stateDataInterface {
  [key: string]: cityDataInterface;
}

interface storeDataInterface {
  [key: string]: stateDataInterface;
}

export const storeData: storeDataInterface = {
  India: {
    Delhi: {
      Delhi: [
        {
          storeName: "Bharat Polyzone Private Limited",
          pincode: "834005",
          city: "Delhi",
          state: "Delhi",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
          email: "bharattest@gmail.com",
        },
      ],
    },
    Maharashtra: {
      Mumbai: [
        {
          storeName: "JK COATING CENTRE",
          pincode: "834005",
          city: "Mumbai",
          state: "Maharastra",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
          email: "bharattest@gmail.com",
        },
      ],
    },
    Gujarat: {
      Vadodra: [
        {
          storeName: "STRONGHOLD TECHNICAL SERVICES",
          pincode: "834005",
          city: "Vadodra",
          state: "Gujarat",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
          email: "bharattest@gmail.com",
        },
      ],
    },
    "Tamil Nadu": {
      Chennai: [
        {
          storeName: "POLARIS INFRASOLUTIONS PVT LTD",
          pincode: "834005",
          city: "Chennai",
          state: "Tamil Nadu",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
          email: "bharattest@gmail.com",
        },
      ],
    },
    "Andhra Pradesh": {
      Vijayawada: [
        {
          storeName: "HARDWARE WORLD",
          pincode: "834005",
          city: "Vijayawada",
          state: "Andhra Pradesh",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
          email: "bharattest@gmail.com",
        },
      ],
    },
    Telangana: {
      Hyderabad: [
        {
          storeName: "METAL HOUSE",
          pincode: "834005",
          city: "Hyderabad",
          state: "Telangana",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
          email: "bharattest@gmail.com",
        },
      ],
    },
    Chhattisgarh: {
      Raigarh: [
        {
          storeName: "CHHATTISGARH WOOD INDUSTRIES",
          pincode: "834005",
          city: "Raigarh",
          state: "Chhattisgarh",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
          email: "bharattest@gmail.com",
        },
      ],
    },
    "Uttar Pradesh": {
      Lucknow: [
        {
          storeName: "Sadi Ram Vishwa Prakash",
          pincode: "834005",
          city: "Lucknow",
          state: "Uttar Pradesh",
          country: "India",
          location: "Location",
          address: "address detail",
          contactNumber: "7061329220",
          describe: "Describe your store",
          email: "bharattest@gmail.com",
        },
      ],
    },
  },
};
