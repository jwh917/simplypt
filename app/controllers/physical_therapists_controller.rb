class PhysicalTherapistsController < ApplicationController

  skip_before_action :authorize, only: [:index]


    def index
      physical_therapists = PhysicalTherapist.all
      render json: physical_therapists
    end
  
end
