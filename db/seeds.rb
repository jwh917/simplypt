# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding ...."

# admin1 = Administrator.create(username: "J0917", password_digest: "JWH", name: "Julien", email: "jwh@simplypt.org")

# pt1 = PhysicalTherapist.create(username: "K0530", password_digest: "KWH", name: "Ken", email: "kwh@simplypt.org")
# pt2 = PhysicalTherapist.create(username: "J0926", password_digest: "JACH", name: "Janet", email: "jach@simplypt.org")


# patient1 = Patient.create(username: "AJ", password_digest: "1234", name: "AJ", email: "aj@simplypt.org", dob: "01/12/1993", address: "33 Bernhard st NY 11550", phone: 1234567890, sex: "female", muscle_injury: "abdominals", physical_therapist_id: 2)
# patient2 = Patient.create(username: "BI", password_digest: "1234", name: "Beth", email: "beth@simplypt.org", dob: "02/07/1884", address: "33 Bernhard st NY 11550", phone: 1234567890, sex: "female", muscle_injury: "biceps", physical_therapist_id: 2)
# patient3 = Patient.create(username: "CH", password_digest: "1234", name: "Chad", email: "chad@simplypt.org", dob: "03/10/1999", address: "33 Bernhard st NY 11550", phone: 1234567890, sex: "male", muscle_injury: "calves", physical_therapist_id: 2)
# patient4 = Patient.create(username: "DG", password_digest: "1234", name: "Doug", email: "doug@simplypt.org", dob: "04/02/1893", address: "33 Bernhard st NY 11550", phone: 1234567890, sex: "male", muscle_injury: "chest", physical_therapist_id: 2)
# patient5 = Patient.create(username: "EF", password_digest: "1234", name: "Emma", email: "emma@simplypt.org", dob: "05/30/1989", address: "33 Bernhard st NY 11550", phone: 1234567890, sex: "female", muscle_injury: "forearms", physical_therapist_id: 2)
# patient6 = Patient.create(username: "FA", password_digest: "1234", name: "Frank", email: "frank@simplypt.org", dob: "06/20/1975", address: "3 Main st NY 11550", phone: 1234567890, sex: "male", muscle_injury: "quadriceps", physical_therapist_id: 3)
# patient7 = Patient.create(username: "GB", password_digest: "1234", name: "Greg", email: "greg@simplypt.org", dob: "07/01/1960", address: "3 Main st NY 11550", phone: 1234567890, sex: "male", muscle_injury: "triceps", physical_therapist_id: 3)
# patient8 = Patient.create(username: "HC", password_digest: "1234", name: "Hank", email: "hank@simplypt.org", dob: "08/22/2000", address: "3 Main st NY 11550", phone: 1234567890, sex: "male", muscle_injury: "glutes", physical_therapist_id: 3)
# patient9 = Patient.create(username: "ID", password_digest: "1234", name: "Imani", email: "imani@simplypt.org", dob: "09/04/1997", address: "3 Main st NY 11550", phone: 1234567890, sex: "female", muscle_injury: "hamstrings", physical_therapist_id: 3)
# patient10 = Patient.create(username: "JE", password_digest: "1234", name: "Jack", email: "jack@simplypt.org", dob: "10/19/20002", address: "3 Main st NY 11550", phone: 1234567890, sex: "male", muscle_injury: "neck", physical_therapist_id: 3)


# appointment1 = Appointment.create(patient_id: 1, physical_therapist_id: 2, administrator_id: 1, time: 9)
# appointment2 = Appointment.create(patient_id: 2, physical_therapist_id: 3, administrator_id: 1, time: 9)
# appointment3 = Appointment.create(patient_id: 3, physical_therapist_id: 2, administrator_id: 1, time: 10)
# appointment4 = Appointment.create(patient_id: 4, physical_therapist_id: 3, administrator_id: 1, time: 10)
# appointment5 = Appointment.create(patient_id: 5, physical_therapist_id: 2, administrator_id: 1, time: 11)
# appointment6 = Appointment.create(patient_id: 6, physical_therapist_id: 3, administrator_id: 1, time: 11)
# appointment7 = Appointment.create(patient_id: 7, physical_therapist_id: 2, administrator_id: 1, time: 1)
# appointment8 = Appointment.create(patient_id: 8, physical_therapist_id: 3, administrator_id: 1, time: 1)
# appointment9 = Appointment.create(patient_id: 9, physical_therapist_id: 2, administrator_id: 1, time: 2)
# appointment10 = Appointment.create(patient_id: 10, physical_therapist_id: 3, administrator_id: 1, time: 2)


# # might add muscle to model and comment out after implement of exercise api
# exercise1 = Exercise.create(patient_id: 1, physical_therapist_id: 2, description: "Get into a prone position on the floor")
# exercise2 = Exercise.create(patient_id: 2, physical_therapist_id: 3, description: "Seat yourself on an incline bench")
# exercise3 = Exercise.create(patient_id: 3, physical_therapist_id: 2, description: "Place a block or weight plate")
# exercise4 = Exercise.create(patient_id: 4, physical_therapist_id: 3, description: "Lie down on a flat bench")
# exercise5 = Exercise.create(patient_id: 5, physical_therapist_id: 2, description: "Start out by placing a barbell ")

puts "✅ Done seeding!"