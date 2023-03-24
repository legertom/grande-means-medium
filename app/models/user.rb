class User < ApplicationRecord
    has_many :bookmarks
    has_many :followings
    has_many :posts
    has_one :profile
    validates :username, :session_token, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token!
    after_create :create_profile   #profile auto create after user creation
    def create_profile
        self.profile = Profile.new
        save
    end
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end


    def ensure_session_token!
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        self.session_token
    end


    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end



end
