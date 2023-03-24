json.extract! @user, :username, :id, :email
json.extract! @user.profile, :photoUrl, :bio, :url