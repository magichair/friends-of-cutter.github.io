# Use a base image with Ruby, as Jekyll is built on Ruby
FROM ruby:3.2.2-slim-bullseye

# Set the working directory inside the container
WORKDIR /srv/jekyll

# Install Jekyll and Bundler gems
RUN gem install jekyll bundler

# Copy your Jekyll site files into the container
# The '.' refers to the current directory where the Dockerfile is located
COPY . /srv/jekyll

# Install Jekyll dependencies specified in your Gemfile
RUN bundle install

# Expose the port Jekyll serves on (default is 4000)
EXPOSE 4000

# Command to run Jekyll server when the container starts
# --host 0.0.0.0 allows access from outside the container
# --incremental and --force_polling are often useful for development
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--incremental", "--force_polling"]
