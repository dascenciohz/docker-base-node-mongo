db.createUser({
  user: "myapp",
  pwd: "myappPass123",
  roles: [ { role: "readWrite", db: "myapp" } ]
})

db.users.insert({
  name: "myapp"
})