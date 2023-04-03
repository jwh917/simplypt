class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :physical_therapist_id, :physical_therapist_name, :description, :muscle
end
