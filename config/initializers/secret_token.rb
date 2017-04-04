

 require File.join(Rails.root,'lib','openshift_secret_generator.rb')

RailsApp::Application.config.secret_token = initialize_secret(
 :token,
 '335a4e365ef2daeea969640d74e18f0e3cd9fae1abd8f4125691a880774ea6d456a29c0831aa6921bf86a710fe555e916f0673f5657619ec9df22e0409bec345'
)
