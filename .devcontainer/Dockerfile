# Use the official jekyll/jekyll image as the base
FROM jekyll/jekyll:pages

# Set the working directory
WORKDIR /workspace

# Install theme dependencies
COPY Gemfile .
COPY Gemfile.lock .
RUN bundle install

# Optional: Install GitHub CLI and Git LFS for better GitHub integration in codespaces
USER root
RUN apt-get update && apt-get install -y git-lfs github-cli && apt-get clean
USER jekyll

# Expose the Jekyll port
EXPOSE 4000
