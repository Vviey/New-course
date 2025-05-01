<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mission 2.1: Who Controls the Money?</title>
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
        .dark-mode .timeline-item,
        .dark-mode .achievement,
        .dark-mode .summary-box,
        .dark-mode .mission-progress,
        .dark-mode .info-card,
        .dark-mode .graph-container,
        .dark-mode .simulator-card,
        .dark-mode .case-study-card,
        .dark-mode .metric-card,
        .dark-mode .slider-card {
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
        
        /* Timeline Styles */
        .timeline-container {
            position: relative;
            margin: 3rem 0;
            padding: 1rem 0;
        }
        
        .timeline-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 4px;
            background-color: var(--golden-yellow);
            transform: translateX(-50%);
        }
        
        .timeline-item {
            position: relative;
            margin-bottom: 2rem;
            width: 45%;
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
        }
        
        .timeline-item.left {
            margin-right: auto;
        }
        
        .timeline-item.right {
            margin-left: auto;
        }
        
        .timeline-date {
            position: absolute;
            top: -15px;
            background-color: var(--primary);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.875rem;
        }
        
        .timeline-item.left .timeline-date {
            right: -15px;
        }
        
        .timeline-item.right .timeline-date {
            left: -15px;
        }
        
        .timeline-dot {
            position: absolute;
            top: 1.5rem;
            width: 20px;
            height: 20px;
            background-color: var(--primary);
            border-radius: 50%;
            border: 4px solid var(--golden-yellow);
        }
        
        .timeline-item.left .timeline-dot {
            right: -62px;
        }
        
        .timeline-item.right .timeline-dot {
            left: -62px;
        }
        
        .timeline-title {
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
            color: var(--primary);
        }
        
        .timeline-content {
            line-height: 1.6;
        }
        
        .timeline-image {
            width: 100%;
            border-radius: var(--border-radius);
            margin: 1rem 0;
            max-height: 200px;
            object-fit: cover;
        }
        
        /* Central Bank Simulator */
        .simulator-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: var(--shadow);
        }
        
        .simulator-title {
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .graph-container {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1rem;
            margin: 1.5rem 0;
            height: 300px;
            position: relative;
            border: 1px solid #eee;
        }
        
        .graph-line {
            position: absolute;
            bottom: 40px;
            left: 40px;
            right: 20px;
            height: 2px;
            background-color: #ddd;
        }
        
        .graph-line.vertical {
            width: 2px;
            bottom: 40px;
            top: 20px;
            left: 40px;
            height: auto;
        }
        
        .graph-bar {
            position: absolute;
            bottom: 42px;
            width: 40px;
            background-color: var(--primary);
            border-radius: 4px 4px 0 0;
            transition: height 0.5s ease;
        }
        
        .graph-label {
            position: absolute;
            bottom: 10px;
            text-align: center;
            font-size: 0.8rem;
            color: var(--neutral);
        }
        
        .axis-label {
            position: absolute;
            color: var(--neutral);
            font-size: 0.8rem;
        }
        
        .axis-label.y {
            transform: rotate(-90deg);
            left: -25px;
            top: 50%;
            transform-origin: center;
        }
        
        .axis-label.x {
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .slider-container {
            margin: 2rem 0;
        }
        
        .slider-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            margin-bottom: 1rem;
        }
        
        .slider-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .slider-description {
            margin-bottom: 1rem;
            color: var(--neutral);
        }
        
        .slider-labels {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }
        
        .slider-input {
            width: 100%;
            margin-bottom: 1rem;
        }
        
        .metrics-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .metric-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            flex: 1;
            min-width: 150px;
            text-align: center;
        }
        
        .metric-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .metric-label {
            color: var(--neutral);
        }
        
        /* Case Study Styles */
        .case-studies {
            margin: 2rem 0;
        }
        
        .case-study-cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 1.5rem 0;
        }
        
        .case-study-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
        }
        
        .case-study-title {
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .tag {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            background-color: var(--light-yellow);
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .tag.bailout {
            background-color: #E8F5E9;
            color: var(--success);
        }
        
        .tag.austerity {
            background-color: #FFEBEE;
            color: var(--danger);
        }
        
        .case-study-stats {
            display: flex;
            justify-content: space-between;
            margin: 1rem 0;
            flex-wrap: wrap;
        }
        
        .case-stat {
            text-align: center;
            min-width: 80px;
            margin-bottom: 0.5rem;
        }
        
        .case-stat-value {
            font-weight: 700;
            font-size: 1.25rem;
        }
        
        .case-stat-label {
            font-size: 0.8rem;
            color: var(--neutral);
        }
        
        .info-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            margin: 1.5rem 0;
        }
        
        .info-card-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
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
            
            .timeline-line {
                left: 30px;
            }
            
            .timeline-item {
                width: calc(100% - 60px);
                margin-left: 60px;
            }
            
            .timeline-item.left .timeline-dot,
            .timeline-item.right .timeline-dot {
                left: -46px;
            }
            
            .timeline-item.left .timeline-date,
            .timeline-item.right .timeline-date {
                left: 0;
                top: -30px;
            }
            
            .case-study-cards {
                grid-template-columns: 1fr;
            }
            
            .metrics-container {
                flex-direction: column;
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
                        unlockAchievement('Central Banker', 'You\'ve mastered the complexities of monetary policy!');
                    } else if (stepNum === 2) {
                        unlockAchievement('Monetary Historian', 'You\'ve traced the evolution of money control!');
                    } else if (stepNum === 3) {
                        unlockAchievement('Crisis Analyst', 'You\'ve analyzed responses to financial crises!');
                    }
                }
            };
            
            return (
                <div className="app-container">
                    <header className="header">
                        <h1 className="mission-title">Mission 2.1: Who Controls the Money?</h1>
                        <p className="mission-subtitle">Explore how central banks and monetary authorities influence economies and our daily lives.</p>
                        
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
                            <p>In this mission, we'll explore the powerful institutions that control money creation, supply, and flow in the modern world. We'll investigate who makes monetary decisions, how those decisions affect different communities, and the historical development of monetary control systems.</p>
                        </div>
                        
                        <div className="dialog-box">
                            <div className="dialog-character">A</div>
                            <p><strong>Asha:</strong> "Money isn't just created magically—specific institutions have the power to create, distribute, and control it. Understanding who these institutions are and how they operate is the first step in understanding financial sovereignty."</p>
                        </div>
                        
                        <div className="dialog-box odu">
                            <div className="dialog-character">O</div>
                            <p><strong>Odu:</strong> "In my village, we once had our own forms of money and community wealth systems. Then the colonial powers came and forced us to use their currency, putting control of our economy in distant hands. Today's central banks emerged from that history."</p>
                        </div>
                    </section>
                    
                    <div className="mission-progress">
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 1 ? 'active' : ''} ${completedSteps.includes(1) ? 'completed' : ''}`}>1</div>
                            <div className="progress-label">Central Bank Simulator</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 2 ? 'active' : ''} ${completedSteps.includes(2) ? 'completed' : ''}`}>2</div>
                            <div className="progress-label">Historical Timeline</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 3 ? 'active' : ''} ${completedSteps.includes(3) ? 'completed' : ''}`}>3</div>
                            <div className="progress-label">Crisis Case Studies</div>
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
                        <CentralBankSimulator
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 2 && (
                        <HistoricalTimeline
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 3 && (
                        <CrisisCaseStudies
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    <div className="section">
                        <div className="section-content">
                            <div className="reflection">
                                <h3 className="section-title">Final Reflection</h3>
                                <p className="reflection-question">Based on what you've learned, who do you think benefits most from current central banking systems? Who bears the greatest costs? How might monetary systems be designed differently?</p>
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
                                        unlockAchievement('Mission Complete', 'You\'ve completed all challenges in Mission 2.1!');
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
                                        <div>Central banks have enormous power to create money, influence economies, and affect people's daily lives</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Monetary policy creates winners and losers, often benefiting financial asset owners while sometimes harming savers</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Modern central banking evolved from colonial currency boards that served imperial interests</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Response to economic crises reveals power dynamics, with some groups receiving bailouts while others face austerity</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>The "independence" of central banks often means independence from democratic accountability rather than from financial interests</div>
                                    </div>
                                </div>
                                
                                <div className="completion-badge">
                                    <div className="badge-icon">🏦</div>
                                    <div className="badge-title">Monetary System Analyst</div>
                                    <div>You've completed Mission 2.1</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Central Bank Simulator Component
        const CentralBankSimulator = ({ activeCharacter, completeStep, updateProgress }) => {
            const [interestRate, setInterestRate] = useState(5);
            const [moneySupply, setMoneySupply] = useState(5);
            const [crisis, setCrisis] = useState('inflation');
            const [simulationRun, setSimulationRun] = useState(false);
            const [results, setResults] = useState(null);
            const [subProgress, setSubProgress] = useState(0);
            
            useEffect(() => {
                // Update sub-progress based on simulation
                const newProgress = simulationRun ? 100 : 0;
                setSubProgress(newProgress);
                
                if (simulationRun) {
                    completeStep(1);
                }
                
                // Update main progress
                updateProgress(newProgress / 3); // First challenge contributes 1/3 to overall progress
            }, [simulationRun]);
            
            const runSimulation = () => {
                // Calculate simulation results based on interest rate, money supply, and crisis type
                const unemploymentBase = crisis === 'inflation' ? 5 : 10;
                const inflationBase = crisis === 'inflation' ? 8 : 2;
                
                // Interest rate effects (higher rate reduces inflation but increases unemployment)
                const inflationEffect = -(interestRate - 5) * 0.8;
                const unemploymentEffect = (interestRate - 5) * 0.6;
                
                // Money supply effects (higher money supply increases inflation, reduces unemployment)
                const moneyInflationEffect = (moneySupply - 5) * 0.7;
                const moneyUnemploymentEffect = -(moneySupply - 5) * 0.5;
                
                // Calculate final results
                const inflation = Math.max(0, Math.min(15, inflationBase + inflationEffect + moneyInflationEffect));
                const unemployment = Math.max(3, Math.min(20, unemploymentBase + unemploymentEffect + moneyUnemploymentEffect));
                
                // Asset price impact (higher money supply and lower interest rates both increase asset prices)
                const assetPriceChange = (moneySupply - 5) * 5 - (interestRate - 5) * 4;
                
                // Inequality impact (asset price increases tend to increase inequality)
                const inequalityChange = assetPriceChange * 0.5;
                
                // Calculate beneficiaries and costs
                let mainBeneficiary = '';
                let mainCost = '';
                
                if (assetPriceChange > 5) {
                    mainBeneficiary = 'Asset Owners (Top 10% wealth)';
                } else if (unemployment < 5) {
                    mainBeneficiary = 'Workers & Job Seekers';
                } else if (inflation < 3) {
                    mainBeneficiary = 'Savers & Fixed Income';
                } else {
                    mainBeneficiary = 'Government Debt Financing';
                }
                
                if (inflation > 7) {
                    mainCost = 'Savers & Fixed Income';
                } else if (unemployment > 8) {
                    mainCost = 'Workers & Job Seekers';
                } else if (assetPriceChange < -5) {
                    mainCost = 'Asset Owners & Pension Funds';
                } else {
                    mainCost = 'Future Generations (Debt)';
                }
                
                setResults({
                    inflation,
                    unemployment,
                    assetPriceChange,
                    inequalityChange,
                    mainBeneficiary,
                    mainCost
                });
                
                setSimulationRun(true);
            };
            
            const resetSimulation = () => {
                setInterestRate(5);
                setMoneySupply(5);
                setCrisis('inflation');
                setResults(null);
                setSimulationRun(false);
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 1: Central Bank Simulator</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Take on the role of a central banker facing an economic crisis. Make policy decisions about interest rates and money supply, then see how they affect different groups in society.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Central bankers face real tradeoffs—but their decisions typically benefit some groups far more than others. Let's see who wins and who loses when you pull the monetary levers."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "In my lifetime, I've witnessed how these decisions made in faraway capitals can transform local communities. When interest rates rise in Washington or London, farmers in my village lose their land to debt."</p>
                    </div>
                    
                    <div className="simulator-card">
                        <h3 className="simulator-title">Economic Crisis Simulator</h3>
                        
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Select Crisis Scenario:</h4>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <button 
                                    className={`button ${crisis === 'inflation' ? '' : 'secondary'}`}
                                    onClick={() => setCrisis('inflation')}
                                    disabled={simulationRun}
                                >
                                    Inflation Crisis (8% inflation, 5% unemployment)
                                </button>
                                <button 
                                    className={`button ${crisis === 'unemployment' ? '' : 'secondary'}`}
                                    onClick={() => setCrisis('unemployment')}
                                    disabled={simulationRun}
                                >
                                    Unemployment Crisis (2% inflation, 10% unemployment)
                                </button>
                            </div>
                        </div>
                        
                        <div className="slider-container">
                            <div className="slider-card">
                                <h4 className="slider-title">Set Interest Rate Policy</h4>
                                <p className="slider-description">Higher rates reduce inflation but tend to increase unemployment and lower asset prices.</p>
                                
                                <div className="slider-labels">
                                    <span>Lower Rates (1%)</span>
                                    <span>Higher Rates (10%)</span>
                                </div>
                                
                                <input 
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(parseInt(e.target.value))}
                                    disabled={simulationRun}
                                    className="slider-input"
                                />
                                
                                <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    {interestRate}% Interest Rate
                                </div>
                            </div>
                            
                            <div className="slider-card">
                                <h4 className="slider-title">Set Money Supply Policy</h4>
                                <p className="slider-description">Expanding money supply can stimulate growth and reduce unemployment but may increase inflation.</p>
                                
                                <div className="slider-labels">
                                    <span>Tighten Supply</span>
                                    <span>Expand Supply</span>
                                </div>
                                
                                <input 
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={moneySupply}
                                    onChange={(e) => setMoneySupply(parseInt(e.target.value))}
                                    disabled={simulationRun}
                                    className="slider-input"
                                />
                                
                                <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    {moneySupply > 5 ? '+' : ''}{(moneySupply - 5) * 10}% Money Supply Change
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                            {!simulationRun ? (
                                <button 
                                    className="button"
                                    onClick={runSimulation}
                                >
                                    Implement Policy
                                </button>
                            ) : (
                                <button 
                                    className="button secondary"
                                    onClick={resetSimulation}
                                >
                                    Reset Simulation
                                </button>
                            )}
                        </div>
                        
                        {results && (
                            <div>
                                <h4 style={{ marginBottom: '1rem' }}>Policy Results:</h4>
                                
                                <div className="metrics-container">
                                    <div className="metric-card">
                                        <div className="metric-value" style={{ color: results.inflation > 6 ? 'var(--danger)' : results.inflation < 3 ? 'var(--success)' : 'var(--warning)' }}>
                                            {results.inflation.toFixed(1)}%
                                        </div>
                                        <div className="metric-label">Inflation Rate</div>
                                    </div>
                                    
                                    <div className="metric-card">
                                        <div className="metric-value" style={{ color: results.unemployment > 8 ? 'var(--danger)' : results.unemployment < 5 ? 'var(--success)' : 'var(--warning)' }}>
                                            {results.unemployment.toFixed(1)}%
                                        </div>
                                        <div className="metric-label">Unemployment</div>
                                    </div>
                                    
                                    <div className="metric-card">
                                        <div className="metric-value" style={{ color: results.assetPriceChange > 0 ? 'var(--success)' : 'var(--danger)' }}>
                                            {results.assetPriceChange > 0 ? '+' : ''}{results.assetPriceChange.toFixed(1)}%
                                        </div>
                                        <div className="metric-label">Asset Price Change</div>
                                    </div>
                                    
                                    <div className="metric-card">
                                        <div className="metric-value" style={{ color: results.inequalityChange > 0 ? 'var(--danger)' : 'var(--success)' }}>
                                            {results.inequalityChange > 0 ? '+' : ''}{results.inequalityChange.toFixed(1)}%
                                        </div>
                                        <div className="metric-label">Inequality Impact</div>
                                    </div>
                                </div>
                                
                                <div className="info-card" style={{ marginTop: '2rem' }}>
                                    <h4 className="info-card-title">Policy Impact Analysis:</h4>
                                    <p style={{ marginBottom: '1rem' }}>Your monetary policy choices have created winners and losers in the economy:</p>
                                    
                                    <div style={{ marginBottom: '1rem' }}>
                                        <strong>Main Beneficiaries:</strong> {results.mainBeneficiary}
                                    </div>
                                    
                                    <div style={{ marginBottom: '1rem' }}>
                                        <strong>Main Cost Bearers:</strong> {results.mainCost}
                                    </div>
                                    
                                    <div style={{ marginTop: '1.5rem' }}>
                                        <p><strong>Key Insight:</strong> Central bank policy involves real tradeoffs, but these tradeoffs aren't experienced equally across society. Decisions that appear "technical" are actually deeply political in their effects.</p>
                                    </div>
                                </div>
                                
                                <div style={{ marginTop: '2rem' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Reflection Questions:</h4>
                                    <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                        <li>Who seemed to benefit most from your policy decisions?</li>
                                        <li>Were you able to address the crisis without creating hardships for vulnerable groups?</li>
                                        <li>How might these decisions be different if central banks had different mandates or governance?</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };
        
        // Historical Timeline Component
        const HistoricalTimeline = ({ activeCharacter, completeStep, updateProgress }) => {
            const [expandedEvents, setExpandedEvents] = useState([]);
            const [subProgress, setSubProgress] = useState(0);
            
            const timelineEvents = [
                {
                    id: 1,
                    year: '1694',
                    title: 'Bank of England Established',
                    content: 'The world\'s first major central bank was created to fund war with France. It received special privileges to issue bank notes in exchange for loans to the government.',
                    longContent: 'The Bank of England was founded by private financiers to fund England\'s war with France. In exchange for loans to the government, the Bank received the exclusive right to issue bank notes in London. This established the model of central banks serving state power while being governed by financial interests, a pattern that continues in modern central banking.',
                    position: 'left'
                },
                {
                    id: 2,
                    year: '1800s',
                    title: 'Colonial Currency Boards',
                    content: 'Imperial powers established currency boards in colonies to control local money systems. These boards issued local currencies backed by the colonizer\'s currency, extracting wealth while preventing monetary sovereignty.',
                    longContent: 'Colonial powers like Britain and France established currency boards throughout their empires in Africa, Asia, and the Caribbean. These boards issued local currencies that were fully backed by and pegged to the colonizer\'s currency. This system facilitated resource extraction, prevented colonies from developing independent monetary policies, and created dependency. Many of today\'s central banks in Africa and Asia evolved directly from these colonial institutions.',
                    position: 'right'
                },
                {
                    id: 3,
                    year: '1913',
                    title: 'US Federal Reserve Created',
                    content: 'After banking panics, the US established the Federal Reserve System. While publicly managed, its design gave significant power to private bankers and financial interests.',
                    longContent: 'The Federal Reserve was created after a series of financial panics, particularly the Panic of 1907. While technically owned by the government, its unique structure gave significant power to member banks. The Fed\'s regional banks are actually owned by private commercial banks, creating a system where banking interests have structural influence over monetary policy. Today, the Fed is the world\'s most powerful central bank, with decisions that impact economies worldwide.',
                    position: 'left'
                },
                {
                    id: 4,
                    year: '1930s',
                    title: 'Great Depression & Monetary Reform',
                    content: 'The devastating Great Depression led to reforms separating commercial and investment banking. It also ended the domestic gold standard in many countries, giving central banks more control over money creation.',
                    longContent: 'The devastating Great Depression prompted significant changes to monetary systems. The U.S. abandoned the domestic gold standard, giving the Federal Reserve greater power to control the money supply. Laws like the Glass-Steagall Act separated commercial banking from riskier investment banking. Central banks gained more power but also became more accountable to elected governments during this period, as economic recovery became the priority.',
                    position: 'right'
                },
                {
                    id: 5,
                    year: '1944-1971',
                    title: 'Bretton Woods System',
                    content: 'The post-WWII Bretton Woods system pegged global currencies to the US dollar, which was convertible to gold at $35/oz. This created a semi-constrained monetary system that limited central bank money creation.',
                    longContent: 'After World War II, the Bretton Woods agreement established a system where other currencies were pegged to the U.S. dollar, which was itself convertible to gold at $35 per ounce. This imposed some discipline on central banks, as excessive money printing could lead to a gold drain. However, the system collapsed in 1971 when President Nixon ended dollar-gold convertibility, leading to the current fiat money era where central bank money creation has no external constraint.',
                    position: 'left'
                },
                {
                    id: 6,
                    year: '1950s-1960s',
                    title: 'Independence & Structural Adjustment',
                    content: 'As African nations gained independence, many established central banks. However, through IMF and World Bank programs, these banks often implemented policies favoring former colonial interests and international creditors over local development.',
                    longContent: 'As African nations gained independence, they established central banks as symbols of sovereignty. However, through "structural adjustment programs" imposed by the IMF and World Bank, these central banks often had to implement policies favoring international creditors, multinational corporations, and former colonial interests. Many were required to maintain high interest rates, cut public spending, and prioritize debt repayment over local development needs, continuing economic dependency in a new form.',
                    position: 'right'
                },
                {
                    id: 7,
                    year: '1980s',
                    title: 'Central Bank "Independence" Movement',
                    content: 'An international push to make central banks "independent" from elected governments shifted monetary policy focus toward inflation control while reducing democratic accountability.',
                    longContent: 'During the 1980s, an international movement pushed for central bank "independence" from elected governments. While portrayed as technical and apolitical, this shift emphasized controlling inflation above other goals like full employment or equitable growth. Notably, while central banks became more independent from democratic oversight, they often remained highly responsive to financial sector interests. This era saw monetary policy shift toward benefiting asset owners and creditors, with less concern for workers and debtors.',
                    position: 'left'
                },
                {
                    id: 8,
                    year: '2008-Present',
                    title: 'Quantitative Easing Era',
                    content: 'Following the 2008 financial crisis, central banks massively expanded their powers, creating trillions in new currency through quantitative easing. This boosted asset prices while having mixed effects on the broader economy.',
                    longContent: 'After the 2008 financial crisis, central banks dramatically expanded their powers and balance sheets. The Federal Reserve, European Central Bank, Bank of Japan and others created trillions in new currency through "quantitative easing" to purchase financial assets. These policies saved the financial system and boosted asset prices, primarily benefiting the wealthy. Meanwhile, many ordinary citizens faced stagnant wages, austerity policies, and increasing inequality, raising questions about who central banks actually serve.',
                    position: 'right'
                }
            ];
            
            useEffect(() => {
                // Update sub-progress based on expanded events
                const newProgress = (expandedEvents.length / timelineEvents.length) * 100;
                setSubProgress(newProgress);
                
                if (expandedEvents.length === timelineEvents.length) {
                    completeStep(2);
                }
                
                // Update main progress
                updateProgress((newProgress / 3) + (100 / 3)); // First challenge (33%) + current progress (up to 33%)
            }, [expandedEvents]);
            
            const toggleEventExpansion = (eventId) => {
                if (expandedEvents.includes(eventId)) {
                    setExpandedEvents(expandedEvents.filter(id => id !== eventId));
                } else {
                    setExpandedEvents([...expandedEvents, eventId]);
                }
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 2: Historical Timeline</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Explore the evolution of monetary control systems from early central banks to modern times. Discover how colonial legacies, financial interests, and political shifts have shaped who controls money creation and distribution.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Central banks didn't appear out of nowhere—they evolved to serve specific interests. Understanding their history helps us see whose needs they were designed to meet."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "Before colonization, our communities had our own monetary systems that served our needs. The currency boards that later became central banks were designed to extract our wealth, not develop our economies."</p>
                    </div>
                    
                    <div className="timeline-container">
                        <div className="timeline-line"></div>
                        
                        {timelineEvents.map(event => (
                            <div 
                                key={event.id} 
                                className={`timeline-item ${event.position}`}
                                onClick={() => toggleEventExpansion(event.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="timeline-date">{event.year}</div>
                                <div className="timeline-dot"></div>
                                <h3 className="timeline-title">{event.title}</h3>
                                <div className="timeline-content">
                                    {expandedEvents.includes(event.id) ? event.longContent : event.content}
                                </div>
                                <div style={{ textAlign: 'center', color: 'var(--primary)', marginTop: '1rem' }}>
                                    {expandedEvents.includes(event.id) ? 'Click to collapse' : 'Click to expand'}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {expandedEvents.length === timelineEvents.length && (
                        <div className="info-card">
                            <h3 className="info-card-title">Key Historical Insights:</h3>
                            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                <li><strong>War and State Power:</strong> Most central banks were originally created to fund wars and expand state power</li>
                                <li><strong>Colonial Origins:</strong> Many central banks in the Global South evolved directly from colonial currency boards designed for extraction</li>
                                <li><strong>Private Influence:</strong> Despite their public role, central banks often maintain deep structural ties to private financial interests</li>
                                <li><strong>Shifting Mandates:</strong> Central bank goals have changed over time, from gold standard maintenance to full employment to inflation targeting</li>
                                <li><strong>Power Expansion:</strong> Since 2008, central banks have dramatically expanded their powers with limited democratic oversight</li>
                            </ul>
                            
                            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                <button className="button">Challenge Completed</button>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Crisis Case Studies Component
        const CrisisCaseStudies = ({ activeCharacter, completeStep, updateProgress }) => {
            const [expandedCases, setExpandedCases] = useState([]);
            const [subProgress, setSubProgress] = useState(0);
            
            const caseStudies = [
                {
                    id: 'us',
                    title: 'United States: Bailouts & Quantitative Easing',
                    description: 'When the 2008 financial crisis hit, the Federal Reserve took extraordinary measures to save the financial system.',
                    detailedDescription: 'The Federal Reserve responded to the 2008 crisis with unprecedented measures: slashing interest rates to near-zero, providing over $29 trillion in emergency loans to financial institutions, and launching multiple rounds of quantitative easing that expanded its balance sheet from $900 billion to over $4.5 trillion. These actions saved major banks from collapse and eventually helped reduce unemployment, but also inflated asset prices (benefiting the wealthy) while ordinary citizens faced foreclosures, job losses, and stagnant wages.',
                    centralBankIndependence: 'High',
                    approachType: 'bailout',
                    bankBailouts: '$700+ billion',
                    unemploymentPeak: '10%',
                    housingLosses: '10 million foreclosures',
                    assetPriceChange: '+250% (S&P 500, 2009-2020)'
                },
                {
                    id: 'greece',
                    title: 'Greece: Austerity & Economic Contraction',
                    description: 'Greece experienced the harshest conditions during the European debt crisis, with severe austerity measures imposed.',
                    detailedDescription: 'When Greece faced a debt crisis in 2009-2010, the European Central Bank, IMF, and European Commission (the "Troika") imposed severe austerity as a condition for financial assistance. The Greek central bank, part of the Eurozone system, had no independent monetary policy to soften the blow. Public spending was slashed by 36%, pensions were cut, public assets were privatized, and the economy contracted by 25% - a depression worse than the US Great Depression. Unemployment reached 27% overall and over 50% for youth, while public debt actually increased as a percentage of GDP.',
                    centralBankIndependence: 'None (Euro member)',
                    approachType: 'austerity',
                    budgetCuts: '36% of GDP',
                    unemploymentPeak: '27% (youth: 57%)',
                    economicContraction: '25% GDP decline',
                    assetPriceChange: '-85% (Athens Stock Exchange, 2007-2016)'
                },
                {
                    id: 'iceland',
                    title: 'Iceland: Bank Failures & Public Interest Focus',
                    description: 'Iceland took the unusual step of letting banks fail and prioritizing social welfare over bank bailouts.',
                    detailedDescription: 'When Iceland\'s oversized banking sector collapsed in 2008, the country took a radically different approach. Rather than bailing out banks, Iceland let them fail, protected domestic deposits, and implemented capital controls. The government also refused to impose harsh austerity, maintaining social protections despite IMF pressure. While the króna devalued sharply (improving exports) and there was a brief deep recession, the recovery was remarkably swift. Iceland prioritized prosecuting bank executives (jailing 26 bankers) and implemented debt forgiveness for households rather than just assisting financial institutions.',
                    centralBankIndependence: 'Medium',
                    approachType: 'public',
                    bankBailouts: 'Banks allowed to fail',
                    unemploymentPeak: '7.6%',
                    householdDebt: '13% of mortgages forgiven',
                    prosecutions: '26 bankers jailed',
                    assetPriceChange: '-90% then +120% recovery'
                },
                {
                    id: 'malaysia',
                    title: 'Malaysia: Capital Controls & Independent Policy',
                    description: 'During the 1997 Asian Financial Crisis, Malaysia defied the IMF by implementing capital controls to maintain policy independence.',
                    detailedDescription: 'When the Asian Financial Crisis hit in 1997, Malaysia took a controversial approach. Rather than accepting IMF assistance with its accompanying austerity requirements, Malaysia implemented capital controls, fixed its exchange rate, and pursued expansionary fiscal and monetary policy. The central bank exercised independence from international financial institutions, not just from the domestic government. This approach was widely criticized by economists at the time but proved successful—Malaysia recovered faster and with less social pain than neighbors who followed IMF orthodoxy. This case demonstrates how central banks can serve domestic economic needs when freed from external constraints.',
                    centralBankIndependence: 'Medium (but independent from IMF)',
                    approachType: 'public',
                    capitalControls: 'Comprehensive',
                    gdpRecovery: 'Faster than IMF-program countries',
                    povertyIncrease: 'Minimal compared to neighbors',
                    outcome: 'Vindicated despite initial criticism'
                }
            ];
            
            useEffect(() => {
                // Update sub-progress based on expanded cases
                const newProgress = (expandedCases.length / caseStudies.length) * 100;
                setSubProgress(newProgress);
                
                if (expandedCases.length === caseStudies.length) {
                    completeStep(3);
                }
                
                // Update main progress
                updateProgress((newProgress / 3) + (200 / 3)); // First two challenges (66%) + current progress (up to 33%)
            }, [expandedCases]);
            
            const toggleCaseExpansion = (caseId) => {
                if (expandedCases.includes(caseId)) {
                    setExpandedCases(expandedCases.filter(id => id !== caseId));
                } else {
                    setExpandedCases([...expandedCases, caseId]);
                }
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 3: Crisis Response Case Studies</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Compare how different countries' central banks responded to financial crises. Analyze who benefited from these responses, who bore the costs, and what role central bank independence played in these outcomes.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "Crisis responses reveal whose interests central banks truly serve. Some saved banks while imposing austerity on citizens, but alternatives existed—as Iceland and Malaysia demonstrated."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "When our countries faced currency crises in the 1980s and 1990s, the IMF imposed harsh medicine that hurt ordinary people while protecting foreign creditors. But some nations found different paths that put their citizens first."</p>
                    </div>
                    
                    <div className="case-studies">
                        <div className="case-study-cards">
                            {Object.values(caseStudies).map(caseStudy => (
                                <div 
                                    key={caseStudy.id}
                                    className="case-study-card"
                                    onClick={() => toggleCaseExpansion(caseStudy.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h3 className="case-study-title">{caseStudy.title}</h3>
                                    
                                    <div style={{ marginBottom: '1rem' }}>
                                        <span className={`tag ${caseStudy.approachType}`}>
                                            {caseStudy.approachType === 'bailout' ? '💰 Bailout Approach' : 
                                             caseStudy.approachType === 'austerity' ? '✂️ Austerity Approach' : 
                                             '🌱 Public Interest Approach'}
                                        </span>
                                        <span className="tag">
                                            {caseStudy.centralBankIndependence === 'High' ? '🏦 High CB Independence' : 
                                             caseStudy.centralBankIndependence === 'Medium' ? '🏦 Medium CB Independence' : 
                                             '🏦 No CB Independence'}
                                        </span>
                                    </div>
                                    
                                    <p style={{ marginBottom: '1rem' }}>
                                        {expandedCases.includes(caseStudy.id) ? caseStudy.detailedDescription : caseStudy.description}
                                    </p>
                                    
                                    {expandedCases.includes(caseStudy.id) && (
                                        <div className="case-study-stats">
                                            {caseStudy.bankBailouts && (
                                                <div className="case-stat">
                                                    <div className="case-stat-value">{caseStudy.bankBailouts}</div>
                                                    <div className="case-stat-label">Bank Bailouts</div>
                                                </div>
                                            )}
                                            
                                            {caseStudy.unemploymentPeak && (
                                                <div className="case-stat">
                                                    <div className="case-stat-value">{caseStudy.unemploymentPeak}</div>
                                                    <div className="case-stat-label">Peak Unemployment</div>
                                                </div>
                                            )}
                                            
                                            {caseStudy.budgetCuts && (
                                                <div className="case-stat">
                                                    <div className="case-stat-value">{caseStudy.budgetCuts}</div>
                                                    <div className="case-stat-label">Budget Cuts</div>
                                                </div>
                                            )}
                                            
                                            {caseStudy.economicContraction && (
                                                <div className="case-stat">
                                                    <div className="case-stat-value">{caseStudy.economicContraction}</div>
                                                    <div className="case-stat-label">Economic Contraction</div>
                                                </div>
                                            )}
                                            
                                            {caseStudy.housingLosses && (
                                                <div className="case-stat">
                                                    <div className="case-stat-value">{caseStudy.housingLosses}</div>
                                                    <div className="case-stat-label">Housing Losses</div>
                                                </div>
                                            )}
                                            
                                            {caseStudy.householdDebt && (
                                                <div className="case-stat">
                                                    <div className="case-stat-value">{caseStudy.householdDebt}</div>
                                                    <div className="case-stat-label">Debt Forgiveness</div>
                                                </div>
                                            )}
                                            
                                            {caseStudy.prosecutions && (
                                                <div className="case-stat">
                                                    <div className="case-stat-value">{caseStudy.prosecutions}</div>
                                                    <div className="case-stat-label">Banker Prosecutions</div>
                                                </div>
                                            )}
                                            
                                            {caseStudy.capitalControls && (
                                                <div className="case-stat">
                                                    <div className="case-stat-value">{caseStudy.capitalControls}</div>
                                                    <div className="case-stat-label">Capital Controls</div>
                                                </div>
                                            )}
                                            
                                            {caseStudy.assetPriceChange && (
                                                <div className="case-stat">
                                                    <div className="case-stat-value">{caseStudy.assetPriceChange}</div>
                                                    <div className="case-stat-label">Asset Price Change</div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    
                                    <div style={{ textAlign: 'center', color: 'var(--primary)', marginTop: '1rem' }}>
                                        {expandedCases.includes(caseStudy.id) ? 'Click to collapse' : 'Click to expand'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {expandedCases.length === caseStudies.length && (
                        <div className="info-card">
                            <h3 className="info-card-title">Comparative Analysis:</h3>
                            <p style={{ marginBottom: '1rem' }}>These case studies reveal important patterns in how central banks respond to crises and who benefits from these responses:</p>
                            
                            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                <li><strong>Bailout Pattern:</strong> Countries with highly independent central banks (US, UK) tended to focus on saving financial institutions first, with benefits primarily flowing to asset owners and large institutions</li>
                                <li><strong>Austerity Impact:</strong> Countries without monetary sovereignty (Greece, Portugal) faced the harshest austerity measures, with costs concentrated on ordinary citizens, the elderly, and public sector workers</li>
                                <li><strong>Alternative Approaches:</strong> Countries that prioritized citizen welfare over bank shareholders (Iceland) or maintained policy independence (Malaysia) often had better social outcomes despite conventional economic criticism</li>
                                <li><strong>Inequality Effects:</strong> In most cases, the financial sector recovered faster than the real economy, and wealthy asset owners benefited more than workers and renters</li>
                                <li><strong>Independence Questions:</strong> Central bank "independence" often meant independence from democratic accountability, not independence from financial sector influence</li>
                            </ul>
                            
                            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                <button className="button">Challenge Completed</button>
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