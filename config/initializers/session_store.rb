# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_traderscar_session',
  :secret      => '3f0ca3b7742f62066ea1bd22b94aca681abed1b5cddf1696785e5cb20a16bbbf7fc4d7c5b05688d14b23a1856793f8a220f6d1452000b66ef0380469e24f7512'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
