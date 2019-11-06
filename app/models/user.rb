class User < ApplicationRecord

    attr_reader :password

    validates :first_name, :last_name, :email, :zip, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :email, uniqueness: true

    has_many :reviews
    
    before_validation :ensure_session_token
    
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end


            
end
