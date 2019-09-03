import Image from "./assest/toronto.jpg";

const data = [
  {
    url:
      "https://mountainhikingholidays.com/wp-content/uploads/2017/01/acadia_bubbles_sl_84_853.jpg",
    title: "Killarney",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
      "https://www.imaginative-traveller.com/images/articles/blogs/vietnam-1024x300.jpg",
    title: "Tobermory",
    width: "30%",
    author: "personUserName",
  },
  {
  url:
      "https://www.planetware.com/photos-large/CDN/ontario-killarney-george-lake-campground-section-a.jpg",
    title: "Killarney",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
      "https://www.imaginative-traveller.com/images/articles/blogs/vietnam-1024x300.jpg",
    title: "Tobermory",
    width: "30%",
    author: "personUserName",
  },
  {
    url:
        "https://www.planetware.com/photos-large/CDN/ontario-killarney-george-lake-campground-section-a.jpg",
      title: "Killarney",
      width: "30%",
      author: "personUserName",
    },
    {
      url:
        "https://www.imaginative-traveller.com/images/articles/blogs/vietnam-1024x300.jpg",
      title: "Tobermory",
      width: "30%",
      author: "personUserName",
    },
];

export const profileData = {
  userId: "11111",
  username: "ravneet95",
  firstname: "Ravneet",
  lastname: "Singh",
  profileImage:
    "data:image/png;base64,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",
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

// export const itineraryDsta = [
//   tripId: "Killarney"
// ]


export const itineraryData = [
  {
    tripID: "Killarney",
    tripImage: "https://mountainhikingholidays.com/wp-content/uploads/2017/01/acadia_bubbles_sl_84_853.jpg",
    tripName: "Killarney",
    tripHighLight: "Wilderness",
    tripDescription: "This iconic 645 square kilometre wilderness landscape showcases the wild Georgian Bay Coast of pink granite; the La Cloche Mountains’ white quartzite ridges and over 50 exceptionally clear, sapphire lakes set among Jack Pine hills."+
              "The area has long captivated artists including The Group of Seven’s A.Y. Jackson, Franklin Carmichael and A.J. Casson, so much so, that they persuaded the Ontario government to make it a park."+
              "Extensive backcountry canoeing and sea kayaking experiences.Outstanding hiking including the 80 km, looped, La Cloche-Silhouette Trail, as well as cross-country skiing and snowshoeing in winter. George Lake campground, with access to beaches, trails, and canoeing."+
              "Historic Village of Killarney, founded in 1820 as a fur trading post on Georgian Bay, 10 km from park and home of the famous Herbert Fisheries fish and chips.",
    numberOfDays: "4",
    weatherMin: "15",
    weatherMax: "21",
    routeImage: "https://cdn-assets.alltrails.com/static-map/production/at-map/13270596/trail-canada-ontario-granite-ridge-trail-at-map-13270596-1534113366-414x200-1.png",
    dayWise: [
      {
        image: "https://rstorage.filemobile.com/storage/20712768/1085",
        destination: " Cranberry Bog Trail",
        description: "Bogs, marshes and swamps are home to Sundew and Cranberry. Many birds frequent this trail’s habitats and Blanding’s Turtles make an occasional appearance in Cranberry Bog.",
        touristAttraction: "Glaciation—smooth",
        bestThing: "Blanding’s Turtles",
        foodSpeciality: "NA",
        activity: "Hiking",
        dayDelight: "",
        lat: "46.0184",
        long: "81.3964",
        flow: "left"
      },
      {
        image: "https://i.pinimg.com/originals/5b/83/89/5b838906184f506ab4af8e687a380d02.jpg",
        destination: "The Crack Trail",
        description: "The view from the top of Killarney Ridge is absolutely stunning. The immense white cliffs of the La Cloche Mountains surround you through the cascade of huge tumbled boulders is known as 'The Crack'.",
        touristAttraction: "Panoramic Vistas",
        bestThing: "White Cliffs ",
        foodSpeciality: "NA",
        activity: "Hiking",
        dayDelight: "",
        lat: "46.0437",
        long: "81.3236",
        flow: "right"
        
      },
      {
        image: "https://i.redd.it/o8aijsa08l7z.jpg",
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
        image: "https://www.planetware.com/photos-large/CDN/ontario-killarney-camping-section-d-campsite.jpg",
        destination: "Rifugio Bo",
        description: "Hike into the high, other-worldly landscape of the Sella massif. Ride a cable car to the Belvedere ridge high above the Fassa Valley for stunning “front and center”, a peak known as the “Queen of the Dolomites.",
        touristAttraction: "touristAttraction",
        bestThing: "bestThing",
        foodSpeciality: "foodSpeciality",
        activity: "activity",
        dayDelight: "",
        lat: "",
        long: "",
        flow: "right"
      },
    ]
  },
  {
      tripID: "Tobermory",
      tripImage: "https://www.imaginative-traveller.com/images/articles/blogs/vietnam-1024x300.jpg",
      tripName: "Tobermory",
      tripHighLight: "Valley of hikes",
      tripDescription: "Best Hikes in the Dolomites The Sesto Dolomites, Val Badia & Val Gardena Printable version of trip itinerary Dolomites Slide Show We are offering two versions of our popular Dolomites tours in 2019 and 2020. See a map of the areas covered by each of the two Dolomites tours being offered in 2019 and 2020. For a June/July trip, see the description for our “Best Hikes in the Dolomites (Summer)” hiking tour (featuring the spectacular Brenta Dolomites and the Pale di San Martino) at the height of wildflower season. Explore the trails and landscapes amidst the peaks whose jagged silhouettes inspired one writer to call the mountains, “flames frozen in stone.” Among the most visually stunning mountains anywhere, the Dolomites offer a superb network of trails"+
                        "—from broad, well-graded paths to challenging vie ferrate—that caters to hikers of all abilities. The first part of the trip centers on the eastern Dolomites where the needle-like spires and pinnacles of the range are at their finest."+
                        "The second part focuses on the western portion of the range where extensive meadowlands, flower-filled villages, and soaring peaks make for a quintessential Dolomites adventure! The classic alpine landscape and the wide range of hiking choices make the "+
                        "Dolomites one of our favorite hiking destinations! Revel in the glory of the Monti Pallidi (“Pale Mountains”) that legend says wear a cloak spun from moonbeams! In 2009, nine areas in the Dolomites were designated a UNESCO World Heritage Site.",
      numberOfDays: "5",
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
]

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
