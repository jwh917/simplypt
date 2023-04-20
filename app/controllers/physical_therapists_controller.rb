class PhysicalTherapistsController < ApplicationController

    def index
      physical_therapists = PhysicalTherapist.all
      render json: physical_therapists
    end
  
end
