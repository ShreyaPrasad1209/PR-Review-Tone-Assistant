# Emotion PR Assistant

A browser extension that helps make PR comments more friendly and constructive using AI in real-time.

## Features

- **Real-time suggestions**: Get AI-powered rewrites as you type your PR comments
- **Emotionally intelligent**: Transforms harsh or direct feedback into constructive, friendly suggestions
- **Maintains technical accuracy**: Preserves all technical feedback while improving tone
- **One-click adoption**: Use suggestions with a single click
- **Retry functionality**: Get alternative suggestions if you're not satisfied
- **Seamless integration**: Works directly in GitHub's comment interface

## Setup

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with your OpenRouter API key:
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend (Chrome Extension)

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `frontend` directory
4. The extension will be installed and ready to use

## Environment Variables

- `OPENROUTER_API_KEY`: Your OpenRouter API key (get one at https://openrouter.ai/)

## Usage

1. Navigate to any GitHub PR page
2. Start typing your comment in the comment box
3. After typing 10+ characters, the extension automatically analyzes your text
4. A friendly, constructive suggestion appears below your comment
5. Click "Use Suggestion" to replace your text, or "Retry" for alternatives
6. The extension works seamlessly as you continue writing

### How it works

The extension monitors your typing in real-time and provides suggestions after a 3-second pause. It uses AI to transform direct or potentially harsh feedback into constructive, emotionally intelligent comments while preserving all technical accuracy.

## Development

The project consists of:
- `backend/`: Express.js server that handles API calls to OpenRouter
- `frontend/`: Chrome extension with the UI and content scripts 