// Predefined Skill Tracks Map with Skills and associated Job Opportunities
const DOMAIN_DATA = {
    frontend: {
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
        jobs: {
            'HTML': ['Content Editor', 'Email Developer'],
            'CSS': ['Web Designer', 'UI Developer'],
            'JavaScript': ['Frontend Engineer', 'Fullstack Developer'],
            'React': ['React Developer', 'Frontend Architect'],
            'Next.js': ['Senior Frontend Engineer', 'JAMstack Developer'],
            'Tailwind CSS': ['UI Specialist', 'Product Designer']
        }
    },
    backend: {
        skills: ['JavaScript', 'Node.js', 'Express', 'SQL', 'MongoDB', 'Docker'],
        jobs: {
            'JavaScript': ['Backend Node Intern', 'Fullstack Engineer'],
            'Node.js': ['Node JS Developer', 'Backend Architect'],
            'Express': ['API Developer', 'Server Engineer'],
            'SQL': ['Database Administrator', 'Data Engineer'],
            'MongoDB': ['NoSQL Analyst', 'Cloud Solutions Engineer'],
            'Docker': ['DevOps Engineer', 'Site Reliability Engineer']
        }
    },
    datascience: {
        skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Data Visualization', 'Machine Learning'],
        jobs: {
            'Python': ['Automation Engineer', 'Data Analyst Trainee'],
            'Pandas': ['Data Wrangler', 'Quantitative Analyst'],
            'NumPy': ['Scientific Programmer', 'Research Associate'],
            'SQL': ['Business Intelligence Developer', 'Data Engineer'],
            'Data Visualization': ['BI Analyst', 'Data Storyteller'],
            'Machine Learning': ['Data Scientist', 'ML Research Engineer']
        }
    },
    ai: {
        skills: ['Python', 'Linear Algebra', 'Machine Learning', 'Deep Learning', 'PyTorch', 'LLMs'],
        jobs: {
            'Python': ['AI Software Developer', 'Data Infrastructure Engineer'],
            'Linear Algebra': ['Algorithm Developer', 'Computer Vision Scientist'],
            'Machine Learning': ['ML Ops Engineer', 'Predictive Modeler'],
            'Deep Learning': ['Neural Network Engineer', 'NLP Architect'],
            'PyTorch': ['AI Research Scientist', 'Computer Vision Engineer'],
            'LLMs': ['Generative AI Engineer', 'Prompt Engineer Architect']
        }
    },
    design: {
        skills: ['Figma', 'Wireframing', 'Typography', 'Color Theory', 'Prototyping', 'Design Systems'],
        jobs: {
            'Figma': ['UX Design Intern', 'Interface Designer'],
            'Wireframing': ['UX Researcher', 'Information Architect'],
            'Typography': ['Visual Designer', 'Graphic Content Strategist'],
            'Color Theory': ['Brand Identity Designer', 'Creative Director'],
            'Prototyping': ['Interaction Designer', 'Usability Tester'],
            'Design Systems': ['Design Ops Manager', 'Principal Product Designer']
        }
    }
};

// DOM Element Selectors
const currentSkillsInput = document.getElementById('current-skills');
const interestDomainSelect = document.getElementById('interest-domain');
const btnRecommend = document.getElementById('btn-recommend');
const btnReset = document.getElementById('btn-reset');
const resultsSection = document.getElementById('results-section');
const learningPathContainer = document.getElementById('learning-path');
const jobOpportunitiesBox = document.getElementById('job-opportunities-box');
const nextStepsListContainer = document.getElementById('next-steps-list');

// Load cached search data on startup from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedSkills = localStorage.getItem('user_skills');
    const savedDomain = localStorage.getItem('user_domain');

    if (savedSkills) currentSkillsInput.value = savedSkills;
    if (savedDomain) interestDomainSelect.value = savedDomain;
    
    // Auto-generate if cached info exists
    if (savedSkills && savedDomain) {
        generateRecommendations();
    }
});

// Primary Recommendation Logic Function
function generateRecommendations() {
    const rawSkills = currentSkillsInput.value;
    const selectedDomain = interestDomainSelect.value;

    // Guard Clause: Validate inputs are not blank
    if (!selectedDomain || !rawSkills.trim()) {
        alert('Please fill out your current skills and pick a target domain.');
        return;
    }

    // Parse inputs: Convert comma-separated string to lowercase array for clean matching
    const userSkillsParsed = rawSkills.split(',')
        .map(skill => skill.trim().toLowerCase())
        .filter(skill => skill.length > 0);

    const trackData = DOMAIN_DATA[selectedDomain];
    const trackSkills = trackData.skills;
    
    // Cache current selections to localStorage
    localStorage.setItem('user_skills', rawSkills);
    localStorage.setItem('user_domain', selectedDomain);

    // Clear previous elements inside containers
    learningPathContainer.innerHTML = '';
    jobOpportunitiesBox.innerHTML = '';
    nextStepsListContainer.innerHTML = '';

    let missingSkills = [];
    
    // Iterate through tracking nodes to build UI visual cards
    trackSkills.forEach((skill, index) => {
        const hasSkill = userSkillsParsed.includes(skill.toLowerCase());
        
        // Setup card element wrapper
        const skillCard = document.createElement('div');
        skillCard.classList.add('step-card');
        skillCard.textContent = skill;

        if (hasSkill) {
            skillCard.classList.add('completed');
        } else {
            missingSkills.push(skill);
            // Highlight the very first skill they don't have yet as active priority
            if (missingSkills.length === 1) {
                skillCard.classList.add('active-recommendation');
            }
        }

        learningPathContainer.appendChild(skillCard);

        // Inject arrow elements between steps (except the last list item)
        if (index < trackSkills.length - 1) {
            const arrow = document.createElement('div');
            arrow.classList.add('step-arrow');
            arrow.textContent = '→';
            learningPathContainer.appendChild(arrow);
        }
    });

    if (missingSkills.length > 0) {
        const primaryTargetSkill = missingSkills[0];
        const associatedJobs = trackData.jobs[primaryTargetSkill] || [];

        // Build Job Opportunities template block
        jobOpportunitiesBox.innerHTML = `
            <h3>💼 Target Openings for your next skill (${primaryTargetSkill}):</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted)">Unlocks access to roles like:</p>
            <div class="job-tags">
                ${associatedJobs.map(job => `<span class="job-tag">${job}</span>`).join('')}
            </div>
        `;

        nextStepsListContainer.innerHTML = `
            <h3>🎯 Immediate Core Focus: <span style="color: var(--primary)">${primaryTargetSkill}</span></h3>
            <p style="font-size: 0.95rem; margin-bottom: 12px; color: var(--text-muted)">
                Follow-up milestones to secure absolute domain competence:
            </p>
            <ul>
                ${missingSkills.slice(1).map(skill => `<li>Learn ${skill}</li>`).join('')}
            </ul>
        `;
    } else {
        jobOpportunitiesBox.innerHTML = `
            <h3>💼 Profile Completed!</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted)">
                You fulfill all baseline entries for this map track. Your target profile roles include senior engineering tiers across this ecosystem.
            </p>
        `;
        nextStepsListContainer.innerHTML = `
            <h3>🎉 Outstanding Job!</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted)">
                You possess all base elements mapped to this baseline roadmap profile. Consider scaling specialized architecture concepts next!
            </p>
        `;
    }

    // Trigger viewing container display state with animation
    resultsSection.classList.remove('results-hidden');
    resultsSection.classList.add('animate-fade-in');
}

// Reset Engine State Function
function resetEngine() {
    localStorage.clear();
    currentSkillsInput.value = '';
    interestDomainSelect.value = '';
    resultsSection.classList.add('results-hidden');
    resultsSection.classList.remove('animate-fade-in');
    learningPathContainer.innerHTML = '';
    jobOpportunitiesBox.innerHTML = '';
    nextStepsListContainer.innerHTML = '';
}

// Bind Action Event Listeners
btnRecommend.addEventListener('click', generateRecommendations);
btnReset.addEventListener('click', resetEngine);
