# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create({
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
       "Mon: 8:00 am - 2:00 pm && 5:00 pm - 9:30 pm",
       "Tues: 8:00 am - 2:00 pm && 5:00 pm - 9:30 pm",
       "Wed: 8:00 am - 2:00 pm  && 5:00 pm - 9:30 pm",
       "Thu: 8:00 am - 2:00 pm  && 5:00 pm - 9:30 pm",
       "Fri: 8:00 am - 2:00 pm  && 5:00 pm - 10:00 pm",
       "Sat: 9:00 am - 3:00 pm && 5:00 pm - 10:00 pm",
       "Sun: 9:00 am - 3:00 pm && 5:00 pm - 9:30 pm"
    ]   
})

Restaurant.create({
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

Restaurant.create({
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