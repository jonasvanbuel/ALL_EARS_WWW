class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :coming_soon, :demo ]

  def coming_soon
    render layout: 'coming_soon'
  end

  def demo
    render layout: 'demo'
  end
end
