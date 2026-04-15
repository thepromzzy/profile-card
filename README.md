Frontend Wizards – Stage 1B
Multi-page profile app with a responsive profile card, contact form, and about page.
Live Demo:https://thepromzzy.github.io/profile-card/  Repo: https://github.com/thepromzzy/profile-card/

Features

Profile card with avatar upload, bio, social links, hobbies, and live clock.
Responsive: Mobile, tablet, and desktop friendly.
Accessible: Keyboard navigation, ARIA labels, high-contrast support.
Testable: All required data-testid attributes included.

Tech Stack

HTML5
CSS3 (Flexbox, Grid, Media Queries)
Vanilla JavaScript
Google Fonts (Aleo)

Project Structure
/
├── index.html → Home (Profile Card)
├── style.css → Shared styles
├── script.js → Home page logic
├── images/ → Avatar image
└── README.md

How to Run Locally

Clone the repo:
git clone 

Navigate to folder:
cd profile-card

Open in browser:

Use VS Code Live Server, or
Run: npx http-server → visit http://localhost:8080

Form Validation (Contact Page)

Field
Rule

Name
Required, min 2 chars, letters + spaces

Email
Valid format (user@domain.com)

Subject
Required

Message
Min 10 characters

Success message appears only after valid submission.

Accessibility

Semantic HTML (<main>, <nav>, <section>)
Labels linked with for
aria-describedby for error messages
Keyboard-navigable (Tab, Enter, Space)
High-contrast mode support

Submission Checklist

All data-testid attributes added

Form validation works

Success message shows only on valid submit

Responsive on all devices

Accessible & keyboard friendly

Clean, modular code

Built with passion by Promise Jacob Frontend Developer 
