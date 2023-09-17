#!/bin/bash

# Define text colors & fonts related stuff
GREEN='\033[0;32m'
NC='\033[0m' # No Color
BOLD='\033[1m'

# Welcome message
echo -e "${BOLD}Welcome to boilerplate${NC}"

# Ask for the name of the project
echo -e "${BOLD}What is the name of your project?${NC}"

# Accept user input
read projectname

# Create the project folder
mkdir ./$projectname
echo -e "${GREEN}Created ${projectname}.${NC}"

# CD into the project folder
echo -e "${GREEN}Opening ${projectname}...${NC}"
cd ./$projectname

# Clone the the Boilerplate repo
if command -v git &> /dev/null; then
    git clone https://github.com/elisvcodes/boilerplate.git
    cd ./boilerplate
    mv next-client ../
    mv server ../
    cd ../
    rm -rf boilerplate
    rm -rf .git
else
    echo "Git is not installed."
fi


# Check if the 'server' directory exists
if [ -d "server" ]; then
  # Create the 'uploads' directory inside 'server'
  mkdir -p server/uploads
else
  echo "The 'server' directory does not exist."
fi