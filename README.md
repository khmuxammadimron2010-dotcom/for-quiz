# Quiz Master 🎯

A modern, interactive web-based quiz application for taking multiple-choice tests.

## Features

- 📚 Multiple quiz categories (General Knowledge, Science, History, Geography)
- 🎨 Beautiful and responsive UI
- ✅ Real-time score tracking
- 📊 Progress indicators
- 📋 Detailed results with answer review
- 💫 Smooth animations and transitions
- 📱 Mobile-friendly design

## How to Use

1. Open `index.html` in your web browser
2. Select a quiz category from the main menu
3. Answer each multiple-choice question
4. Click "Next Question" to proceed
5. After completing all questions, view your results
6. Take another quiz or review your answers

## File Structure

- `index.html` - Main HTML file with the quiz interface
- `styles.css` - Styling and responsive design
- `script.js` - Quiz logic and functionality
- `README.md` - This file

## Quiz Categories

### General Knowledge
Test your general knowledge with questions about capitals, geography, and famous landmarks.

### Science
Challenge yourself with science questions covering chemistry, physics, and biology.

### History
Explore historical events and figures from around the world.

### Geography
Answer geography questions about countries, capitals, and natural features.

## Features Overview

### Quiz Selection
- Choose from 4 different quiz categories
- Each quiz has 5 questions

### Quiz Interface
- Clear question display
- Multiple choice options with radio buttons
- Progress bar showing quiz completion
- Score tracker
- Question counter

### Results Screen
- Final score display with visual scoring circle
- Performance message based on score
- Detailed review of all answers
- Option to retake another quiz or return to menu

## Customization

### Adding New Quizzes

Edit `script.js` and add new quiz objects to the `quizzes` array:

```javascript
{
    title: "Your Quiz Title",
    questions: [
        {
            question: "Question text?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correct: 0  // Index of correct answer (0-3)
        },
        // Add more questions...
    ]
}
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --success-color: #10b981;
    --danger-color: #ef4444;
}
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Free to use and modify for educational purposes.

## Author

Quiz Master - 2025
