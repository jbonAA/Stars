# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Restaurant.destroy_all

User.create({
    email: "guest@aa.io",
    password: "password",
    first_name: "Ronald",
    last_name: "Malkington",
    zip: "94019"
})

zazie = Restaurant.create(
   name: "Zazie",
   description: "Breakfast & Brunch, French",
   website: "zaziesf.com",
   city: "San Francisco",
   state: "CA",
   address: "941 Cole St",
   phone: "(415) 564-5332",
   stars: 0,
   delivery: true,
   takeout: true,
   price: "$$",
   hours: [
       "Mon: 8:00 am - 2:00 pm",
       "Tue: 8:00 am - 2:00 pm",
       "Wed: 8:00 am - 2:00 pm", 
       "Thu: 8:00 am - 2:00 pm", 
       "Fri: 8:00 am - 2:00 pm", 
       "Sat: 9:00 am - 3:00 pm", 
       "Sun: 9:00 am - 3:00 pm" 
    ] 
)

file = open("https://s3.console.aws.amazon.com/s3/object/stars-fullstack-dev/zazie_idx.jpg")
zazie.photos.attach(io: file, filename: 'zazie_idx.jpg')


Review.create(
    title: "bingoboi",
    description: "testing show page",
    restaurant_id: 1,
    user_id: 1,
    stars: "5"
)

# in map state to props need to return an empty array if no reviews yet
    
    # file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/zazie_idx.jpg")
    # zazie.photos.attach(io: file, filename: "zazie_idx.jpg")
    # file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/zazie1.jpg")
    # zazie.photos.attach(io: file2, filename: "zazie1.jpg")
    # file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/zazie2.jpg")
    # zazie.photos.attach(io: file3, filename: "zazie2.jpg")
    # file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/zazie3.jpg")
    # zazie.photos.attach(io: file4, filename: "zazie3.jpg")
    # file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/zazie4.jpg")
    # zazie.photos.attach(io: file5, filename: "zazie4.jpg")

fog = Restaurant.create({
    name: "Fog Harbor Fish House",
    description:"Seafood, Bars",
    website:"fogharbor.com",
    city:"San Francisco",
    state:"CA",
    address:"Pier 39 Ste A-202",
    phone:"(415) 421-2442",
    stars:0,
    delivery: false,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 11:00 am - 10:00 pm",
    "Tue: 11:00 am - 10:00 pm",
    "Wed: 11:00 am - 10:00 pm",
    "Thu: 11:00 am - 10:00 pm",
    "Fri: 11:00 am - 10:00 pm", 
    "Sat: 11:00 am - 10:00 pm", 
    "Sun: 11:00 am - 10:00 pm"
   ]
})



house = Restaurant.create({
    name: "The House",
    description:"Asian Fusion",
    website:"thehse.com",
    city:"San Francisco",
    state:"CA",
    address:"1230 Grant Ave",
    phone:"(415) 986-8612",
    stars:0,
    delivery: false,
    takeout: true,
    price: "$$$",
    hours: [
    "Mon: 11:30 am - 2:30 pm  &  5:30 pm - 10:00 pm",
    "Tue: 11:30 am - 2:30 pm  &  5:30 pm - 10:00 pm",
    "Wed: 11:30 am - 2:30 pm  &  5:30 pm - 10:00 pm",
    "Thu: 11:30 am - 2:30 pm  &  5:30 pm - 10:00 pm",
    "Fri: 11:30 am - 2:30 pm  &  5:30 pm - 10:00 pm",
    "Sat: 11:30 am - 2:30 pm  &  5:30 pm - 10:00 pm",
    "Sun: 11:30 am - 2:30 pm  &  5:30 pm - 10:00 pm"
   ]
})


farmhouse = Restaurant.create({
    name: "Farmhouse Kitchen Thai Cuisine",
    description:"Thai, Comfort Food",
    website:"farmhousethai.com",
    city:"San Francisco",
    state:"CA",
    address:"710 Florida St",
    phone:"(415) 814-2920",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 11:00 am - 2:00 pm  &  5:00pm - 10:00 pm",
    "Tue: 11:00 am - 2:00 pm  &  5:00pm - 10:00 pm",
    "Wed: 11:00 am - 2:00 pm  &  5:00pm - 10:00 pm",
    "Thu: 11:00 am - 2:00 pm  &  5:00pm - 10:00 pm",
    "Fri: 11:00 am - 2:00 pm  &  5:00pm - 10:00 pm",
    "Sat: 12:00pm - 10:00 pm",
    "Sun: 12:00pm - 10:00 pm"
   ]
})


umma = Restaurant.create({
    name: "um.ma",
    description:"Korean, Barbeque",
    website:"ummasf.com",
    city:"San Francisco",
    state:"CA",
    address:"1220 9th Ave",
    phone:"(415) 566-5777",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 11:00 am - 2:30 pm  &  5:00 pm - 9:00 pm   ",
    "Tue: 11:00 am - 2:30 pm  &  5:00 pm - 9:00 pm   ",
    "Wed: 11:00 am - 2:30 pm  &  5:00 pm - 9:00 pm   ",
    "Thu: 11:00 am - 2:30 pm  &  5:00 pm - 9:00 pm   ",
    "Fri: 11:00 am - 2:30 pm  &  5:00 pm - 9:00 pm   ",
    "Sat: 11:00 am - 2:30 pm  &  5:00 pm - 9:00 pm   ",
    "Sun: 11:00 am - 2:30 pm  &  5:00 pm - 9:00 pm   "
   ]
})


tuba = Restaurant.create({
    name: "Tuba Authentic Turkish Restaurant",
    description:"Mediterranean, Turkish",
    website:"tubarestaurantsf.com",
    city:"San Francisco",
    state:"CA",
    address:"1007 Guerrero St",
    phone:"(415) 826-8822",
    stars:0,
    delivery: true,
    takeout: false,
    price: "$$",
    hours: [
    "Mon: 5:00 pm - 10:30 pm   ",
    "Tue: 5:00 pm - 10:30 pm   ",
    "Wed: 5:00 pm - 10:30 pm   ",
    "Thu: 5:00 pm - 10:30 pm   ",
    "Fri: 5:00 pm - 11:30 pm   ",
    "Sat: 5:00 pm - 11:30 pm   ",
    "Sun: 5:00 pm - 10:30 pm   "
   ]
})


noosh = Restaurant.create({
    name: "Noosh",
    description:"Mediterranean",
    website:"nooshsf.com",
    city:"San Francisco",
    state:"CA",
    address:"2001 Fillmore St",
    phone:"(415) 231-5985",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 11:00 am - 10:30pm",
    "Tue: 11:00 am - 10:30pm",
    "Wed: 11:00 am - 10:30pm",
    "Thu: 11:00 am - 10:30pm",
    "Fri: 11:00 am - 10:30pm",
    "Sat: 11:00 am - 10:30pm",
    "Sun: 11:00 am - 10:30pm"
   ]
})


hog = Restaurant.create({
    name: "Hog Island Oyster Co",
    description:"Seafood, Seafood Markets, Live/Raw Food",
    website:"hogislandoysters.com",
    city:"San Francisco",
    state:"CA",
    address:"1 Ferry Bldg Shop 11",
    phone:"(415) 391-7117",
    stars:0,
    delivery: false,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 11:00 am - 9:00 pm",
    "Tue: 11:00 am - 9:00 pm",
    "Wed: 11:00 am - 9:00 pm",
    "Thu: 11:00 am - 9:00 pm",
    "Fri: 11:00 am - 9:00 pm",
    "Sat: 11:00 am - 9:00 pm",
    "Sun: 11:00 am - 9:00 pm"
   ]
})


tung = Restaurant.create({
    name: "San Tung",
    description:"Chinese, Chicken Wings, Noodles",
    website:"santung.new",
    city:"San Francisco",
    state:"CA",
    address:"1031 Irving St",
    phone:"(415) 242-0828",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 11:00 am - 3:00 pm  &  5:00 pm - 9:30 pm  ",
    "Tue: 11:00 am - 3:00 pm  &  5:00 pm - 9:30 pm  ",
    "Wed: 11:00 am - 3:00 pm  &  5:00 pm - 9:30 pm  ",
    "Thu: 11:00 am - 3:00 pm  &  5:00 pm - 9:30 pm  ",
    "Fri: 11:00 am - 3:00 pm  &  5:00 pm - 9:30 pm  ",
    "Sat: 11:00 am - 3:00 pm  &  5:00 pm - 9:30 pm  ",
    "Sun: 11:00 am - 3:00 pm  &  5:00 pm - 9:30 pm  "
   ]
})

bird = Restaurant.create({
   name:"The Bird",
   description:"Chicken Shop, Sandwiches",
   website:"thebirdsf.com",
   city:"San Francisco",
   state:"CA",
   address:"115 New Montgomery St",
   phone:"(415) 872-9825",
   stars:0,
   delivery: true,
   takeout: false,
   price: "$",
   hours: [
       "Mon: 7:30 am - 9:00 pm",
       "Tues: 7:30 am - 9:00 pm",
       "Wed: 7:30 am - 9:00 pm",
       "Thu: 7:30 am - 10:00 pm",
       "Fri: 7:30 am - 10:00 pm", 
       "Sat: 9:00 am - 8:00 pm", 
       "Sun: Closed" ,
   ]
})

spoon = Restaurant.create({
   name:"Wooden Spoon",
   description:"Breakfast & Brunch",
   website:"woodenspoonsf.com",
   city:"San Francisco",
   state:"CA",
   address:"2172 Market St",
   stars:0,
   phone:"(415) 946-3005",
   delivery: true,
   takeout: false,
   price: "$$",
   hours:[
       "Mon: 8:00 am - 3:00 pm",
       "Tues: 8:00 am - 3:00 pm",
       "Wed: 8:00 am - 3:00 pm",
       "Thu: 8:00 am - 3:00 pm",
       "Fri: 8:00 am - 3:00 pm", 
       "Sat: 8:00 am - 3:00 pm", 
       "Sun: 8:00 am - 3:00 pm" ,
   ],
})


#vegas
yardbird = Restaurant.create({
    name: "Yardbird Southern Table & Bar",
    description:"Southern, American, Cocktail Bars",
    website:"runchickenrun.com",
    city:"Las Vegas",
    state:"NV",
    address:"3355 Las Vegas Blvd S",
    phone:"(702) 297-6541",
    stars:0,
    delivery: false,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 11:00 am - 11:00 pm   ",
    "Tue: 11:00 am - 11:00 pm   ",
    "Wed: 11:00 am - 11:00 pm   ",
    "Thu: 11:00 am - 11:00 pm   ",
    "Fri: 11:00 am - 12:00 am   ",
    "Sat: 11:00 am - 12:00 am   ",
    "Sun: 11:00 am - 11:00 pm   "
   ]
})


mon = Restaurant.create({
    name: "Mon Ami Gabi",
    description:"French, Steakhouses, Breakfast & Brunch",
    website:"monamigabi.com",
    city:"Las Vegas",
    state:"NV",
    address:"3655 Las Vegas Blvd S",
    phone:"(702) 944-4224",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 7:00 am - 11:00 pm   ",
    "Tue: 7:00 am - 11:00 pm   ",
    "Wed: 7:00 am - 11:00 pm   ",
    "Thu: 7:00 am - 11:00 pm   ",
    "Fri: 7:00 am - 12:00 am   ",
    "Sat: 7:00 am - 12:00 am   ",
    "Sun: 7:00 am - 11:00 pm   "
   ]
})


earl = Restaurant.create({
    name: "Earl of Sandwich",
    description:"Sandwiches, Salad, Wraps",
    website:"earlofsandwichusa.com",
    city:"Las Vegas",
    state:"NV",
    address:"3667 Las Vegas Blvd S",
    phone:"(702) 463-0259",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$",
    hours: [
    "Mon: Open 24 hours" ,
    "Tue: Open 24 hours" ,
    "Wed: Open 24 hours" ,
    "Thu: Open 24 hours" ,
    "Fri: Open 24 hours" ,
    "Sat: Open 24 hours" ,
    "Sun: Open 24 hours"
   ]
})


nacho = Restaurant.create({
    name: "Nacho Daddy",
    description:"American, Mexican, Breakfast & Brunch",
    website:"nachodaddy.com",
    city:"Las Vegas",
    state:"NV",
    address:"3663 Las Vegas Blvd",
    phone:"(702) 462-5000",
    stars:0,
    delivery: false,
    takeout: false,
    price: "$$",
    hours: [
    "Mon: 8:00 am - 2:00 am   ",
    "Tue: 8:00 am - 2:00 am   ",
    "Wed: 8:00 am - 2:00 am   ",
    "Thu: 8:00 am - 2:00 am   ",
    "Fri: 8:00 am - 3:00 am   ",
    "Sat: 8:00 am - 3:00 am   ",
    "Sun: 8:00 am - 2:00 am   "
   ]
})


mamas = Restaurant.create({
    name: "Mr Mamas",
    description:"Breakfast & Brunch, American, Burgers",
    website:"mrmamaslv.com",
    city:"Las Vegas",
    state:"NV",
    address:"5693 S Jones Blvd",
    phone:"(702) 220-9224",
    stars:0,
    delivery: false,
    takeout: true,
    price: "$",
    hours: [
    "Mon: 6:00 am - 3:00 pm",
    "Tue: 6:00 am - 3:00 pm",
    "Wed: 6:00 am - 3:00 pm",
    "Thu: 6:00 am - 3:00 pm",
    "Fri: 6:00 am - 3:00 pm",
    "Sat: 6:00 am - 2:00 pm",
    "Sun: 6:00 am - 2:00 pm"
   ]
})


bacchanal = Restaurant.create({
    name: "Bacchanal Buffet",
    description:"Buffet",
    website:"caesarspalace.com",
    city:"Las Vegas",
    state:"NV",
    address:"3570 S Las Vegas Blvd",
    phone:"(702) 731-7928",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$$",
    hours: [
    "Mon: 7:30 am - 10:00 pm",
    "Tue: 7:30 am - 10:00 pm",
    "Wed: 7:30 am - 10:00 pm",
    "Thu: 7:30 am - 10:00 pm",
    "Fri: 7:30 am - 10:00 pm",
    "Sat: 7:30 am - 10:00 pm",
    "Sun: 7:30 am - 10:00 pm"
   ]
})


neighbors = Restaurant.create({
    name: "Neighbors",
    description:"Breakfast & Brunch, Coffee & Tea",
    website:"neighborscafelv.com",
    city:"Las Vegas",
    state:"NV",
    address:"5910 S Fort Apache Rd",
    phone:"(702) 685-1166",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 7:00 am - 3:00 pm",
    "Tue: 7:00 am - 3:00 pm",
    "Wed: 7:00 am - 3:00 pm",
    "Thu: 7:00 am - 3:00 pm",
    "Fri: 7:00 am - 3:00 pm",
    "Sat: 7:00 am - 3:00 pm",
    "Sun: 7:00 am - 3:00 pm"
   ]
})


bouchon = Restaurant.create({
    name: "Bouchon",
    description:"French, Breakfast & Brunch",
    website:"thomaskeller.com",
    city:"Las Vegas",
    state:"NV",
    address:"3355 Las Vegas Blvd S",
    phone:"(702) 414-6200",
    stars:0,
    delivery: false,
    takeout: true,
    price: "$$$",
    hours: [
    "Mon: 7:00 am - 1:00 pm  &  5:00 pm - 10:00 pm",
    "Tue: 7:00 am - 1:00 pm  &  5:00 pm - 10:00 pm",
    "Wed: 7:00 am - 1:00 pm  &  5:00 pm - 10:00 pm",
    "Thu: 7:00 am - 1:00 pm  &  5:00 pm - 10:00 pm",
    "Fri: 7:00 am - 1:00 pm  &  5:00 pm - 10:00 pm",
    "Sat: 7:00 am - 1:00 pm  &  5:00 pm - 10:00 pm",
    "Sun: 7:00 am - 1:00 pm  &  5:00 pm - 10:00 pm"
   ]
})


wicked = Restaurant.create({
    name: "Wicked Spoon",
    description:"Buffet, Breakfast & Brunch",
    website:"cosmopolitanlasvegas.com",
    city:"Las Vegas",
    state:"NV",
    address:"3708 S Las Vegas Blvd",
    phone:"(877) 893-2001",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$$",
    hours: [
    "Mon: 8:00 am - 9:00 pm",
    "Tue: 8:00 am - 9:00 pm",
    "Wed: 8:00 am - 9:00 pm",
    "Thu: 8:00 am - 9:00 pm",
    "Fri: 8:00 am - 9:00 pm",
    "Sat: 8:00 am - 9:00 pm",
    "Sun: 8:00 am - 9:00 pm"
   ]
})


firefly = Restaurant.create({
    name: "Firefly Tapas Kitchen and Bar",
    description:"Tapas/Small Plates, Spanish",
    website:"fireflylv.com",
    city:"Las Vegas",
    state:"NV",
    address:"3824 Paradise Rd",
    phone:"(702) 369-3971",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 8:00 am - 9:00 pm",
    "Tue: 8:00 am - 9:00 pm",
    "Wed: 8:00 am - 9:00 pm",
    "Thu: 8:00 am - 9:00 pm",
    "Fri: 8:00 am - 9:00 pm",
    "Sat: 8:00 am - 9:00 pm",
    "Sun: 8:00 am - 9:00 pm"
   ]
})

#wyoming

snake = Restaurant.create({
    name: "Snake River Brewing",
    description:"Brewpub, American",
    website:"snakeriverbrewing.com",
    city:"Jackson",
    state:"WY",
    address:"265 S Millward St",
    phone:"(307) 200-4890",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 11:00 am - 11:00 pm",
    "Tue: 11:00 am - 11:00 pm",
    "Wed: 11:00 am - 11:00 pm",
    "Thu: 11:00 am - 11:00 pm",
    "Fri: 11:00 am - 11:00 pm",
    "Sat: 11:00 am - 11:00 pm",
    "Sun: 11:00 am - 11:00 pm"
   ]
})


gather = Restaurant.create({
    name: "Gather",
    description:"American, Wine Bar, Caterers",
    website:"gatherjh.com",
    city:"Jackson",
    state:"WY",
    address:"72 S Glenwood St",
    phone:"(307) 264-1820",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 5:00 pm - 10:00 pm",
    "Tue: 5:00 pm - 10:00 pm",
    "Wed: 5:00 pm - 10:00 pm",
    "Thu: 5:00 pm - 10:00 pm",
    "Fri: 5:00 pm - 10:00 pm",
    "Sat: 5:00 pm - 10:00 pm",
    "Sun: 5:00 pm - 10:00 pm"
   ]
})

gun = Restaurant.create({
    name: "Gun Barrel Steak and Game House",
    description:"Steakhouses, Bars",
    website:"jackson.gunbarrel.com",
    city:"Jackson",
    state:"WY",
    address:"862 W Broadway Ave",
    phone:"(307) 733-3287",
    stars:0,
    delivery: false,
    takeout: true,
    price: "$$$",
    hours: [
    "Mon: 5:30 pm - 9:30 pm",
    "Tue: 5:30 pm - 9:30 pm",
    "Wed: 5:30 pm - 9:30 pm",
    "Thu: 5:30 pm - 9:30 pm",
    "Fri: 5:30 pm - 9:30 pm",
    "Sat: 5:30 pm - 9:30 pm",
    "Sun: 5:30 pm - 9:30 pm"
   ]
})

still = Restaurant.create({
    name: "StillWest Brewery & Grill",
    description:"Brewpubs, American, Beer Bar",
    website:"stillwestbreweryandgrill.com",
    city:"Jackson",
    state:"WY",
    address:"45 East Snow King Ave",
    phone:"(307) 201-5955",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 11:00 am - 10:00 pm",
    "Tue: 11:00 am - 10:00 pm",
    "Wed: 11:00 am - 10:00 pm",
    "Thu: 11:00 am - 10:00 pm",
    "Fri: 11:00 am - 10:00 pm",
    "Sat: 11:00 am - 10:00 pm",
    "Sun: 11:00 am - 10:00 pm"
   ]
})

glori = Restaurant.create({
    name: "Glorietta Trattoria",
    description:"Italian, Bars",
    website:"gloriettajackson.com",
    city:"Jackson",
    state:"WY",
    address:"242 N Glenwood St",
    phone:"(307) 733 3888",
    stars:0,
    delivery: false,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 5:00 pm - 10:00 pm",
    "Tue: 5:00 pm - 10:00 pm",
    "Wed: 5:00 pm - 10:00 pm",
    "Thu: 5:00 pm - 10:00 pm",
    "Fri: 5:00 pm - 10:00 pm",
    "Sat: 5:00 pm - 10:00 pm",
    "Sun: 5:00 pm - 10:00 pm"
   ]
})

bin22 = Restaurant.create({
    name: "Bin22",
    description:"Tapas/Small Plates, Wine Bars",
    website:"bin22jacksonhole.com",
    city:"Jackson",
    state:"WY",
    address:"200 W Broadway",
    phone:"(307) 739-9463",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 10:00 am - 10:00 pm",
    "Tue: 10:00 am - 10:00 pm",
    "Wed: 10:00 am - 10:00 pm",
    "Thu: 10:00 am - 10:00 pm",
    "Fri: 10:00 am - 10:00 pm",
    "Sat: 10:00 am - 10:00 pm",
    "Sun: 10:00 am - 10:00 pm"
   ]
})

river = Restaurant.create({
    name: "Snake River Grill",
    description:"American, Tapas, Cocktail Bar",
    website:"snakerivergrill.com",
    city:"Jackson",
    state:"WY",
    address:"84 E Broadway",
    phone:"(307) 733-0557",
    stars:0,
    delivery: false,
    takeout: true,
    price: "$$$",
    hours: [
    "Mon: 4:00 pm - 10:00 pm",
    "Tue: 4:00 pm - 10:00 pm",
    "Wed: 4:00 pm - 10:00 pm",
    "Thu: 4:00 pm - 10:00 pm",
    "Fri: 4:00 pm - 10:00 pm",
    "Sat: 4:00 pm - 10:00 pm",
    "Sun: 4:00 pm - 10:00 pm"
   ]
})

thebird = Restaurant.create({
    name: "The Bird",
    description:"American",
    website:"thebirdinjh.com",
    city:"Jackson",
    state:"WY",
    address:"4125 S Pub Pl",
    phone:"(307) 732-2473",
    stars:0,
    delivery: false,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 4:00 pm - 11:00 pm",
    "Tue: 4:00 pm - 11:00 pm",
    "Wed: 4:00 pm - 11:00 pm",
    "Thu: 4:00 pm - 11:00 pm",
    "Fri: 4:00 pm - 11:00 pm",
    "Sat: 4:00 pm - 11:00 pm",
    "Sun: 4:00 pm - 11:00 pm"
   ]
})

kitchen = Restaurant.create({
    name: "The Kitchen",
    description:"American, Seafood, Asian Fusion",
    website:"thekitchenjacksonhole.com",
    city:"Jackson",
    state:"WY",
    address:"155 N Glenwood",
    phone:"(307) 734-1633",
    stars:0,
    delivery: false,
    takeout: false,
    price: "$$$",
    hours: [
    "Mon: 5:30 pm - 9:30 pm",
    "Tue: 5:30 pm - 9:30 pm",
    "Wed: 5:30 pm - 9:30 pm",
    "Thu: 5:30 pm - 9:30 pm",
    "Fri: 5:30 pm - 9:30 pm",
    "Sat: 5:30 pm - 9:30 pm",
    "Sun: 5:30 pm - 9:30 pm"
   ]
})

bighole = Restaurant.create({
    name: "Big Hole BBQ",
    description:"Barbeque",
    website:"jacksonholebbq.com/home",
    city:"Jackson",
    state:"WY",
    address:"325 W Pearl St",
    phone:"(307) 264-1996",
    stars:0,
    delivery: true,
    takeout: true,
    price: "$$",
    hours: [
    "Mon: 11:30 am - 10:00 pm ",
    "Tue: 11:30 am - 10:00 pm ",
    "Wed: 11:30 am - 10:00 pm ",
    "Thu: 11:30 am - 10:00 pm ",
    "Fri: 11:30 am - 10:00 pm ",
    "Sat: 11:30 am - 10:00 pm ",
    "Sun: 11:30 am - 10:00 pm "
   ]
})