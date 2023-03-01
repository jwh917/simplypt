# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding ...."


admin1 = Administrator.create(username: "J0516", password_digest: "JWH", name: "Julien",email: "jwh@simplypt.org")
pt1 = PhysicalTherapist.create(username: "K0530", password_digest: "KWH", name: "Ken",email: "kwh@simplypt.org")

puts "✅ Done seeding!"