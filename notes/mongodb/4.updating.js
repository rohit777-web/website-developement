use rohitKart
show collections
dbitems.find()
db.items.updateOne({ name: "Realme 80s"}, {$set :{price: 2,rating:1}})
db.items.updateMany({ name: "Samsung 30s"}, {$set :{price: 0,rating:-2}})

//CRUD: crud refers to create,read,update,and delete