# Teachers' Day Flip Card 🎓🌷

An interactive and customizable **Teachers' Day digital greeting card** built with HTML, CSS, and JavaScript.

The project uses a 3D flip-card effect and allows the sender to personalize the greeting, add photos, add an audio greeting, change the font, and change the card accent color.

## Project Files

- `index.html` — card structure, controls, and customization form
- `style.css` — complete visual design, responsive layout, flip animation, and mobile styling
- `script.js` — photo slideshow, audio upload, card flipping, live text customization, color/font controls, and reset function
- `README.md` — project documentation

## Features

### 💌 Flip Card
Click **Flip Card** or the arrow buttons to rotate between the front and back of the card using a 3D animation.

### 📷 Add Photos
The user can select multiple image files from their device. Photos are displayed on the back of the card and can be viewed with the previous/next buttons.

### 🎵 Add Audio
The user can select an audio file from their device. A built-in audio player appears so the greeting can include a recorded voice message or music.

### ✏️ Custom Message
The following fields can be edited without changing the source code:

- Teacher/recipient
- Sender name
- Signature
- Full message

### 🎨 Customization
The card supports several accent colors and three font styles:

- Modern — DM Sans
- Elegant — Playfair Display
- Handwritten — Pacifico

### 📱 Responsive
The design adapts to desktop, tablet, and mobile screens.

## How to Use

1. Open `index.html` in a modern browser.
2. Click **Add Photo** and select one or more images.
3. Click **Add Audio** and select an audio recording.
4. Use **Customize** to edit the teacher's name, your name, signature, and message.
5. Select a color and font.
6. Click **Flip Card** to preview both sides.
7. The card is ready to present or share.

## Important Note About Photos and Audio

Photos and audio are loaded locally in the browser using JavaScript. They are not automatically uploaded to GitHub or any external server.

This means the card can safely be customized on a device without exposing the selected media to a server.

If you want a GitHub Pages version that permanently includes specific photos/audio, those media files must also be added to the repository and referenced by the webpage.

## GitHub Upload

Create a public repository, for example:

`teachers-day-flip-card`

Upload these four files:

```text
index.html
style.css
script.js
README.md
```

Then commit the files.

## GitHub Pages

To publish the card as a website:

1. Open the repository.
2. Go to **Settings**.
3. Select **Pages**.
4. Choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will generate a public webpage URL.

The repository link can then be submitted for the project requirement.

## Technologies

- HTML5
- CSS3
- JavaScript
- CSS 3D transforms
- FileReader API
- HTML5 Audio
- Responsive Web Design

## Teachers' Day Message

The default message thanks teachers for their patience, guidance, kindness, and support and can be completely replaced with a personalized greeting.

**Happy Teachers' Day! 🌷**
