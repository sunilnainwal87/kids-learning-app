#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Banner
echo -e "${PURPLE}"
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║         🎓 KIDS LEARNING APP - DEV SERVER 🎓            ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if port is in use
port_in_use() {
    lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1
}

echo -e "${BLUE}📋 Running pre-flight checks...${NC}\n"

# Check 1: Node.js installation
echo -n "✓ Checking Node.js... "
if command_exists node; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}Found $NODE_VERSION${NC}"
else
    echo -e "${RED}NOT FOUND!${NC}"
    echo -e "${YELLOW}Please install Node.js from https://nodejs.org/${NC}"
    exit 1
fi

# Check 2: npm installation
echo -n "✓ Checking npm... "
if command_exists npm; then
    NPM_VERSION=$(npm --version)
    echo -e "${GREEN}Found v$NPM_VERSION${NC}"
else
    echo -e "${RED}NOT FOUND!${NC}"
    echo -e "${YELLOW}Please install Node.js (includes npm) from https://nodejs.org/${NC}"
    exit 1
fi

# Check 3: node_modules
echo -n "✓ Checking dependencies... "
if [ -d "node_modules" ]; then
    echo -e "${GREEN}Installed${NC}"
else
    echo -e "${YELLOW}NOT FOUND${NC}"
    echo -e "${BLUE}Installing dependencies... This may take a few minutes...${NC}"
    npm install
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Dependencies installed successfully!${NC}"
    else
        echo -e "${RED}✗ Failed to install dependencies${NC}"
        exit 1
    fi
fi

# Check 4: Port availability
echo -n "✓ Checking port 3000... "
if port_in_use; then
    echo -e "${YELLOW}IN USE${NC}"
    echo -e "${YELLOW}⚠️  Warning: Port 3000 is already in use!${NC}"
    echo -e "${YELLOW}   The server might already be running, or another app is using this port.${NC}"
    echo ""
    read -p "Do you want to kill the process and continue? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${BLUE}Stopping existing process...${NC}"
        lsof -ti:3000 | xargs kill -9 2>/dev/null
        echo -e "${GREEN}✓ Port 3000 is now available${NC}"
    else
        echo -e "${YELLOW}Exiting... Please stop the other process manually or use a different port${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}Available${NC}"
fi

echo ""
echo -e "${GREEN}✓ All checks passed!${NC}"
echo ""
echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Starting development server...${NC}"
echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}📌 Your browser will open automatically once the server is ready.${NC}"
echo -e "   ${GREEN}Keep this terminal open${NC} while using the app."
echo -e "   To stop the server: Press ${RED}Ctrl+C${NC}"
echo ""
echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Start the dev server in the background so we can watch for the ready message
npm run dev &
SERVER_PID=$!

# Wait until the server is ready, then open the browser automatically
echo -e "${BLUE}⏳ Waiting for server to be ready...${NC}"
while ! curl -s http://localhost:3000 > /dev/null 2>&1; do
    sleep 1
done

echo -e "${GREEN}✅ Server is ready!${NC}"
echo -e "${BLUE}🌐 Opening http://localhost:3000 in your browser...${NC}"

# Open the browser (works on Mac, Linux with desktop, and WSL)
if command_exists xdg-open; then
    xdg-open "http://localhost:3000" 2>/dev/null &
elif command_exists open; then
    open "http://localhost:3000" 2>/dev/null &
else
    echo -e "${YELLOW}👉 Please open your browser and go to: ${BLUE}http://localhost:3000${NC}"
fi

# Wait for the server process to finish (keeps terminal open)
wait $SERVER_PID
