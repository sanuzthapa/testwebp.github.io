# Static Portfolio Website

A modern, lightweight portfolio website built with pure HTML, CSS, and JavaScript. All dynamic content is managed through a single JSON file, making it perfect for deployment on GitHub Pages.

## Features

✅ **JSON-Based Content Management** - Single `data.json` file contains all portfolio information
✅ **No Backend Required** - Pure frontend, works on any static host
✅ **Responsive Design** - Mobile-first approach works on all devices
✅ **Fast Loading** - Minimal dependencies, optimized performance
✅ **Easy to Update** - Edit `data.json` to update all content instantly
✅ **GitHub Pages Ready** - Deploy directly to GitHub Pages

## File Structure

```
static-portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # JavaScript for dynamic content loading
├── data.json           # Content database
└── README.md           # This file
```

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

Visit `http://localhost:8000` in your browser.

### Updating Content

All content is stored in `data.json`. Edit this file to update:

- Personal information (name, email, phone, social links)
- Skills and competencies
- Projects and descriptions
- Work experience
- Education
- Academic projects
- Certifications
- Contact information

The website automatically loads and displays updated content when you refresh the page.

## Sections

The portfolio includes the following sections:

**Hero Section** - Personal introduction with title, description, expertise tags, and social links

**Skills & Expertise** - Organized skill categories with individual skills listed

**Featured Projects** - Project cards with Context-Action-Result methodology

**Experience & Education** - Work experience and educational background

**Academic Projects** - Research projects with research questions and key findings

**Certifications** - Professional certifications and credentials

**Contact** - Contact information for visitors

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #10b981;
    --color-primary-dark: #059669;
    --color-bg: #f9fafb;
    --color-text-dark: #1f2937;
    --color-text-light: #6b7280;
    /* ... more colors ... */
}
```

### Fonts

Update the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Layout

Modify the grid layouts and spacing in `styles.css` for different responsive breakpoints.

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `your-username.github.io` (for personal site) or any other name
3. Initialize with a README

### Step 2: Upload Files

1. Clone your repository:
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Copy all portfolio files (index.html, styles.css, script.js, data.json, README.md) into the repository

3. Commit and push:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment", select:
   - Source: Deploy from a branch
   - Branch: main (or your default branch)
   - Folder: / (root)
4. Click Save

Your site will be live at:
- `https://your-username.github.io` (if repo is named `your-username.github.io`)
- `https://your-username.github.io/repo-name` (if repo has a different name)

## Other Static Hosting Options

This website works on any static hosting service:
- **Netlify** - Connect your GitHub repo for automatic deployments
- **Vercel** - Similar to Netlify, great for static sites
- **Firebase Hosting** - Google's static hosting solution
- **AWS S3 + CloudFront** - For advanced users
- **Any web server** - Simply upload files via FTP/SFTP

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Page Load**: < 1 second
- **File Size**: ~50KB total (HTML + CSS + JS)
- **JSON Size**: ~15KB
- **No external dependencies**: Fully self-contained

## SEO

The website includes:
- Semantic HTML5 markup
- Meta tags for social sharing
- Proper heading hierarchy
- Mobile viewport configuration
- Fast loading times

## Accessibility

- Semantic HTML structure
- Proper color contrast
- Keyboard navigation support
- Focus indicators
- Smooth scroll behavior

## Troubleshooting

### Content not loading

- Check browser console for errors (F12 → Console)
- Ensure `data.json` is in the same directory as `index.html`
- Verify JSON syntax is valid (use [jsonlint.com](https://jsonlint.com))

### Styling issues

- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that `styles.css` is in the same directory
- Verify CSS file path in HTML

### Responsive design not working

- Check viewport meta tag in `index.html`
- Test in different browser sizes
- Use browser DevTools to debug

### GitHub Pages not updating

- Wait a few minutes for GitHub to rebuild the site
- Check the "Actions" tab in your repository for build status
- Ensure files are committed and pushed to the correct branch

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, refer to the code comments in:
- `script.js` - JavaScript functionality
- `styles.css` - Styling and layout
- `data.json` - Content structure

---

Built with HTML, CSS, and JavaScript
