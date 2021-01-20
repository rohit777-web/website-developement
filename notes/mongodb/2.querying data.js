//searching for data in mongo db
use rohitKart
db.items.find({rating:3.5})//will show you the items of rating 3.5 in rohitKar
db.items.find({rating:{gt:3.5}})//will show you the items of rating greater than 3.5 in rohitKart
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})// will show items of rating greater than 3.5 and price greater than 4000. Mention here and is used.
db.items.find({ $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] })//will show items of rating 3.5 or price 114000 in rohitKart,see syntax carefully here $or is used in starting and 
db.items.find({rating: {$gt: 3.5}}, {rating: 1})

