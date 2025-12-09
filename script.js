// Load data from JSON and populate the website
document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            populateHero(data.personal);
            populateSkills(data.skills);
            populateProjects(data.projects);
            populateExperience(data.experience);
            populateEducation(data.education);
            populateAcademic(data.academic);
            populateCertifications(data.certifications);
            populateContact(data.personal);
        })
        .catch(error => {
            console.error('Error loading data:', error);
            alert('Error loading portfolio data. Please ensure data.json is in the same directory.');
        });

    // Smooth scroll for navigation links
    setupSmoothScroll();
    
    // Setup button interactions
    setupButtonInteractions();
});

// ============================================
// POPULATE HERO SECTION
// ============================================
function populateHero(personal) {
    // Set hero content
    document.getElementById('heroName').textContent = personal.name;
    document.getElementById('heroTitle').textContent = personal.title;
    document.getElementById('heroDescription').textContent = personal.description;

    // Populate expertise tags
    const expertiseTags = document.getElementById('expertiseTags');
    personal.expertise.forEach(exp => {
        const tag = document.createElement('span');
        tag.className = 'expertise-tag';
        tag.textContent = exp;
        expertiseTags.appendChild(tag);
    });

    // Setup social links
    document.getElementById('linkedinLink').href = personal.linkedin;
    document.getElementById('emailLink').href = `mailto:${personal.email}`;
    document.getElementById('githubLink').href = personal.github;

    // Load profile image if available
    if (personal.profileImage) {
        const img = document.getElementById('profileImage');
        img.src = personal.profileImage;
        img.alt = personal.name;
    }
}

// ============================================
// POPULATE SKILLS SECTION
// ============================================
function populateSkills(skills) {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';

    skills.forEach(skillGroup => {
        const card = document.createElement('div');
        card.className = 'skill-card';

        const title = document.createElement('h3');
        title.textContent = skillGroup.category;

        const list = document.createElement('ul');
        list.className = 'skill-list';

        skillGroup.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });

        card.appendChild(title);
        card.appendChild(list);
        skillsGrid.appendChild(card);
    });
}

// ============================================
// POPULATE PROJECTS SECTION
// ============================================
function populateProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Add project image if available
        if (project.image) {
            const img = document.createElement('img');
            img.src = project.image;
            img.alt = project.title;
            img.className = 'project-image';
            card.appendChild(img);
        }

        const title = document.createElement('h3');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = project.description;

        const context = document.createElement('div');
        context.className = 'project-context';
        context.innerHTML = `
            <div class="project-context-item">
                <span class="project-context-label"><strong>Context:</strong></span>
                <span class="project-context-value">${project.context}</span>
            </div>
            <div class="project-context-item">
                <span class="project-context-label"><strong>Action:</strong></span>
                <span class="project-context-value">${project.action}</span>
            </div>
            <div class="project-context-item">
                <span class="project-context-label"><strong>Result:</strong></span>
                <span class="project-context-value">${project.result}</span>
            </div>
        `;

        const tags = document.createElement('div');
        tags.className = 'project-tags';
        project.tags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = 'project-tag';
            tagEl.textContent = tag;
            tags.appendChild(tagEl);
        });

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(context);
        card.appendChild(tags);
        projectsGrid.appendChild(card);
    });
}

// ============================================
// POPULATE EXPERIENCE SECTION
// ============================================
function populateExperience(experience) {
    const experienceList = document.getElementById('experienceList');
    experienceList.innerHTML = '';

    experience.forEach(job => {
        const item = document.createElement('div');
        item.className = 'experience-item';

        const title = document.createElement('h4');
        title.textContent = job.title;

        const meta = document.createElement('p');
        meta.className = 'experience-meta';
        meta.textContent = `${job.company} • ${job.location} • ${job.period}`;

        const responsibilities = document.createElement('ul');
        responsibilities.className = 'responsibilities-list';
        job.responsibilities.forEach(resp => {
            const li = document.createElement('li');
            li.textContent = resp;
            responsibilities.appendChild(li);
        });

        const keySkills = document.createElement('p');
        keySkills.className = 'key-skills';
        keySkills.innerHTML = `<strong>Key Skills:</strong> ${job.keySkills}`;

        item.appendChild(title);
        item.appendChild(meta);
        item.appendChild(responsibilities);
        item.appendChild(keySkills);
        experienceList.appendChild(item);
    });
}

// ============================================
// POPULATE EDUCATION SECTION
// ============================================
function populateEducation(education) {
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = '';

    education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'education-item';

        const title = document.createElement('h4');
        title.textContent = edu.degree;

        const meta = document.createElement('p');
        meta.className = 'education-meta';
        meta.textContent = `${edu.institution} • ${edu.location} • ${edu.period}`;

        item.appendChild(title);
        item.appendChild(meta);
        educationList.appendChild(item);
    });
}

// ============================================
// POPULATE ACADEMIC SECTION
// ============================================
function populateAcademic(academic) {
    const academicGrid = document.getElementById('academicGrid');
    academicGrid.innerHTML = '';

    academic.forEach(project => {
        const card = document.createElement('div');
        card.className = 'academic-card';

        const title = document.createElement('h3');
        title.textContent = project.title;

        const meta = document.createElement('p');
        meta.className = 'academic-meta';
        meta.textContent = project.meta;

        const description = document.createElement('p');
        description.textContent = project.description;

        const researchSection = document.createElement('div');
        researchSection.className = 'research-questions';
        researchSection.innerHTML = `
            <h4>Research Questions:</h4>
            <ol>
                ${project.researchQuestions.map(q => `<li>${q}</li>`).join('')}
            </ol>
        `;

        const findings = document.createElement('div');
        findings.className = 'key-findings';
        findings.innerHTML = `<strong>Key Findings:</strong> ${project.keyFindings}`;

        card.appendChild(title);
        card.appendChild(meta);
        card.appendChild(description);
        card.appendChild(researchSection);
        card.appendChild(findings);
        academicGrid.appendChild(card);
    });
}

// ============================================
// POPULATE CERTIFICATIONS SECTION
// ============================================
function populateCertifications(certifications) {
    const certificationsGrid = document.getElementById('certificationsGrid');
    certificationsGrid.innerHTML = '';

    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'certification-card';

        const icon = document.createElement('div');
        icon.className = 'cert-icon';
        icon.textContent = cert.icon || '📜';

        const title = document.createElement('h3');
        title.textContent = cert.title;

        const issuer = document.createElement('p');
        issuer.innerHTML = `<strong>${cert.issuer}</strong>`;

        const year = document.createElement('p');
        year.textContent = `Year: ${cert.year}`;

        const credentialId = document.createElement('p');
        credentialId.textContent = `ID: ${cert.credentialId}`;

        const link = document.createElement('a');
        link.href = cert.link;
        link.textContent = 'View Certificate';
        link.target = '_blank';

        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(issuer);
        card.appendChild(year);
        card.appendChild(credentialId);
        card.appendChild(link);
        certificationsGrid.appendChild(card);
    });
}

// ============================================
// POPULATE CONTACT SECTION
// ============================================
function populateContact(personal) {
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.innerHTML = '';

    const contacts = [
        { title: 'Email', value: personal.email, link: `mailto:${personal.email}` },
        { title: 'Phone', value: personal.phone, link: `tel:${personal.phone.replace(/\s/g, '')}` },
        { title: 'Location', value: personal.location, link: '#' }
    ];

    contacts.forEach(contact => {
        const card = document.createElement('div');
        card.className = 'contact-card';

        const title = document.createElement('h3');
        title.textContent = contact.title;

        const link = document.createElement('a');
        link.href = contact.link;
        link.textContent = contact.value;
        if (contact.link !== '#') {
            link.target = '_blank';
        }

        const p = document.createElement('p');
        p.appendChild(link);

        card.appendChild(title);
        card.appendChild(p);
        contactInfo.appendChild(card);
    });
}

// ============================================
// SMOOTH SCROLL SETUP
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// BUTTON INTERACTIONS
// ============================================
function setupButtonInteractions() {
    const contactButtons = document.querySelectorAll('.btn-primary, .btn-header');
    contactButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const githubButtons = document.querySelectorAll('.btn-secondary');
    githubButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Get GitHub link from data
            const githubLink = document.getElementById('githubLink');
            if (githubLink && githubLink.href && githubLink.href !== '#') {
                window.open(githubLink.href, '_blank');
            }
        });
    });
}
