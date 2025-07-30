# PR Review Tone Assistant

A browser extension that transforms harsh PR comments into constructive feedback in seconds, helping developers build better team culture and reduce review conflicts.

## 🎯 **The Problem**

Ever sent a PR comment and immediately regretted the tone? Tired of spending time rewording feedback? Want to give better feedback but not sure how?

**PR Review Tone Assistant** solves these common pain points:

- **Harsh comments demotivate teammates** - Transform "This code is terrible, fix it" into constructive guidance
- **Time wasted rewording feedback** - Stop spending minutes trying to phrase comments diplomatically  
- **Team conflicts from poor tone** - Reduce PR review friction and improve collaboration
- **Inconsistent feedback quality** - Give professional, constructive feedback every time
- **Developer burnout from harsh reviews** - Foster a positive code review culture

## 💡 **The Solution**

Imagine you're reviewing a PR and want to say "This code is terrible, fix it." Instead of spending time rewording it, just type your honest feedback and PR Review Tone Assistant instantly suggests:

*"I see some areas that could be improved. Here are some suggestions to make this code more robust..."*

**One click and you've transformed harsh feedback into constructive guidance that actually helps your teammate improve.**

## 🚀 **Features**

- **Real-time suggestions**: Get AI-powered rewrites as you type your PR comments
- **Emotionally intelligent**: Transforms harsh or direct feedback into constructive, friendly suggestions
- **Maintains technical accuracy**: Preserves all technical feedback while improving tone
- **One-click adoption**: Use suggestions with a single click
- **Retry functionality**: Get alternative suggestions if you're not satisfied
- **Seamless integration**: Works directly in GitHub's comment interface

## 🎯 **Perfect For**

### **Individual Developers**
- Stop accidentally sounding harsh in PR reviews
- Make your feedback actually helpful, not demotivating
- Save 5 minutes per PR review
- Look more senior with professional feedback

### **Team Leads**
- Improve your team's code review culture
- Reduce conflicts and improve collaboration
- Set a positive example for your team
- Foster better learning environments

### **Companies**
- Reduce developer turnover from harsh feedback
- Improve code review quality and team morale
- Foster a more inclusive development culture
- Build stronger engineering teams

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