class RecommendedEquipmentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def create
    recommended_equipment = RecommendedEquipment.create!(rec_eq_params)
    render json: exercise, status: :created
  end

  private
  
  def rec_eq_params
    params.permit(:patient_id, :physical_therapist_id, :product_name, :product_url, :product_description)
  end

  def render_not_found_response
    render json: { error: "Recommended equipment not found" }, status: :not_found
  end

end