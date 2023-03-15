# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding ...."

# Example Data
# Fake Pics.


admin1 = Administrator.create(username: "J0917", password_digest: "JWH", name: "Julien", email: "jwh@simplypt.org", image: "https://d14tal8bchn59o.cloudfront.net/9yQ0XIBywounNFd12imoDu3BP4OYg1ho9qoMjMpAFws/w:960/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/40969/photos/2156750/AdobeStock_200432045_original.jpeg")

pt1 = PhysicalTherapist.create(username: "K0530", password_digest: "KWH", name: "Ken", email: "kwh@simplypt.org", image: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-light-skin-tone.png")
pt2 = PhysicalTherapist.create(username: "J0926", password_digest: "JACH", name: "Janet", email: "jach@simplypt.org", image: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/woman-medium-skin-tone.png")

pt3 = PhysicalTherapist.create(username: "K1005", password_digest: "KAT", name: "Kathy", email: "kathy@simplypt.org", image: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/woman-light-skin-tone.png")
pt4 = PhysicalTherapist.create(username: "M0421", password_digest: "MAR", name: "Mark", email: "mark@simplypt.org", image: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-dark-skin-tone.png")


# patient1 = Patient.create(username: "AJ", password_digest: "1234", name: "AJ", email: "aj@simplypt.org", image: "https://d14tal8bchn59o.cloudfront.net/9yQ0XIBywounNFd12imoDu3BP4OYg1ho9qoMjMpAFws/w:960/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/40969/photos/2156750/AdobeStock_200432045_original3.jpeg")

# patient_profile1 = PatientProfile.create(patient_id: 4, dob: "01/23/2004", address: "AJ lane NY 11550", phone: "123456789", sex: "male", muscle_injury: "chest")

# appointment1 = Appointment.create(patient_id: 4, physical_therapist_id: 2, administrator_id: 1, time: 9, date: "03/09/2023")

# exercise1 = Exercise.create(patient_id: 4, physical_therapist_id: 2, description: "Start with bench", muscle: "chest")


puts "✅ Done seeding!"