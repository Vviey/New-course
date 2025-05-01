<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mission 2.3: Surveillance & Censorship</title>
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
        
        .parallax-container {
            height: 200px;
            margin: 2rem 0;
            position: relative;
            overflow: hidden;
            border-radius: var(--border-radius);
        }
        
        .parallax-layer {
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition: transform 0.5s ease;
        }
        
        .heatmap-container {
            margin: 2rem 0;
        }
        
        .payment-options {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .payment-option {
            background-color: white;
            border: 2px solid var(--neutral);
            border-radius: var(--border-radius);
            padding: 1rem;
            cursor: pointer;
            transition: var(--transition);
            width: calc(33.333% - 1rem);
            min-width: 200px;
            flex-grow: 1;
        }
        
        .payment-option:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }
        
        .payment-option.selected {
            border-color: var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
        }
        
        .payment-option-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .heatmap {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .heatmap-row {
            display: flex;
            gap: 0.5rem;
        }
        
        .heatmap-entity {
            flex: 1;
            text-align: center;
            font-weight: 500;
            padding: 0.5rem;
        }
        
        .heatmap-cell {
            flex: 1;
            height: 50px;
            border-radius: var(--border-radius);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
        }
        
        .heat-level-0 {
            background-color: #E8F5E9;
            color: var(--dark-text);
        }
        
        .heat-level-1 {
            background-color: #AED581;
            color: var(--dark-text);
        }
        
        .heat-level-2 {
            background-color: #FFC107;
            color: var(--dark-text);
        }
        
        .heat-level-3 {
            background-color: #FF9800;
        }
        
        .heat-level-4 {
            background-color: #F44336;
        }
        
        .legend {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .legend-color {
            width: 20px;
            height: 20px;
            border-radius: 4px;
        }
        
        .scenario-challenge {
            margin: 2rem 0;
        }
        
        .scenario {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: var(--shadow);
        }
        
        .scenario-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .scenario-description {
            margin-bottom: 1.5rem;
        }
        
        .scenario-options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .scenario-option {
            background-color: var(--light-yellow);
            border: 2px solid var(--golden-yellow);
            border-radius: var(--border-radius);
            padding: 1rem;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .scenario-option:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }
        
        .scenario-option.selected {
            border-color: var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
        }
        
        .scenario-option-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .feedback {
            margin-top: 1.5rem;
            padding: 1rem;
            border-radius: var(--border-radius);
            display: none;
        }
        
        .feedback.success {
            background-color: #E8F5E9;
            border-left: 4px solid var(--success);
            display: block;
        }
        
        .feedback.error {
            background-color: #FFEBEE;
            border-left: 4px solid var(--danger);
            display: block;
        }
        
        .data-trail {
            margin: 2rem 0;
        }
        
        .data-trail-visualization {
            margin: 1.5rem 0;
            position: relative;
            height: 500px;
            border: 1px solid #ddd;
            border-radius: var(--border-radius);
            overflow: hidden;
            background-color: white;
        }
        
        .entity {
            position: absolute;
            width: 120px;
            height: 60px;
            border-radius: var(--border-radius);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-weight: 700;
            background-color: var(--light-yellow);
            border: 2px solid var(--golden-yellow);
            z-index: 2;
            padding: 0.5rem;
            font-size: 0.875rem;
        }
        
        .entity.sender {
            background-color: var(--primary);
            color: white;
            border-color: #d96400;
        }
        
        .entity.receiver {
            background-color: var(--success);
            color: white;
            border-color: #1b5e20;
        }
        
        .connection {
            position: absolute;
            background-color: #ddd;
            z-index: 1;
            transform-origin: 0 0;
        }
        
        .connection.active {
            background-color: var(--primary);
        }
        
        .data-point {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: var(--primary);
            z-index: 3;
            animation: pulsate 1.5s infinite;
            display: none;
        }
        
        @keyframes pulsate {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.2);
                opacity: 0.7;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
        
        .data-controls {
            display: flex;
            gap: 1rem;
            margin: 1rem 0;
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
        
        .quiz {
            margin: 2rem 0;
        }
        
        .quiz-question {
            margin-bottom: 1.5rem;
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
        
        @media (max-width: 768px) {
            .mission-title {
                font-size: 1.8rem;
            }
            
            .payment-option {
                width: 100%;
            }
            
            .progress-step {
                width: 30%;
                font-size: 0.75rem;
            }
            
            .progress-indicator {
                width: 30px;
                height: 30px;
            }
            
            .heatmap-row {
                flex-direction: column;
            }
            
            .heatmap-entity {
                padding: 0.5rem 0;
            }
            
            .section {
                padding: 1.5rem;
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
                        unlockAchievement('Privacy Analyst', 'You\'ve mastered the Payment Privacy Heatmap!');
                    } else if (stepNum === 2) {
                        unlockAchievement('Censorship Navigator', 'You\'ve successfully overcome financial censorship!');
                    } else if (stepNum === 3) {
                        unlockAchievement('Data Detective', 'You\'ve mapped the complete data trail!');
                    }
                }
            };
            
            return (
                <div className="app-container">
                    <header className="header">
                        <h1 className="mission-title">Mission 2.3: Surveillance & Censorship</h1>
                        <p className="mission-subtitle">Discover how digital payment systems enable surveillance and censorship.</p>
                        
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
                            <p>In today's digital world, every payment you make leaves a data trail. This mission explores how financial surveillance works, who can access your payment data, and how censorship affects financial freedom.</p>
                        </div>
                        
                        <div className="dialog-box">
                            <div className="dialog-character">A</div>
                            <p><strong>Asha:</strong> "Every time you tap your card or send a mobile payment, you're creating data points that can be tracked, analyzed, and potentially used against you. But not all financial systems are created equal when it comes to privacy."</p>
                        </div>
                        
                        <div className="dialog-box odu">
                            <div className="dialog-character">O</div>
                            <p><strong>Odu:</strong> "In our village, we've always understood that money is more than numbers—it's about trust and relationships. When outside powers can see and control our transactions, they control our communities."</p>
                        </div>
                    </section>
                    
                    <div className="mission-progress">
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 1 ? 'active' : ''} ${completedSteps.includes(1) ? 'completed' : ''}`}>1</div>
                            <div className="progress-label">Payment Privacy Heatmap</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 2 ? 'active' : ''} ${completedSteps.includes(2) ? 'completed' : ''}`}>2</div>
                            <div className="progress-label">Censorship Scenario</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 3 ? 'active' : ''} ${completedSteps.includes(3) ? 'completed' : ''}`}>3</div>
                            <div className="progress-label">Data Trail Visualizer</div>
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
                        <PaymentPrivacyHeatmap 
                            activeCharacter={activeCharacter} 
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 2 && (
                        <CensorshipScenario 
                            activeCharacter={activeCharacter} 
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 3 && (
                        <DataTrailVisualizer 
                            activeCharacter={activeCharacter} 
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    <div className="section">
                        <div className="section-content">
                            <div className="reflection">
                                <h3 className="section-title">Reflect on Your Learning</h3>
                                <p className="reflection-question">How might your financial privacy impact your personal freedom? Think about specific examples from your own life.</p>
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
                                        unlockAchievement('Mission Complete', 'You\'ve completed all challenges in Mission 2.3!');
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
                                        <div>Different payment methods expose your data to different entities</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Financial censorship can target activists, journalists, and marginalized communities</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Peer-to-peer alternatives like Bitcoin offer censorship resistance</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Traditional systems like Hawala provide privacy through trusted networks</div>
                                    </div>
                                </div>
                                
                                <div className="completion-badge">
                                    <div className="badge-icon">🔒</div>
                                    <div className="badge-title">Privacy Guardian</div>
                                    <div>You've completed Mission 2.3</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Payment Privacy Heatmap Component
        const PaymentPrivacyHeatmap = ({ activeCharacter, completeStep, updateProgress }) => {
            const [selectedPayment, setSelectedPayment] = useState(null);
            const [subProgress, setSubProgress] = useState(0);
            
            const paymentOptions = [
                { 
                    id: 'bank', 
                    name: 'Bank Transfer', 
                    desc: 'Traditional bank-to-bank transfer via SWIFT or local clearing',
                    icon: '🏦'
                },
                { 
                    id: 'mobile', 
                    name: 'Mobile Money', 
                    desc: 'Services like M-Pesa, Orange Money, or MTN Mobile Money',
                    icon: '📱'
                },
                { 
                    id: 'card', 
                    name: 'Credit/Debit Card', 
                    desc: 'Payment via Visa, Mastercard, or other card networks',
                    icon: '💳'
                },
                { 
                    id: 'bitcoin', 
                    name: 'Bitcoin', 
                    desc: 'Peer-to-peer electronic cash payment',
                    icon: '₿'
                },
                { 
                    id: 'cash', 
                    name: 'Physical Cash', 
                    desc: 'Traditional paper money and coins',
                    icon: '💵'
                },
                { 
                    id: 'hawala', 
                    name: 'Hawala', 
                    desc: 'Traditional trust-based money transfer system',
                    icon: '🤝'
                },
            ];
            
            const entities = ['You (Sender)', 'Recipient', 'Banks', 'Payment Processors', 'Government', 'Third Parties'];
            
            // Heat levels from 0-4 (0 = No Access, 4 = Full Access)
            const heatmapData = {
                bank: [0, 0, 4, 3, 3, 2],
                mobile: [0, 0, 3, 4, 3, 3],
                card: [0, 0, 3, 4, 3, 4],
                bitcoin: [0, 0, 1, 0, 2, 1],
                cash: [0, 0, 0, 0, 1, 0],
                hawala: [0, 0, 0, 0, 1, 0],
            };
            
            const heatLevelDescriptions = [
                'No Access',
                'Limited Access',
                'Moderate Access',
                'Significant Access',
                'Full Access'
            ];
            
            useEffect(() => {
                // Update sub-progress when payment is selected
                if (selectedPayment) {
                    setSubProgress(50);
                }
            }, [selectedPayment]);
            
            const handleExplore = () => {
                setSubProgress(100);
                completeStep(1);
            };
            
            // Update main progress based on sub-progress
            useEffect(() => {
                updateProgress((subProgress / 3) + ((completedSteps.length) / 3 * 100));
            }, [subProgress]);
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 1: Payment Privacy Heatmap</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Explore how different payment methods reveal your data to various entities. Select a payment method to see who can access your transaction information.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Let's compare payment methods and see which ones leak your data the most. Digital surveillance creates power imbalances between individuals and institutions."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "In our traditional systems, only those directly involved in a transaction know about it. But these new systems? They tell your business to many strangers."</p>
                    </div>
                    
                    <div className="heatmap-container">
                        <h3>Select a Payment Method:</h3>
                        <div className="payment-options">
                            {paymentOptions.map(option => (
                                <div 
                                    key={option.id}
                                    className={`payment-option ${selectedPayment === option.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedPayment(option.id)}
                                >
                                    <div className="payment-option-title">
                                        <span>{option.icon}</span>
                                        <span>{option.name}</span>
                                    </div>
                                    <p>{option.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        {selectedPayment && (
                            <div className="heatmap">
                                <h3>Data Access Heatmap for {paymentOptions.find(o => o.id === selectedPayment).name}</h3>
                                
                                <div className="heatmap-row">
                                    {entities.map((entity, index) => (
                                        <div key={index} className="heatmap-entity">{entity}</div>
                                    ))}
                                </div>
                                
                                <div className="heatmap-row">
                                    {heatmapData[selectedPayment].map((level, index) => (
                                        <div key={index} className={`heatmap-cell heat-level-${level}`}>
                                            {level}
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="legend">
                                    {heatLevelDescriptions.map((desc, i) => (
                                        <div key={i} className="legend-item">
                                            <div className={`legend-color heat-level-${i}`}></div>
                                            <span>{i}: {desc}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div style={{ marginTop: '2rem' }}>
                                    <h3>Key Insights:</h3>
                                    {selectedPayment === 'bank' && (
                                        <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                            <li>Banks have complete visibility into all your transactions</li>
                                            <li>Governments can access your banking data through legal processes</li>
                                            <li>Third-party analytics firms may purchase anonymized banking data</li>
                                            <li>SWIFT network creates international surveillance opportunities</li>
                                        </ul>
                                    )}
                                    
                                    {selectedPayment === 'mobile' && (
                                        <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                            <li>Telecom providers track all mobile money transactions</li>
                                            <li>Apps collect additional metadata (location, contacts, etc.)</li>
                                            <li>Mobile providers often have less regulation than banks</li>
                                            <li>High third-party access through data sharing agreements</li>
                                        </ul>
                                    )}
                                    
                                    {selectedPayment === 'card' && (
                                        <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                            <li>Card networks track purchase location, time, and merchant</li>
                                            <li>Card data is analyzed to create detailed consumer profiles</li>
                                            <li>Merchants receive customer data with each transaction</li>
                                            <li>Highest third-party access through targeted advertising programs</li>
                                        </ul>
                                    )}
                                    
                                    {selectedPayment === 'bitcoin' && (
                                        <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                            <li>Transactions are pseudonymous, not truly anonymous</li>
                                            <li>Public blockchain means all can see transfers (but not identities)</li>
                                            <li>Chain analysis companies can trace some transaction flows</li>
                                            <li>No central authority to block or reverse transactions</li>
                                        </ul>
                                    )}
                                    
                                    {selectedPayment === 'cash' && (
                                        <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                            <li>Physical cash offers the highest level of transaction privacy</li>
                                            <li>No digital trail is created during the transaction</li>
                                            <li>Government may track large cash withdrawals/deposits</li>
                                            <li>Only the direct participants know the transaction occurred</li>
                                        </ul>
                                    )}
                                    
                                    {selectedPayment === 'hawala' && (
                                        <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                            <li>Trust-based system relies on honor and community connections</li>
                                            <li>No formal records are typically kept of transactions</li>
                                            <li>Hawaladars (operators) maintain privacy through social trust</li>
                                            <li>Governments often try to regulate or ban these networks</li>
                                        </ul>
                                    )}
                                    
                                    <button className="button" onClick={handleExplore} style={{ marginTop: '1.5rem' }}>
                                        Complete Challenge
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };
        
        // Censorship Scenario Challenge Component
        const CensorshipScenario = ({ activeCharacter, completeStep, updateProgress }) => {
            const [currentScenario, setCurrentScenario] = useState(0);
            const [selectedOption, setSelectedOption] = useState(null);
            const [feedbackMessage, setFeedbackMessage] = useState('');
            const [feedbackType, setFeedbackType] = useState('');
            const [subProgress, setSubProgress] = useState(0);
            const [completedScenarios, setCompletedScenarios] = useState([]);
            
            const scenarios = [
                {
                    title: "Scenario 1: The Activist's Dilemma",
                    description: "You're organizing a peaceful protest in a country with political restrictions. The government has started freezing bank accounts of suspected organizers. You need to receive funding from supporters to pay for supplies.",
                    options: [
                        {
                            id: 1,
                            title: "Use your regular bank account",
                            description: "It's convenient but visible to authorities.",
                            outcome: "The government identifies you as an organizer through your transactions and freezes your account. You're unable to access your funds or continue organizing.",
                            success: false
                        },
                        {
                            id: 2,
                            title: "Use a mobile money service",
                            description: "Easy to set up with just a phone number.",
                            outcome: "The mobile money provider receives a government order to monitor suspicious transactions. Your activity is flagged, and your account is suspended.",
                            success: false
                        },
                        {
                            id: 3,
                            title: "Use Bitcoin with proper privacy practices",
                            description: "Create a new wallet for each transaction and use a mixing service.",
                            outcome: "By using new addresses for each donation and running funds through a mixer, you successfully receive and use the funds without being identified.",
                            success: true
                        },
                        {
                            id: 4,
                            title: "Use a community-based Hawala network",
                            description: "Work through trusted community members who operate informal money transfers.",
                            outcome: "The trusted Hawala network successfully transfers your funds without creating digital records. The community-based trust system protects your identity.",
                            success: true
                        }
                    ]
                },
                {
                    title: "Scenario 2: Cross-Border Journalism",
                    description: "You're a journalist reporting on corruption in a neighboring country. You need to pay local sources for information, but the government is monitoring international wire transfers to identify foreign journalists.",
                    options: [
                        {
                            id: 1,
                            title: "Send a traditional bank wire",
                            description: "Direct bank-to-bank transfer with your details attached.",
                            outcome: "Your wire transfer is flagged during routine monitoring. Your sources are identified and face harassment. Your ability to report is compromised.",
                            success: false
                        },
                        {
                            id: 2,
                            title: "Use an online payment service",
                            description: "Popular service that works across borders with minimal fees.",
                            outcome: "The payment service complies with a government request for information. The transactions are linked to your account, revealing your network of sources.",
                            success: false
                        },
                        {
                            id: 3,
                            title: "Use a lightning network Bitcoin payment",
                            description: "Fast, low-fee Bitcoin transactions with enhanced privacy.",
                            outcome: "The Lightning Network allows you to make small, private payments that aren't recorded on the main blockchain. Your sources receive funds safely.",
                            success: true
                        },
                        {
                            id: 4,
                            title: "Use a gift card exchange system",
                            description: "Purchase gift cards and share the redemption codes with sources.",
                            outcome: "The indirect nature of gift card exchanges makes tracing the payments extremely difficult. Your sources receive value without direct money transfers.",
                            success: true
                        }
                    ]
                },
                {
                    title: "Scenario 3: Humanitarian Crisis",
                    description: "A natural disaster has struck a politically isolated country. International sanctions make it difficult to send aid through official channels, but people are in desperate need of assistance.",
                    options: [
                        {
                            id: 1,
                            title: "Use a large international charity",
                            description: "They have experience but must comply with sanctions.",
                            outcome: "The charity's transfers are blocked by sanctions compliance systems. The aid is significantly delayed by bureaucratic exemption processes.",
                            success: false
                        },
                        {
                            id: 2,
                            title: "Send funds through correspondent banks",
                            description: "Try to route money through multiple banks to reach the destination.",
                            outcome: "One of the correspondent banks identifies the ultimate destination and freezes the transfer, citing sanctions compliance requirements.",
                            success: false
                        },
                        {
                            id: 3,
                            title: "Use a global Bitcoin fundraising campaign",
                            description: "Raise Bitcoin donations and distribute through local partners.",
                            outcome: "The Bitcoin network isn't affected by sanctions. Local volunteers convert small amounts to cash through peer-to-peer exchanges, successfully distributing aid.",
                            success: true
                        },
                        {
                            id: 4,
                            title: "Establish a community-to-community direct aid network",
                            description: "Connect diaspora communities with relatives in the affected region.",
                            outcome: "The diaspora communities use trusted personal connections to send assistance directly to affected families, bypassing formal financial systems entirely.",
                            success: true
                        }
                    ]
                }
            ];
            
            useEffect(() => {
                // Update sub-progress based on completed scenarios
                const newProgress = (completedScenarios.length / scenarios.length) * 100;
                setSubProgress(newProgress);
                
                // Update main progress
                updateProgress((newProgress / 3) + (1 / 3 * 100)); // 1/3 for previous challenge
            }, [completedScenarios]);
            
            const handleOptionSelect = (optionId) => {
                setSelectedOption(optionId);
                
                const selectedOption = scenarios[currentScenario].options.find(o => o.id === optionId);
                
                if (selectedOption.success) {
                    setFeedbackType('success');
                    setFeedbackMessage(`Success! ${selectedOption.outcome}`);
                } else {
                    setFeedbackType('error');
                    setFeedbackMessage(`Challenge failed. ${selectedOption.outcome}`);
                }
            };
            
            const handleNextScenario = () => {
                if (!completedScenarios.includes(currentScenario)) {
                    setCompletedScenarios([...completedScenarios, currentScenario]);
                }
                
                if (currentScenario < scenarios.length - 1) {
                    setCurrentScenario(currentScenario + 1);
                    setSelectedOption(null);
                    setFeedbackMessage('');
                    setFeedbackType('');
                } else {
                    // All scenarios completed
                    completeStep(2);
                }
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 2: Censorship Scenario Challenge</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Navigate real-world financial censorship scenarios and find ways to maintain financial access despite restrictions. Choose your approach carefully.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Financial censorship happens more often than people realize. When governments or corporations decide you shouldn't have access to money, what options do you have left?"</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "Our ancestors faced many forms of control. They developed hidden pathways for resources that couldn't be blocked by those in power. Today we face new challenges but can learn from old wisdom."</p>
                    </div>
                    
                    <div className="scenario-challenge">
                        <div className="scenario">
                            <h3 className="scenario-title">{scenarios[currentScenario].title}</h3>
                            <p className="scenario-description">{scenarios[currentScenario].description}</p>
                            
                            <div className="scenario-options">
                                {scenarios[currentScenario].options.map(option => (
                                    <div 
                                        key={option.id}
                                        className={`scenario-option ${selectedOption === option.id ? 'selected' : ''}`}
                                        onClick={() => handleOptionSelect(option.id)}
                                    >
                                        <div className="scenario-option-title">{option.title}</div>
                                        <p>{option.description}</p>
                                    </div>
                                ))}
                            </div>
                            
                            {feedbackMessage && (
                                <div className={`feedback ${feedbackType}`}>
                                    {feedbackMessage}
                                </div>
                            )}
                            
                            {selectedOption && (
                                <button 
                                    className="button" 
                                    onClick={handleNextScenario}
                                    style={{ marginTop: '1.5rem' }}
                                >
                                    {currentScenario < scenarios.length - 1 ? 'Next Scenario' : 'Complete Challenge'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            );
        };
        
        // Data Trail Visualizer Component
        const DataTrailVisualizer = ({ activeCharacter, completeStep, updateProgress }) => {
            const [selectedPayment, setSelectedPayment] = useState('bank');
            const [animationRunning, setAnimationRunning] = useState(false);
            const [dataPoints, setDataPoints] = useState([]);
            const [subProgress, setSubProgress] = useState(0);
            
            const visualizationRef = useRef(null);
            
            const paymentOptions = [
                { id: 'bank', name: 'Bank Transfer', icon: '🏦' },
                { id: 'card', name: 'Credit Card', icon: '💳' },
                { id: 'bitcoin', name: 'Bitcoin', icon: '₿' },
                { id: 'hawala', name: 'Hawala', icon: '🤝' },
            ];
            
            // Entities and their positions for each payment type
            const entityConfigurations = {
                'bank': [
                    { id: 'sender', label: 'You (Sender)', x: 60, y: 80 },
                    { id: 'senderBank', label: 'Sender\'s Bank', x: 200, y: 80 },
                    { id: 'correspondent', label: 'Correspondent Bank', x: 350, y: 150 },
                    { id: 'receiverBank', label: 'Receiver\'s Bank', x: 500, y: 80 },
                    { id: 'receiver', label: 'Recipient', x: 640, y: 80 },
                    { id: 'govt', label: 'Government', x: 350, y: 300 },
                    { id: 'analytics', label: 'Data Analytics', x: 350, y: 400 },
                ],
                'card': [
                    { id: 'sender', label: 'You (Cardholder)', x: 60, y: 80 },
                    { id: 'merchant', label: 'Merchant', x: 640, y: 80 },
                    { id: 'acquirer', label: 'Acquiring Bank', x: 500, y: 150 },
                    { id: 'network', label: 'Card Network', x: 350, y: 150 },
                    { id: 'issuer', label: 'Issuing Bank', x: 200, y: 150 },
                    { id: 'marketing', label: 'Marketing Firms', x: 200, y: 300 },
                    { id: 'govt', label: 'Government', x: 500, y: 300 },
                ],
                'bitcoin': [
                    { id: 'sender', label: 'You (Sender)', x: 60, y: 80 },
                    { id: 'wallet', label: 'Bitcoin Wallet', x: 200, y: 80 },
                    { id: 'network', label: 'Bitcoin Network', x: 350, y: 150 },
                    { id: 'miners', label: 'Miners', x: 350, y: 300 },
                    { id: 'receiverWallet', label: 'Recipient Wallet', x: 500, y: 80 },
                    { id: 'receiver', label: 'Recipient', x: 640, y: 80 },
                    { id: 'analysis', label: 'Chain Analysis', x: 500, y: 400 },
                ],
                'hawala': [
                    { id: 'sender', label: 'You (Sender)', x: 60, y: 80 },
                    { id: 'localHawadar', label: 'Local Hawadar', x: 200, y: 150 },
                    { id: 'network', label: 'Hawadar Network', x: 350, y: 250 },
                    { id: 'remoteHawadar', label: 'Remote Hawadar', x: 500, y: 150 },
                    { id: 'receiver', label: 'Recipient', x: 640, y: 80 },
                ],
            };
            
            // Connection paths for each payment type
            const connectionPaths = {
                'bank': [
                    { source: 'sender', target: 'senderBank' },
                    { source: 'senderBank', target: 'correspondent' },
                    { source: 'correspondent', target: 'receiverBank' },
                    { source: 'receiverBank', target: 'receiver' },
                    { source: 'senderBank', target: 'govt' },
                    { source: 'correspondent', target: 'govt' },
                    { source: 'receiverBank', target: 'govt' },
                    { source: 'senderBank', target: 'analytics' },
                    { source: 'receiverBank', target: 'analytics' },
                ],
                'card': [
                    { source: 'sender', target: 'merchant' },
                    { source: 'merchant', target: 'acquirer' },
                    { source: 'acquirer', target: 'network' },
                    { source: 'network', target: 'issuer' },
                    { source: 'issuer', target: 'sender' },
                    { source: 'network', target: 'marketing' },
                    { source: 'merchant', target: 'marketing' },
                    { source: 'issuer', target: 'govt' },
                    { source: 'acquirer', target: 'govt' },
                ],
                'bitcoin': [
                    { source: 'sender', target: 'wallet' },
                    { source: 'wallet', target: 'network' },
                    { source: 'network', target: 'receiverWallet' },
                    { source: 'receiverWallet', target: 'receiver' },
                    { source: 'network', target: 'miners' },
                    { source: 'network', target: 'analysis' },
                ],
                'hawala': [
                    { source: 'sender', target: 'localHawadar' },
                    { source: 'localHawadar', target: 'network' },
                    { source: 'network', target: 'remoteHawadar' },
                    { source: 'remoteHawadar', target: 'receiver' },
                ],
            };
            
            // Data flow for animation
            const dataFlowPaths = {
                'bank': ['sender', 'senderBank', 'correspondent', 'receiverBank', 'receiver', 'govt', 'analytics'],
                'card': ['sender', 'merchant', 'acquirer', 'network', 'issuer', 'marketing', 'govt'],
                'bitcoin': ['sender', 'wallet', 'network', 'receiverWallet', 'receiver', 'miners', 'analysis'],
                'hawala': ['sender', 'localHawadar', 'network', 'remoteHawadar', 'receiver'],
            };
            
            // Drawing the visualization
            useEffect(() => {
                if (!visualizationRef.current) return;
                
                // Clear visualization
                visualizationRef.current.innerHTML = '';
                
                const entities = entityConfigurations[selectedPayment];
                const connections = connectionPaths[selectedPayment];
                
                // Draw connections first (below entities)
                connections.forEach(conn => {
                    const source = entities.find(e => e.id === conn.source);
                    const target = entities.find(e => e.id === conn.target);
                    
                    if (!source || !target) return;
                    
                    // Calculate connection position and angle
                    const dx = target.x - source.x;
                    const dy = target.y - source.y;
                    const length = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                    
                    const connection = document.createElement('div');
                    connection.className = 'connection';
                    connection.dataset.source = source.id;
                    connection.dataset.target = target.id;
                    connection.style.width = `${length}px`;
                    connection.style.height = '4px';
                    connection.style.left = `${source.x + 60}px`;
                    connection.style.top = `${source.y + 30}px`;
                    connection.style.transform = `rotate(${angle}deg)`;
                    
                    visualizationRef.current.appendChild(connection);
                });
                
                // Draw entities on top
                entities.forEach(entity => {
                    const entityEl = document.createElement('div');
                    entityEl.className = `entity ${entity.id === 'sender' ? 'sender' : ''} ${entity.id === 'receiver' ? 'receiver' : ''}`;
                    entityEl.textContent = entity.label;
                    entityEl.style.left = `${entity.x}px`;
                    entityEl.style.top = `${entity.y}px`;
                    entityEl.dataset.id = entity.id;
                    
                    visualizationRef.current.appendChild(entityEl);
                });
                
            }, [selectedPayment]);
            
            const startAnimation = () => {
                if (animationRunning) return;
                setAnimationRunning(true);
                setDataPoints([]);
                
                const flowPath = dataFlowPaths[selectedPayment];
                const entities = entityConfigurations[selectedPayment];
                
                // Animate data point through the flow path
                let currentIndex = 0;
                
                const animatePoint = () => {
                    if (currentIndex >= flowPath.length) {
                        setAnimationRunning(false);
                        setSubProgress(100);
                        completeStep(3);
                        return;
                    }
                    
                    const entityId = flowPath[currentIndex];
                    const entity = entities.find(e => e.id === entityId);
                    
                    if (entity) {
                        // Create new data point
                        const newPoint = {
                            id: `point-${currentIndex}`,
                            x: entity.x + 60,
                            y: entity.y + 30,
                            active: true
                        };
                        
                        setDataPoints(prev => [...prev, newPoint]);
                        
                        // Highlight connection if moving to next entity
                        if (currentIndex > 0) {
                            const sourceId = flowPath[currentIndex - 1];
                            const targetId = flowPath[currentIndex];
                            
                            const connections = document.querySelectorAll('.connection');
                            connections.forEach(conn => {
                                if ((conn.dataset.source === sourceId && conn.dataset.target === targetId) ||
                                    (conn.dataset.source === targetId && conn.dataset.target === sourceId)) {
                                    conn.classList.add('active');
                                }
                            });
                        }
                        
                        // Update progress
                        setSubProgress((currentIndex / (flowPath.length - 1)) * 100);
                    }
                    
                    currentIndex++;
                    setTimeout(animatePoint, 800);
                };
                
                animatePoint();
            };
            
            // Update main progress based on sub-progress
            useEffect(() => {
                updateProgress((subProgress / 3) + (2 / 3 * 100)); // 2/3 for previous challenges
            }, [subProgress]);
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 3: Data Trail Visualizer</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Watch how your payment data travels between different entities and see who can access your financial information.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Let's trace the journey of your payment data. You'll be surprised how many hands it passes through, even for a simple transaction."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "In our village, money changes hands directly. But in the digital world, your transaction touches many unseen parties."</p>
                    </div>
                    
                    <div className="data-trail">
                        <div className="payment-options" style={{ maxWidth: '600px' }}>
                            {paymentOptions.map(option => (
                                <div 
                                    key={option.id}
                                    className={`payment-option ${selectedPayment === option.id ? 'selected' : ''}`}
                                    onClick={() => {
                                        setSelectedPayment(option.id);
                                        setAnimationRunning(false);
                                        setDataPoints([]);
                                        setSubProgress(0);
                                    }}
                                >
                                    <div className="payment-option-title">
                                        <span>{option.icon}</span>
                                        <span>{option.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="data-controls">
                            <button 
                                className="button"
                                onClick={startAnimation}
                                disabled={animationRunning}
                            >
                                {animationRunning ? 'Tracing Data Flow...' : 'Trace Data Flow'}
                            </button>
                        </div>
                        
                        <div className="data-trail-visualization" ref={visualizationRef}>
                            {/* Entities and connections are added dynamically */}
                            
                            {/* Data points for animation */}
                            {dataPoints.map(point => (
                                <div
                                    key={point.id}
                                    className="data-point"
                                    style={{
                                        left: `${point.x}px`,
                                        top: `${point.y}px`,
                                        display: point.active ? 'block' : 'none'
                                    }}
                                ></div>
                            ))}
                        </div>
                        
                        <div style={{ marginTop: '1.5rem' }}>
                            <h3>Key Insights:</h3>
                            {selectedPayment === 'bank' && (
                                <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                    <li>Your bank transfer passes through multiple financial institutions</li>
                                    <li>Correspondent banks serve as intermediaries for international transfers</li>
                                    <li>Governments have monitoring systems that access these transfers</li>
                                    <li>Data analytics companies purchase anonymized transaction data</li>
                                </ul>
                            )}
                            
                            {selectedPayment === 'card' && (
                                <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                    <li>A single card payment touches at least 5 different entities</li>
                                    <li>Card networks collect and store all transaction details</li>
                                    <li>Marketing firms receive data to create consumer profiles</li>
                                    <li>Multiple regulatory bodies can access this information</li>
                                </ul>
                            )}
                            
                            {selectedPayment === 'bitcoin' && (
                                <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                    <li>Bitcoin transactions are processed by a decentralized network</li>
                                    <li>Miners verify transactions without knowing your identity</li>
                                    <li>Chain analysis companies attempt to track transaction patterns</li>
                                    <li>No central authority can block or censor transactions</li>
                                </ul>
                            )}
                            
                            {selectedPayment === 'hawala' && (
                                <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                    <li>Hawala operates through a network of trusted brokers</li>
                                    <li>No formal banking system or electronic records involved</li>
                                    <li>Transactions are based on honor code and community trust</li>
                                    <li>Minimal data footprint means limited surveillance potential</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            );
        };
        
        // Render the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>