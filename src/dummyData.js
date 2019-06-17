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

export const itineraryData = {
  tripImage: Image,
  tripName: "Tobermory",
  tripHighLight: "",
  tripDescription: "",
  numberOfDays: "3",
  weatherMin: "10",
  weatherMax: "20",
  dayWise: [
    {
      image: Image,
      destination: "a",
      description: "",
      touristAttraction: "",
      bestThing: "",
      foodSpeciality: "",
      activity: "",
      dayDelight: "",
      flow: "left"
    },
    {
      image: Image,
      destination: "bhhhkjjnekjngjk enkjsnjkfwenkjasfn kjwenkjsf nkjewanskjf qkjea",
      description: "",
      touristAttraction: "",
      bestThing: "",
      foodSpeciality: "",
      activity: "",
      dayDelight: "",
      flow: "right"
      
    },
    {
      image: Image,
      destination: "c",
      description: "",
      touristAttraction: "",
      bestThing: "",
      foodSpeciality: "",
      activity: "",
      dayDelight: "",
      flow: "left"
    },
  ]
}

export default data;
