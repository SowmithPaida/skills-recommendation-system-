/* Base Reset and Variables */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
    --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
    --card-bg: #ffffff;
    --text-main: #1e293b;
    --text-muted: #64748b;
    --primary: #4f46e5;
    --primary-hover: #4338ca;
    --secondary: #e2e8f0;
    --secondary-hover: #cbd5e1;
    --accent: #0284c7;
    --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
}

body {
    background: var(--bg-gradient);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-main);
    padding: 20px;
}

/* Layout Container */
.container {
    width: 100%;
    max-width: 650px;
}

header {
    text-align: center;
    margin-bottom: 25px;
}

header h1 {
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    margin-bottom: 8px;
}

header p {
    color: #94a3b8;
    font-size: 1.1rem;
}

/* Main Card Styling */
.card {
    background: var(--card-bg);
    border-radius: 16px;
    padding: 40px;
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 24px;
}

label {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-main);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

input[type="text"], select {
    width: 100%;
    padding: 14px 16px;
    font-size: 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    outline: none;
    transition: all 0.2s ease;
}

input[type="text"]:focus, select:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
}

/* Buttons and Animations */
.button-group {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
}

.btn {
    flex: 1;
    padding: 14px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-primary {
    background-color: var(--primary);
    color: #ffffff;
}

.btn-primary:hover {
    background-color: var(--primary-hover);
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: var(--secondary);
    color: #334155;
    max-width: 120px;
}

.btn-secondary:hover {
    background-color: var(--secondary-hover);
}

.btn:active {
    transform: translateY(1px);
}

/* Dynamic Output Section */
hr {
    border: 0;
    height: 1px;
    background: #e2e8f0;
    margin: 30px 0;
}

#results-section h2 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: var(--text-main);
}

.results-hidden {
    display: none;
}

/* Learning Path Grid and Arrows */
.path-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-bottom: 25px;
}

.step-card {
    background: #f8fafc;
    padding: 12px 18px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    font-weight: 600;
    font-size: 0.95rem;
    color: #475569;
    transition: all 0.3s ease;
}

.step-card.completed {
    background: #f0fdf4;
    border-color: #bbf7d0;
    color: #166534;
}

.step-card.active-recommendation {
    background: #e0e7ff;
    border-color: #c7d2fe;
    color: #3730a3;
    box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.1);
}

.arrow {
    color: var(--text-muted);
    font-weight: bold;
}

/* Job Opportunities Styling */
.job-section {
    background: #f0f9ff;
    border-left: 4px solid var(--accent);
    padding: 16px;
    border-radius: 0 8px 8px 0;
    margin-bottom: 25px;
}

.job-section h3 {
    font-size: 1rem;
    color: #0369a1;
    margin-bottom: 8px;
}

.job-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
}

.job-tag {
    background: #e0f2fe;
    color: #0369a1;
    padding: 4px 10px;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 600;
}

/* Next Action Items */
.next-steps h3 {
    font-size: 1rem;
    margin-bottom: 10px;
    color: var(--text-main);
}

.next-steps ul {
    list-style: none;
}

.next-steps li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 8px;
    font-size: 0.95rem;
    color: var(--text-muted);
}

.next-steps li::before {
    content: "⚡";
    position: absolute;
    left: 0;
    top: 1px;
}

/* Entrance Animations */
.animate-fade-in {
    animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mobile Responsiveness */
@media (max-width: 480px) {
    .card {
        padding: 24px;
    }
    .button-group {
        flex-direction: column;
    }
    .btn-secondary {
        max-width: 100%;
    }
    .path-container {
        flex-direction: column;
        align-items: stretch;
    }
    .arrow {
        text-align: center;
        transform: rotate(90deg);
        margin: 4px 0;
    }
}
