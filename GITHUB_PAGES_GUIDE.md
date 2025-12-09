# GitHub Pages Deployment Guide

## Quick Start - Deploy in 5 Minutes

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top-right corner → **New repository**
3. Name your repository:
   - **Option A (Personal Site):** `your-username.github.io`
   - **Option B (Project Site):** Any name (e.g., `portfolio`)
4. Make it **Public** (required for GitHub Pages)
5. Click **Create repository**

### Step 2: Upload Your Portfolio Files

You have two options:

#### Option A: Using Git (Recommended)

```bash
# Clone your repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Copy all portfolio files here
# (index.html, styles.css, script.js, data.json, images/ folder)

# Commit and push
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

#### Option B: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click **Add file** → **Upload files**
3. Drag and drop all files (index.html, styles.css, script.js, data.json)
4. Create a folder called `images` and upload all image files
5. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll down to **Pages** section
3. Under **Build and deployment**:
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main` (or your default branch)
   - **Folder:** Select `/ (root)`
4. Click **Save**

### Step 4: Your Site is Live! 🎉

Your portfolio will be available at:

- **If repo is named `your-username.github.io`:**
  ```
  https://your-username.github.io
  ```

- **If repo has a different name:**
  ```
  https://your-username.github.io/repo-name
  ```

GitHub will show you the URL in the Pages section. It may take 1-2 minutes for the site to go live.

---

## Updating Your Portfolio

### Editing Content

To update your portfolio content:

1. Edit the `data.json` file in your repository
2. Commit and push the changes:
   ```bash
   git add data.json
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. Refresh your portfolio website - changes appear instantly!

### Replacing Images

To replace the dummy images with your own:

1. Prepare your images:
   - Profile image: `images/profile.jpg` (recommended: 400x400px)
   - Project images: `images/project-1.jpg`, etc. (recommended: 800x400px)

2. Update the image files in the `images/` folder

3. Update the `data.json` file if you change image filenames

4. Commit and push:
   ```bash
   git add images/
   git add data.json
   git commit -m "Update portfolio images"
   git push origin main
   ```

---

## Using a Custom Domain

### Option 1: Buy Domain on GitHub

1. Go to repository **Settings** → **Pages**
2. Click **Add a domain**
3. Enter your domain and follow the purchase flow
4. GitHub handles DNS configuration automatically

### Option 2: Use Existing Domain

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Update DNS settings to point to GitHub:
   - Add these A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add CNAME record: `your-username.github.io`

3. Go to repository **Settings** → **Pages**
4. Enter your custom domain
5. Check **Enforce HTTPS**

---

## Troubleshooting

### Site Not Showing

- **Wait 1-2 minutes** - GitHub needs time to deploy
- Check the **Actions** tab in your repository for build status
- Ensure all files are committed and pushed
- Verify the repository is **Public**

### Images Not Loading

- Check that the `images/` folder exists
- Verify image paths in `data.json` are correct:
  ```json
  "profileImage": "images/profile.jpg"
  ```
- Ensure image filenames match exactly (case-sensitive)

### Content Not Updating

- Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Wait a few minutes for GitHub to rebuild

### JSON Errors

- Validate your JSON at [jsonlint.com](https://jsonlint.com)
- Common issues:
  - Missing commas between properties
  - Trailing commas in arrays
  - Unescaped quotes in strings

---

## File Structure

Your repository should look like this:

```
your-repo/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── data.json           # Content database
├── images/             # Image folder
│   ├── profile.jpg
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── project-4.jpg
├── README.md           # Project description
└── GITHUB_PAGES_GUIDE.md  # This file
```

---

## Advanced: Using GitHub Actions

For automatic deployments and optimizations, you can set up GitHub Actions:

1. Create `.github/workflows/deploy.yml` in your repository
2. Add this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        run: echo "Deploying portfolio..."
```

---

## Other Hosting Options

If you prefer not to use GitHub Pages:

| Platform | Pros | Cons |
|----------|------|------|
| **Netlify** | Easy setup, free SSL, continuous deployment | Requires account |
| **Vercel** | Fast, optimized for static sites | Overkill for simple portfolio |
| **Firebase** | Google-backed, reliable | More complex setup |
| **AWS S3** | Scalable, cheap | Requires AWS knowledge |
| **Traditional Hosting** | Full control, cheap | Manual uploads |

---

## Support & Resources

- **GitHub Pages Docs:** https://pages.github.com
- **GitHub Help:** https://docs.github.com/pages
- **Markdown Guide:** https://www.markdownguide.org
- **JSON Validator:** https://jsonlint.com

---

**Your portfolio is now ready for the world to see! 🚀**
