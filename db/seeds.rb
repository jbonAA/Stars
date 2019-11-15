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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/zazie_idx.jpg")
zazie.photos.attach(io: file, filename: 'zazie_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/zazie1.jpg")
zazie.photos.attach(io: file1, filename: 'zazie1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/zazie2.jpg")
zazie.photos.attach(io: file2, filename: 'zazie2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/zazie3.jpg")
zazie.photos.attach(io: file3, filename: 'zazie3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/zazie4.jpg")
zazie.photos.attach(io: file4, filename: 'zazie4.jpg')




Review.create(
    title: "bingoboi",
    description: "testing show page",
    restaurant_id: 1,
    user_id: 1,
    stars: "5"
)

# in map state to props need to return an empty array if no reviews yet
    


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/fog_idx.jpg")
fog.photos.attach(io: file, filename: 'fog_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/fog1.jpg")
fog.photos.attach(io: file1, filename: 'fog1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/fog2.jpg")
fog.photos.attach(io: file2, filename: 'fog2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/fog3.jpg")
fog.photos.attach(io: file3, filename: 'fog3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/fog4.jpg")
fog.photos.attach(io: file4, filename: 'fog4.jpg')



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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/house_idx.jpg")
house.photos.attach(io: file, filename: 'house_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/house1.jpg")
house.photos.attach(io: file1, filename: 'house1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/house2.jpg")
house.photos.attach(io: file2, filename: 'house2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/house3.jpg")
house.photos.attach(io: file3, filename: 'house3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/house4.jpg")
house.photos.attach(io: file4, filename: 'house4.jpg')

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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/farmhouse_idx.jpg")
farmhouse.photos.attach(io: file, filename: 'farmhouse_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/farmhouse1.jpg")
farmhouse.photos.attach(io: file1, filename: 'farmhouse1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/farmhouse2.jpg")
farmhouse.photos.attach(io: file2, filename: 'farmhouse2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/farmhouse3.jpg")
farmhouse.photos.attach(io: file3, filename: 'farmhouse3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/farmhouse4.jpg")
farmhouse.photos.attach(io: file4, filename: 'farmhouse4.jpg')


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/umma_idx.jpg")
umma.photos.attach(io: file, filename: 'umma_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/umma1.jpg")
umma.photos.attach(io: file1, filename: 'umma1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/umma2.jpg")
umma.photos.attach(io: file2, filename: 'umma2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/umma3.jpg")
umma.photos.attach(io: file3, filename: 'umma3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/umma4.jpg")
umma.photos.attach(io: file4, filename: 'umma4.jpg')


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/tuba_idx.jpg")
tuba.photos.attach(io: file, filename: 'tuba_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/tuba1.jpg")
tuba.photos.attach(io: file1, filename: 'tuba1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/tuba2.jpg")
tuba.photos.attach(io: file2, filename: 'tuba2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/tuba3.jpg")
tuba.photos.attach(io: file3, filename: 'tuba3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/tuba4.jpg")
tuba.photos.attach(io: file4, filename: 'tuba4.jpg')


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/noosh_idx.jpg")
noosh.photos.attach(io: file, filename: 'noosh_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/noosh1.jpg")
noosh.photos.attach(io: file1, filename: 'noosh1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/noosh2.jpg")
noosh.photos.attach(io: file2, filename: 'noosh2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/noosh3.jpg")
noosh.photos.attach(io: file3, filename: 'noosh3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/noosh4.jpg")
noosh.photos.attach(io: file4, filename: 'noosh4.jpg')


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/hog_idx.jpg")
hog.photos.attach(io: file, filename: 'hog_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/hog1.jpg")
hog.photos.attach(io: file1, filename: 'hog1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/hog2.jpg")
hog.photos.attach(io: file2, filename: 'hog2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/hog3.jpg")
hog.photos.attach(io: file3, filename: 'hog3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/hog4.jpg")
hog.photos.attach(io: file4, filename: 'hog4.jpg')


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/tung_idx.jpg")
tung.photos.attach(io: file, filename: 'tung_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/tung1.jpg")
tung.photos.attach(io: file1, filename: 'tung1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/tung2.jpg")
tung.photos.attach(io: file2, filename: 'tung2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/tung3.jpg")
tung.photos.attach(io: file3, filename: 'tung3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/tung4.jpg")
tung.photos.attach(io: file4, filename: 'tung4.jpg')

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
file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bird_idx.jpg")
bird.photos.attach(io: file, filename: 'bird_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bird1.jpg")
bird.photos.attach(io: file1, filename: 'bird1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bird2.jpg")
bird.photos.attach(io: file2, filename: 'bird2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bird3.jpg")
bird.photos.attach(io: file3, filename: 'bird3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bird4.jpg")
bird.photos.attach(io: file4, filename: 'bird4.jpg')

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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/spoon_idx.jpg")
spoon.photos.attach(io: file, filename: 'spoon_idx.jpg')
file1 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/spoon1.jpg")
spoon.photos.attach(io: file1, filename: 'spoon1.jpg')
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/spoon2.jpg")
spoon.photos.attach(io: file2, filename: 'spoon2.jpg')
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/spoon3.jpg")
spoon.photos.attach(io: file3, filename: 'spoon3.jpg')
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/spoon4.jpg")
spoon.photos.attach(io: file4, filename: 'spoon4.jpg')

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

    file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/yardbird_idx.jpg")
    yardbird.photos.attach(io: file, filename: "yardbird_idx.jpg")
    file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/yardbird1.jpg")
    yardbird.photos.attach(io: file2, filename: "yardbird1.jpg")
    file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/yardbird2.jpg")
    yardbird.photos.attach(io: file3, filename: "yardbird2.jpg")
    file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/yardbird3.jpg")
    yardbird.photos.attach(io: file4, filename: "yardbird3.jpg")
    file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/yardbird4.jpg")
    yardbird.photos.attach(io: file5, filename: "yardbird4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/mon_idx.jpg")
    mon.photos.attach(io: file, filename: "mon_idx.jpg")
    file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/mon1.jpg")
    mon.photos.attach(io: file2, filename: "mon1.jpg")
    file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/mon2.jpg")
    mon.photos.attach(io: file3, filename: "mon2.jpg")
    file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/mon3.jpg")
    mon.photos.attach(io: file4, filename: "mon3.jpg")
    file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/mon4.jpg")
    mon.photos.attach(io: file5, filename: "mon4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/earl_idx.jpg")
    earl.photos.attach(io: file, filename: "earl_idx.jpg")
    file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/earl1.jpg")
    earl.photos.attach(io: file2, filename: "earl1.jpg")
    file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/earl2.jpg")
    earl.photos.attach(io: file3, filename: "earl2.jpg")
    file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/earl3.jpg")
    earl.photos.attach(io: file4, filename: "earl3.jpg")
    file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/earl4.jpg")
    earl.photos.attach(io: file5, filename: "earl4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/nacho_idx.jpg")
    nacho.photos.attach(io: file, filename: "nacho_idx.jpg")
    file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/nacho1.jpg")
    nacho.photos.attach(io: file2, filename: "nacho1.jpg")
    file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/nacho2.jpg")
    nacho.photos.attach(io: file3, filename: "nacho2.jpg")
    file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/nacho3.jpg")
    nacho.photos.attach(io: file4, filename: "nacho3.jpg")
    file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/nacho4.jpg")
    nacho.photos.attach(io: file5, filename: "nacho4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/mamas_idx.jpg")
    mamas.photos.attach(io: file, filename: "mamas_idx.jpg")
    file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/mamas1.jpg")
    mamas.photos.attach(io: file2, filename: "mamas1.jpg")
    file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/mamas2.jpg")
    mamas.photos.attach(io: file3, filename: "mamas2.jpg")
    file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/mamas3.jpg")
    mamas.photos.attach(io: file4, filename: "mamas3.jpg")
    file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/mamas4.jpg")
    mamas.photos.attach(io: file5, filename: "mamas4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bacchanal_idx.jpg")
    bacchanal.photos.attach(io: file, filename: "bacchanal_idx.jpg")
    file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bacchanal1.jpg")
    bacchanal.photos.attach(io: file2, filename: "bacchanal1.jpg")
    file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bacchanal2.jpg")
    bacchanal.photos.attach(io: file3, filename: "bacchanal2.jpg")
    file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bacchanal3.jpg")
    bacchanal.photos.attach(io: file4, filename: "bacchanal3.jpg")
    file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bacchanal4.jpg")
    bacchanal.photos.attach(io: file5, filename: "bacchanal4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/neighbors_idx.jpg")
    neighbors.photos.attach(io: file, filename: "neighbors_idx.jpg")
    file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/neighbors1.jpg")
    neighbors.photos.attach(io: file2, filename: "neighbors1.jpg")
    file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/neighbors2.jpg")
    neighbors.photos.attach(io: file3, filename: "neighbors2.jpg")
    file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/neighbors3.jpg")
    neighbors.photos.attach(io: file4, filename: "neighbors3.jpg")
    file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/neighbors4.jpg")
    neighbors.photos.attach(io: file5, filename: "neighbors4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bouchon_idx.jpg")
    bouchon.photos.attach(io: file, filename: "bouchon_idx.jpg")
    file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bouchon1.jpg")
    bouchon.photos.attach(io: file2, filename: "bouchon1.jpg")
    file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bouchon2.jpg")
    bouchon.photos.attach(io: file3, filename: "bouchon2.jpg")
    file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bouchon3.jpg")
    bouchon.photos.attach(io: file4, filename: "bouchon3.jpg")
    file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bouchon4.jpg")
    bouchon.photos.attach(io: file5, filename: "bouchon4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/wicked_idx.jpg")
    wicked.photos.attach(io: file, filename: "wicked_idx.jpg")
    file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/wicked1.jpg")
    wicked.photos.attach(io: file2, filename: "wicked1.jpg")
    file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/wicked2.jpg")
    wicked.photos.attach(io: file3, filename: "wicked2.jpg")
    file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/wicked3.jpg")
    wicked.photos.attach(io: file4, filename: "wicked3.jpg")
    file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/wicked4.jpg")
    wicked.photos.attach(io: file5, filename: "wicked4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/firefly_idx.jpg")
    firefly.photos.attach(io: file, filename: "firefly_idx.jpg")
    file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/firefly1.jpg")
    firefly.photos.attach(io: file2, filename: "firefly1.jpg")
    file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/firefly2.jpg")
    firefly.photos.attach(io: file3, filename: "firefly2.jpg")
    file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/firefly3.jpg")
    firefly.photos.attach(io: file4, filename: "firefly3.jpg")
    file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/firefly4.jpg")
    firefly.photos.attach(io: file5, filename: "firefly4.jpg")

#wyoming



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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/gather/gather_idx.jpg")
gather.photos.attach(io: file, filename: "gather_idx.jpg")
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/gather/gather1.jpg")
gather.photos.attach(io: file2, filename: "gather1.jpg")
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/gather/gather2.jpg")
gather.photos.attach(io: file3, filename: "gather2.jpg")
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/gather/gather3.jpg")
gather.photos.attach(io: file4, filename: "gather3.jpg")
file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/gather/gather4.jpg")
gather.photos.attach(io: file5, filename: "gather4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/gun/gun_idx.jpg")
gun.photos.attach(io: file, filename: "gun_idx.jpg")
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/gun/gun1.jpg")
gun.photos.attach(io: file2, filename: "gun1.jpg")
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/gun/gun2.jpg")
gun.photos.attach(io: file3, filename: "gun2.jpg")
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/gun/gun3.jpg")
gun.photos.attach(io: file4, filename: "gun3.jpg")
file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/gun/gun4.jpg")
gun.photos.attach(io: file5, filename: "gun4.jpg")

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
file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/still/still_idx.jpg")
still.photos.attach(io: file, filename: "still_idx.jpg")
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/still/still1.jpg")
still.photos.attach(io: file2, filename: "still1.jpg")
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/still/still2.jpg")
still.photos.attach(io: file3, filename: "still2.jpg")
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/still/still3.jpg")
still.photos.attach(io: file4, filename: "still3.jpg")
file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/still/still4.jpg")
still.photos.attach(io: file5, filename: "still4.jpg")


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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/glori/glori_idx.jpg")
glori.photos.attach(io: file, filename: "glori_idx.jpg")
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/glori/glori1.jpg")
glori.photos.attach(io: file2, filename: "glori1.jpg")
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/glori/glori2.jpg")
glori.photos.attach(io: file3, filename: "glori2.jpg")
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/glori/glori3.jpg")
glori.photos.attach(io: file4, filename: "glori3.jpg")
file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/glori/glori4.jpg")
glori.photos.attach(io: file5, filename: "glori4.jpg")

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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bin22/bin22_idx.jpg")
bin22.photos.attach(io: file, filename: "bin22_idx.jpg")
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bin22/bin221.jpg")
bin22.photos.attach(io: file2, filename: "bin221.jpg")
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bin22/bin222.jpg")
bin22.photos.attach(io: file3, filename: "bin222.jpg")
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bin22/bin223.jpg")
bin22.photos.attach(io: file4, filename: "bin223.jpg")
file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bin22/bin224.jpg")
bin22.photos.attach(io: file5, filename: "bin224.jpg")

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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/river/river_idx.jpg")
river.photos.attach(io: file, filename: "river_idx.jpg")
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/river/river1.jpg")
river.photos.attach(io: file2, filename: "river1.jpg")
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/river/river2.jpg")
river.photos.attach(io: file3, filename: "river2.jpg")
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/river/river3.jpg")
river.photos.attach(io: file4, filename: "river3.jpg")
file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/river/river4.jpg")
river.photos.attach(io: file5, filename: "river4.jpg")

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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/thebird/thebird_idx.jpg")
thebird.photos.attach(io: file, filename: "thebird_idx.jpg")
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/thebird/thebird1.jpg")
thebird.photos.attach(io: file2, filename: "thebird1.jpg")
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/thebird/thebird2.jpg")
thebird.photos.attach(io: file3, filename: "thebird2.jpg")
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/thebird/thebird3.jpg")
thebird.photos.attach(io: file4, filename: "thebird3.jpg")
file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/thebird/thebird4.jpg")
thebird.photos.attach(io: file5, filename: "thebird4.jpg")

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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/kitchen/kitchen_idx.jpg")
kitchen.photos.attach(io: file, filename: "kitchen_idx.jpg")
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/kitchen/kitchen1.jpg")
kitchen.photos.attach(io: file2, filename: "kitchen1.jpg")
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/kitchen/kitchen2.jpg")
kitchen.photos.attach(io: file3, filename: "kitchen2.jpg")
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/kitchen/kitchen3.jpg")
kitchen.photos.attach(io: file4, filename: "kitchen3.jpg")
file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/kitchen/kitchen4.jpg")
kitchen.photos.attach(io: file5, filename: "kitchen4.jpg")

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

file = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bighole/bighole_idx.jpg")
bighole.photos.attach(io: file, filename: "bighole_idx.jpg")
file2 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bighole/bighole1.jpg")
bighole.photos.attach(io: file2, filename: "bighole1.jpg")
file3 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bighole/bighole2.jpg")
bighole.photos.attach(io: file3, filename: "bighole2.jpg")
file4 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bighole/bighole3.jpg")
bighole.photos.attach(io: file4, filename: "bighole3.jpg")
file5 = open("https://stars-fullstack-dev.s3-us-west-1.amazonaws.com/bighole/bighole4.jpg")
bighole.photos.attach(io: file5, filename: "bighole4.jpg")