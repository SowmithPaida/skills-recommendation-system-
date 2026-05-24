// Predefined Skill Tracks Map
const DOMAIN_TRACKS = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    backend: ['JavaScript', 'Node.js', 'Express', 'SQL', 'MongoDB', 'Docker'],
    datascience: ['Python', 'Pandas', 'NumPy', 'SQL', 'Data Visualization', 'Machine Learning'],
    ai: ['Python', 'Linear Algebra', 'Machine Learning', 'Deep Learning', 'PyTorch', 'LLMs'],
    design: ['Figma', 'Wireframing', 'Typography', 'Color Theory', 'Prototyping', 'Design Systems']
};

// DOM Element Selectors
const currentSkillsInput = document.getElementById('current-skills');
const interestDomainSelect = document.getElementById('interest-domain');
const btnRecommend = document.getElementById('btn-recommend');
const btnReset = document.getElementById('btn-reset');
const resultsSection = document.getElementById('results-section');
const learningPathContainer = document.getElementById('learning-path');
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

    const track = DOMAIN_TRACKS[selectedDomain];
    
    // Cache current selections to localStorage
    localStorage.setItem('user_skills', rawSkills);
    localStorage.setItem('user_domain', selectedDomain);

    // Clear previous elements inside containers
    learningPathContainer.innerHTML = '';
    nextStepsListContainer.innerHTML = '';

    let missingSkills = [];
    
    // Iterate through tracking nodes to build UI visual cards
    track.forEach((skill, index) => {
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
        if (index < track.length - 1) {
            const arrow = document.createElement('span');
            arrow.classList.add('arrow');
            arrow.textContent = '→';
            learningPathContainer.appendChild(arrow);
        }
    });

    // Generate next steps based on missing skills
    if (missingSkills.length > 0) {
        nextStepsListContainer.innerHTML = `
            <h3>🎯 Immediate Core Focus: <span style="color: var(--primary)">${missingSkills[0]}</span></h3>
            <p style="font-size: 0.95rem; margin-bottom: 12px; color: var(--text-muted)">
                Follow-up milestones to secure absolute domain competence:
            </p>
            <ul>
                ${missingSkills.slice(1).map(skill => `<li>Learn ${skill}</li>`).join('')}
            </ul>
        `;
    } else {
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
    nextStepsListContainer.innerHTML = '';
}

// Bind Action Event Listeners
btnRecommend.addEventListener('click', generateRecommendations);
btnReset.addEventListener('click', resetEngine);