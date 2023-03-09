class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :physical_therapist_id, :description, :muscle, :physical_therapist, :patient
end
