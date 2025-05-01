<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mission 2.2: The Silent Tax — Inflation</title>
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
        .dark-mode .challenge-card,
        .dark-mode .achievement,
        .dark-mode .summary-box,
        .dark-mode .mission-progress,
        .dark-mode .time-period-card,
        .dark-mode .price-card,
        .dark-mode .story-card,
        .dark-mode .data-card,
        .dark-mode .input-container input,
        .dark-mode .input-container select,
        .dark-mode textarea {
            background-color: var(--bg-dark);
            color: var(--light-text);
            border-color: #444;
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
        
        /* Challenge card styles */
        .challenge-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 2rem;
            margin: 2rem 0;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }
        
        .challenge-title {
            font-size: 1.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
            font-weight: 700;
        }
        
        .challenge-description {
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        
        /* Time Machine Price Comparator styles */
        .time-periods {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .time-period-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            flex: 1;
            min-width: 250px;
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid transparent;
        }
        
        .time-period-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
        
        .time-period-card.selected {
            border-color: var(--primary);
        }
        
        .time-period-year {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .price-comparison {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .price-item {
            flex: 1;
            min-width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        
        .item-icon {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        
        .item-name {
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .price-cards {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            width: 100%;
        }
        
        .price-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 0.75rem;
            box-shadow: var(--shadow);
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid transparent;
        }
        
        .price-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
        }
        
        .price-card.selected {
            border-color: var(--success);
        }
        
        .price-card.incorrect {
            border-color: var(--danger);
        }
        
        .money-visualization {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 2rem 0;
        }
        
        .coin {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--golden-yellow);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            transition: opacity 1s ease, transform 1s ease;
        }
        
        .coin.dissolving {
            opacity: 0.2;
            transform: scale(0.8);
        }
        
        /* Inflation Calculator styles */
        .calculator-form {
            margin: 2rem 0;
        }
        
        .input-container {
            margin-bottom: 1.5rem;
        }
        
        .input-container label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        .input-container input,
        .input-container select {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: var(--border-radius);
            font-size: 1rem;
            font-family: 'Satoshi', sans-serif;
        }
        
        .results-container {
            margin: 2rem 0;
        }
        
        .result-card {
            background-color: var(--light-yellow);
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 1rem;
            border-left: 4px solid var(--primary);
        }
        
        .result-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .result-value {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0.5rem 0;
            color: var(--primary);
        }
        
        .comparison-bar {
            height: 24px;
            background-color: var(--primary);
            border-radius: var(--border-radius);
            margin: 1rem 0;
            transition: width 1s ease;
        }
        
        .chart-container {
            margin: 2rem 0;
            height: 300px;
            position: relative;
        }
        
        .chart-bar {
            position: absolute;
            bottom: 0;
            width: 60px;
            background-color: var(--primary);
            border-radius: 4px 4px 0 0;
            transition: height 1s ease;
        }
        
        .chart-label {
            position: absolute;
            bottom: -25px;
            text-align: center;
            width: 100%;
            font-size: 0.875rem;
        }
        
        .chart-value {
            position: absolute;
            top: -25px;
            text-align: center;
            width: 100%;
            font-weight: 700;
        }
        
        /* Inflation Story Mapping styles */
        .story-cards {
            display: flex;
            overflow-x: auto;
            gap: 1.5rem;
            padding: 1rem 0;
            margin: 2rem 0;
        }
        
        .story-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            min-width: 300px;
            max-width: 350px;
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid transparent;
        }
        
        .story-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
        
        .story-card.selected {
            border-color: var(--primary);
        }
        
        .story-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .story-content {
            line-height: 1.6;
            margin-bottom: 1rem;
        }
        
        .story-location {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--neutral);
            font-size: 0.875rem;
        }
        
        .data-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .data-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            flex: 1;
            min-width: 250px;
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid transparent;
        }
        
        .data-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
        
        .data-card.selected {
            border-color: var(--primary);
        }
        
        .data-card.matched {
            border-color: var(--success);
        }
        
        .data-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: var(--primary);
        }
        
        .data-value {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0.5rem 0;
        }
        
        .connection-visualization {
            margin: 2rem 0;
            position: relative;
            height: 200px;
        }
        
        .connection-node {
            position: absolute;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background-color: white;
            box-shadow: var(--shadow);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0.5rem;
        }
        
        .node-title {
            font-weight: 700;
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
        }
        
        .connection-line {
            position: absolute;
            height: 3px;
            background-color: var(--primary);
            transform-origin: 0 0;
            z-index: -1;
        }
        
        .case-study {
            margin: 2rem 0;
            padding: 1.5rem;
            border-radius: var(--border-radius);
            background-color: rgba(238, 114, 11, 0.1);
            border-left: 4px solid var(--primary);
        }
        
        .case-study-title {
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .chart-annotation {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: var(--border-radius);
            padding: 0.5rem;
            box-shadow: var(--shadow);
            font-size: 0.875rem;
            max-width: 200px;
            z-index: 2;
        }
        
        .dark-mode .chart-annotation {
            background-color: rgba(26, 26, 26, 0.9);
        }
        
        @media (max-width: 768px) {
            .mission-title {
                font-size: 1.8rem;
            }
            
            .section,
            .challenge-card {
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
            
            .connection-visualization {
                height: 400px;
            }
            
            .connection-node {
                width: 100px;
                height: 100px;
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
                        unlockAchievement('Time Traveler', 'You\'ve tracked how inflation erodes purchasing power over time!');
                    } else if (stepNum === 2) {
                        unlockAchievement('Savings Guardian', 'You\'ve mastered calculating inflation\'s impact on personal savings!');
                    } else if (stepNum === 3) {
                        unlockAchievement('Story Weaver', 'You\'ve connected personal stories to economic data!');
                    }
                }
            };
            
            return (
                <div className="app-container">
                    <header className="header">
                        <h1 className="mission-title">Mission 2.2: The Silent Tax — Inflation</h1>
                        <p className="mission-subtitle">Explore how inflation erodes savings and trust in money over time.</p>
                        
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
                            <p>Inflation—the general increase in prices and fall in purchasing power of money—is often called a "silent tax" because it quietly erodes the value of savings, wages, and pensions over time. This mission explores how inflation works, who it impacts most severely, and the devastating effects of hyperinflation through interactive simulations and real-world examples.</p>
                        </div>
                        
                        <div className="dialog-box">
                            <div className="dialog-character">A</div>
                            <p><strong>Asha:</strong> "When governments print money without constraints, they're essentially taking value from everyone who holds that currency. It's taxation without legislation—a hidden wealth transfer that most people don't even notice until it's too late."</p>
                        </div>
                        
                        <div className="dialog-box odu">
                            <div className="dialog-character">O</div>
                            <p><strong>Odu:</strong> "In my lifetime, I've seen our currency change names three times because of inflation. Each time, people's life savings were wiped out overnight. The elders who saved diligently became poor, while those with hard assets or political connections preserved their wealth."</p>
                        </div>
                    </section>
                    
                    <div className="mission-progress">
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 1 ? 'active' : ''} ${completedSteps.includes(1) ? 'completed' : ''}`}>1</div>
                            <div className="progress-label">Time Machine Price Comparator</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 2 ? 'active' : ''} ${completedSteps.includes(2) ? 'completed' : ''}`}>2</div>
                            <div className="progress-label">Inflation Calculator</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 3 ? 'active' : ''} ${completedSteps.includes(3) ? 'completed' : ''}`}>3</div>
                            <div className="progress-label">Inflation Story Mapping</div>
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
                        <TimeMachineComparator
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 2 && (
                        <InflationCalculator
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 3 && (
                        <StoryMapping
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    <div className="section">
                        <div className="section-content">
                            <div className="reflection">
                                <h3 className="section-title">Reflect on Your Learning</h3>
                                <p className="reflection-question">How has inflation affected your own life or the lives of people you know? How might different monetary systems protect people from the devastating effects of inflation?</p>
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
                                        unlockAchievement('Mission Complete', 'You\'ve completed all challenges in Mission 2.2!');
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
                                        <div>Inflation steadily erodes purchasing power over time, acting as a hidden tax on savers</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Those closest to the money creation (banks, governments, asset holders) benefit, while fixed-income earners and savers lose</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Hyperinflation destroys not just savings but trust in institutions and social cohesion</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Money with a fixed supply cap (like Bitcoin) protects against the wealth erosion caused by unlimited money printing</div>
                                    </div>
                                </div>
                                
                                <div className="completion-badge">
                                    <div className="badge-icon">💰</div>
                                    <div className="badge-title">Inflation Navigator</div>
                                    <div>You've completed Mission 2.2</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Time Machine Price Comparator Component
        const TimeMachineComparator = ({ activeCharacter, completeStep, updateProgress }) => {
            const [selectedPeriod, setSelectedPeriod] = useState(null);
            const [itemMatches, setItemMatches] = useState({});
            const [matchedCount, setMatchedCount] = useState(0);
            const [dissolving, setDissolving] = useState(false);
            const [showExplanation, setShowExplanation] = useState(false);
            const [subProgress, setSubProgress] = useState(0);
            
            const timePeriods = [
                { id: '1980', year: '1980', context: 'Before major inflation waves' },
                { id: '2000', year: '2000', context: 'Turn of the millennium' },
                { id: '2023', year: '2023', context: 'Recent prices' }
            ];
            
            const items = [
                { id: 'bread', name: 'Loaf of Bread', icon: '🍞' },
                { id: 'house', name: 'Average House', icon: '🏠' },
                { id: 'education', name: 'College Tuition (1 Year)', icon: '🎓' },
                { id: 'car', name: 'New Car', icon: '🚗' }
            ];
            
            const prices = {
                bread: {
                    '1980': '$0.50',
                    '2000': '$1.99',
                    '2023': '$3.99'
                },
                house: {
                    '1980': '$47,200',
                    '2000': '$119,600',
                    '2023': '$416,000'
                },
                education: {
                    '1980': '$3,500',
                    '2000': '$15,000',
                    '2023': '$35,000'
                },
                car: {
                    '1980': '$7,200',
                    '2000': '$21,000',
                    '2023': '$48,000'
                }
            };
            
            // Price options for each item with one correct and two incorrect options
            const priceOptions = {
                bread: {
                    '1980': [
                        { id: 1, price: '$0.50', correct: true },
                        { id: 2, price: '$1.25', correct: false },
                        { id: 3, price: '$0.25', correct: false }
                    ],
                    '2000': [
                        { id: 1, price: '$0.80', correct: false },
                        { id: 2, price: '$1.99', correct: true },
                        { id: 3, price: '$2.50', correct: false }
                    ],
                    '2023': [
                        { id: 1, price: '$2.50', correct: false },
                        { id: 2, price: '$5.99', correct: false },
                        { id: 3, price: '$3.99', correct: true }
                    ]
                },
                house: {
                    '1980': [
                        { id: 1, price: '$25,000', correct: false },
                        { id: 2, price: '$47,200', correct: true },
                        { id: 3, price: '$75,000', correct: false }
                    ],
                    '2000': [
                        { id: 1, price: '$85,000', correct: false },
                        { id: 2, price: '$119,600', correct: true },
                        { id: 3, price: '$150,000', correct: false }
                    ],
                    '2023': [
                        { id: 1, price: '$250,000', correct: false },
                        { id: 2, price: '$350,000', correct: false },
                        { id: 3, price: '$416,000', correct: true }
                    ]
                },
                education: {
                    '1980': [
                        { id: 1, price: '$1,200', correct: false },
                        { id: 2, price: '$3,500', correct: true },
                        { id: 3, price: '$5,000', correct: false }
                    ],
                    '2000': [
                        { id: 1, price: '$8,000', correct: false },
                        { id: 2, price: '$15,000', correct: true },
                        { id: 3, price: '$22,000', correct: false }
                    ],
                    '2023': [
                        { id: 1, price: '$20,000', correct: false },
                        { id: 2, price: '$35,000', correct: true },
                        { id: 3, price: '$50,000', correct: false }
                    ]
                },
                car: {
                    '1980': [
                        { id: 1, price: '$7,200', correct: true },
                        { id: 2, price: '$12,000', correct: false },
                        { id: 3, price: '$4,500', correct: false }
                    ],
                    '2000': [
                        { id: 1, price: '$15,000', correct: false },
                        { id: 2, price: '$21,000', correct: true },
                        { id: 3, price: '$30,000', correct: false }
                    ],
                    '2023': [
                        { id: 1, price: '$35,000', correct: false },
                        { id: 2, price: '$48,000', correct: true },
                        { id: 3, price: '$60,000', correct: false }
                    ]
                }
            };
            
            // Percentage increase calculations
            const increases = {
                bread: {
                    '1980_2023': 698, // $0.50 to $3.99
                    '2000_2023': 100  // $1.99 to $3.99
                },
                house: {
                    '1980_2023': 781, // $47,200 to $416,000
                    '2000_2023': 248  // $119,600 to $416,000
                },
                education: {
                    '1980_2023': 900, // $3,500 to $35,000
                    '2000_2023': 133  // $15,000 to $35,000
                },
                car: {
                    '1980_2023': 567, // $7,200 to $48,000
                    '2000_2023': 129  // $21,000 to $48,000
                }
            };
            
            useEffect(() => {
                // Update progress when selected period changes or matches are made
                if (selectedPeriod) {
                    const totalItems = items.length;
                    const progressValue = (matchedCount / totalItems) * 100;
                    setSubProgress(progressValue);
                    
                    // Update main progress (this challenge is 1/3 of total)
                    updateProgress(progressValue / 3);
                    
                    // Check if all items are matched
                    if (matchedCount === totalItems) {
                        setTimeout(() => {
                            setDissolving(true);
                            setTimeout(() => {
                                setShowExplanation(true);
                                completeStep(1);
                            }, 2000);
                        }, 1000);
                    }
                }
            }, [selectedPeriod, matchedCount]);
            
            const selectTimePeriod = (periodId) => {
                setSelectedPeriod(periodId);
                setItemMatches({});
                setMatchedCount(0);
                setDissolving(false);
                setShowExplanation(false);
            };
            
            const selectPrice = (itemId, priceId) => {
                if (itemMatches[itemId]) return;
                
                const item = priceOptions[itemId][selectedPeriod].find(p => p.id === priceId);
                
                if (item.correct) {
                    setItemMatches({ ...itemMatches, [itemId]: { matched: true, selectedId: priceId } });
                    setMatchedCount(matchedCount + 1);
                } else {
                    setItemMatches({ ...itemMatches, [itemId]: { matched: false, selectedId: priceId } });
                    // Give user feedback but don't prevent them from trying again
                    setTimeout(() => {
                        setItemMatches({ ...itemMatches, [itemId]: null });
                    }, 1500);
                }
            };
            
            return (
                <div className="challenge-card">
                    <h2 className="challenge-title">Time Machine Price Comparator</h2>
                    <p className="challenge-description">Travel through time to see how prices have changed over the decades. For each time period, match products to their correct prices to visualize the effects of inflation.</p>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Notice how prices don't just increase slightly—they multiply several times over. This is the compounding effect of inflation that erodes purchasing power in ways that aren't immediately obvious."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "When I was young, my grandfather told me he bought his first house for what would now be the price of a good meal. Those who save in inflating currency watch their life's work dissolve like salt in water."</p>
                    </div>
                    
                    <h3 style={{ marginTop: '2rem' }}>Select a Time Period:</h3>
                    <div className="time-periods">
                        {timePeriods.map(period => (
                            <div 
                                key={period.id}
                                className={`time-period-card ${selectedPeriod === period.id ? 'selected' : ''}`}
                                onClick={() => selectTimePeriod(period.id)}
                            >
                                <div className="time-period-year">{period.year}</div>
                                <p>{period.context}</p>
                            </div>
                        ))}
                    </div>
                    
                    {selectedPeriod && (
                        <>
                            <h3 style={{ marginTop: '2rem' }}>Match Items to Their Prices in {selectedPeriod}:</h3>
                            <div className="price-comparison">
                                {items.map(item => (
                                    <div key={item.id} className="price-item">
                                        <div className="item-icon">{item.icon}</div>
                                        <div className="item-name">{item.name}</div>
                                        <div className="price-cards">
                                            {priceOptions[item.id][selectedPeriod].map(option => (
                                                <div 
                                                    key={option.id}
                                                    className={`price-card ${
                                                        itemMatches[item.id]?.selectedId === option.id && itemMatches[item.id]?.matched ? 'selected' : 
                                                        itemMatches[item.id]?.selectedId === option.id && !itemMatches[item.id]?.matched ? 'incorrect' : ''
                                                    }`}
                                                    onClick={() => selectPrice(item.id, option.id)}
                                                >
                                                    {option.price}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                <h3>Purchasing Power Visualization:</h3>
                                <p>Each coin represents the purchasing power of $100 in 1980.</p>
                                <div className="money-visualization">
                                    {Array(10).fill().map((_, index) => (
                                        <div key={index} className={`coin ${dissolving ? 'dissolving' : ''}`}>
                                            $100
                                        </div>
                                    ))}
                                </div>
                                
                                {showExplanation && (
                                    <div style={{ marginTop: '2rem' }}>
                                        <div className="case-study">
                                            <h3 className="case-study-title">The Silent Wealth Erosion</h3>
                                            <p>If you had saved $100 in 1980 and kept it as cash until 2023, it would now only buy what $17 could in 1980—a loss of 83% in purchasing power. This is how inflation silently taxes savings.</p>
                                            
                                            <div style={{ marginTop: '1.5rem' }}>
                                                <h4>Price Increases from 1980 to 2023:</h4>
                                                <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                                    <li><strong>Bread:</strong> +698% (from $0.50 to $3.99)</li>
                                                    <li><strong>Average House:</strong> +781% (from $47,200 to $416,000)</li>
                                                    <li><strong>College Tuition:</strong> +900% (from $3,500 to $35,000)</li>
                                                    <li><strong>New Car:</strong> +567% (from $7,200 to $48,000)</li>
                                                </ul>
                                            </div>
                                            
                                            <div style={{ marginTop: '1.5rem' }}>
                                                <h4>Who Benefits, Who Loses:</h4>
                                                <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                                    <li><strong>Benefit:</strong> Asset owners (real estate, stocks), debtors, governments financing deficits</li>
                                                    <li><strong>Lose:</strong> Savers, people on fixed incomes, wage earners whose raises don't match inflation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            );
        };
        
        // Inflation Calculator Component
        const InflationCalculator = ({ activeCharacter, completeStep, updateProgress }) => {
            const [savingsAmount, setSavingsAmount] = useState(10000);
            const [timeframe, setTimeframe] = useState(10);
            const [inflationRate, setInflationRate] = useState(7);
            const [calculationComplete, setCalculationComplete] = useState(false);
            const [futureValue, setFutureValue] = useState(0);
            const [purchasingPower, setPurchasingPower] = useState(0);
            const [comparisonData, setComparisonData] = useState([]);
            const [subProgress, setSubProgress] = useState(0);
            
            useEffect(() => {
                if (calculationComplete) {
                    // Update sub-progress when calculation is complete
                    setSubProgress(100);
                    
                    // Update main progress (this challenge is 1/3 of total)
                    updateProgress((100 / 3) + (100 / 3)); // Previous challenge (33%) + current (33%)
                    
                    completeStep(2);
                }
            }, [calculationComplete]);
            
            const calculateInflation = () => {
                // Formula: Future Value = Present Value / (1 + inflation rate)^years
                const decimalRate = inflationRate / 100;
                const futureVal = savingsAmount / Math.pow(1 + decimalRate, timeframe);
                setFutureValue(futureVal);
                
                // Calculate percentage of purchasing power remaining
                const powerPercentage = (futureVal / savingsAmount) * 100;
                setPurchasingPower(powerPercentage);
                
                // Generate comparison data for different assets
                const comparisonAssets = [
                    {
                        name: 'Cash Savings',
                        finalValue: futureVal.toFixed(2),
                        performanceRate: -decimalRate,
                        color: '#D32F2F'
                    },
                    {
                        name: 'S&P 500 Index',
                        finalValue: (savingsAmount * Math.pow(1 + 0.10 - decimalRate, timeframe)).toFixed(2),
                        performanceRate: 0.10 - decimalRate,
                        color: '#2E7D32'
                    },
                    {
                        name: 'Real Estate',
                        finalValue: (savingsAmount * Math.pow(1 + 0.07 - decimalRate, timeframe)).toFixed(2),
                        performanceRate: 0.07 - decimalRate,
                        color: '#3b5dc9'
                    },
                    {
                        name: 'Bitcoin (Fixed Supply)',
                        finalValue: (savingsAmount * Math.pow(1 + 0.15, timeframe)).toFixed(2),
                        performanceRate: 0.15,
                        color: '#EE720B'
                    }
                ];
                
                setComparisonData(comparisonAssets);
                setCalculationComplete(true);
            };
            
            const renderComparisonChart = () => {
                if (!calculationComplete) return null;
                
                const maxValue = Math.max(...comparisonData.map(asset => parseFloat(asset.finalValue)));
                
                return (
                    <div className="chart-container">
                        {comparisonData.map((asset, index) => {
                            const height = (parseFloat(asset.finalValue) / maxValue) * 100;
                            const posLeft = (index * 25) + 10;
                            
                            return (
                                <div 
                                    key={asset.name}
                                    className="chart-bar"
                                    style={{
                                        height: `${height}%`,
                                        left: `${posLeft}%`,
                                        backgroundColor: asset.color
                                    }}
                                >
                                    <div className="chart-value">${parseInt(asset.finalValue).toLocaleString()}</div>
                                    <div className="chart-label">{asset.name}</div>
                                </div>
                            );
                        })}
                        
                        {/* Annotations */}
                        <div 
                            className="chart-annotation"
                            style={{ top: '30%', right: '15%' }}
                        >
                            Assets with fixed supply can resist inflation as demand grows
                        </div>
                        
                        <div 
                            className="chart-annotation"
                            style={{ bottom: '30%', left: '5%' }}
                        >
                            Cash loses purchasing power as more currency is created
                        </div>
                    </div>
                );
            };
            
            return (
                <div className="challenge-card">
                    <h2 className="challenge-title">Inflation Calculator Challenge</h2>
                    <p className="challenge-description">See how inflation affects your savings over time. Input your savings amount and timeframe to calculate the real purchasing power of your money after inflation.</p>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Inflation isn't just an abstract economic concept—it's a very real force that steadily reduces what your money can buy. This calculator shows why we need money that can't be infinitely created."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "My grandmother saved for decades in our national currency, only to find her savings couldn't even buy a month's groceries when she retired. That's why our community began investing in land and livestock instead of bank accounts."</p>
                    </div>
                    
                    <div className="calculator-form">
                        <div className="input-container">
                            <label htmlFor="savings-amount">Savings Amount ($):</label>
                            <input 
                                type="number" 
                                id="savings-amount" 
                                value={savingsAmount}
                                onChange={(e) => setSavingsAmount(parseInt(e.target.value) || 0)}
                                min="1000"
                                max="1000000"
                            />
                        </div>
                        
                        <div className="input-container">
                            <label htmlFor="timeframe">Timeframe (Years):</label>
                            <input 
                                type="number" 
                                id="timeframe" 
                                value={timeframe}
                                onChange={(e) => setTimeframe(parseInt(e.target.value) || 0)}
                                min="1"
                                max="50"
                            />
                        </div>
                        
                        <div className="input-container">
                            <label htmlFor="inflation-rate">Inflation Rate (%):</label>
                            <select 
                                id="inflation-rate" 
                                value={inflationRate}
                                onChange={(e) => setInflationRate(parseInt(e.target.value))}
                            >
                                <option value="2">2% - Central Bank Target</option>
                                <option value="5">5% - Moderate Inflation</option>
                                <option value="7">7% - High Inflation</option>
                                <option value="10">10% - Very High Inflation</option>
                                <option value="25">25% - Severe Inflation</option>
                                <option value="50">50% - Hyperinflation Beginning</option>
                                <option value="100">100% - Hyperinflation</option>
                                <option value="500">500% - Zimbabwe 2007</option>
                            </select>
                        </div>
                        
                        <button 
                            className="button"
                            onClick={calculateInflation}
                            style={{ marginTop: '1.5rem' }}
                        >
                            Calculate
                        </button>
                    </div>
                    
                    {calculationComplete && (
                        <div className="results-container">
                            <div className="result-card">
                                <div className="result-title">
                                    <span>💰</span>
                                    <span>Future Purchasing Power</span>
                                </div>
                                <p>In {timeframe} years with {inflationRate}% inflation, your ${savingsAmount.toLocaleString()} will only have the purchasing power of:</p>
                                <div className="result-value">${Math.round(futureValue).toLocaleString()}</div>
                                
                                <div>
                                    <p>That's a loss of ${Math.round(savingsAmount - futureValue).toLocaleString()} in purchasing power.</p>
                                    <p>Your money will only buy {purchasingPower.toFixed(1)}% of what it can buy today.</p>
                                </div>
                                
                                <div style={{ marginTop: '1rem' }}>
                                    <div style={{ marginBottom: '0.5rem' }}>Purchasing power remaining:</div>
                                    <div className="comparison-bar" style={{ width: `${purchasingPower}%` }}></div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                                        <div>0%</div>
                                        <div>100%</div>
                                    </div>
                                </div>
                            </div>
                            
                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Asset Comparison After {timeframe} Years:</h3>
                            {renderComparisonChart()}
                            
                            <div className="case-study" style={{ marginTop: '2rem' }}>
                                <h3 className="case-study-title">Hyperinflation Case Study: Zimbabwe</h3>
                                <p>In November 2008, Zimbabwe's hyperinflation peaked at 79.6 billion percent per month. Prices doubled approximately every 24.7 hours.</p>
                                
                                <div style={{ marginTop: '1rem' }}>
                                    <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                        <li>A loaf of bread that cost Z$500 in December 2007 cost Z$10,000,000,000 in December 2008</li>
                                        <li>The government printed banknotes up to 100 trillion Zimbabwe dollars</li>
                                        <li>People carried money in suitcases and paid for meals before eating as prices would rise during the meal</li>
                                        <li>Eventually, the Zimbabwe dollar was abandoned, and the country adopted foreign currencies</li>
                                    </ul>
                                </div>
                                
                                <div style={{ marginTop: '1.5rem' }}>
                                    <p><strong>Causes:</strong> Excessive money printing to fund government spending, collapse in economic output, loss of trust in institutions</p>
                                    <p><strong>Effects:</strong> Complete destruction of savings, economic collapse, social upheaval, emigration of skilled workers</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Inflation Story Mapping Component
        const StoryMapping = ({ activeCharacter, completeStep, updateProgress }) => {
            const [selectedStory, setSelectedStory] = useState(null);
            const [selectedData, setSelectedData] = useState(null);
            const [connections, setConnections] = useState([]);
            const [showExplanation, setShowExplanation] = useState(false);
            const [subProgress, setSubProgress] = useState(0);
            
            const stories = [
                {
                    id: 1,
                    title: "The Disappearing Pension",
                    content: "My grandmother worked as a teacher for 40 years and retired with what seemed like a good pension. Within three years, her monthly payments could barely cover a week's groceries. She had to sell her home and move in with us.",
                    location: "🇦🇷 Argentina, 2001",
                    matchingData: 3 // Monthly inflation rate reached 10%
                },
                {
                    id: 2,
                    title: "The Billion Dollar Lunch",
                    content: "I remember going to buy lunch with a suitcase full of cash. By the time I reached the front of the line, they had raised the price twice. The next week, I needed two suitcases.",
                    location: "🇿🇼 Zimbabwe, 2008",
                    matchingData: 1 // Prices doubled every 24.7 hours
                },
                {
                    id: 3,
                    title: "The Vanishing College Fund",
                    content: "My parents saved for 15 years to pay for my college education. By the time I enrolled, the fund covered less than one semester. They had saved in our local currency instead of dollars.",
                    location: "🇹🇷 Turkey, 2022",
                    matchingData: 4 // Currency lost 44% of value in one year
                },
                {
                    id: 4,
                    title: "The Never-Ending Mortgage",
                    content: "We took out a mortgage that was supposed to be manageable. As inflation skyrocketed, our salaries didn't keep up. The payments that were once 20% of our income now take almost everything we earn.",
                    location: "🇻🇪 Venezuela, 2018",
                    matchingData: 2 // Annual inflation rate of 130,000%
                }
            ];
            
            const economicData = [
                {
                    id: 1,
                    title: "Hyperinflation Peak",
                    data: "Prices doubled every 24.7 hours",
                    context: "The peak of hyperinflation meant prices doubled nearly every day, making cash virtually worthless within hours of receiving it."
                },
                {
                    id: 2,
                    title: "Annual Inflation Rate",
                    data: "130,000% per year",
                    context: "At this rate, something that cost $1 at the beginning of the year would cost $1,300 by year's end."
                },
                {
                    id: 3,
                    title: "Monthly Inflation Rate",
                    data: "10% per month",
                    context: "A 10% monthly inflation rate compounds to more than 200% annually, rapidly eroding savings and fixed incomes."
                },
                {
                    id: 4,
                    title: "Currency Devaluation",
                    data: "44% value loss in one year",
                    context: "The currency lost nearly half its purchasing power against stable currencies in just 12 months."
                }
            ];
            
            useEffect(() => {
                // Update progress based on connections made
                const totalStories = stories.length;
                const progressValue = (connections.length / totalStories) * 100;
                setSubProgress(progressValue);
                
                // Update main progress
                updateProgress((progressValue / 3) + (200 / 3)); // Previous challenges (66%) + current progress (up to 33%)
                
                // Check if all stories are connected
                if (connections.length === totalStories) {
                    setTimeout(() => {
                        setShowExplanation(true);
                        completeStep(3);
                    }, 1000);
                }
            }, [connections]);
            
            const selectStory = (storyId) => {
                // If already in a connection, clear it
                if (selectedData) {
                    setSelectedData(null);
                }
                
                // If already connected, don't allow selection
                if (connections.some(conn => conn.storyId === storyId)) {
                    return;
                }
                
                setSelectedStory(storyId);
            };
            
            const selectData = (dataId) => {
                // If already in a connection, clear it
                if (selectedStory) {
                    setSelectedData(dataId);
                    
                    // Check if this is a correct match
                    const story = stories.find(s => s.id === selectedStory);
                    if (story.matchingData === dataId) {
                        // Correct match, add to connections
                        setConnections([...connections, { 
                            storyId: selectedStory, 
                            dataId: dataId,
                            correct: true 
                        }]);
                    } else {
                        // Incorrect match, show feedback
                        setConnections([...connections, { 
                            storyId: selectedStory, 
                            dataId: dataId,
                            correct: false 
                        }]);
                        
                        // Remove incorrect connection after a delay
                        setTimeout(() => {
                            setConnections(connections.filter(
                                conn => !(conn.storyId === selectedStory && conn.dataId === dataId)
                            ));
                        }, 2000);
                    }
                    
                    // Reset selections
                    setSelectedStory(null);
                    setSelectedData(null);
                }
            };
            
            // Function to check if a data card is connected to a story
            const isDataConnected = (dataId) => {
                return connections.some(conn => conn.dataId === dataId && conn.correct);
            };
            
            // Function to check if a story card is connected to data
            const isStoryConnected = (storyId) => {
                return connections.some(conn => conn.storyId === storyId && conn.correct);
            };
            
            // Calculate connection positions for visualization
            const getConnectionPositions = () => {
                // Return position information for each connection
                return connections.filter(conn => conn.correct).map(conn => {
                    const story = stories.find(s => s.id === conn.storyId);
                    const data = economicData.find(d => d.id === conn.dataId);
                    
                    return {
                        id: `${conn.storyId}-${conn.dataId}`,
                        storyId: conn.storyId,
                        dataId: conn.dataId,
                        storyTitle: story.title,
                        dataTitle: data.title
                    };
                });
            };
            
            return (
                <div className="challenge-card">
                    <h2 className="challenge-title">Inflation Story Mapping</h2>
                    <p className="challenge-description">Connect personal stories of inflation impact to economic data. Match each story to the corresponding inflation statistic to understand the human cost of currency devaluation.</p>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Behind every inflation statistic are real people whose lives are upended. When money loses its reliability, it's not just an economic problem—it destroys social trust and stability."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "These stories echo across generations and borders. In my village, elders still bury gold rather than trust banks after living through three currency collapses. The memory of inflation lives long after the event."</p>
                    </div>
                    
                    <h3 style={{ marginTop: '2rem' }}>Personal Stories:</h3>
                    <p>Select a story and match it to the relevant economic data.</p>
                    
                    <div className="story-cards">
                        {stories.map(story => (
                            <div 
                                key={story.id}
                                className={`story-card ${selectedStory === story.id ? 'selected' : ''} ${isStoryConnected(story.id) ? 'matched' : ''}`}
                                onClick={() => selectStory(story.id)}
                                style={{ opacity: isStoryConnected(story.id) ? 0.7 : 1 }}
                            >
                                <h4 className="story-title">{story.title}</h4>
                                <p className="story-content">{story.content}</p>
                                <div className="story-location">
                                    <span>{story.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <h3 style={{ marginTop: '2rem' }}>Economic Data:</h3>
                    <p>Select the economic data that matches each personal story.</p>
                    
                    <div className="data-cards">
                        {economicData.map(data => (
                            <div 
                                key={data.id}
                                className={`data-card ${selectedData === data.id ? 'selected' : ''} ${isDataConnected(data.id) ? 'matched' : ''}`}
                                onClick={() => selectData(data.id)}
                                style={{ opacity: isDataConnected(data.id) ? 0.7 : 1 }}
                            >
                                <h4 className="data-title">{data.title}</h4>
                                <p className="data-value">{data.data}</p>
                                <p>{data.context}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Visual representation of connections */}
                    <div className="connection-visualization">
                        {getConnectionPositions().map((conn, index) => {
                            // Calculate positions for visualization
                            const yPos = 40 + (index * 40);
                            
                            return (
                                <React.Fragment key={conn.id}>
                                    <div 
                                        className="connection-node"
                                        style={{ left: '60px', top: `${yPos}px` }}
                                    >
                                        <div className="node-title">{conn.storyTitle}</div>
                                    </div>
                                    
                                    <div
                                        className="connection-line"
                                        style={{
                                            left: '180px',
                                            top: `${yPos + 60}px`,
                                            width: '400px',
                                        }}
                                    ></div>
                                    
                                    <div 
                                        className="connection-node"
                                        style={{ right: '60px', top: `${yPos}px` }}
                                    >
                                        <div className="node-title">{conn.dataTitle}</div>
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                    
                    {showExplanation && (
                        <div className="case-study">
                            <h3 className="case-study-title">The Human Cost of Inflation</h3>
                            <p>Inflation is never just about numbers—it's about people's lives, dreams, and financial security. The personal stories you've matched reveal how inflation affects different aspects of daily life:</p>
                            
                            <div style={{ marginTop: '1.5rem' }}>
                                <h4 style={{ marginBottom: '0.5rem' }}>Key Patterns in Inflation's Impact:</h4>
                                <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                    <li><strong>Intergenerational Wealth Destruction:</strong> Savings meant to provide security across generations are wiped out</li>
                                    <li><strong>Daily Life Disruption:</strong> Simple activities like buying food become logistical challenges</li>
                                    <li><strong>Educational Opportunity Loss:</strong> Carefully planned futures disappear as educational funds lose value</li>
                                    <li><strong>Housing Insecurity:</strong> Fixed mortgage payments become unsustainable as wages fail to keep pace</li>
                                </ul>
                            </div>
                            
                            <div style={{ marginTop: '1.5rem' }}>
                                <h4 style={{ marginBottom: '0.5rem' }}>The Psychology of Inflation:</h4>
                                <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                    <li><strong>Institutional Trust Erosion:</strong> People lose faith in government, banking, and currency systems</li>
                                    <li><strong>Time Horizon Collapse:</strong> Long-term planning becomes impossible; focus shifts to immediate survival</li>
                                    <li><strong>Hoarding Behavior:</strong> People rush to convert cash to physical goods before prices rise further</li>
                                    <li><strong>Social Cohesion Damage:</strong> Economic stress increases social tension and political instability</li>
                                </ul>
                            </div>
                            
                            <div style={{ marginTop: '1.5rem' }}>
                                <h4 style={{ marginBottom: '0.5rem' }}>Protection Strategies That Emerged:</h4>
                                <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                    <li><strong>Dollarization:</strong> Adoption of stable foreign currencies for savings and transactions</li>
                                    <li><strong>Hard Asset Acquisition:</strong> Investment in gold, real estate, and durable goods</li>
                                    <li><strong>Community Banking:</strong> Creation of local savings groups outside formal financial systems</li>
                                    <li><strong>Bitcoin Adoption:</strong> Use of censorship-resistant, supply-capped digital currency</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Render the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>