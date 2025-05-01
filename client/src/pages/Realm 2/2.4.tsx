<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mission 2.4: Financial Exclusion in Africa</title>
    <!-- Import React and ReactDOM -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <!-- Import Babel for JSX -->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <!-- Import Satoshi font -->
    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #EE720B;
            --light-yellow: #FBF4D2;
            --golden-yellow: #FFC567;
            --dark-text: #333333;
            --light-text: #FFFFFF;
            --success: #2E7D32;
            --warning: #FFC107;
            --danger: #D32F2F;
            --neutral: #757575;
            --bg-light: #FFFFFF;
            --bg-dark: #1A1A1A;
            --border-radius: 8px;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Satoshi', sans-serif;
        }
        
        body {
            background-color: var(--light-yellow);
            color: var(--dark-text);
            transition: var(--transition);
        }
        
        .dark-mode {
            background-color: var(--bg-dark);
            color: var(--light-text);
        }
        
        .dark-mode .section,
        .dark-mode .card,
        .dark-mode .scenario,
        .dark-mode .achievement,
        .dark-mode .summary-box,
        .dark-mode .persona-card,
        .dark-mode .solution-card,
        .dark-mode .barrier-card,
        .dark-mode .population-card,
        .dark-mode .progress-bar-container,
        .dark-mode .quiz-option,
        .dark-mode .mission-progress {
            background-color: var(--bg-dark);
            color: var(--light-text);
            border-color: #333;
        }
        
        .app-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
        }
        
        .header {
            text-align: center;
            padding: 1.5rem 0;
            position: relative;
        }
        
        .mission-title {
            font-size: 2.2rem;
            font-weight: 900;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .mission-subtitle {
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
        
        .character-toggle {
            display: flex;
            justify-content: center;
            margin: 1.5rem 0;
            gap: 1rem;
        }
        
        .character-btn {
            background-color: var(--light-yellow);
            border: 2px solid var(--primary);
            border-radius: var(--border-radius);
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: var(--transition);
        }
        
        .character-btn.active {
            background-color: var(--primary);
            color: var(--light-text);
        }
        
        .character-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }
        
        .character-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
        }
        
        .section {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 2rem;
            margin: 2rem 0;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }
        
        .section-title {
            font-size: 1.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .section-content {
            margin-bottom: 1.5rem;
        }
        
        .button {
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .button:hover {
            background-color: #d96400;
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }
        
        .button.secondary {
            background-color: var(--golden-yellow);
            color: var(--dark-text);
        }
        
        .button.secondary:hover {
            background-color: #e9b44c;
        }
        
        .dialog-box {
            background-color: white;
            border-left: 4px solid var(--primary);
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
            position: relative;
        }
        
        .dialog-box.odu {
            border-left-color: var(--golden-yellow);
        }
        
        .dialog-character {
            position: absolute;
            top: -15px;
            left: -15px;
            background-color: var(--primary);
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
        }
        
        .dialog-box.odu .dialog-character {
            background-color: var(--golden-yellow);
            color: var(--dark-text);
        }
        
        .mission-progress {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
            padding: 1rem;
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }
        
        .progress-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 30%;
        }
        
        .progress-indicator {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--neutral);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .progress-indicator.completed {
            background-color: var(--primary);
        }
        
        .progress-indicator.active {
            background-color: var(--golden-yellow);
            color: var(--dark-text);
        }
        
        .progress-label {
            text-align: center;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .progress-bar-container {
            width: 100%;
            height: 10px;
            background-color: #e0e0e0;
            border-radius: 5px;
            margin: 1rem 0;
            overflow: hidden;
        }
        
        .progress-bar {
            height: 100%;
            background-color: var(--primary);
            transition: width 0.5s ease;
        }
        
        .achievement {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1rem;
            margin: 1rem 0;
            box-shadow: var(--shadow);
            display: flex;
            align-items: center;
            gap: 1rem;
            transition: var(--transition);
            transform: translateY(20px);
            opacity: 0;
        }
        
        .achievement.show {
            transform: translateY(0);
            opacity: 1;
        }
        
        .achievement-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--golden-yellow);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }
        
        .achievement-info {
            flex: 1;
        }
        
        .achievement-title {
            font-weight: 700;
            margin-bottom: 0.25rem;
        }
        
        .reflection {
            margin: 2rem 0;
        }
        
        .reflection-question {
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .reflection-input {
            width: 100%;
            padding: 1rem;
            border: 2px solid var(--golden-yellow);
            border-radius: var(--border-radius);
            font-family: 'Satoshi', sans-serif;
            resize: vertical;
            min-height: 120px;
            margin-bottom: 1rem;
        }
        
        .summary {
            margin: 2rem 0;
        }
        
        .summary-box {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: var(--shadow);
        }
        
        .summary-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .summary-points {
            margin-bottom: 1.5rem;
        }
        
        .summary-point {
            display: flex;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
        }
        
        .summary-point-icon {
            color: var(--primary);
            font-weight: 700;
        }
        
        .completion-badge {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 2rem 0;
        }
        
        .badge-icon {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            box-shadow: var(--shadow);
        }
        
        .badge-title {
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
            color: var(--primary);
        }
        
        /* Exclusion Web Interactive Styles */
        .exclusion-web {
            margin: 2rem 0;
        }
        
        .barriers-container,
        .populations-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .barrier-card,
        .population-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1rem;
            box-shadow: var(--shadow);
            cursor: grab;
            transition: var(--transition);
            position: relative;
            border: 2px solid transparent;
        }
        
        .barrier-card.selected,
        .population-card.selected {
            border-color: var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
        }
        
        .barrier-card:hover,
        .population-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
        
        .barrier-card-title,
        .population-card-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .connection-area {
            min-height: 300px;
            border: 2px dashed #ccc;
            border-radius: var(--border-radius);
            margin: 2rem 0;
            padding: 1rem;
            position: relative;
        }
        
        .connection {
            display: flex;
            align-items: center;
            margin: 1rem 0;
            background-color: rgba(238, 114, 11, 0.05);
            border-radius: var(--border-radius);
            padding: 0.75rem;
            border-left: 4px solid var(--primary);
        }
        
        .connection-item {
            flex: 1;
            padding: 0.5rem;
        }
        
        .connection-arrow {
            font-size: 1.5rem;
            color: var(--primary);
        }
        
        .connection-remove {
            background: none;
            border: none;
            color: var(--danger);
            cursor: pointer;
            font-size: 1.25rem;
            padding: 0.25rem;
        }
        
        .connection-stats {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 2rem 0;
        }
        
        .stat-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1rem;
            box-shadow: var(--shadow);
            min-width: 150px;
            text-align: center;
            margin: 0.5rem;
        }
        
        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
        }
        
        .stat-label {
            font-size: 0.875rem;
            color: var(--neutral);
        }
        
        /* Banking Journey Simulator Styles */
        .banking-journey {
            margin: 2rem 0;
        }
        
        .persona-selection {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin: 1.5rem 0;
        }
        
        .persona-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid transparent;
        }
        
        .persona-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
        
        .persona-card.selected {
            border-color: var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
        }
        
        .persona-avatar {
            width: 80px;
            height: 80px;
            background-color: var(--golden-yellow);
            border-radius: 50%;
            margin: 0 auto 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }
        
        .persona-name {
            font-weight: 700;
            font-size: 1.25rem;
            text-align: center;
            margin-bottom: 0.5rem;
        }
        
        .persona-details {
            text-align: center;
            margin-bottom: 1rem;
            font-size: 0.875rem;
            color: var(--neutral);
        }
        
        .journey-simulator {
            margin: 2rem 0;
        }
        
        .journey-step {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            margin-bottom: 1.5rem;
            position: relative;
        }
        
        .step-number {
            position: absolute;
            top: -15px;
            left: -15px;
            width: 35px;
            height: 35px;
            background-color: var(--primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
        }
        
        .step-title {
            margin-bottom: 1rem;
            font-weight: 700;
            font-size: 1.25rem;
        }
        
        .step-description {
            margin-bottom: 1.5rem;
        }
        
        .step-options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .step-option {
            background-color: var(--light-yellow);
            border: 2px solid var(--golden-yellow);
            border-radius: var(--border-radius);
            padding: 1rem;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .step-option:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }
        
        .step-option.selected {
            border-color: var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
        }
        
        .step-feedback {
            margin-top: 1.5rem;
            padding: 1rem;
            border-radius: var(--border-radius);
            display: none;
        }
        
        .step-feedback.success {
            background-color: #E8F5E9;
            border-left: 4px solid var(--success);
            display: block;
        }
        
        .step-feedback.error {
            background-color: #FFEBEE;
            border-left: 4px solid var(--danger);
            display: block;
        }
        
        .journey-result {
            background-color: var(--light-yellow);
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin: 2rem 0;
            border-left: 4px solid var(--primary);
        }
        
        .journey-stats {
            display: flex;
            justify-content: space-around;
            margin: 1.5rem 0;
            flex-wrap: wrap;
        }
        
        .journey-stat {
            text-align: center;
            margin: 0.5rem;
        }
        
        .journey-stat-value {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary);
        }
        
        .journey-stat-label {
            color: var(--neutral);
        }
        
        /* Solution Matchmaker Styles */
        .solution-matchmaker {
            margin: 2rem 0;
        }
        
        .challenge-container {
            margin: 1.5rem 0;
        }
        
        .challenge-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            margin-bottom: 1.5rem;
        }
        
        .challenge-title {
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .solutions-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .solution-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1rem;
            box-shadow: var(--shadow);
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid transparent;
        }
        
        .solution-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
        
        .solution-card.selected {
            border-color: var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
        }
        
        .solution-icon {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        
        .solution-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .match-result {
            margin-top: 1.5rem;
            padding: 1rem;
            border-radius: var(--border-radius);
            display: none;
        }
        
        .match-result.good {
            background-color: #E8F5E9;
            border-left: 4px solid var(--success);
            display: block;
        }
        
        .match-result.poor {
            background-color: #FFF3E0;
            border-left: 4px solid var(--warning);
            display: block;
        }
        
        .match-result.bad {
            background-color: #FFEBEE;
            border-left: 4px solid var(--danger);
            display: block;
        }
        
        .score-container {
            text-align: center;
            margin: 2rem 0;
        }
        
        .score-display {
            font-size: 3rem;
            font-weight: 700;
            color: var(--primary);
        }
        
        .score-label {
            color: var(--neutral);
        }
        
        .heatmap-container {
            margin: 2rem 0;
            overflow-x: auto;
        }
        
        .heatmap {
            min-width: 600px;
        }
        
        .heatmap-row {
            display: flex;
        }
        
        .heatmap-header {
            background-color: var(--golden-yellow);
            font-weight: 700;
            padding: 0.75rem;
            flex: 1;
            text-align: center;
            min-width: 120px;
        }
        
        .heatmap-cell {
            padding: 0.75rem;
            flex: 1;
            text-align: center;
            min-width: 120px;
        }
        
        .heatmap-row:nth-child(odd) .heatmap-cell {
            background-color: rgba(251, 244, 210, 0.3);
        }
        
        .heatmap-cell.level-0 {
            background-color: #ECEFF1;
        }
        
        .heatmap-cell.level-1 {
            background-color: #FFF9C4;
        }
        
        .heatmap-cell.level-2 {
            background-color: #FFECB3;
        }
        
        .heatmap-cell.level-3 {
            background-color: #FFCC80;
        }
        
        .heatmap-cell.level-4 {
            background-color: #FFB74D;
        }
        
        .heatmap-cell.level-5 {
            background-color: #FF9800;
        }
        
        @media (max-width: 768px) {
            .mission-title {
                font-size: 1.8rem;
            }
            
            .section {
                padding: 1.5rem;
            }
            
            .progress-step {
                width: 33%;
                font-size: 0.75rem;
            }
            
            .progress-indicator {
                width: 30px;
                height: 30px;
            }
            
            .barriers-container,
            .populations-container,
            .persona-selection,
            .solutions-container {
                grid-template-columns: 1fr;
            }
            
            .connection {
                flex-direction: column;
                text-align: center;
            }
            
            .connection-arrow {
                transform: rotate(90deg);
                margin: 0.5rem 0;
            }
            
            .journey-stats {
                flex-direction: column;
                align-items: center;
            }
            
            .journey-stat {
                margin: 1rem 0;
            }
        }
    </style>
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
        const { useState, useEffect, useRef } = React;
        
        // Main App Component
        const App = () => {
            const [activeCharacter, setActiveCharacter] = useState('asha');
            const [currentStep, setCurrentStep] = useState(1);
            const [completedSteps, setCompletedSteps] = useState([]);
            const [showAchievement, setShowAchievement] = useState(false);
            const [achievementTitle, setAchievementTitle] = useState('');
            const [achievementDesc, setAchievementDesc] = useState('');
            const [reflection, setReflection] = useState('');
            const [progress, setProgress] = useState(0);
            
            // Check if dark mode is preferred
            useEffect(() => {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.body.classList.add('dark-mode');
                }
                
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                    if (event.matches) {
                        document.body.classList.add('dark-mode');
                    } else {
                        document.body.classList.remove('dark-mode');
                    }
                });
            }, []);
            
            const updateProgress = (newProgress) => {
                setProgress(newProgress);
            };
            
            const unlockAchievement = (title, description) => {
                setAchievementTitle(title);
                setAchievementDesc(description);
                setShowAchievement(true);
                
                setTimeout(() => {
                    setShowAchievement(false);
                }, 5000);
            };
            
            const completeStep = (stepNum) => {
                if (!completedSteps.includes(stepNum)) {
                    setCompletedSteps([...completedSteps, stepNum]);
                    
                    // Calculate progress
                    const newProgress = Math.min(100, ((completedSteps.length + 1) / 3) * 100);
                    updateProgress(newProgress);
                    
                    // Unlock achievements based on completion
                    if (stepNum === 1) {
                        unlockAchievement('Exclusion Mapper', 'You\'ve identified who is excluded from financial systems!');
                    } else if (stepNum === 2) {
                        unlockAchievement('Identity Navigator', 'You\'ve experienced the banking journey of the marginalized!');
                    } else if (stepNum === 3) {
                        unlockAchievement('Solution Architect', 'You\'ve matched solutions to real financial challenges!');
                    }
                }
            };
            
            return (
                <div className="app-container">
                    <header className="header">
                        <h1 className="mission-title">Mission 2.4: Financial Exclusion in Africa</h1>
                        <p className="mission-subtitle">Discover who is locked out of banking systems and why.</p>
                        
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        </div>
                    </header>
                    
                    <div className="character-toggle">
                        <button 
                            className={`character-btn ${activeCharacter === 'asha' ? 'active' : ''}`}
                            onClick={() => setActiveCharacter('asha')}
                        >
                            <div className="character-avatar">A</div>
                            <span>Asha (Tech Activist)</span>
                        </button>
                        <button 
                            className={`character-btn ${activeCharacter === 'odu' ? 'active' : ''}`}
                            onClick={() => setActiveCharacter('odu')}
                        >
                            <div className="character-avatar" style={{ backgroundColor: '#FFC567', color: '#333' }}>O</div>
                            <span>Odu (Village Elder)</span>
                        </button>
                    </div>
                    
                    <section className="section">
                        <h2 className="section-title">Introduction</h2>
                        <div className="section-content">
                            <p>Across Africa, more than 350 million adults lack access to formal financial services. This mission explores the barriers that prevent people from accessing banking, the impact of being financially excluded, and the innovative solutions emerging to address these challenges.</p>
                        </div>
                        
                        <div className="dialog-box">
                            <div className="dialog-character">A</div>
                            <p><strong>Asha:</strong> "Financial exclusion isn't an accident—it's a result of systems designed without considering everyone's needs. ID requirements, minimum balances, and documentation create walls that keep millions locked out."</p>
                        </div>
                        
                        <div className="dialog-box odu">
                            <div className="dialog-character">O</div>
                            <p><strong>Odu:</strong> "In our communities, we've always had ways to save and support each other through informal systems. But without access to the formal economy, many opportunities remain out of reach for our people."</p>
                        </div>
                    </section>
                    
                    <div className="mission-progress">
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 1 ? 'active' : ''} ${completedSteps.includes(1) ? 'completed' : ''}`}>1</div>
                            <div className="progress-label">Exclusion Web</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 2 ? 'active' : ''} ${completedSteps.includes(2) ? 'completed' : ''}`}>2</div>
                            <div className="progress-label">Banking Journey</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 3 ? 'active' : ''} ${completedSteps.includes(3) ? 'completed' : ''}`}>3</div>
                            <div className="progress-label">Solution Matchmaker</div>
                        </div>
                    </div>
                    
                    {showAchievement && (
                        <div className="achievement show">
                            <div className="achievement-icon">🏆</div>
                            <div className="achievement-info">
                                <div className="achievement-title">{achievementTitle}</div>
                                <div>{achievementDesc}</div>
                            </div>
                        </div>
                    )}
                    
                    {currentStep === 1 && (
                        <ExclusionWeb
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 2 && (
                        <BankingJourney
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 3 && (
                        <SolutionMatchmaker
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    <div className="section">
                        <div className="section-content">
                            <div className="reflection">
                                <h3 className="section-title">Reflect on Your Learning</h3>
                                <p className="reflection-question">How might financial exclusion perpetuate inequality? Consider how the barriers you've learned about might affect specific groups in your own community.</p>
                                <textarea 
                                    className="reflection-input"
                                    value={reflection}
                                    onChange={(e) => setReflection(e.target.value)}
                                    placeholder="Share your thoughts here..."
                                ></textarea>
                                <button className="button">Save Reflection</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="navigation-buttons" style={{ display: 'flex', justifyContent: 'space-between', margin: '2rem 0' }}>
                        {currentStep > 1 && (
                            <button 
                                className="button secondary"
                                onClick={() => setCurrentStep(currentStep - 1)}
                            >
                                Previous Challenge
                            </button>
                        )}
                        
                        {currentStep < 3 ? (
                            <button 
                                className="button"
                                onClick={() => setCurrentStep(currentStep + 1)}
                                style={{ marginLeft: 'auto' }}
                            >
                                Next Challenge
                            </button>
                        ) : (
                            completedSteps.length === 3 && (
                                <button 
                                    className="button"
                                    onClick={() => {
                                        unlockAchievement('Mission Complete', 'You\'ve completed all challenges in Mission 2.4!');
                                        // Additional completion logic
                                    }}
                                    style={{ marginLeft: 'auto' }}
                                >
                                    Complete Mission
                                </button>
                            )
                        )}
                    </div>
                    
                    {completedSteps.length === 3 && (
                        <div className="section">
                            <h2 className="section-title">Mission Summary</h2>
                            <div className="summary-box">
                                <h3 className="summary-title">Key Takeaways</h3>
                                <div className="summary-points">
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Systemic barriers exclude millions from accessing financial services</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Gender, location, documentation, and economic status all affect financial access</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Different populations face unique challenges requiring targeted solutions</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Both technological and community-based approaches can increase inclusion</div>
                                    </div>
                                </div>
                                
                                <div className="completion-badge">
                                    <div className="badge-icon">🔓</div>
                                    <div className="badge-title">Financial Inclusion Champion</div>
                                    <div>You've completed Mission 2.4</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Exclusion Web Interactive Component
        const ExclusionWeb = ({ activeCharacter, completeStep, updateProgress }) => {
            const [selectedBarrier, setSelectedBarrier] = useState(null);
            const [selectedPopulation, setSelectedPopulation] = useState(null);
            const [connections, setConnections] = useState([]);
            const [subProgress, setSubProgress] = useState(0);
            
            const barriers = [
                { id: 'id', name: 'No Formal ID', icon: '📄', description: 'Lack of nationally recognized identification documentation' },
                { id: 'distance', name: 'Geographic Distance', icon: '🗺️', description: 'Living far from banking infrastructure and branches' },
                { id: 'balance', name: 'Minimum Balance', icon: '💰', description: 'Requirements to maintain minimum account balances' },
                { id: 'literacy', name: 'Financial Literacy', icon: '📚', description: 'Lack of understanding of banking processes and products' },
                { id: 'gender', name: 'Gender Restrictions', icon: '⚧️', description: 'Requiring male guardian signatures or permission' },
                { id: 'tech', name: 'Tech Accessibility', icon: '📱', description: 'Lack of access to smartphones or internet connectivity' }
            ];
            
            const populations = [
                { id: 'refugee', name: 'Refugees', icon: '🏕️', description: 'People displaced from their home countries' },
                { id: 'rural', name: 'Rural Farmers', icon: '🌾', description: 'Agricultural workers in remote areas' },
                { id: 'women', name: 'Widows', icon: '👩', description: 'Women who have lost their spouses' },
                { id: 'youth', name: 'Youth', icon: '👧', description: 'Young people without financial history' },
                { id: 'informal', name: 'Informal Workers', icon: '🛍️', description: 'People employed in the informal economy' },
                { id: 'pastoralist', name: 'Pastoralists', icon: '🐄', description: 'Nomadic livestock herders' }
            ];
            
            // Correct matches for educational feedback
            const correctMatches = [
                { barrier: 'id', population: 'refugee' },
                { barrier: 'distance', population: 'rural' },
                { barrier: 'distance', population: 'pastoralist' },
                { barrier: 'gender', population: 'women' },
                { barrier: 'balance', population: 'informal' },
                { barrier: 'literacy', population: 'youth' },
                { barrier: 'tech', population: 'rural' },
                { barrier: 'tech', population: 'pastoralist' },
                { barrier: 'id', population: 'informal' },
                { barrier: 'balance', population: 'youth' },
                { barrier: 'literacy', population: 'women' },
            ];
            
            useEffect(() => {
                // Update sub-progress based on connections
                const targetConnections = 6; // Number of connections needed to complete
                const newProgress = Math.min(100, (connections.length / targetConnections) * 100);
                setSubProgress(newProgress);
                
                if (connections.length >= targetConnections) {
                    completeStep(1);
                }
                
                // Update main progress
                updateProgress(newProgress / 3); // First challenge contributes 1/3 to overall progress
            }, [connections]);
            
            const handleCreateConnection = () => {
                if (selectedBarrier && selectedPopulation) {
                    // Check if connection already exists
                    const connectionExists = connections.some(
                        conn => conn.barrier === selectedBarrier && conn.population === selectedPopulation
                    );
                    
                    if (!connectionExists) {
                        const barrier = barriers.find(b => b.id === selectedBarrier);
                        const population = populations.find(p => p.id === selectedPopulation);
                        
                        const newConnection = {
                            id: `${selectedBarrier}-${selectedPopulation}`,
                            barrier: selectedBarrier,
                            population: selectedPopulation,
                            barrierName: barrier.name,
                            populationName: population.name,
                            barrierIcon: barrier.icon,
                            populationIcon: population.icon
                        };
                        
                        setConnections([...connections, newConnection]);
                        setSelectedBarrier(null);
                        setSelectedPopulation(null);
                    }
                }
            };
            
            const removeConnection = (connectionId) => {
                setConnections(connections.filter(conn => conn.id !== connectionId));
            };
            
            // Function to check if a match is correct (for educational feedback)
            const isMatchCorrect = (barrier, population) => {
                return correctMatches.some(
                    match => match.barrier === barrier && match.population === population
                );
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 1: Exclusion Web Interactive</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Match financial exclusion barriers to the populations they most affect. Create at least 6 connections to complete the challenge.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Financial systems weren't designed with everyone in mind. Let's map out who gets left behind and why. These patterns of exclusion aren't random—they reflect deeper structural inequalities."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "In my lifetime, I've seen how many in our communities struggle to participate in the formal economy. Each group faces different challenges that keep them outside the banking system."</p>
                    </div>
                    
                    <div className="exclusion-web">
                        <h3>Financial Exclusion Barriers:</h3>
                        <div className="barriers-container">
                            {barriers.map(barrier => (
                                <div 
                                    key={barrier.id}
                                    className={`barrier-card ${selectedBarrier === barrier.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedBarrier(barrier.id)}
                                >
                                    <div className="barrier-card-title">
                                        <span>{barrier.icon}</span>
                                        <span>{barrier.name}</span>
                                    </div>
                                    <p>{barrier.description}</p>
                                </div>
                            ))}
                        </div>
                        
                        <h3 style={{ marginTop: '2rem' }}>Affected Populations:</h3>
                        <div className="populations-container">
                            {populations.map(population => (
                                <div 
                                    key={population.id}
                                    className={`population-card ${selectedPopulation === population.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedPopulation(population.id)}
                                >
                                    <div className="population-card-title">
                                        <span>{population.icon}</span>
                                        <span>{population.name}</span>
                                    </div>
                                    <p>{population.description}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
                            <button 
                                className="button"
                                onClick={handleCreateConnection}
                                disabled={!selectedBarrier || !selectedPopulation}
                                style={{ 
                                    opacity: (!selectedBarrier || !selectedPopulation) ? 0.5 : 1,
                                    cursor: (!selectedBarrier || !selectedPopulation) ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Create Connection
                            </button>
                        </div>
                        
                        <div className="connection-area">
                            <h3>Your Exclusion Web ({connections.length}/6 connections)</h3>
                            {connections.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--neutral)' }}>
                                    Select a barrier and a population, then click "Create Connection" to build your exclusion web.
                                </div>
                            ) : (
                                connections.map(conn => (
                                    <div key={conn.id} className="connection">
                                        <div className="connection-item">
                                            <span>{conn.barrierIcon} {conn.barrierName}</span>
                                        </div>
                                        <div className="connection-arrow">→</div>
                                        <div className="connection-item">
                                            <span>{conn.populationIcon} {conn.populationName}</span>
                                        </div>
                                        <button 
                                            className="connection-remove"
                                            onClick={() => removeConnection(conn.id)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                        
                        {connections.length >= 3 && (
                            <div className="connection-stats">
                                <div className="stat-card">
                                    <div className="stat-value">
                                        {Math.round(
                                            (connections.filter(conn => isMatchCorrect(conn.barrier, conn.population)).length / 
                                            connections.length) * 100
                                        )}%
                                    </div>
                                    <div className="stat-label">Accuracy</div>
                                </div>
                                
                                <div className="stat-card">
                                    <div className="stat-value">
                                        {connections.filter(conn => conn.barrier === 'id').length}
                                    </div>
                                    <div className="stat-label">ID-Related</div>
                                </div>
                                
                                <div className="stat-card">
                                    <div className="stat-value">
                                        {connections.filter(conn => conn.population === 'rural' || conn.population === 'pastoralist').length}
                                    </div>
                                    <div className="stat-label">Rural Impact</div>
                                </div>
                                
                                <div className="stat-card">
                                    <div className="stat-value">
                                        {connections.filter(conn => conn.barrier === 'gender').length}
                                    </div>
                                    <div className="stat-label">Gender-Based</div>
                                </div>
                            </div>
                        )}
                        
                        {connections.length >= 6 && (
                            <div style={{ margin: '2rem 0' }}>
                                <h3>Key Insights:</h3>
                                <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                    <li>Over 400 million people in Africa lack formal ID, preventing account opening</li>
                                    <li>Women are 9% less likely than men to have a bank account in Sub-Saharan Africa</li>
                                    <li>Rural residents must travel an average of 10km to reach a bank branch</li>
                                    <li>Refugees often struggle with financial access even after receiving asylum</li>
                                    <li>Minimum balance requirements often exceed monthly income for informal workers</li>
                                </ul>
                                
                                <div className="heatmap-container">
                                    <h3 style={{ marginBottom: '1rem' }}>Exclusion Intensity Heat Map</h3>
                                    <div className="heatmap">
                                        <div className="heatmap-row">
                                            <div className="heatmap-header"></div>
                                            {populations.slice(0, 4).map(pop => (
                                                <div key={pop.id} className="heatmap-header">
                                                    {pop.icon} {pop.name}
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {barriers.slice(0, 4).map(barrier => (
                                            <div key={barrier.id} className="heatmap-row">
                                                <div className="heatmap-header">{barrier.icon} {barrier.name}</div>
                                                <div className={`heatmap-cell level-${barrier.id === 'id' && populations[0].id === 'refugee' ? 5 : barrier.id === 'distance' && populations[1].id === 'rural' ? 5 : Math.floor(Math.random() * 3)}`}>
                                                    {barrier.id === 'id' && populations[0].id === 'refugee' ? 'Severe' : 
                                                     barrier.id === 'distance' && populations[1].id === 'rural' ? 'Severe' : 
                                                     ['Minimal', 'Moderate', 'Significant'][Math.floor(Math.random() * 3)]}
                                                </div>
                                                <div className={`heatmap-cell level-${barrier.id === 'distance' && populations[1].id === 'rural' ? 5 : barrier.id === 'literacy' && populations[3].id === 'youth' ? 4 : Math.floor(Math.random() * 3)}`}>
                                                    {barrier.id === 'distance' && populations[1].id === 'rural' ? 'Severe' : 
                                                     barrier.id === 'literacy' && populations[3].id === 'youth' ? 'High' : 
                                                     ['Minimal', 'Moderate', 'Significant'][Math.floor(Math.random() * 3)]}
                                                </div>
                                                <div className={`heatmap-cell level-${barrier.id === 'gender' && populations[2].id === 'women' ? 5 : barrier.id === 'balance' && populations[3].id === 'youth' ? 4 : Math.floor(Math.random() * 3)}`}>
                                                    {barrier.id === 'gender' && populations[2].id === 'women' ? 'Severe' : 
                                                     barrier.id === 'balance' && populations[3].id === 'youth' ? 'High' : 
                                                     ['Minimal', 'Moderate', 'Significant'][Math.floor(Math.random() * 3)]}
                                                </div>
                                                <div className={`heatmap-cell level-${barrier.id === 'tech' && populations[3].id === 'youth' ? 2 : barrier.id === 'literacy' && populations[3].id === 'youth' ? 4 : Math.floor(Math.random() * 3)}`}>
                                                    {barrier.id === 'tech' && populations[3].id === 'youth' ? 'Moderate' : 
                                                     barrier.id === 'literacy' && populations[3].id === 'youth' ? 'High' : 
                                                     ['Minimal', 'Moderate', 'Significant'][Math.floor(Math.random() * 3)]}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };
        
        // Banking Journey Simulator Component
        const BankingJourney = ({ activeCharacter, completeStep, updateProgress }) => {
            const [selectedPersona, setSelectedPersona] = useState(null);
            const [currentStep, setCurrentStep] = useState(0);
            const [selectedOption, setSelectedOption] = useState(null);
            const [feedbackMessage, setFeedbackMessage] = useState('');
            const [feedbackType, setFeedbackType] = useState('');
            const [attempts, setAttempts] = useState(0);
            const [journeyComplete, setJourneyComplete] = useState(false);
            const [subProgress, setSubProgress] = useState(0);
            
            const personas = [
                {
                    id: 'amina',
                    name: 'Amina',
                    emoji: '👩',
                    description: 'Widowed farmer from rural Tanzania',
                    details: 'Lost husband 2 years ago, has 3 children, lives 30km from nearest town, no formal ID'
                },
                {
                    id: 'kwame',
                    name: 'Kwame',
                    emoji: '👨',
                    description: 'Urban market vendor in Ghana',
                    details: 'Works in informal economy, has basic smartphone, irregular income, basic literacy'
                },
                {
                    id: 'malik',
                    name: 'Malik',
                    emoji: '👨‍👩‍👧',
                    description: 'Refugee from South Sudan living in Uganda',
                    details: 'Left home documents behind when fleeing, lives in refugee settlement, has UNHCR refugee card'
                }
            ];
            
            // Different journey paths based on persona
            const journeyPaths = {
                'amina': [
                    {
                        title: 'Getting to the Bank',
                        description: 'It\'s market day and Amina needs to travel to the nearest town where there\'s a bank branch. The journey will take time and money.',
                        options: [
                            {
                                id: 1,
                                text: 'Take a shared taxi (costs 1 day\'s earnings)',
                                outcome: 'Amina spends a significant portion of her earnings but arrives at the bank before closing time.',
                                success: true
                            },
                            {
                                id: 2,
                                text: 'Wait for a neighbor with a motorcycle (free but unreliable)',
                                outcome: 'Amina waits for hours, but no neighbor with a motorcycle passes by. She\'ll have to try another day.',
                                success: false
                            },
                            {
                                id: 3,
                                text: 'Walk to save money (6 hours each way)',
                                outcome: 'After walking for 6 hours, Amina arrives at the bank only to find it closed for the day. She\'ll need to find accommodation or walk back home.',
                                success: false
                            }
                        ]
                    },
                    {
                        title: 'Documentation Requirements',
                        description: 'At the bank, the clerk asks Amina for identification and proof of address to open an account.',
                        options: [
                            {
                                id: 1,
                                text: 'Show voting card as ID',
                                outcome: 'The clerk explains that a voting card alone isn\'t sufficient for KYC (Know Your Customer) requirements.',
                                success: false
                            },
                            {
                                id: 2,
                                text: 'Show late husband\'s documents and marriage certificate',
                                outcome: 'The clerk hesitantly accepts the documents but explains that Amina will need her deceased husband\'s family member to co-sign the account.',
                                success: true,
                                partialSuccess: true
                            },
                            {
                                id: 3,
                                text: 'Explain lack of formal documents and ask for alternatives',
                                outcome: 'The clerk suggests a simplified "no-frills" account with lower documentation requirements but higher fees and transaction limits.',
                                success: true
                            }
                        ]
                    },
                    {
                        title: 'Minimum Balance Requirement',
                        description: 'The bank requires a minimum balance of 50,000 Tanzanian Shillings (~$22 USD) to open and maintain the account.',
                        options: [
                            {
                                id: 1,
                                text: 'Deposit all current savings (30,000 TZS)',
                                outcome: 'The clerk explains this is insufficient and Amina will need to return with the full amount.',
                                success: false
                            },
                            {
                                id: 2,
                                text: 'Ask about accounts with lower minimums',
                                outcome: 'The clerk offers a "basic" account with a 20,000 TZS minimum but higher transaction fees and no interest.',
                                success: true
                            },
                            {
                                id: 3,
                                text: 'Borrow the additional amount from a relative',
                                outcome: 'Amina calls her brother-in-law who agrees to lend her the difference, but now she\'ll start her financial journey in debt.',
                                success: true,
                                partialSuccess: true
                            }
                        ]
                    },
                    {
                        title: 'Understanding Account Terms',
                        description: 'The clerk rapidly explains the account terms, fees, and conditions in technical banking terminology.',
                        options: [
                            {
                                id: 1,
                                text: 'Sign without fully understanding the terms',
                                outcome: 'Amina opens the account but later discovers unexpected fees that quickly deplete her small balance.',
                                success: true,
                                partialSuccess: true
                            },
                            {
                                id: 2,
                                text: 'Ask for explanation in simpler terms',
                                outcome: 'The clerk seems annoyed but explains the key points more clearly. Amina now understands the main fees and requirements.',
                                success: true
                            },
                            {
                                id: 3,
                                text: 'Ask for written materials to take home and review',
                                outcome: 'The clerk provides brochures, but they\'re still in complex language. Amina will need help from someone more financially literate.',
                                success: true,
                                partialSuccess: true
                            }
                        ]
                    }
                ],
                'kwame': [
                    {
                        title: 'Finding Banking Options',
                        description: 'Kwame wants to find a bank account that works for his irregular income from selling goods at the market.',
                        options: [
                            {
                                id: 1,
                                text: 'Visit traditional bank branches during business hours',
                                outcome: 'Kwame loses a full day of income waiting in long queues, only to be told he needs proof of formal employment.',
                                success: false
                            },
                            {
                                id: 2,
                                text: 'Research mobile banking options on his phone',
                                outcome: 'Kwame discovers several mobile money services that don\'t require proof of formal employment.',
                                success: true
                            },
                            {
                                id: 3,
                                text: 'Ask other market vendors what they use',
                                outcome: 'Fellow vendors recommend a combination of mobile money for daily transactions and a local savings group for longer-term savings.',
                                success: true
                            }
                        ]
                    },
                    {
                        title: 'Income Verification',
                        description: 'To qualify for most financial services, Kwame needs to demonstrate consistent income.',
                        options: [
                            {
                                id: 1,
                                text: 'Provide tax receipts from market stall payments',
                                outcome: 'While these show some income, they\'re irregular and considered insufficient for traditional credit products.',
                                success: true,
                                partialSuccess: true
                            },
                            {
                                id: 2,
                                text: 'Show mobile money transaction history',
                                outcome: 'His 6-month transaction history demonstrates consistent money flows, which some newer fintech services accept as proof of income.',
                                success: true
                            },
                            {
                                id: 3,
                                text: 'Create false pay stubs to show "formal" employment',
                                outcome: 'This constitutes fraud and could result in account closure and being blacklisted from financial services if discovered.',
                                success: false
                            }
                        ]
                    },
                    {
                        title: 'Digital Literacy Challenges',
                        description: 'The mobile banking app has a complex interface with many features Kwame hasn\'t encountered before.',
                        options: [
                            {
                                id: 1,
                                text: 'Try to figure it out through trial and error',
                                outcome: 'Kwame accidentally sends money to the wrong number and loses a day\'s earnings with no easy way to recover it.',
                                success: false
                            },
                            {
                                id: 2,
                                text: 'Ask for help from a younger family member',
                                outcome: 'Kwame\'s nephew helps him understand the basic functions, but Kwame remains dependent on help for more complex transactions.',
                                success: true,
                                partialSuccess: true
                            },
                            {
                                id: 3,
                                text: 'Visit a mobile money agent for in-person help',
                                outcome: 'The agent walks Kwame through the key features and provides a simplified guide. Kwame gains confidence with the basics.',
                                success: true
                            }
                        ]
                    },
                    {
                        title: 'Saving vs. Day-to-Day Needs',
                        description: 'Kwame wants to save for his daughter\'s education, but his irregular income makes consistent saving challenging.',
                        options: [
                            {
                                id: 1,
                                text: 'Try to deposit a fixed amount each week',
                                outcome: 'During good weeks this works, but during slow market periods, Kwame has to withdraw from savings to cover basic needs.',
                                success: true,
                                partialSuccess: true
                            },
                            {
                                id: 2,
                                text: 'Join a local susu savings group with other vendors',
                                outcome: 'The social pressure and structured nature of the group helps Kwame maintain his commitment to saving regularly.',
                                success: true
                            },
                            {
                                id: 3,
                                text: 'Use a locked mobile savings wallet with withdrawal restrictions',
                                outcome: 'The commitment device helps Kwame avoid impulsive withdrawals, though it creates challenges during genuine emergencies.',
                                success: true,
                                partialSuccess: true
                            }
                        ]
                    }
                ],
                'malik': [
                    {
                        title: 'Identity Documentation',
                        description: 'Malik needs identification to open a bank account, but he left his national ID behind when fleeing conflict.',
                        options: [
                            {
                                id: 1,
                                text: 'Try using his UNHCR refugee identity card',
                                outcome: 'The first bank refuses this ID, but a second bank with specific refugee banking programs accepts it.',
                                success: true,
                                partialSuccess: true
                            },
                            {
                                id: 2,
                                text: 'Attempt to use his refugee settlement documentation',
                                outcome: 'These documents alone are insufficient for banking KYC requirements.',
                                success: false
                            },
                            {
                                id: 3,
                                text: 'Apply for host country ID through refugee assistance program',
                                outcome: 'The process takes 3 months, but Malik eventually receives documentation that most financial institutions accept.',
                                success: true
                            }
                        ]
                    },
                    {
                        title: 'Address Verification',
                        description: 'The bank requires proof of address, but Malik lives in a refugee settlement without formal address documentation.',
                        options: [
                            {
                                id: 1,
                                text: 'Provide refugee settlement assignment documents',
                                outcome: 'While not a standard proof of address, some specialized financial services for refugees accept these documents.',
                                success: true,
                                partialSuccess: true
                            },
                            {
                                id: 2,
                                text: 'Get a letter from the settlement administrator',
                                outcome: 'An official letter from the settlement administration satisfies the bank\'s requirements for address verification.',
                                success: true
                            },
                            {
                                id: 3,
                                text: 'Use a relative\'s address outside the settlement',
                                outcome: 'This misrepresentation could lead to account closure if discovered and creates logistical problems for receiving important notices.',
                                success: false
                            }
                        ]
                    },
                    {
                        title: 'Cross-Border Family Support',
                        description: 'Malik needs to send money to family members who remained in South Sudan or fled to other countries.',
                        options: [
                            {
                                id: 1,
                                text: 'Use traditional bank wire transfers',
                                outcome: 'High fees consume nearly 20% of the small amounts Malik sends, and recipients without bank accounts struggle to collect the funds.',
                                success: true,
                                partialSuccess: true
                            },
                            {
                                id: 2,
                                text: 'Try mobile money services',
                                outcome: 'Works well for recipients in countries with compatible mobile money systems, but limited options for cross-border transfers to South Sudan.',
                                success: true,
                                partialSuccess: true
                            },
                            {
                                id: 3,
                                text: 'Use refugee-focused remittance services',
                                outcome: 'Specialized services with pickup locations near refugee settlements offer lower fees and more accessible collection points for recipients.',
                                success: true
                            }
                        ]
                    },
                    {
                        title: 'Building Financial History',
                        description: 'Without previous banking records, Malik struggles to access credit for starting a small business in his new community.',
                        options: [
                            {
                                id: 1,
                                text: 'Join a refugee savings and lending group',
                                outcome: 'The group provides small loans based on trust and participation, helping Malik build a track record of repayment.',
                                success: true
                            },
                            {
                                id: 2,
                                text: 'Apply for microfinance targeted at refugees',
                                outcome: 'A specialized microfinance institution offers Malik a small starter loan with financial education support.',
                                success: true
                            },
                            {
                                id: 3,
                                text: 'Apply for traditional bank loans',
                                outcome: 'Without credit history or collateral, Malik is rejected by all traditional lenders he approaches.',
                                success: false
                            }
                        ]
                    }
                ]
            };
            
            useEffect(() => {
                // Update sub-progress based on current step in journey
                if (!selectedPersona) {
                    setSubProgress(0);
                } else {
                    const totalSteps = journeyPaths[selectedPersona].length;
                    const newProgress = journeyComplete ? 100 : Math.min(100, (currentStep / totalSteps) * 100);
                    setSubProgress(newProgress);
                    
                    // Complete step if journey is complete
                    if (journeyComplete) {
                        completeStep(2);
                    }
                }
                
                // Update main progress
                updateProgress((subProgress / 3) + (1 / 3 * 100)); // 1/3 for previous challenge + current progress
            }, [selectedPersona, currentStep, journeyComplete, subProgress]);
            
            const startJourney = (personaId) => {
                setSelectedPersona(personaId);
                setCurrentStep(0);
                setAttempts(0);
                setJourneyComplete(false);
                setSelectedOption(null);
                setFeedbackMessage('');
                setFeedbackType('');
            };
            
            const handleOptionSelect = (optionId) => {
                setSelectedOption(optionId);
                
                const selectedOptionObj = journeyPaths[selectedPersona][currentStep].options.find(o => o.id === optionId);
                
                if (selectedOptionObj.success) {
                    if (selectedOptionObj.partialSuccess) {
                        setFeedbackType('warning');
                        setFeedbackMessage(`Partial success: ${selectedOptionObj.outcome}`);
                    } else {
                        setFeedbackType('success');
                        setFeedbackMessage(`Success! ${selectedOptionObj.outcome}`);
                    }
                } else {
                    setFeedbackType('error');
                    setFeedbackMessage(`Challenge: ${selectedOptionObj.outcome}`);
                    setAttempts(attempts + 1);
                }
            };
            
            const handleNextStep = () => {
                if (currentStep < journeyPaths[selectedPersona].length - 1) {
                    setCurrentStep(currentStep + 1);
                    setSelectedOption(null);
                    setFeedbackMessage('');
                    setFeedbackType('');
                } else {
                    // Journey complete
                    setJourneyComplete(true);
                }
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 2: Banking Journey Simulator</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Experience the process of opening and using a bank account from the perspective of different individuals facing financial exclusion.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Banking processes that seem simple to the privileged can be nearly impossible for others. Walk in someone else's shoes to understand the real barriers they face."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "When my neighbor lost her husband, the banks wouldn't even speak to her without a male relative present. These are not just inconveniences—they're walls that keep people trapped in poverty."</p>
                    </div>
                    
                    <div className="banking-journey">
                        {!selectedPersona ? (
                            <>
                                <h3>Select a Character:</h3>
                                <div className="persona-selection">
                                    {personas.map(persona => (
                                        <div 
                                            key={persona.id}
                                            className="persona-card"
                                            onClick={() => startJourney(persona.id)}
                                        >
                                            <div className="persona-avatar">{persona.emoji}</div>
                                            <div className="persona-name">{persona.name}</div>
                                            <div className="persona-details">{persona.description}</div>
                                            <p>{persona.details}</p>
                                            <button className="button" style={{ marginTop: '1rem' }}>
                                                Start Journey
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : journeyComplete ? (
                            <div className="journey-result">
                                <h3>Journey Complete</h3>
                                <p style={{ margin: '1rem 0' }}>
                                    {selectedPersona === 'amina' ? 
                                        'After multiple attempts and significant time and cost, Amina now has a basic bank account. However, the high fees, minimum balance requirements, and distance to the branch mean she will likely use it sparingly.' : 
                                     selectedPersona === 'kwame' ? 
                                        'Kwame has established a combination of mobile banking and community savings groups that work for his informal business, though he still faces limitations in accessing larger loans and more sophisticated financial services.' : 
                                        'Malik has overcome significant documentation challenges to establish basic financial services, but continues to face higher costs and limited options compared to citizens with full documentation.'}
                                </p>
                                
                                <div className="journey-stats">
                                    <div className="journey-stat">
                                        <div className="journey-stat-value">{attempts + 1}</div>
                                        <div className="journey-stat-label">Attempts Needed</div>
                                    </div>
                                    
                                    <div className="journey-stat">
                                        <div className="journey-stat-value">
                                            {selectedPersona === 'amina' ? '30km' : 
                                             selectedPersona === 'kwame' ? '4hrs' : 
                                             '90 days'}
                                        </div>
                                        <div className="journey-stat-label">
                                            {selectedPersona === 'amina' ? 'Distance Traveled' : 
                                             selectedPersona === 'kwame' ? 'Work Time Lost' : 
                                             'Wait for Documentation'}
                                        </div>
                                    </div>
                                    
                                    <div className="journey-stat">
                                        <div className="journey-stat-value">
                                            {selectedPersona === 'amina' ? '18%' : 
                                             selectedPersona === 'kwame' ? '12%' : 
                                             '25%'}
                                        </div>
                                        <div className="journey-stat-label">
                                            Fees as % of Income
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
                                    <button 
                                        className="button"
                                        onClick={() => setSelectedPersona(null)}
                                    >
                                        Try Another Character
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="journey-simulator">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div className="persona-avatar" style={{ width: 60, height: 60, margin: 0 }}>
                                        {personas.find(p => p.id === selectedPersona).emoji}
                                    </div>
                                    <div>
                                        <h3>{personas.find(p => p.id === selectedPersona).name}'s Banking Journey</h3>
                                        <p>{personas.find(p => p.id === selectedPersona).description}</p>
                                    </div>
                                </div>
                                
                                <div className="journey-step">
                                    <div className="step-number">{currentStep + 1}</div>
                                    <h3 className="step-title">{journeyPaths[selectedPersona][currentStep].title}</h3>
                                    <p className="step-description">{journeyPaths[selectedPersona][currentStep].description}</p>
                                    
                                    <div className="step-options">
                                        {journeyPaths[selectedPersona][currentStep].options.map(option => (
                                            <div 
                                                key={option.id}
                                                className={`step-option ${selectedOption === option.id ? 'selected' : ''}`}
                                                onClick={() => handleOptionSelect(option.id)}
                                            >
                                                {option.text}
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {feedbackMessage && (
                                        <div className={`step-feedback ${feedbackType}`}>
                                            {feedbackMessage}
                                        </div>
                                    )}
                                    
                                    {selectedOption && (
                                        <button 
                                            className="button"
                                            onClick={handleNextStep}
                                            style={{ marginTop: '1.5rem' }}
                                        >
                                            Continue Journey
                                        </button>
                                    )}
                                </div>
                                
                                <div className="progress-bar-container">
                                    <div 
                                        className="progress-bar" 
                                        style={{ 
                                            width: `${((currentStep + 1) / journeyPaths[selectedPersona].length) * 100}%` 
                                        }}
                                    ></div>
                                </div>
                                
                                <div style={{ textAlign: 'center', margin: '1rem 0', color: 'var(--neutral)' }}>
                                    Step {currentStep + 1} of {journeyPaths[selectedPersona].length}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };
        
        // Solution Matchmaker Component
        const SolutionMatchmaker = ({ activeCharacter, completeStep, updateProgress }) => {
            const [currentChallenge, setCurrentChallenge] = useState(0);
            const [selectedSolution, setSelectedSolution] = useState(null);
            const [matchResult, setMatchResult] = useState(null);
            const [score, setScore] = useState(0);
            const [completedChallenges, setCompletedChallenges] = useState([]);
            const [subProgress, setSubProgress] = useState(0);
            
            const challenges = [
                {
                    id: 'rural',
                    title: 'Rural Banking Access',
                    description: 'Communities in remote areas of Tanzania live 50+ kilometers from the nearest bank branch, making basic financial services inaccessible.',
                    image: '🏔️',
                    bestSolutions: ['mobile', 'agent'],
                    goodSolutions: ['community'],
                    poorSolutions: ['digital', 'biometric']
                },
                {
                    id: 'women',
                    title: 'Women\'s Financial Independence',
                    description: 'Cultural norms and regulatory frameworks in Northern Nigeria require women to have male guardian approval for financial accounts.',
                    image: '👩‍👧',
                    bestSolutions: ['gender', 'community'],
                    goodSolutions: ['mobile', 'biometric'],
                    poorSolutions: ['digital', 'agent']
                },
                {
                    id: 'documentation',
                    title: 'Identity Documentation Barriers',
                    description: 'Over 40% of adults in Mali lack any form of official identification, preventing them from opening accounts under standard KYC requirements.',
                    image: '📝',
                    bestSolutions: ['biometric', 'tiered'],
                    goodSolutions: ['community', 'mobile'],
                    poorSolutions: ['digital', 'gender']
                },
                {
                    id: 'literacy',
                    title: 'Financial and Digital Literacy',
                    description: 'Low literacy rates in rural Mozambique prevent many from understanding banking terms or using digital interfaces.',
                    image: '📱',
                    bestSolutions: ['voice', 'agent'],
                    goodSolutions: ['community', 'pictorial'],
                    poorSolutions: ['digital', 'tiered']
                }
            ];
            
            const solutions = [
                {
                    id: 'mobile',
                    title: 'Mobile Money Services',
                    description: 'Phone-based money accounts that work without smartphones or internet',
                    icon: '📱'
                },
                {
                    id: 'agent',
                    title: 'Banking Agents',
                    description: 'Local representatives who offer banking services in their shops',
                    icon: '🏪'
                },
                {
                    id: 'community',
                    title: 'Community Savings Groups',
                    description: 'Self-organized groups that pool savings and offer loans to members',
                    icon: '👥'
                },
                {
                    id: 'digital',
                    title: 'Digital-Only Banking',
                    description: 'Smartphone apps offering full banking services without branches',
                    icon: '💻'
                },
                {
                    id: 'biometric',
                    title: 'Biometric Identification',
                    description: 'Using fingerprints or facial recognition instead of documents',
                    icon: '👆'
                },
                {
                    id: 'gender',
                    title: 'Gender-Responsive Banking',
                    description: 'Services designed specifically for women\'s needs and constraints',
                    icon: '⚧️'
                },
                {
                    id: 'tiered',
                    title: 'Tiered KYC Requirements',
                    description: 'Simplified accounts with lower documentation for basic services',
                    icon: '🔍'
                },
                {
                    id: 'voice',
                    title: 'Voice-Guided Interfaces',
                    description: 'Banking services that work through voice commands in local languages',
                    icon: '🔊'
                },
                {
                    id: 'pictorial',
                    title: 'Pictorial Interfaces',
                    description: 'Visual banking interfaces that require minimal reading',
                    icon: '🖼️'
                }
            ];
            
            useEffect(() => {
                // Update sub-progress based on completed challenges
                const newProgress = (completedChallenges.length / challenges.length) * 100;
                setSubProgress(newProgress);
                
                if (completedChallenges.length === challenges.length) {
                    completeStep(3);
                }
                
                // Update main progress
                updateProgress((newProgress / 3) + (2 / 3 * 100)); // 2/3 for previous challenges
            }, [completedChallenges]);
            
            const handleSolutionSelect = (solutionId) => {
                setSelectedSolution(solutionId);
                
                const challenge = challenges[currentChallenge];
                let result = '';
                let matchScore = 0;
                
                if (challenge.bestSolutions.includes(solutionId)) {
                    result = 'good';
                    matchScore = 3;
                    setMatchResult(`Excellent match! This solution directly addresses the core challenges of ${challenge.title.toLowerCase()}.`);
                } else if (challenge.goodSolutions.includes(solutionId)) {
                    result = 'poor';
                    matchScore = 1;
                    setMatchResult(`Partial match. This solution helps but doesn't address all aspects of ${challenge.title.toLowerCase()}.`);
                } else {
                    result = 'bad';
                    matchScore = 0;
                    setMatchResult(`Poor match. This solution may not be effective for ${challenge.title.toLowerCase()} due to specific contextual barriers.`);
                }
                
                setScore(score + matchScore);
            };
            
            const handleNextChallenge = () => {
                if (!completedChallenges.includes(currentChallenge)) {
                    setCompletedChallenges([...completedChallenges, currentChallenge]);
                }
                
                if (currentChallenge < challenges.length - 1) {
                    setCurrentChallenge(currentChallenge + 1);
                    setSelectedSolution(null);
                    setMatchResult(null);
                } else {
                    // All challenges completed
                    // Result screen is shown based on completedChallenges state
                }
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 3: Solution Matchmaker</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Match innovative financial solutions to real exclusion challenges faced by different communities across Africa.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Different exclusion challenges require different solutions. What works in an urban area might fail completely in a rural setting. Context matters in designing effective financial inclusion."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "Our communities have always found ways to support each other financially. The new solutions must respect and build on our traditional systems, not replace them."</p>
                    </div>
                    
                    <div className="solution-matchmaker">
                        {completedChallenges.length === challenges.length ? (
                            <div className="summary-box">
                                <h3 className="summary-title">Challenge Complete!</h3>
                                <div className="score-container">
                                    <div className="score-display">{score}/{challenges.length * 3}</div>
                                    <div className="score-label">Solution Matching Score</div>
                                </div>
                                
                                <div style={{ margin: '2rem 0' }}>
                                    <h3>Your Insights:</h3>
                                    <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                        <li>The most effective solutions are context-specific and address multiple barriers simultaneously</li>
                                        <li>Technology alone cannot solve financial exclusion without addressing underlying structural issues</li>
                                        <li>Community-based approaches often complement more formal technological solutions</li>
                                        <li>Different populations require tailored approaches to financial inclusion</li>
                                    </ul>
                                </div>
                                
                                <div style={{ margin: '2rem 0' }}>
                                    <h3>Solution Effectiveness Heatmap</h3>
                                    <div className="heatmap-container">
                                        <div className="heatmap">
                                            <div className="heatmap-row">
                                                <div className="heatmap-header">Challenge / Solution</div>
                                                <div className="heatmap-header">Mobile Money</div>
                                                <div className="heatmap-header">Banking Agents</div>
                                                <div className="heatmap-header">Community Groups</div>
                                                <div className="heatmap-header">Biometric ID</div>
                                            </div>
                                            
                                            <div className="heatmap-row">
                                                <div className="heatmap-header">Rural Access</div>
                                                <div className="heatmap-cell level-5">High</div>
                                                <div className="heatmap-cell level-5">High</div>
                                                <div className="heatmap-cell level-3">Medium</div>
                                                <div className="heatmap-cell level-1">Low</div>
                                            </div>
                                            
                                            <div className="heatmap-row">
                                                <div className="heatmap-header">Women's Access</div>
                                                <div className="heatmap-cell level-3">Medium</div>
                                                <div className="heatmap-cell level-2">Low-Med</div>
                                                <div className="heatmap-cell level-5">High</div>
                                                <div className="heatmap-cell level-3">Medium</div>
                                            </div>
                                            
                                            <div className="heatmap-row">
                                                <div className="heatmap-header">ID Barriers</div>
                                                <div className="heatmap-cell level-3">Medium</div>
                                                <div className="heatmap-cell level-2">Low-Med</div>
                                                <div className="heatmap-cell level-3">Medium</div>
                                                <div className="heatmap-cell level-5">High</div>
                                            </div>
                                            
                                            <div className="heatmap-row">
                                                <div className="heatmap-header">Low Literacy</div>
                                                <div className="heatmap-cell level-2">Low-Med</div>
                                                <div className="heatmap-cell level-5">High</div>
                                                <div className="heatmap-cell level-3">Medium</div>
                                                <div className="heatmap-cell level-1">Low</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{ margin: '2rem 0' }}>
                                    <h3>Success Stories:</h3>
                                    <div style={{ marginTop: '1rem', lineHeight: '1.6' }}>
                                        <p><strong>M-Pesa in Kenya</strong> - Mobile money serving over 30 million users without requiring bank accounts or smartphones</p>
                                        <p><strong>BRAC in Uganda</strong> - Microfinance with gender-responsive services tailored to women's needs</p>
                                        <p><strong>VSLA in Mali</strong> - Village Savings and Loan Associations providing community-managed finance</p>
                                        <p><strong>Aadhaar in India</strong> - World's largest biometric ID system enabling financial inclusion</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="challenge-container">
                                <div className="challenge-card">
                                    <h3 className="challenge-title">
                                        <span style={{ marginRight: '0.5rem' }}>{challenges[currentChallenge].image}</span>
                                        <span>{challenges[currentChallenge].title}</span>
                                    </h3>
                                    <p>{challenges[currentChallenge].description}</p>
                                    
                                    <h3 style={{ margin: '1.5rem 0 1rem' }}>Select the Best Solution:</h3>
                                    <div className="solutions-container">
                                        {solutions.map(solution => (
                                            <div 
                                                key={solution.id}
                                                className={`solution-card ${selectedSolution === solution.id ? 'selected' : ''}`}
                                                onClick={() => handleSolutionSelect(solution.id)}
                                            >
                                                <div className="solution-icon">{solution.icon}</div>
                                                <div className="solution-title">{solution.title}</div>
                                                <p>{solution.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {matchResult && (
                                        <div className={`match-result ${selectedSolution && challenges[currentChallenge].bestSolutions.includes(selectedSolution) ? 'good' : challenges[currentChallenge].goodSolutions.includes(selectedSolution) ? 'poor' : 'bad'}`}>
                                            {matchResult}
                                        </div>
                                    )}
                                    
                                    {selectedSolution && (
                                        <button 
                                            className="button"
                                            onClick={handleNextChallenge}
                                            style={{ marginTop: '1.5rem' }}
                                        >
                                            {currentChallenge < challenges.length - 1 ? 'Next Challenge' : 'Complete Challenge'}
                                        </button>
                                    )}
                                </div>
                                
                                <div className="progress-bar-container">
                                    <div 
                                        className="progress-bar" 
                                        style={{ 
                                            width: `${((currentChallenge + 1) / challenges.length) * 100}%` 
                                        }}
                                    ></div>
                                </div>
                                
                                <div style={{ textAlign: 'center', margin: '1rem 0', color: 'var(--neutral)' }}>
                                    Challenge {currentChallenge + 1} of {challenges.length}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };
        
        // Render the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>