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
    "Delhi NCR": {
      "Delhi NCR": [
        {
          storeName: "Bharat Polyzone",
          pincode: "110040",
          city: "Delhi NCR",
          state: "Delhi NCR",
          country: "India",
          location: "Industrial Park, Block - E, DSIDC, Narela",
          address:
            "Plot No. 722, First Floor, Industrial Park, Block - E, DSIDC, Narela, North West Delhi",
          contactNumber: "",
          describe: "",
          email: "viren.makhijani@enmakk.com",
        },
      ],
    },
    "Uttar Pradesh": {
      Lucknow: [
        {
          storeName: "Shadi Ram Vishwa Prakash",
          pincode: "226019",
          city: "Lucknow",
          state: "Uttar Pradesh",
          country: "India",
          location: "UPSIDC Industrial Area",
          address: "F 8 U P S I D C INDUSTRIAL AREA DEVA ROAD LUCKNOW",
          contactNumber: "",
          describe: "",
          email: "anshulg101@gmail.com",
        },
      ],
      Kanpur: [
        {
          storeName: "Axal Udyog",
          pincode: "208012",
          city: "Kanpur",
          state: "Uttar Pradesh",
          country: "India",
          location: "Fazalganj Industrial Estate",
          address:
            "84/21 (16, Fazalganj Chauraha, Industrial Estate, Fazalganj Industrial Estate, Fazalganj, Shastri Nagar",
          contactNumber: "",
          describe: "",
          email: "exaludyog@gmail.com",
        },
      ],
    },
    Punjab: {
      Mohali: [
        {
          storeName: "VASUDEVA GLASS SOLUTIONS PRIVATE LIMITED",
          pincode: "160055",
          city: "Mohali",
          state: "Punjab",
          country: "India",
          location: "Sector 56, Phase 6",
          address: "Plot No B-56, Sector 56, Phase 6, Mohali",
          contactNumber: "",
          describe: "",
          email: "piyush_aggarwal@live.com",
        },
      ],
    },
    Chhattisgarh: {
      Raigarh: [
        {
          storeName: "Chhattisgarh Wood Industries",
          pincode: "",
          city: "Raigarh",
          state: "Chhattisgarh",
          country: "India",
          location: "Kotra Road",
          address:
            "PLOT NO 08 VILLAGE JORAPALI (KOTRA ROAD), RAIGARH (CHHATTISGARH)",
          contactNumber: "",
          describe: "",
          email: "cwi.rgh@gmail.com",
        },
      ],
      Raipur: [
        {
          storeName: "MANIDHARI ENTERPRISES",
          pincode: "492001",
          city: "Raipur",
          state: "Chhattisgarh",
          country: "India",
          location: "Punjab Oil Mill galli, Bhaisthan",
          address: "0, Punjab Oil Mill galli, Bhaisthan, Raipur",
          contactNumber: "",
          describe: "",
          email: "Manidhari2021@gmail.com",
        },
      ],
    },
    "West Bengal": {
      Kolkata: [
        {
          storeName: "MAK Aluminium",
          pincode: "711405",
          city: "Kolkata",
          state: "West Bengal",
          country: "India",
          location: "Domjur",
          address: "Dakshin Jharpodah, Domjur, Howrah",
          contactNumber: "",
          describe: "",
          email: "aluminium.mak@gmail.com",
        },
      ],
    },
    Odisha: {
      Cuttack: [
        {
          storeName: "Swastik Aluminium",
          pincode: "753003",
          city: "Cuttack",
          state: "Odisha",
          country: "India",
          location: "Jobra, College Square",
          address:
            "GROUND FLOOR, CANAL ROAD, WARD NO-40, HOLDING NO-26, JOBRA, PO COLLEGE SQUARE",
          contactNumber: "",
          describe: "",
          email: "anuragshroff@swastikaluminium.co.in",
        },
      ],
    },
    Telangana: {
      Hyderabad: [
        {
          storeName: "Metal House",
          pincode: "500003",
          city: "Hyderabad",
          state: "Telangana",
          country: "India",
          location: "Secunderabad",
          address: "# 7-3-706/3, RASHTRAPATHI ROAD, SECUNDERABAD",
          contactNumber: "",
          describe: "",
          email: "houseofaluminium@gmail.com",
        },
      ],
    },
    "Andhra Pradesh": {
      Vijaywada: [
        {
          storeName: "Hardware World",
          pincode: "520010",
          city: "Vijaywada",
          state: "Andhra Pradesh",
          country: "India",
          location: "Near Rama Mohan Ayurvedic Hospital",
          address:
            "#27-37-139/C, Near Rama Mohan Ayurvedic Hospital, VIJAYAWADA(URBAN)",
          contactNumber: "",
          describe: "",
          email: "ma.alum@yahoo.in",
        },
      ],
    },
    "Tamil Nadu": {
      Saidapet: [
        {
          storeName: "Polaris Infra Solutions Pvt Ltd",
          pincode: "600095",
          city: "Saidapet",
          state: "Tamil Nadu",
          country: "India",
          location: "Vanagaram",
          address:
            "No: 107/1, Vardhaman Granito, Chettiyar agaram road, Noombal village, Vanagaram, Chennai",
          contactNumber: "",
          describe: "",
          email: "ahilan@polarisinfra.in",
        },
      ],
      Coimbatore: [
        {
          storeName: "CA ENTERPRISES",
          pincode: "641043",
          city: "Coimbatore",
          state: "Tamil Nadu",
          country: "India",
          location: "North Coimbatore",
          address: "424, Mettupalayam Road, North Coimbatore",
          contactNumber: "",
          describe: "",
          email: "sales@caenterprises.co.in",
        },
      ],
    },
    Karnataka: {
      Bangalore: [
        {
          storeName: "SURFACES",
          pincode: "560068",
          city: "Bangalore",
          state: "Karnataka",
          country: "India",
          location: "Hosur Road, Bommanahalli",
          address:
            "# 180/1, Old Mangamanapalya Road Bommanahalli, Hosur Road, Near Gold Hills Squre Building",
          contactNumber: "",
          describe: "",
          email: "santosh@surfaces.co.in",
        },
      ],
    },
    Kerala: {
      Ernakulam: [
        {
          storeName: "JAIHIND ALUMINIUM TRADERS",
          pincode: "682021",
          city: "Ernakulam",
          state: "Kerala",
          country: "India",
          location: "Seaport Airport Road, Thrikkakara",
          address:
            "VI/817-B, SEAPORT AIRPORT ROAD, NEAR VALLATHOL JUNCTION, THRIKKAKARA P.O",
          contactNumber: "",
          describe: "",
          email: "info@jaihindgroupindia.com",
        },
      ],
    },
    Maharashtra: {
      Mumbai: [
        {
          storeName: "JK Coating Centre",
          pincode: "400705",
          city: "Mumbai",
          state: "Maharashtra",
          country: "India",
          location: "Turbhe village, Navi Mumbai",
          address: "D-13/1, Turbhe village, Navi Mumbai, Thane",
          contactNumber: "",
          describe: "",
          email: "jkcc@jkgroupindia.com",
        },
      ],
      Kolhapur: [
        {
          storeName: "Infinity Windows",
          pincode: "416236",
          city: "Kolhapur",
          state: "Maharashtra",
          country: "India",
          location: "Kagal 5 Star M.I.D.C.",
          address:
            "Gat No : 356/1 B, Main Road Kagal 5 Star M.I.D.C.Kagal, Kolhapur",
          contactNumber: "",
          describe: "",
          email: "infinitywindowskop1981@gmail.com",
        },
      ],
    },
    Gujarat: {
      Vadodara: [
        {
          storeName: "Strong Hold Technical Services",
          pincode: "391410",
          city: "Vadodara",
          state: "Gujarat",
          country: "India",
          location: "Savli",
          address:
            "626 MANJSURAR, NR LAMDAPURA BUS STAND, VADODARA - SAVLI ROAD, TAL. SAVLI, DIST VADODARA",
          contactNumber: "",
          describe: "",
          email: "rs.strongholdwindows@gmail.com",
        },
      ],
    },
    Assam: {
      Kamrup: [
        {
          storeName: "Tirupati Aluminium",
          pincode: "",
          city: "Kamrup",
          state: "Assam",
          country: "India",
          location: "Bramhaputra Industrial Park, Gouripur",
          address: "Plot no-47, Bramhaputra Industrial Park, Gouripur, Kamrup",
          contactNumber: "",
          describe: "",
          email: "aluminiumtirupati@gmail.com",
        },
      ],
    },
    Rajasthan: {
      Jaipur: [
        {
          storeName: "Twist Windows",
          pincode: "302020",
          city: "Jaipur",
          state: "Rajasthan",
          country: "India",
          location: "Narayan Vihar, Gopalpura byepass road",
          address:
            "plot no 197A, Narayan Vihar E block, Gopalpura byepass road, Mansarovar",
          contactNumber: "",
          describe: "",
          email: "skbarala3@yahoo.com",
        },
        {
          storeName: "Sky Windows",
          pincode: "302026",
          city: "Jaipur",
          state: "Rajasthan",
          country: "India",
          location: "S-1, Khasra No. 822",
          address: "Basdi Chouraha, Mukundpura Road, Bhankrota",
          contactNumber: "",
          describe: "",
          email: "caakashkaushik@gmail.com",
        },
      ],
    },
  },
};
