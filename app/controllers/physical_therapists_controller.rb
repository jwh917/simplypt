class PhysicalTherapistsController < ApplicationController

    # R
    # login/logout

    def index
      physical_therapists = PhysicalTherapist.all
      render json: physical_therapists
    end
  
    def show
      physical_therapist = find_pt
      render json: physical_therapist
    end
  
    private
  
    def find_pt
      PhysicalTherapist.find(params[:id])
    end

      # params


end
