<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mission 2.5: Knowledge Test — Fiat vs Freedom</title>
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
        .dark-mode .scenario-card,
        .dark-mode .achievement,
        .dark-mode .summary-box,
        .dark-mode .design-feature,
        .dark-mode .quiz-option,
        .dark-mode .money-feature,
        .dark-mode .dilemma-card,
        .dark-mode .mission-progress,
        .dark-mode .results-card,
        .dark-mode .money-system {
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
            background-color: white;
        }
        
        .dark-mode .reflection-input {
            background-color: var(--bg-dark);
            color: var(--light-text);
            border-color: #555;
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
        
        /* Scenario-Based Quiz Styles */
        .scenario-quiz {
            margin: 2rem 0;
        }
        
        .scenario-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: var(--shadow);
        }
        
        .scenario-title {
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .scenario-description {
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        
        .quiz-options {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }
        
        .quiz-option {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background-color: white;
            padding: 0.75rem;
            border-radius: var(--border-radius);
            border: 1px solid #ddd;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .quiz-option:hover {
            border-color: var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
        }
        
        .quiz-option.selected {
            border-color: var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
        }
        
        .quiz-option-indicator {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .quiz-option.selected .quiz-option-indicator {
            border-color: var(--primary);
            background-color: var(--primary);
            color: white;
        }
        
        .quiz-feedback {
            padding: 1rem;
            border-radius: var(--border-radius);
            margin-bottom: 1.5rem;
            display: none;
        }
        
        .quiz-feedback.correct {
            background-color: #E8F5E9;
            border-left: 4px solid var(--success);
            display: block;
        }
        
        .quiz-feedback.incorrect {
            background-color: #FFEBEE;
            border-left: 4px solid var(--danger);
            display: block;
        }
        
        .quiz-score {
            text-align: center;
            margin: 2rem 0;
        }
        
        .score-value {
            font-size: 3rem;
            font-weight: 700;
            color: var(--primary);
        }
        
        .score-label {
            font-size: 1.25rem;
            color: var(--neutral);
        }
        
        /* Money Design Challenge Styles */
        .money-design {
            margin: 2rem 0;
        }
        
        .design-features {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .design-feature {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1rem;
            box-shadow: var(--shadow);
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid transparent;
        }
        
        .design-feature:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
        
        .design-feature.selected {
            border-color: var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
        }
        
        .feature-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .money-system {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-top: 2rem;
            box-shadow: var(--shadow);
        }
        
        .money-system-title {
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .money-features {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 1.5rem 0;
        }
        
        .money-feature {
            background-color: var(--light-yellow);
            border-radius: 20px;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .remove-feature {
            background: none;
            border: none;
            color: var(--danger);
            cursor: pointer;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .resistance-scores {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 2rem 0;
        }
        
        .resistance-score {
            text-align: center;
            margin: 0.5rem;
            min-width: 120px;
        }
        
        .resistance-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
        }
        
        .resistance-label {
            font-size: 0.875rem;
            color: var(--neutral);
        }
        
        .resistance-meter {
            width: 100%;
            height: 8px;
            background-color: #e0e0e0;
            border-radius: 4px;
            margin-top: 0.5rem;
            overflow: hidden;
        }
        
        .resistance-fill {
            height: 100%;
            background-color: var(--primary);
            border-radius: 4px;
        }
        
        /* Ethical Dilemmas Styles */
        .ethical-dilemmas {
            margin: 2rem 0;
        }
        
        .dilemma-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: var(--shadow);
        }
        
        .dilemma-title {
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .dilemma-description {
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        
        .slider-container {
            margin: 2rem 0;
        }
        
        .slider-labels {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }
        
        .slider-label {
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .custom-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            border-radius: 4px;
            background: #e0e0e0;
            outline: none;
            margin: 1rem 0;
        }
        
        .custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: var(--primary);
            cursor: pointer;
            border: 2px solid white;
        }
        
        .custom-slider::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: var(--primary);
            cursor: pointer;
            border: 2px solid white;
        }
        
        .slider-value {
            text-align: center;
            font-weight: 700;
            margin-top: 0.5rem;
        }
        
        .dilemma-options {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            flex-wrap: wrap;
        }
        
        .dilemma-option {
            background-color: var(--light-yellow);
            border-radius: var(--border-radius);
            padding: 1rem;
            margin: 0.5rem;
            cursor: pointer;
            transition: var(--transition);
            flex: 1;
            min-width: 200px;
            border: 2px solid transparent;
        }
        
        .dilemma-option:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }
        
        .dilemma-option.selected {
            border-color: var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
        }
        
        .dilemma-option-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .results-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin: 1.5rem 0;
            box-shadow: var(--shadow);
        }
        
        .results-title {
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .results-chart {
            height: 300px;
            margin: 2rem 0;
            position: relative;
        }
        
        .chart-bar {
            position: absolute;
            bottom: 0;
            width: 60px;
            background-color: var(--primary);
            border-radius: 4px 4px 0 0;
            transition: height 1s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .chart-bar-label {
            position: absolute;
            bottom: -25px;
            text-align: center;
            font-size: 0.875rem;
            width: 100%;
        }
        
        .chart-bar-value {
            position: absolute;
            top: -25px;
            color: var(--primary);
            font-weight: 700;
        }
        
        .chart-label-y {
            position: absolute;
            left: -30px;
            top: 50%;
            transform: translateY(-50%) rotate(-90deg);
            font-weight: 700;
            color: var(--neutral);
        }
        
        .chart-label-x {
            position: absolute;
            bottom: -50px;
            width: 100%;
            text-align: center;
            font-weight: 700;
            color: var(--neutral);
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
            
            .design-features {
                grid-template-columns: 1fr;
            }
            
            .dilemma-options {
                flex-direction: column;
            }
            
            .dilemma-option {
                margin: 0.5rem 0;
            }
            
            .resistance-scores {
                flex-direction: column;
                align-items: center;
            }
            
            .resistance-score {
                width: 100%;
                margin: 0.5rem 0;
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
                        unlockAchievement('Monetary Sage', 'You\'ve mastered the scenario-based knowledge test!');
                    } else if (stepNum === 2) {
                        unlockAchievement('Money Architect', 'You\'ve designed a resistant monetary system!');
                    } else if (stepNum === 3) {
                        unlockAchievement('Ethical Thinker', 'You\'ve navigated complex monetary policy dilemmas!');
                    }
                }
            };
            
            return (
                <div className="app-container">
                    <header className="header">
                        <h1 className="mission-title">Mission 2.5: Knowledge Test — Fiat vs Freedom</h1>
                        <p className="mission-subtitle">Test your understanding of fiat money risks and alternatives like Bitcoin.</p>
                        
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
                            <p>In this mission, you'll consolidate your understanding of fiat money vulnerabilities and explore alternatives. Through scenario-based questions, a money design challenge, and ethical dilemmas, you'll evaluate the trade-offs between control and freedom in monetary systems.</p>
                        </div>
                        
                        <div className="dialog-box">
                            <div className="dialog-character">A</div>
                            <p><strong>Asha:</strong> "Now that we've explored the problems with state-controlled money, let's test your understanding. Not all money systems are created equal when it comes to protecting freedom and sovereignty."</p>
                        </div>
                        
                        <div className="dialog-box odu">
                            <div className="dialog-character">O</div>
                            <p><strong>Odu:</strong> "Our ancestors understood that whoever controls the money controls the people. The questions we face about money today are not just technical—they are deeply ethical and impact how power flows in society."</p>
                        </div>
                    </section>
                    
                    <div className="mission-progress">
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 1 ? 'active' : ''} ${completedSteps.includes(1) ? 'completed' : ''}`}>1</div>
                            <div className="progress-label">Scenario-Based Quiz</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 2 ? 'active' : ''} ${completedSteps.includes(2) ? 'completed' : ''}`}>2</div>
                            <div className="progress-label">Money Design Challenge</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 3 ? 'active' : ''} ${completedSteps.includes(3) ? 'completed' : ''}`}>3</div>
                            <div className="progress-label">Ethical Dilemmas</div>
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
                        <ScenarioQuiz
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 2 && (
                        <MoneyDesign
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 3 && (
                        <EthicalDilemmas
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    <div className="section">
                        <div className="section-content">
                            <div className="reflection">
                                <h3 className="section-title">Final Reflection</h3>
                                <p className="reflection-question">Based on everything you've learned, what do you think makes a monetary system resistant to control and censorship? How might these principles apply to your own financial choices?</p>
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
                                        unlockAchievement('Mission Complete', 'You\'ve completed all challenges in Mission 2.5!');
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
                                        <div>Fiat currencies are vulnerable to inflation, surveillance, and censorship</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Monetary policies involve complex trade-offs between stability and freedom</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Decentralized systems like Bitcoin offer resistance to censorship and control</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>No monetary system is perfect—each involves compromises between competing values</div>
                                    </div>
                                </div>
                                
                                <div className="completion-badge">
                                    <div className="badge-icon">🛡️</div>
                                    <div className="badge-title">Monetary Freedom Guardian</div>
                                    <div>You've completed Mission 2.5</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Scenario-Based Quiz Component
        const ScenarioQuiz = ({ activeCharacter, completeStep, updateProgress }) => {
            const [currentQuestion, setCurrentQuestion] = useState(0);
            const [selectedAnswer, setSelectedAnswer] = useState(null);
            const [feedback, setFeedback] = useState('');
            const [feedbackType, setFeedbackType] = useState('');
            const [score, setScore] = useState(0);
            const [completed, setCompleted] = useState(false);
            const [subProgress, setSubProgress] = useState(0);
            
            const questions = [
                {
                    scenario: "In 2009, following a disputed election, the government of Zimbabwe froze the bank accounts of opposition supporters and organizations. Many were unable to pay for basic necessities.",
                    question: "Which feature of fiat money made this form of political control possible?",
                    options: [
                        { id: 1, text: "The physical nature of cash" },
                        { id: 2, text: "Central control over digital banking systems" },
                        { id: 3, text: "The high inflation rate of the currency" },
                        { id: 4, text: "International sanctions against Zimbabwe" }
                    ],
                    correctAnswer: 2,
                    explanation: "Centralized control over banking systems allows governments to monitor, freeze, or seize funds in digital accounts. This power enables financial censorship against political opponents, activists, or any targeted group."
                },
                {
                    scenario: "Between 2007 and 2022, the U.S. Federal Reserve expanded its balance sheet from $870 billion to over $8.9 trillion, increasing the money supply dramatically through quantitative easing.",
                    question: "Which of the following groups likely benefited most from this monetary expansion?",
                    options: [
                        { id: 1, text: "Working-class people with savings in cash" },
                        { id: 2, text: "Retirees living on fixed incomes" },
                        { id: 3, text: "Asset owners (stocks, real estate, etc.)" },
                        { id: 4, text: "People holding government bonds" }
                    ],
                    correctAnswer: 3,
                    explanation: "Quantitative easing tends to inflate asset prices by pushing more money into financial markets. This disproportionately benefits those who already own assets like stocks and real estate, while savers and those on fixed incomes often see their purchasing power eroded by the resulting inflation."
                },
                {
                    scenario: "In 2020, Nigeria's government allegedly froze bank accounts associated with protesters from the #EndSARS movement, which demonstrated against police brutality.",
                    question: "What alternative payment method offered the most censorship resistance for activists in this situation?",
                    options: [
                        { id: 1, text: "Mobile banking apps" },
                        { id: 2, text: "International wire transfers" },
                        { id: 3, text: "Bitcoin and other cryptocurrencies" },
                        { id: 4, text: "Prepaid debit cards" }
                    ],
                    correctAnswer: 3,
                    explanation: "Bitcoin and other decentralized cryptocurrencies operate outside government-controlled banking systems, making them resistant to censorship. Activists can receive funds without requiring permission from banks that might comply with government orders to freeze accounts."
                },
                {
                    scenario: "In 2008, Zimbabwe's annual inflation rate reached 89.7 sextillion percent. A loaf of bread that cost Z$500 at the beginning of the year would have cost trillions by year-end.",
                    question: "What is the primary cause of such extreme hyperinflation?",
                    options: [
                        { id: 1, text: "Natural disasters disrupting the supply chain" },
                        { id: 2, text: "Excessive government money printing to fund expenses" },
                        { id: 3, text: "Foreign currency manipulation" },
                        { id: 4, text: "Private bank lending practices" }
                    ],
                    correctAnswer: 2,
                    explanation: "Hyperinflation occurs when governments resort to excessive money printing to fund expenses or service debts. Without the discipline of a fixed money supply, governments can create currency at will, rapidly devaluing existing money and causing prices to skyrocket."
                },
                {
                    scenario: "The U.S. dollar serves as the world's primary reserve currency, with about 60% of global foreign exchange reserves held in dollars. Many commodities, including oil, are priced and traded in dollars.",
                    question: "How does this 'dollar dominance' affect developing nations?",
                    options: [
                        { id: 1, text: "It insulates them from global economic fluctuations" },
                        { id: 2, text: "It forces them to accumulate dollar reserves and accept U.S. monetary policy decisions" },
                        { id: 3, text: "It allows them to print their own currencies with fewer consequences" },
                        { id: 4, text: "It gives them more control over their domestic monetary policies" }
                    ],
                    correctAnswer: 2,
                    explanation: "Dollar dominance forces developing nations to accumulate dollar reserves and makes them vulnerable to U.S. monetary policy decisions. When the Federal Reserve raises interest rates or changes policy, it can trigger capital flight, currency crises, or debt problems in countries that have no say in these decisions."
                }
            ];
            
            useEffect(() => {
                // Update sub-progress based on current question
                const totalQuestions = questions.length;
                const newProgress = completed ? 100 : Math.min(100, ((currentQuestion + 1) / totalQuestions) * 100);
                setSubProgress(newProgress);
                
                // Update main progress
                updateProgress(newProgress / 3); // First challenge contributes 1/3 to overall progress
                
                if (completed) {
                    completeStep(1);
                }
            }, [currentQuestion, completed]);
            
            const handleOptionSelect = (optionId) => {
                setSelectedAnswer(optionId);
                
                const isCorrect = optionId === questions[currentQuestion].correctAnswer;
                
                if (isCorrect) {
                    setFeedbackType('correct');
                    setFeedback(`Correct! ${questions[currentQuestion].explanation}`);
                    setScore(score + 1);
                } else {
                    setFeedbackType('incorrect');
                    setFeedback(`Incorrect. ${questions[currentQuestion].explanation}`);
                }
            };
            
            const handleNextQuestion = () => {
                if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                    setSelectedAnswer(null);
                    setFeedback('');
                    setFeedbackType('');
                } else {
                    // Quiz completed
                    setCompleted(true);
                }
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 1: Scenario-Based Quiz</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Test your understanding of fiat money vulnerabilities through real-world scenarios. Select the correct answer for each question.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "These aren't just theoretical concepts—they're playing out right now across Africa and the world. Let's see if you can identify the real dynamics of monetary control in these scenarios."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "Money problems might seem abstract until they affect your daily life. I've seen how currency collapses can destroy a family's savings overnight, and how financial control can silence voices of dissent."</p>
                    </div>
                    
                    <div className="scenario-quiz">
                        {completed ? (
                            <div>
                                <div className="quiz-score">
                                    <div className="score-value">{score}/{questions.length}</div>
                                    <div className="score-label">Correct Answers</div>
                                </div>
                                
                                <div className="summary-box">
                                    <h3 className="summary-title">Quiz Complete!</h3>
                                    
                                    <div style={{ margin: '1.5rem 0' }}>
                                        <h4 style={{ marginBottom: '1rem' }}>Key Concepts:</h4>
                                        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                            <li><strong>Financial Censorship:</strong> Central authorities can freeze accounts and block transactions</li>
                                            <li><strong>Monetary Inflation:</strong> Unlimited money creation devalues currency and erodes savings</li>
                                            <li><strong>Asset Inequality:</strong> Inflationary policies disproportionately benefit asset owners</li>
                                            <li><strong>Dollar Hegemony:</strong> Global dollar dominance creates dependency for developing nations</li>
                                            <li><strong>Censorship Resistance:</strong> Decentralized systems provide protection against financial control</li>
                                        </ul>
                                    </div>
                                    
                                    {score < 3 ? (
                                        <div className="quiz-feedback incorrect">
                                            You might benefit from reviewing the previous missions to strengthen your understanding of monetary systems and their impacts.
                                        </div>
                                    ) : score < 5 ? (
                                        <div className="quiz-feedback correct">
                                            Good job! You have a solid understanding of how fiat currencies can be used as tools of control and their economic impacts.
                                        </div>
                                    ) : (
                                        <div className="quiz-feedback correct">
                                            Excellent! You have a comprehensive understanding of the vulnerabilities of fiat systems and alternatives that offer greater freedom.
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="scenario-card">
                                <h3 className="scenario-title">Scenario {currentQuestion + 1}/{questions.length}</h3>
                                <p className="scenario-description">{questions[currentQuestion].scenario}</p>
                                <p style={{ fontWeight: '700', margin: '1rem 0' }}>{questions[currentQuestion].question}</p>
                                
                                <div className="quiz-options">
                                    {questions[currentQuestion].options.map(option => (
                                        <div 
                                            key={option.id}
                                            className={`quiz-option ${selectedAnswer === option.id ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect(option.id)}
                                        >
                                            <div className="quiz-option-indicator">
                                                {selectedAnswer === option.id ? '✓' : ''}
                                            </div>
                                            <div>{option.text}</div>
                                        </div>
                                    ))}
                                </div>
                                
                                {feedback && (
                                    <div className={`quiz-feedback ${feedbackType}`}>
                                        {feedback}
                                    </div>
                                )}
                                
                                {selectedAnswer && (
                                    <button 
                                        className="button"
                                        onClick={handleNextQuestion}
                                        style={{ marginTop: '1.5rem' }}
                                    >
                                        {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
                                    </button>
                                )}
                                
                                <div className="progress-bar-container">
                                    <div 
                                        className="progress-bar" 
                                        style={{ 
                                            width: `${((currentQuestion + 1) / questions.length) * 100}%` 
                                        }}
                                    ></div>
                                </div>
                                
                                <div style={{ textAlign: 'center', margin: '1rem 0', color: 'var(--neutral)' }}>
                                    Question {currentQuestion + 1} of {questions.length}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };
        
        // Money Design Challenge Component
        const MoneyDesign = ({ activeCharacter, completeStep, updateProgress }) => {
            const [selectedFeatures, setSelectedFeatures] = useState([]);
            const [subProgress, setSubProgress] = useState(0);
            
            const moneyFeatures = [
                { 
                    id: 'fixed-supply', 
                    name: 'Fixed Supply Cap', 
                    icon: '📊',
                    description: 'A maximum limit on how much money can ever exist',
                    censorship: 0,
                    surveillance: 0,
                    inflation: 5,
                    category: 'supply'
                },
                { 
                    id: 'decentralized', 
                    name: 'Decentralized Issuance', 
                    icon: '🌐',
                    description: 'No central authority can create or control the money',
                    censorship: 5,
                    surveillance: 3,
                    inflation: 4,
                    category: 'governance'
                },
                { 
                    id: 'privacy', 
                    name: 'Transaction Privacy', 
                    icon: '🕶️',
                    description: 'Transactions don\'t reveal identifying information',
                    censorship: 4,
                    surveillance: 5,
                    inflation: 0,
                    category: 'privacy'
                },
                { 
                    id: 'borderless', 
                    name: 'Borderless Transfers', 
                    icon: '🌍',
                    description: 'Can be sent anywhere without permission',
                    censorship: 4,
                    surveillance: 1,
                    inflation: 0,
                    category: 'transfer'
                },
                { 
                    id: 'permissionless', 
                    name: 'Permissionless Access', 
                    icon: '🔓',
                    description: 'Anyone can use it without approval or identification',
                    censorship: 5,
                    surveillance: 4,
                    inflation: 0,
                    category: 'access'
                },
                { 
                    id: 'open-source', 
                    name: 'Open Source Code', 
                    icon: '👁️',
                    description: 'Rules are transparent and publicly verifiable',
                    censorship: 3,
                    surveillance: 2,
                    inflation: 3,
                    category: 'transparency'
                },
                { 
                    id: 'self-custody', 
                    name: 'Self-Custody', 
                    icon: '🔑',
                    description: 'Users can hold their own money without intermediaries',
                    censorship: 5,
                    surveillance: 4,
                    inflation: 0,
                    category: 'control'
                },
                { 
                    id: 'digital', 
                    name: 'Digital Native', 
                    icon: '💻',
                    description: 'Exists primarily as digital information',
                    censorship: 0,
                    surveillance: 0,
                    inflation: 0,
                    category: 'form'
                },
                { 
                    id: 'fungible', 
                    name: 'Fungibility', 
                    icon: '🔄',
                    description: 'Each unit is identical and interchangeable',
                    censorship: 3,
                    surveillance: 2,
                    inflation: 0,
                    category: 'property'
                },
                { 
                    id: 'divisible', 
                    name: 'High Divisibility', 
                    icon: '✂️',
                    description: 'Can be divided into very small units',
                    censorship: 0,
                    surveillance: 0,
                    inflation: 0,
                    category: 'property'
                },
                { 
                    id: 'consensus', 
                    name: 'Community Consensus', 
                    icon: '👥',
                    description: 'Changes require broad agreement, not central decree',
                    censorship: 4,
                    surveillance: 2,
                    inflation: 4,
                    category: 'governance'
                },
                { 
                    id: 'physical', 
                    name: 'Physical Tokens', 
                    icon: '🪙',
                    description: 'Exists in tangible form that can be held',
                    censorship: 2,
                    surveillance: 3,
                    inflation: 1,
                    category: 'form'
                }
            ];
            
            useEffect(() => {
                // Update sub-progress based on selected features
                const minFeatures = 5; // Minimum features needed to complete
                const maxScore = 100;
                
                if (selectedFeatures.length >= minFeatures) {
                    setSubProgress(100);
                    completeStep(2);
                } else {
                    setSubProgress((selectedFeatures.length / minFeatures) * maxScore);
                }
                
                // Update main progress
                updateProgress((subProgress / 3) + (1 / 3 * 100)); // 1/3 for previous challenge
            }, [selectedFeatures, subProgress]);
            
            const handleFeatureSelect = (featureId) => {
                const isSelected = selectedFeatures.includes(featureId);
                
                if (isSelected) {
                    // Remove feature if already selected
                    setSelectedFeatures(selectedFeatures.filter(id => id !== featureId));
                } else {
                    // Add feature if not already selected
                    setSelectedFeatures([...selectedFeatures, featureId]);
                }
            };
            
            const removeFeature = (featureId) => {
                setSelectedFeatures(selectedFeatures.filter(id => id !== featureId));
            };
            
            // Calculate resistance scores based on selected features
            const calculateResistanceScores = () => {
                let censorshipResistance = 0;
                let surveillanceResistance = 0;
                let inflationResistance = 0;
                
                selectedFeatures.forEach(featureId => {
                    const feature = moneyFeatures.find(f => f.id === featureId);
                    censorshipResistance += feature.censorship;
                    surveillanceResistance += feature.surveillance;
                    inflationResistance += feature.inflation;
                });
                
                // Normalize scores to be out of 100
                const maxPossibleScore = 25; // If all 5 max resistance features (5 points each) were selected
                censorshipResistance = Math.min(100, (censorshipResistance / maxPossibleScore) * 100);
                surveillanceResistance = Math.min(100, (surveillanceResistance / maxPossibleScore) * 100);
                inflationResistance = Math.min(100, (inflationResistance / maxPossibleScore) * 100);
                
                return {
                    censorship: Math.round(censorshipResistance),
                    surveillance: Math.round(surveillanceResistance),
                    inflation: Math.round(inflationResistance),
                    overall: Math.round((censorshipResistance + surveillanceResistance + inflationResistance) / 3)
                };
            };
            
            const resistanceScores = calculateResistanceScores();
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 2: Money Design Challenge</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Design a monetary system that resists censorship, surveillance, and inflation. Select at least 5 features to build your ideal money system.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Money isn't neutral—its design determines who has power. Traditional currencies were designed for control, but we can reimagine money as a tool for freedom. What features would make money resistant to weaponization?"</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "Even our traditional exchange systems had rules that prevented any single chief or elder from controlling all trade. The best money systems distribute power rather than concentrate it."</p>
                    </div>
                    
                    <div className="money-design">
                        <h3>Available Features:</h3>
                        <div className="design-features">
                            {moneyFeatures.map(feature => (
                                <div 
                                    key={feature.id}
                                    className={`design-feature ${selectedFeatures.includes(feature.id) ? 'selected' : ''}`}
                                    onClick={() => handleFeatureSelect(feature.id)}
                                >
                                    <div className="feature-title">
                                        <span>{feature.icon}</span>
                                        <span>{feature.name}</span>
                                    </div>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="money-system">
                            <h3 className="money-system-title">Your Money System Design</h3>
                            <p>Selected features: {selectedFeatures.length}/5 minimum</p>
                            
                            <div className="money-features">
                                {selectedFeatures.map(featureId => {
                                    const feature = moneyFeatures.find(f => f.id === featureId);
                                    return (
                                        <div key={featureId} className="money-feature">
                                            <span>{feature.icon}</span>
                                            <span>{feature.name}</span>
                                            <button 
                                                className="remove-feature"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    removeFeature(featureId);
                                                }}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                            
                            <div className="resistance-scores">
                                <div className="resistance-score">
                                    <div className="resistance-value">{resistanceScores.censorship}%</div>
                                    <div className="resistance-label">Censorship Resistance</div>
                                    <div className="resistance-meter">
                                        <div className="resistance-fill" style={{ width: `${resistanceScores.censorship}%` }}></div>
                                    </div>
                                </div>
                                
                                <div className="resistance-score">
                                    <div className="resistance-value">{resistanceScores.surveillance}%</div>
                                    <div className="resistance-label">Surveillance Resistance</div>
                                    <div className="resistance-meter">
                                        <div className="resistance-fill" style={{ width: `${resistanceScores.surveillance}%` }}></div>
                                    </div>
                                </div>
                                
                                <div className="resistance-score">
                                    <div className="resistance-value">{resistanceScores.inflation}%</div>
                                    <div className="resistance-label">Inflation Resistance</div>
                                    <div className="resistance-meter">
                                        <div className="resistance-fill" style={{ width: `${resistanceScores.inflation}%` }}></div>
                                    </div>
                                </div>
                                
                                <div className="resistance-score">
                                    <div className="resistance-value">{resistanceScores.overall}%</div>
                                    <div className="resistance-label">Overall Resistance</div>
                                    <div className="resistance-meter">
                                        <div className="resistance-fill" style={{ width: `${resistanceScores.overall}%` }}></div>
                                    </div>
                                </div>
                            </div>
                            
                            {selectedFeatures.length >= 5 && (
                                <div>
                                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>System Analysis:</h3>
                                    
                                    {resistanceScores.overall >= 80 ? (
                                        <div className="quiz-feedback correct">
                                            <strong>Highly Resistant System!</strong> Your design creates money that would be extremely difficult for authorities to censor, surveil, or inflate. This design prioritizes individual sovereignty over centralized control.
                                        </div>
                                    ) : resistanceScores.overall >= 50 ? (
                                        <div className="quiz-feedback correct">
                                            <strong>Moderately Resistant System.</strong> Your design offers significant protection against some forms of control, though it may have vulnerabilities in certain areas. It strikes a balance between sovereignty and other qualities.
                                        </div>
                                    ) : (
                                        <div className="quiz-feedback incorrect">
                                            <strong>Minimally Resistant System.</strong> Your design offers limited protection against censorship, surveillance, or inflation. Consider adding features that directly address these vulnerabilities.
                                        </div>
                                    )}
                                    
                                    <div style={{ marginTop: '1.5rem' }}>
                                        <p><strong>Feature Categories in Your Design:</strong></p>
                                        <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                            {Array.from(new Set(selectedFeatures.map(id => moneyFeatures.find(f => f.id === id).category))).map(category => (
                                                <li key={category}>
                                                    <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong> {selectedFeatures.filter(id => moneyFeatures.find(f => f.id === id).category === category).map(id => moneyFeatures.find(f => f.id === id).name).join(', ')}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {resistanceScores.censorship < 50 && (
                                        <div style={{ marginTop: '1rem' }}>
                                            <p><strong>Censorship Vulnerability:</strong> Your system could be strengthened by adding features like Permissionless Access, Self-Custody, or Decentralized Issuance.</p>
                                        </div>
                                    )}
                                    
                                    {resistanceScores.surveillance < 50 && (
                                        <div style={{ marginTop: '1rem' }}>
                                            <p><strong>Surveillance Vulnerability:</strong> Consider adding Transaction Privacy or Self-Custody to enhance protection against monitoring.</p>
                                        </div>
                                    )}
                                    
                                    {resistanceScores.inflation < 50 && (
                                        <div style={{ marginTop: '1rem' }}>
                                            <p><strong>Inflation Vulnerability:</strong> Your system would be more resistant to devaluation with Fixed Supply Cap or Decentralized Issuance.</p>
                                        </div>
                                    )}
                                    
                                    {selectedFeatures.includes('fixed-supply') && 
                                     selectedFeatures.includes('decentralized') && 
                                     selectedFeatures.includes('permissionless') && 
                                     selectedFeatures.includes('self-custody') && (
                                        <div className="quiz-feedback correct" style={{ marginTop: '1.5rem' }}>
                                            <strong>Bitcoin-like Properties:</strong> Your design includes many of the core properties that make Bitcoin resistant to control and censorship.
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        };
        
        // Ethical Dilemmas Component
        const EthicalDilemmas = ({ activeCharacter, completeStep, updateProgress }) => {
            const [currentDilemma, setCurrentDilemma] = useState(0);
            const [sliderValues, setSliderValues] = useState({});
            const [dilemmaResponses, setDilemmaResponses] = useState({});
            const [completed, setCompleted] = useState(false);
            const [subProgress, setSubProgress] = useState(0);
            
            const dilemmas = [
                {
                    id: 'inflation-unemployment',
                    title: 'Inflation vs. Unemployment Dilemma',
                    description: 'A country is facing rising unemployment of 12%, particularly among youth. The central bank could stimulate economic growth through monetary expansion (printing money), but this risks causing inflation that would hurt those with savings.',
                    slider: {
                        leftLabel: 'Prioritize Employment',
                        rightLabel: 'Protect Savings Value',
                        defaultValue: 50
                    },
                    options: [
                        {
                            id: 'print',
                            title: 'Expand Money Supply',
                            description: 'Print money to stimulate growth, accepting higher inflation as a necessary cost'
                        },
                        {
                            id: 'target',
                            title: 'Targeted Approach',
                            description: 'Create employment programs funded by taxation rather than money printing'
                        },
                        {
                            id: 'stability',
                            title: 'Maintain Monetary Stability',
                            description: 'Focus on keeping inflation low to protect savings and economic predictability'
                        }
                    ],
                    context: "This dilemma highlights the trade-off central banks face between employment and price stability. Money printing can stimulate short-term growth but often leads to inflation that disproportionately harms the economically vulnerable who can't easily move their savings into inflation-resistant assets."
                },
                {
                    id: 'surveillance-crime',
                    title: 'Financial Privacy vs. Crime Prevention',
                    description: 'A government is considering requiring all financial transactions above $100 to be digitally recorded and linked to national ID numbers. Officials claim this will reduce corruption and tax evasion, but critics worry about surveillance and control.',
                    slider: {
                        leftLabel: 'Total Privacy',
                        rightLabel: 'Total Transparency',
                        defaultValue: 50
                    },
                    options: [
                        {
                            id: 'privacy',
                            title: 'Protect Financial Privacy',
                            description: 'Reject the surveillance system, prioritizing personal liberty over crime prevention'
                        },
                        {
                            id: 'balance',
                            title: 'Balanced Approach',
                            description: 'Implement limited monitoring with strong legal protections and oversight'
                        },
                        {
                            id: 'transparency',
                            title: 'Full Financial Transparency',
                            description: 'Support comprehensive monitoring, prioritizing crime prevention over privacy'
                        }
                    ],
                    context: "This dilemma illustrates the tension between using financial surveillance to combat legitimate crimes and the risk that such systems can be weaponized against dissidents, activists, and ordinary citizens. Financial privacy, like other forms of privacy, is often essential to political freedom."
                },
                {
                    id: 'cbdc-control',
                    title: 'Central Bank Digital Currency Design',
                    description: 'Your country\'s central bank is designing a Central Bank Digital Currency (CBDC) to replace physical cash. They're debating features like transaction monitoring, the ability to block certain purchases, and "programmable money" that could expire if not spent.',
                    slider: {
                        leftLabel: 'User Freedom',
                        rightLabel: 'State Control',
                        defaultValue: 50
                    },
                    options: [
                        {
                            id: 'freedom',
                            title: 'Maximize User Freedom',
                            description: 'Design a CBDC with cash-like privacy and minimal restrictions on use'
                        },
                        {
                            id: 'moderate',
                            title: 'Moderate Control',
                            description: 'Include some monitoring and controls but with transparency and limits'
                        },
                        {
                            id: 'control',
                            title: 'Comprehensive Control',
                            description: 'Grant authorities broad powers to monitor, expire, or block funds for policy goals'
                        }
                    ],
                    context: "CBDCs represent a significant evolution in state-controlled money, potentially giving governments unprecedented control over how citizens can save and spend. While they could increase financial inclusion, the control features being considered by many central banks could fundamentally alter the relationship between citizens and state."
                }
            ];
            
            useEffect(() => {
                // Initialize slider values with defaults
                if (Object.keys(sliderValues).length === 0) {
                    const initialValues = {};
                    dilemmas.forEach(dilemma => {
                        initialValues[dilemma.id] = dilemma.slider.defaultValue;
                    });
                    setSliderValues(initialValues);
                }
                
                // Update sub-progress based on completed dilemmas
                const totalDilemmas = dilemmas.length;
                const completedDilemmasCount = Object.keys(dilemmaResponses).length;
                
                const newProgress = completed ? 100 : (completedDilemmasCount / totalDilemmas) * 100;
                setSubProgress(newProgress);
                
                if (completed) {
                    completeStep(3);
                }
                
                // Update main progress
                updateProgress((subProgress / 3) + (2 / 3 * 100)); // 2/3 for previous challenges + current progress
            }, [dilemmaResponses, completed, subProgress]);
            
            const handleSliderChange = (e) => {
                const value = parseInt(e.target.value);
                setSliderValues({
                    ...sliderValues,
                    [dilemmas[currentDilemma].id]: value
                });
            };
            
            const handleOptionSelect = (optionId) => {
                setDilemmaResponses({
                    ...dilemmaResponses,
                    [dilemmas[currentDilemma].id]: {
                        sliderValue: sliderValues[dilemmas[currentDilemma].id],
                        selectedOption: optionId
                    }
                });
                
                if (currentDilemma < dilemmas.length - 1) {
                    setCurrentDilemma(currentDilemma + 1);
                } else {
                    // All dilemmas completed
                    setCompleted(true);
                }
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 3: Ethical Dilemmas</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Navigate complex monetary policy dilemmas that balance competing interests. There are no perfect answers—these represent real trade-offs that policymakers and societies face.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Even with the best intentions, monetary decisions involve trade-offs. Understanding these ethical dimensions helps us see why decentralizing money power is so important—it prevents any single group from imposing their values on everyone."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "Money policies are not merely technical—they reflect our values and priorities as a society. Whose interests are served? Who bears the costs? These questions have no simple answers."</p>
                    </div>
                    
                    <div className="ethical-dilemmas">
                        {completed ? (
                            <div className="results-card">
                                <h3 className="results-title">Your Monetary Policy Profile</h3>
                                <p>Based on your responses to the ethical dilemmas, here's how you balance different values in monetary policy decisions:</p>
                                
                                <div className="results-chart">
                                    <div className="chart-label-y">Priority Level</div>
                                    <div 
                                        className="chart-bar" 
                                        style={{ 
                                            height: `${Math.round(
                                                (100 - (Object.values(dilemmaResponses).reduce(
                                                    (sum, response) => sum + response.sliderValue, 0
                                                ) / Object.keys(dilemmaResponses).length)
                                            )}%`,
                                            left: '20%' 
                                        }}
                                    >
                                        <div className="chart-bar-value">
                                            {Math.round(
                                                (100 - (Object.values(dilemmaResponses).reduce(
                                                    (sum, response) => sum + response.sliderValue, 0
                                                ) / Object.keys(dilemmaResponses).length)
                                            )}
                                        </div>
                                        <div className="chart-bar-label">Individual Freedom</div>
                                    </div>
                                    
                                    <div 
                                        className="chart-bar" 
                                        style={{ 
                                            height: `${Math.round(
                                                Object.values(dilemmaResponses).reduce(
                                                    (sum, response) => sum + response.sliderValue, 0
                                                ) / Object.keys(dilemmaResponses).length
                                            )}%`,
                                            left: '60%'
                                        }}
                                    >
                                        <div className="chart-bar-value">
                                            {Math.round(
                                                Object.values(dilemmaResponses).reduce(
                                                    (sum, response) => sum + response.sliderValue, 0
                                                ) / Object.keys(dilemmaResponses).length
                                            )}
                                        </div>
                                        <div className="chart-bar-label">Centralized Control</div>
                                    </div>
                                    
                                    <div className="chart-label-x">Value Preference</div>
                                </div>
                                
                                <div style={{ margin: '2rem 0' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Your Policy Approach:</h4>
                                    
                                    {Object.values(dilemmaResponses).reduce(
                                        (sum, response) => sum + response.sliderValue, 0
                                    ) / Object.keys(dilemmaResponses).length < 40 ? (
                                        <div className="quiz-feedback correct">
                                            <strong>Freedom-Oriented Approach:</strong> You consistently prioritize individual financial sovereignty and privacy over centralized control. You're skeptical of government interventions in monetary systems and prefer market-based solutions.
                                        </div>
                                    ) : Object.values(dilemmaResponses).reduce(
                                        (sum, response) => sum + response.sliderValue, 0
                                    ) / Object.keys(dilemmaResponses).length > 60 ? (
                                        <div className="quiz-feedback incorrect">
                                            <strong>Control-Oriented Approach:</strong> You tend to favor centralized management of monetary systems to address societal challenges. You're willing to sacrifice some individual financial freedoms for perceived collective benefits.
                                        </div>
                                    ) : (
                                        <div className="quiz-feedback correct">
                                            <strong>Balanced Approach:</strong> You seek middle ground between individual financial freedom and centralized control. You recognize legitimate uses for both approaches depending on context and specific challenges.
                                        </div>
                                    )}
                                </div>
                                
                                <div style={{ margin: '2rem 0' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Dilemma Responses:</h4>
                                    
                                    {dilemmas.map((dilemma, index) => {
                                        const response = dilemmaResponses[dilemma.id];
                                        const selectedOption = dilemma.options.find(o => o.id === response.selectedOption);
                                        
                                        return (
                                            <div key={dilemma.id} style={{ marginBottom: '1.5rem' }}>
                                                <p><strong>Dilemma {index + 1}:</strong> {dilemma.title}</p>
                                                <p><strong>Your approach:</strong> {selectedOption.title} (Slider: {response.sliderValue})</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                
                                <div style={{ margin: '2rem 0' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Key Insight:</h4>
                                    <p>Monetary systems inherently reflect value judgments and power dynamics. When money creation and control is centralized, those values are imposed on everyone—whether they agree or not. Decentralized systems like Bitcoin allow for greater pluralism, where communities can opt into monetary systems that align with their values.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="dilemma-card">
                                <h3 className="dilemma-title">{dilemmas[currentDilemma].title}</h3>
                                <p className="dilemma-description">{dilemmas[currentDilemma].description}</p>
                                
                                <div className="slider-container">
                                    <div className="slider-labels">
                                        <div className="slider-label">{dilemmas[currentDilemma].slider.leftLabel}</div>
                                        <div className="slider-label">{dilemmas[currentDilemma].slider.rightLabel}</div>
                                    </div>
                                    
                                    <input 
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={sliderValues[dilemmas[currentDilemma].id] || dilemmas[currentDilemma].slider.defaultValue}
                                        onChange={handleSliderChange}
                                        className="custom-slider"
                                    />
                                    
                                    <div className="slider-value">
                                        {sliderValues[dilemmas[currentDilemma].id] < 40 ? 
                                            `Strongly favor ${dilemmas[currentDilemma].slider.leftLabel}` : 
                                         sliderValues[dilemmas[currentDilemma].id] > 60 ? 
                                            `Strongly favor ${dilemmas[currentDilemma].slider.rightLabel}` : 
                                            'Balanced approach'
                                        }
                                    </div>
                                </div>
                                
                                <div style={{ margin: '2rem 0' }}>
                                    <p><strong>Select your preferred approach:</strong></p>
                                    <div className="dilemma-options">
                                        {dilemmas[currentDilemma].options.map(option => (
                                            <div 
                                                key={option.id}
                                                className="dilemma-option"
                                                onClick={() => handleOptionSelect(option.id)}
                                            >
                                                <div className="dilemma-option-title">{option.title}</div>
                                                <p>{option.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div style={{ margin: '2rem 0', backgroundColor: 'rgba(238, 114, 11, 0.05)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>
                                    <p><strong>Context:</strong> {dilemmas[currentDilemma].context}</p>
                                </div>
                                
                                <div className="progress-bar-container">
                                    <div 
                                        className="progress-bar" 
                                        style={{ 
                                            width: `${((currentDilemma + 1) / dilemmas.length) * 100}%` 
                                        }}
                                    ></div>
                                </div>
                                
                                <div style={{ textAlign: 'center', margin: '1rem 0', color: 'var(--neutral)' }}>
                                    Dilemma {currentDilemma + 1} of {dilemmas.length}
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