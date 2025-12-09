# Installation & Setup Guide

## What You Have

A complete, production-ready portfolio website with:

✅ **HTML/CSS/JavaScript Only** - No frameworks, no build tools needed
✅ **JSON Database** - Single `data.json` file for all content
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Professional Images** - Dummy images included (easily replaceable)
✅ **GitHub Pages Ready** - Deploy in minutes

---

## File Structure

```
static-portfolio/
├── index.html                    # Main HTML file (5.7 KB)
├── styles.css                    # All styling (16 KB)
├── script.js                     # JavaScript functionality (13 KB)
├── data.json                     # Content database (8.5 KB)
├── images/                       # Image folder
│   ├── profile.jpg              # Profile photo (93 KB)
│   ├── project-1.jpg            # Project 1 image (140 KB)
│   ├── project-2.jpg            # Project 2 image (113 KB)
│   ├── project-3.jpg            # Project 3 image (159 KB)
│   └── project-4.jpg            # Project 4 image (112 KB)
├── README.md                     # Project description
├── GITHUB_PAGES_GUIDE.md        # GitHub Pages deployment guide
└── INSTALLATION.md              # This file
```

**Total Size:** ~688 KB (including all images)

---

## How It Works

### 1. HTML Structure (`index.html`)

- Semantic HTML5 markup
- Placeholder elements with IDs for JavaScript to populate
- Responsive meta tags for mobile devices
- Optimized for accessibility

### 2. Styling (`styles.css`)

- Modern, professional design
- Responsive grid layouts
- CSS variables for easy customization
- Mobile-first approach
- Smooth transitions and animations

### 3. JavaScript (`script.js`)

- Fetches `data.json` on page load
- Dynamically populates all sections
- Smooth scroll navigation
- Button interactions
- Image lazy loading support

### 4. Content Database (`data.json`)

JSON structure with sections:
```json
{
  "personal": { ... },      // Name, title, contact info
  "skills": [ ... ],        // Skill categories
  "projects": [ ... ],      // Featured projects
  "experience": [ ... ],    // Work experience
  "education": [ ... ],     // Educational background
  "academic": [ ... ],      // Academic projects
  "certifications": [ ... ] // Professional certifications
}
```

---

## Local Testing

### Option 1: Using Python (Easiest)

```bash
cd static-portfolio
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

### Option 2: Using Node.js

```bash
cd static-portfolio
npx http-server
```

### Option 3: Using Live Server (VS Code)

1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

### Option 4: Direct File Opening

Simply open `index.html` in your browser (some features may not work due to CORS restrictions)

---

## Customization Guide

### Change Colors

Edit `styles.css` and find the CSS variables section:

```css
:root {
    --color-primary: #10b981;           /* Main green color */
    --color-primary-dark: #059669;      /* Darker green */
    --color-bg: #f9fafb;                /* Background */
    --color-text-dark: #1f2937;         /* Dark text */
    --color-text-light: #6b7280;        /* Light text */
    /* ... more colors ... */
}
```

Change the hex values to your preferred colors.

### Change Fonts

In `index.html`, find the Google Fonts import:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Replace with your preferred font from [Google Fonts](https://fonts.google.com)

### Change Spacing

In `styles.css`, adjust these variables:

```css
--spacing-xs: 0.5rem;      /* Small spacing */
--spacing-sm: 1rem;        /* Medium spacing */
--spacing-md: 1.5rem;      /* Large spacing */
--spacing-lg: 2rem;        /* Extra large */
```

### Change Border Radius

```css
--border-radius: 8px;      /* Standard corners */
--border-radius-lg: 16px;  /* Large corners */
```

---

## Updating Content

### Edit Personal Information

In `data.json`, update the `personal` section:

```json
"personal": {
    "name": "Your Name",
    "title": "Your Title",
    "description": "Your description",
    "email": "your@email.com",
    "phone": "+1 234 567 8900",
    "location": "Your City, Country",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourprofile",
    "profileImage": "images/profile.jpg"
}
```

### Add/Edit Skills

```json
"skills": [
    {
        "category": "Programming Languages",
        "items": ["Python", "JavaScript", "TypeScript"]
    },
    {
        "category": "Frameworks",
        "items": ["React", "Vue", "Node.js"]
    }
]
```

### Add/Edit Projects

```json
"projects": [
    {
        "title": "Project Name",
        "description": "Brief description",
        "context": "Context of the project",
        "action": "What you did",
        "result": "The outcome",
        "tags": ["Tag1", "Tag2"],
        "image": "images/project-1.jpg"
    }
]
```

### Add/Edit Experience

```json
"experience": [
    {
        "title": "Job Title",
        "company": "Company Name",
        "location": "City, Country",
        "period": "Start Date - End Date",
        "responsibilities": [
            "Responsibility 1",
            "Responsibility 2"
        ],
        "keySkills": "Skill1, Skill2, Skill3"
    }
]
```

### Add/Edit Education

```json
"education": [
    {
        "degree": "Degree Name",
        "institution": "University Name",
        "location": "City, Country",
        "period": "Start Year - End Year",
        "type": "Bachelor's" // or "Master's", "PhD", etc.
    }
]
```

### Add/Edit Certifications

```json
"certifications": [
    {
        "title": "Certification Name",
        "issuer": "Issuing Organization",
        "year": "2024",
        "credentialId": "ID123456",
        "link": "https://certificate-link.com",
        "icon": "📜"
    }
]
```

---

## Replacing Images

### Profile Image

1. Prepare your profile image (recommended: 400x400px, JPG or PNG)
2. Replace `images/profile.jpg` with your image
3. Update `data.json` if you change the filename:
   ```json
   "profileImage": "images/your-profile.jpg"
   ```

### Project Images

1. Prepare project images (recommended: 800x400px, JPG or PNG)
2. Replace `images/project-1.jpg`, `project-2.jpg`, etc.
3. Update `data.json` project entries:
   ```json
   "image": "images/your-project-image.jpg"
   ```

### Image Optimization Tips

- **Profile:** Square images (400x400px) work best
- **Projects:** Landscape images (800x400px or 16:9 ratio)
- **Format:** JPG for photos, PNG for graphics
- **Size:** Keep under 200KB per image for fast loading
- **Tools:** Use [TinyPNG](https://tinypng.com) or [ImageOptim](https://imageoptim.com) to compress

---

## Deploying to GitHub Pages

See `GITHUB_PAGES_GUIDE.md` for detailed instructions.

Quick summary:
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Your site goes live in 1-2 minutes!

---

## Troubleshooting

### Content Not Showing

**Problem:** Data doesn't appear on the website
**Solution:**
- Check browser console (F12 → Console) for errors
- Validate `data.json` at [jsonlint.com](https://jsonlint.com)
- Ensure `data.json` is in the same directory as `index.html`
- Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Images Not Loading

**Problem:** Images appear as broken links
**Solution:**
- Verify `images/` folder exists
- Check image paths in `data.json` are correct
- Ensure image filenames match exactly (case-sensitive)
- Try using absolute paths: `/images/profile.jpg`

### Styling Looks Wrong

**Problem:** Colors or layout are incorrect
**Solution:**
- Clear browser cache
- Check that `styles.css` is in the same directory
- Verify CSS variables are properly defined
- Check for browser compatibility (use latest Chrome/Firefox)

### Smooth Scroll Not Working

**Problem:** Navigation links don't smooth scroll
**Solution:**
- Check browser console for JavaScript errors
- Ensure `script.js` is loaded correctly
- Verify section IDs match in HTML and JavaScript

### JSON Parsing Error

**Problem:** "Error loading data" message appears
**Solution:**
- Validate JSON syntax at [jsonlint.com](https://jsonlint.com)
- Common issues:
  - Missing commas between properties
  - Trailing commas in arrays
  - Unescaped quotes in strings
  - Incorrect nesting

---

## Performance Tips

### Optimize Images

```bash
# Using ImageMagick
convert image.jpg -resize 800x400 -quality 85 optimized.jpg

# Using online tools
# - TinyPNG: https://tinypng.com
# - Squoosh: https://squoosh.app
```

### Minify CSS/JavaScript (Optional)

For production, minify your files:
- CSS: [CSS Minifier](https://cssminifier.com)
- JS: [JS Minifier](https://javascript-minifier.com)

### Lazy Load Images

The website already supports lazy loading. To enable:

```html
<img src="image.jpg" alt="Description" loading="lazy">
```

---

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Next Steps

1. **Customize Content** - Edit `data.json` with your information
2. **Replace Images** - Add your own photos
3. **Test Locally** - Run the website on your computer
4. **Deploy** - Push to GitHub Pages
5. **Share** - Send your portfolio to the world!

---

## Need Help?

- **GitHub Pages Issues:** https://docs.github.com/pages
- **JSON Validation:** https://jsonlint.com
- **Image Compression:** https://tinypng.com
- **Color Picker:** https://htmlcolorcodes.com
- **Font Selection:** https://fonts.google.com

---

**Your portfolio is ready to go! 🚀**
