class User < ApplicationRecord

  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  
  def self.find_by_credential(username, password)
    user = User.find_by_username(username)
    user if user&.valid_password?(password)
  end

  def self.find_by_token(token)
    session = Session.find_by_token(token)
    if session
      session.save
      session.user
    end
  end

  def valid_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end
