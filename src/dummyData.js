import Image from "./assest/toronto.jpg";

const data = [
  {
    url:
      "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80",
    title: "Snorkeling",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
      "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80",
    title: "Massage",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80",
    title: "Hiking",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
      "https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80",
    title: "Tour",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
      "https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80",
    title: "Gastronomy",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80",
    title: "Shopping",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
      "https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80",
    title: "Walking",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
      "https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80",
    title: "Fitness",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
      "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80",
    title: "Reading",
    width: "30%",
    author: "personUserName",
  },
  {
    url: Image,
    title: "Toronto",
    width: "30%",
    author: "personUserName",
  },
  {
    url: Image,
    title: "Toronto1",
    width: "30%",
    author: "personUserName",
  },
  {
    url: Image,
    title: "Toronto2",
    width: "30%",
    author: "personUserName",
  },
  {
    url: Image,
    title: "Toronto3",
    width: "30%",
    author: "personUserName",
  },
  {
    url: Image,
    title: "Toronto4",
    width: "30%",
    author: "personUserName",
  },
  {
    url: Image,
    title: "Toronto5",
    width: "30%",
    author: "personUserName",
  }
];

export const profileData = {
  userId: "11111",
  username: "ravneet95",
  firstname: "Ravneet",
  lastname: "Singh",
  profileImage:
    "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80",
  favourites: [
    {
      destinationId: "1",
      name: "Toronto"
    },
    {
      destinationId: "2",
      name: "Vancouver"
    },
    {
      destinationId: "3",
      name: "Goa"
    }
  ],
  reviews: [
    {
      name: "Toronto",
      reviewText: "I love Toronto!!!!!!!!!!!!!!!!!!!!!:P",
      ratings : 4.5,
      imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Vancouver",
      reviewText: "I hate Vancouver!!!!!!!!!!!!!!!!!!!!!:x",
      ratings : 2.5,
      imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80"

    },

  ]
};

export const ApiKey = {
  api: "AIzaSyC8awoXAVmlUKOO4J5i6XbB62JRqr0CwPQ"
}

export const monthData = {
  month:[
    {
      month: 'January'
    },
    {
      month: 'Febuary'
    },
    {
      month: 'March'
    },
    {
      month: 'April'
    },
    {
      month: 'May'
    },
    {
      month: 'June'
    },
    {
      month: 'July'
    },
    {
      month: 'August'
    },
    {
      month: 'September'
    },
    {
      month: 'October'
    },
  ]
}

export const itineraryData = {
  tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
  tripName: "Tobermory",
  tripHighLight: "Valley of hikes",
  tripDescription: "Best Hikes in the Dolomites The Sesto Dolomites, Val Badia & Val Gardena Printable version of trip itinerary Dolomites Slide Show We are offering two versions of our popular Dolomites tours in 2019 and 2020. See a map of the areas covered by each of the two Dolomites tours being offered in 2019 and 2020. For a June/July trip, see the description for our “Best Hikes in the Dolomites (Summer)” hiking tour (featuring the spectacular Brenta Dolomites and the Pale di San Martino) at the height of wildflower season. Explore the trails and landscapes amidst the peaks whose jagged silhouettes inspired one writer to call the mountains, “flames frozen in stone.” Among the most visually stunning mountains anywhere, the Dolomites offer a superb network of trails"+
                    "—from broad, well-graded paths to challenging vie ferrate—that caters to hikers of all abilities. The first part of the trip centers on the eastern Dolomites where the needle-like spires and pinnacles of the range are at their finest."+
                    "The second part focuses on the western portion of the range where extensive meadowlands, flower-filled villages, and soaring peaks make for a quintessential Dolomites adventure! The classic alpine landscape and the wide range of hiking choices make the "+
                    "Dolomites one of our favorite hiking destinations! Revel in the glory of the Monti Pallidi (“Pale Mountains”) that legend says wear a cloak spun from moonbeams! In 2009, nine areas in the Dolomites were designated a UNESCO World Heritage Site.",
  numberOfDays: "3",
  weatherMin: "10",
  weatherMax: "20",
  dayWise: [
    {
      image: "https://mountainhikingholidays.com/wp-content/uploads/2016/12/misurina_853.jpg",
      destination: " Galleria Anticima",
      description: "After breakfast, you’ll travel by vehicle to the Cinque Torri seggiovia (“chairlift”) that will whisk you to the meadows adjacent to the impressive limestone towers of the Cinque Torri (“Five Towers”). Relax at the mountain rifugio way up the precipitous walls of the towers",
      touristAttraction: "touristAttraction",
      bestThing: "bestThing",
      foodSpeciality: "foodSpeciality",
      activity: "activity",
      dayDelight: "",
      lat: "",
      long: "",
      flow: "left"
    },
    {
      image: "https://mountainhikingholidays.com/wp-content/uploads/2016/12/ciadin_dei_tocci_853.jpg",
      destination: "Rifugio Boe ",
      description: "Hike into the high, other-worldly landscape of the Sella massif. Ride a cable car to the Belvedere ridge high above the Fassa Valley for stunning “front and center” views of glacier-clad Marmolada, a peak known as the “Queen of the Dolomites.",
      touristAttraction: "touristAttraction",
      bestThing: "bestThing",
      foodSpeciality: "foodSpeciality",
      activity: "activity",
      dayDelight: "",
      lat: "",
      long: "",
      flow: "right"
      
    },
    {
      image: "https://mountainhikingholidays.com/wp-content/uploads/2016/12/alpe_di_siusi_2009_853_1.jpg",
      destination: "Peaks of the Sassolungo",
      description: "From Ortisei, ascend into the mountains via the Seceda cable car. Hike among the craggy peaks of the mountain group called the Odle Geisler (odle means “needles” in Ladin), and amble through the open meadowlands of the Alpe di Cisles and Mastle Alm",
      touristAttraction: "touristAttraction",
      bestThing: "bestThing",
      foodSpeciality: "foodSpeciality",
      activity: "activity",
      dayDelight: "",
      lat: "",
      long: "",
      flow: "left"
    },
    {
      image: "https://mountainhikingholidays.com/wp-content/uploads/2016/12/rifugio_boe_853.jpg",
      destination: "Rifugio Bo",
      description: "Hike into the high, other-worldly landscape of the Sella massif. Ride a cable car to the Belvedere ridge high above the Fassa Valley for stunning “front and center” views of glacier-clad Marmolada, a peak known as the “Queen of the Dolomites.",
      touristAttraction: "touristAttraction",
      bestThing: "bestThing",
      foodSpeciality: "foodSpeciality",
      activity: "activity",
      dayDelight: "",
      lat: "",
      long: "",
      flow: "right"
    },
    {
      image: "https://mountainhikingholidays.com/wp-content/uploads/2016/12/seceda_hikers_853.jpg",
      destination: " Galleria Anticim",
      description: "After breakfast, you’ll travel by vehicle to the Cinque Torri seggiovia (“chairlift”) that will whisk you to the meadows adjacent to the impressive limestone towers of the Cinque Torri (“Five Towers”). Relax at the mountain rifugio way up the precipitous walls of the towers",
      touristAttraction: "touristAttraction",
      bestThing: "bestThing",
      foodSpeciality: "foodSpeciality",
      activity: "activity",
      dayDelight: "",
      lat: "",
      long: "",
      flow: "left"
    },
  ]
}

export const searchData = [
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
  {
    tripImage: "https://www.mountaintreksnepal.com/wp-content/uploads/2018/05/Everest-base-camp-luxury-trekking-1024x400.jpg",
    tripName: "Tobermory",
    tripHighLight: "Valley of hikes",
  },
]

export default data;
