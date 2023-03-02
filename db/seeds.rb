# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding ...."

# fake pics

admin1 = Administrator.create(username: "J0917", password_digest: "JWH", name: "Julien", email: "jwh@simplypt.org", image: "https://d14tal8bchn59o.cloudfront.net/9yQ0XIBywounNFd12imoDu3BP4OYg1ho9qoMjMpAFws/w:960/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/40969/photos/2156750/AdobeStock_200432045_original.jpeg")

pt1 = PhysicalTherapist.create(username: "K0530", password_digest: "KWH", name: "Ken", email: "kwh@simplypt.org", image: "https://d14tal8bchn59o.cloudfront.net/9yQ0XIBywounNFd12imoDu3BP4OYg1ho9qoMjMpAFws/w:960/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/40969/photos/2156750/AdobeStock_200432045_original1.jpeg")
pt2 = PhysicalTherapist.create(username: "J0926", password_digest: "JACH", name: "Janet", email: "jach@simplypt.org", image: "https://d14tal8bchn59o.cloudfront.net/9yQ0XIBywounNFd12imoDu3BP4OYg1ho9qoMjMpAFws/w:960/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/40969/photos/2156750/AdobeStock_200432045_original2.jpeg")


puts "✅ Done seeding!"