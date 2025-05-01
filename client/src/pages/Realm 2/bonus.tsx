<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bonus Mission: Whisper Networks</title>
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
            --hawala-color: #6A8CAF;
            --bitcoin-color: #F7931A;
            --esusu-color: #6ABF69;
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
        .dark-mode .achievement,
        .dark-mode .summary-box,
        .dark-mode .scenario-card,
        .dark-mode .option-card,
        .dark-mode .mission-progress,
        .dark-mode .game-board,
        .dark-mode .game-cell,
        .dark-mode .method-card,
        .dark-mode .network-node,
        .dark-mode .tutorial-card,
        .dark-mode .challenge-step,
        .dark-mode .toolkit-item {
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
        
        .button.hawala {
            background-color: var(--hawala-color);
        }
        
        .button.hawala:hover {
            background-color: #5a7c9f;
        }
        
        .button.bitcoin {
            background-color: var(--bitcoin-color);
        }
        
        .button.bitcoin:hover {
            background-color: #e78c10;
        }
        
        .button.esusu {
            background-color: var(--esusu-color);
        }
        
        .button.esusu:hover {
            background-color: #5aaf59;
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
        
        /* Whisper Networks Game Styles */
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
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .scenario-description {
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        
        .options-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .option-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1rem;
            box-shadow: var(--shadow);
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid transparent;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .option-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
        
        .option-card.selected {
            border-color: var(--primary);
        }
        
        .option-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
        }
        
        .option-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
        }
        
        .option-title {
            font-weight: 700;
            flex: 1;
        }
        
        .option-content {
            flex: 1;
            margin-bottom: 1rem;
        }
        
        .option-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: auto;
        }
        
        .option-stat {
            font-size: 0.875rem;
            padding: 0.25rem 0.5rem;
            border-radius: 20px;
            background-color: var(--light-yellow);
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }
        
        .route-feedback {
            margin-top: 1.5rem;
            padding: 1rem;
            border-radius: var(--border-radius);
            display: none;
        }
        
        .route-feedback.success {
            background-color: #E8F5E9;
            border-left: 4px solid var(--success);
            display: block;
        }
        
        .route-feedback.warning {
            background-color: #FFF8E1;
            border-left: 4px solid var(--warning);
            display: block;
        }
        
        .route-feedback.error {
            background-color: #FFEBEE;
            border-left: 4px solid var(--danger);
            display: block;
        }
        
        .game-board {
            background-color: white;
            border-radius: var(--border-radius);
            margin: 2rem 0;
            box-shadow: var(--shadow);
            overflow: hidden;
            position: relative;
        }
        
        .game-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 2px;
            border: 2px solid #ddd;
            border-radius: var(--border-radius);
            overflow: hidden;
        }
        
        .dark-mode .game-grid {
            border-color: #444;
        }
        
        .game-cell {
            aspect-ratio: 1;
            background-color: white;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            transition: var(--transition);
            user-select: none;
        }
        
        .cell-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        
        .cell-title {
            font-size: 0.75rem;
            font-weight: 700;
            margin-top: 0.25rem;
        }
        
        .game-cell:hover {
            background-color: rgba(238, 114, 11, 0.1);
        }
        
        .game-cell.start {
            background-color: var(--success);
            color: white;
        }
        
        .game-cell.end {
            background-color: var(--primary);
            color: white;
        }
        
        .game-cell.surveillance {
            background-color: rgba(211, 47, 47, 0.1);
        }
        
        .game-cell.path {
            background-color: rgba(238, 114, 11, 0.2);
        }
        
        .game-cell.active {
            background-color: var(--primary);
            color: white;
        }
        
        .game-cell.hawala-node {
            border: 2px dashed var(--hawala-color);
        }
        
        .game-cell.bitcoin-node {
            border: 2px dashed var(--bitcoin-color);
        }
        
        .game-cell.esusu-node {
            border: 2px dashed var(--esusu-color);
        }
        
        .game-player {
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            z-index: 10;
            transition: transform 0.5s ease;
        }
        
        .surveillance-radius {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(211, 47, 47, 0.2);
            z-index: 5;
            pointer-events: none;
        }
        
        .game-controls {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .method-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .method-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            flex: 1;
            min-width: 280px;
            position: relative;
            overflow: hidden;
        }
        
        .method-card.hawala {
            border-top: 4px solid var(--hawala-color);
        }
        
        .method-card.bitcoin {
            border-top: 4px solid var(--bitcoin-color);
        }
        
        .method-card.esusu {
            border-top: 4px solid var(--esusu-color);
        }
        
        .method-title {
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .method-title-icon {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        
        .method-title-icon.hawala {
            background-color: var(--hawala-color);
        }
        
        .method-title-icon.bitcoin {
            background-color: var(--bitcoin-color);
        }
        
        .method-title-icon.esusu {
            background-color: var(--esusu-color);
        }
        
        .tutorial-container {
            margin: 2rem 0;
        }
        
        .tutorial-title {
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .tutorial-cards {
            display: flex;
            overflow-x: auto;
            gap: 1rem;
            padding: 0.5rem 0;
            scroll-snap-type: x mandatory;
        }
        
        .tutorial-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            min-width: 280px;
            max-width: 350px;
            scroll-snap-align: start;
        }
        
        .tutorial-step {
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .tutorial-image {
            width: 100%;
            height: 180px;
            background-color: #f5f5f5;
            border-radius: var(--border-radius);
            margin: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }
        
        .dark-mode .tutorial-image {
            background-color: #333;
        }
        
        .challenge-details {
            margin: 2rem 0;
        }
        
        .challenge-title {
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .challenge-steps {
            margin: 1.5rem 0;
        }
        
        .challenge-step {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1rem;
            margin-bottom: 1rem;
            box-shadow: var(--shadow);
            display: flex;
            gap: 1rem;
            align-items: center;
        }
        
        .step-number {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: var(--primary);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            flex-shrink: 0;
        }
        
        .step-content {
            flex: 1;
        }
        
        .step-title {
            font-weight: 700;
            margin-bottom: 0.25rem;
        }
        
        .toolkit-container {
            margin: 2rem 0;
        }
        
        .toolkit-title {
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .toolkit-items {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
        
        .toolkit-item {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1rem;
            box-shadow: var(--shadow);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            width: calc(50% - 0.5rem);
            min-width: 250px;
            flex-grow: 1;
        }
        
        .toolkit-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            background-color: var(--light-yellow);
            color: var(--primary);
            flex-shrink: 0;
        }
        
        .toolkit-content {
            flex: 1;
        }
        
        .toolkit-name {
            font-weight: 700;
            margin-bottom: 0.25rem;
        }
        
        .network-visual {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 2rem 0;
            position: relative;
        }
        
        .network-row {
            display: flex;
            gap: 2rem;
            margin: 1rem 0;
            position: relative;
            width: 100%;
            justify-content: center;
        }
        
        .network-node {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow);
            position: relative;
            z-index: 2;
        }
        
        .network-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        
        .network-label {
            font-size: 0.875rem;
            font-weight: 700;
            text-align: center;
        }
        
        .network-connection {
            position: absolute;
            height: 3px;
            background-color: var(--primary);
            transform-origin: 0 0;
            z-index: 1;
        }
        
        .network-connection.hawala {
            background-color: var(--hawala-color);
        }
        
        .network-connection.bitcoin {
            background-color: var(--bitcoin-color);
        }
        
        .network-connection.esusu {
            background-color: var(--esusu-color);
        }
        
        .level-indicator {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: var(--primary);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.875rem;
        }
        
        .money-counter {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: var(--golden-yellow);
            color: var(--dark-text);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .story-progress {
            margin: 2rem 0;
        }
        
        .story-title {
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .story-message {
            background-color: rgba(238, 114, 11, 0.1);
            border-left: 4px solid var(--primary);
            padding: 1rem;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        
        @media (max-width: 768px) {
            .mission-title {
                font-size: 1.8rem;
            }
            
            .section {
                padding: 1.5rem;
            }
            
            .options-container {
                grid-template-columns: 1fr;
            }
            
            .game-grid {
                grid-template-columns: repeat(5, 1fr);
            }
            
            .network-row {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
            
            .network-connection {
                display: none;
            }
            
            .toolkit-item {
                width: 100%;
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
            const [currentStep, setCurrentStep] = useState(0);
            const [completedSteps, setCompletedSteps] = useState([]);
            const [showAchievement, setShowAchievement] = useState(false);
            const [achievementTitle, setAchievementTitle] = useState('');
            const [achievementDesc, setAchievementDesc] = useState('');
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
                    
                    if (stepNum === 1) {
                        unlockAchievement('Network Navigator', 'You\'ve mastered informal financial networks!');
                    } else if (stepNum === 2) {
                        unlockAchievement('Surveillance Evader', 'You\'ve navigated the surveillance net!');
                    } else if (stepNum === 3) {
                        unlockAchievement('Community Builder', 'You\'ve created resilient financial connections!');
                    }
                }
            };
            
            const startMission = () => {
                setCurrentStep(1);
            };
            
            return (
                <div className="app-container">
                    <header className="header">
                        <h1 className="mission-title">Bonus Mission: Whisper Networks</h1>
                        <p className="mission-subtitle">Discover how communities resist financial control through informal systems.</p>
                        
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
                    
                    {currentStep === 0 && (
                        <section className="section">
                            <h2 className="section-title">Introduction: The Power of Whisper Networks</h2>
                            <div className="section-content">
                                <p>Throughout history, communities have developed informal financial systems to maintain sovereignty when formal systems fail them or become tools of control. These "whisper networks" operate through trust, community connections, and increasingly with the aid of modern technology.</p>
                            </div>
                            
                            <div className="dialog-box">
                                <div className="dialog-character">A</div>
                                <p><strong>Asha:</strong> "When formal banking systems exclude us or become surveillance tools, we create our own pathways. From ancient Hawala networks to modern peer-to-peer Bitcoin, people have always found ways to route around financial control."</p>
                            </div>
                            
                            <div className="dialog-box odu">
                                <div className="dialog-character">O</div>
                                <p><strong>Odu:</strong> "Our communities had savings circles and trust-based money transfers long before banks existed. When banks failed us or became tools of oppression, we returned to these ancient systems—now enhanced by new technologies."</p>
                            </div>
                            
                            <div className="method-cards">
                                <div className="method-card hawala">
                                    <div className="method-title">
                                        <div className="method-title-icon hawala">🤝</div>
                                        <span>Hawala Networks</span>
                                    </div>
                                    <p>A trust-based money transfer system dating back to the 8th century. It enables people to transfer money without moving physical currency, relying instead on a network of money brokers (hawaladars) who operate on honor and community trust.</p>
                                    <ul style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
                                        <li><strong>Strengths:</strong> Works without formal documentation, highly private, low fees</li>
                                        <li><strong>Used by:</strong> Migrant workers, refugees, those without banking access</li>
                                        <li><strong>Modern evolution:</strong> Now sometimes combined with mobile communications</li>
                                    </ul>
                                </div>
                                
                                <div className="method-card bitcoin">
                                    <div className="method-title">
                                        <div className="method-title-icon bitcoin">₿</div>
                                        <span>Peer-to-Peer Bitcoin</span>
                                    </div>
                                    <p>A modern digital system allowing direct person-to-person transfers without intermediaries or centralized control. When used with proper privacy techniques, it provides financial sovereignty outside traditional banking systems.</p>
                                    <ul style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
                                        <li><strong>Strengths:</strong> Borderless, censorship-resistant, doesn't require ID</li>
                                        <li><strong>Used by:</strong> Activists, remittance senders, those seeking financial privacy</li>
                                        <li><strong>Modern evolution:</strong> Lightning Network for instant, low-cost transactions</li>
                                    </ul>
                                </div>
                                
                                <div className="method-card esusu">
                                    <div className="method-title">
                                        <div className="method-title-icon esusu">👥</div>
                                        <span>Esusu/Tontines</span>
                                    </div>
                                    <p>Community-based saving and lending circles where members contribute regularly to a common fund, with each member receiving the total sum on a rotating basis. These systems build economic solidarity and financial resilience.</p>
                                    <ul style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
                                        <li><strong>Strengths:</strong> Builds community, provides access to capital, requires no formal institutions</li>
                                        <li><strong>Used by:</strong> Informal market vendors, rural communities, urban mutual aid groups</li>
                                        <li><strong>Modern evolution:</strong> Digital platforms coordinating traditional saving circles</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>The Challenge: Escape the Surveillance Net</h3>
                            <p style={{ marginTop: '0.5rem' }}>In this mission, you'll help Asha navigate increasingly challenging scenarios to send money to her family during a political crisis. You'll need to use a combination of traditional and modern methods to route around surveillance, censorship, and banking shutdowns.</p>
                            
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <button className="button" onClick={startMission}>
                                    Start Mission
                                </button>
                            </div>
                        </section>
                    )}
                    
                    {currentStep === 1 && (
                        <FinancialNetworks
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            setCurrentStep={setCurrentStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 2 && (
                        <EscapeGame
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            setCurrentStep={setCurrentStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 3 && (
                        <TrustNetworkBuilder
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            setCurrentStep={setCurrentStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 4 && (
                        <div className="section">
                            <h2 className="section-title">Mission Summary</h2>
                            <div className="summary-box">
                                <h3 className="summary-title">Key Takeaways</h3>
                                <div className="summary-points">
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Communities have always developed alternative financial systems when formal systems fail them</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Traditional methods like Hawala and Esusu rely on trust and community connections</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Modern technologies like Bitcoin can enhance traditional systems with additional capabilities</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Financial resistance strategies are most effective when combining different approaches</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Building resilient financial networks creates community sovereignty despite external control</div>
                                    </div>
                                </div>
                                
                                <div className="completion-badge">
                                    <div className="badge-icon">🌐</div>
                                    <div className="badge-title">Financial Resistance Expert</div>
                                    <div>You've completed the Whisper Networks Mission</div>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2rem 0' }}>
                                <button 
                                    className="button secondary"
                                    onClick={() => setCurrentStep(3)}
                                >
                                    Previous Challenge
                                </button>
                                
                                <button 
                                    className="button"
                                    onClick={() => setCurrentStep(0)}
                                >
                                    Restart Mission
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {showAchievement && (
                        <div className="achievement show">
                            <div className="achievement-icon">🏆</div>
                            <div className="achievement-info">
                                <div className="achievement-title">{achievementTitle}</div>
                                <div>{achievementDesc}</div>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Financial Networks Component
        const FinancialNetworks = ({ activeCharacter, completeStep, setCurrentStep, updateProgress }) => {
            const [scenario, setScenario] = useState(1);
            const [selectedOption, setSelectedOption] = useState(null);
            const [feedback, setFeedback] = useState(null);
            const [completedScenarios, setCompletedScenarios] = useState([]);
            
            const scenarios = [
                {
                    id: 1,
                    title: "Political Unrest: Supporting the Movement",
                    description: "You're supporting a peaceful pro-democracy movement in your country. The government has begun freezing bank accounts of suspected supporters and monitoring formal financial channels. You need to donate to legal support funds without being identified.",
                    options: [
                        {
                            id: "bank",
                            title: "Bank Transfer",
                            icon: "🏦",
                            description: "Make a direct bank transfer to the legal fund's public account.",
                            privacy: 1,
                            speed: 5,
                            reliability: 4,
                            outcome: "Your bank transfer is flagged in the national surveillance system. Your account is frozen and you're called in for questioning. The funds never reach the legal support team.",
                            success: false
                        },
                        {
                            id: "cash",
                            title: "Cash Handoff",
                            icon: "💵",
                            description: "Withdraw cash and physically deliver it to a movement representative.",
                            privacy: 4,
                            speed: 3,
                            reliability: 3,
                            outcome: "You successfully deliver the cash, but the physical meeting creates risks of surveillance. While this method works, it scales poorly for larger movements and isn't viable for distant recipients.",
                            success: true,
                            partialSuccess: true
                        },
                        {
                            id: "bitcoin",
                            title: "Bitcoin Donation",
                            icon: "₿",
                            description: "Convert money to Bitcoin and send to the movement's anonymous wallet.",
                            privacy: 5,
                            speed: 4,
                            reliability: 5,
                            outcome: "Your Bitcoin transaction can't be blocked by authorities. Using a freshly created wallet and proper privacy practices, you successfully support the movement without leaving a connection to your identity.",
                            success: true
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Banking Shutdown: Family Support",
                    description: "Your cousin's region is experiencing political turmoil, and the banking system has been shut down as a control measure. She needs money for essential supplies, but all formal money transfer services have been suspended in her area.",
                    options: [
                        {
                            id: "western",
                            title: "Western Union",
                            icon: "🌐",
                            description: "Try to send money through a traditional money transfer service.",
                            privacy: 2,
                            speed: 0,
                            reliability: 0,
                            outcome: "Western Union and all other formal money transfer services are suspended in the region due to government orders. The transfer fails completely.",
                            success: false
                        },
                        {
                            id: "hawala",
                            title: "Hawala Network",
                            icon: "🤝",
                            description: "Use a local hawaladar (money broker) who has a counterpart in your cousin's region.",
                            privacy: 5,
                            speed: 4,
                            reliability: 5,
                            outcome: "You give money to a trusted hawaladar in your city. They contact their partner near your cousin, who delivers the equivalent funds to her within hours. The transaction happens entirely outside formal financial systems.",
                            success: true
                        },
                        {
                            id: "friend",
                            title: "Friend of a Friend",
                            icon: "👥",
                            description: "Send money with someone traveling to that region who knows a friend of your cousin.",
                            privacy: 4,
                            speed: 2,
                            reliability: 3,
                            outcome: "Your money eventually reaches your cousin after several days, but the delay creates hardship. While successful, this method is too slow and unreliable for regular or urgent transfers.",
                            success: true,
                            partialSuccess: true
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Cross-Border Sanctions: Medical Support",
                    description: "International sanctions have cut off your country from the global financial system. Your uncle abroad needs to send money for your mother's urgent medical treatment, but all banks and money transfer services are blocked.",
                    options: [
                        {
                            id: "bank_foreign",
                            title: "Foreign Bank Account",
                            icon: "🏦",
                            description: "Have your uncle send money to a friend's account in a neighboring country, then arrange to collect it.",
                            privacy: 2,
                            speed: 2,
                            reliability: 3,
                            outcome: "The transfer raises flags in the correspondent banking system and gets held for 'additional compliance checks' that take weeks. By the time the money arrives, your mother's condition has worsened significantly.",
                            success: false
                        },
                        {
                            id: "bitcoin_lightning",
                            title: "Bitcoin Lightning Network",
                            icon: "⚡",
                            description: "Have your uncle send Bitcoin via the Lightning Network to your mobile wallet.",
                            privacy: 5,
                            speed: 5,
                            reliability: 5,
                            outcome: "The Bitcoin arrives in seconds, bypassing all sanctions and banking restrictions. You find a local peer-to-peer exchange to convert some to cash for the hospital, keeping the rest in Bitcoin as protection against your country's hyperinflation.",
                            success: true
                        },
                        {
                            id: "hawala_international",
                            title: "International Hawala",
                            icon: "🌏",
                            description: "Connect with the extensive hawala network that operates across borders despite sanctions.",
                            privacy: 5,
                            speed: 3,
                            reliability: 4,
                            outcome: "Your uncle finds a hawaladar in his city who arranges the transfer. While it takes a day to complete, the funds arrive reliably and without any documentation requirements or questions about sanctions.",
                            success: true,
                            partialSuccess: true
                        }
                    ]
                }
            ];
            
            useEffect(() => {
                // Calculate progress based on completed scenarios
                const progress = (completedScenarios.length / scenarios.length) * 100;
                updateProgress(progress / 3); // This challenge is 1/3 of the total mission
                
                if (completedScenarios.length === scenarios.length) {
                    completeStep(1);
                }
            }, [completedScenarios]);
            
            const handleOptionSelect = (optionId) => {
                setSelectedOption(optionId);
                
                const selectedOption = scenarios.find(s => s.id === scenario).options.find(o => o.id === optionId);
                
                if (selectedOption.success) {
                    if (selectedOption.partialSuccess) {
                        setFeedback({
                            type: 'warning',
                            message: selectedOption.outcome
                        });
                    } else {
                        setFeedback({
                            type: 'success',
                            message: selectedOption.outcome
                        });
                    }
                } else {
                    setFeedback({
                        type: 'error',
                        message: selectedOption.outcome
                    });
                }
            };
            
            const handleNextScenario = () => {
                if (!completedScenarios.includes(scenario)) {
                    setCompletedScenarios([...completedScenarios, scenario]);
                }
                
                if (scenario < scenarios.length) {
                    setScenario(scenario + 1);
                    setSelectedOption(null);
                    setFeedback(null);
                } else {
                    // Move to next step in the mission
                    setCurrentStep(2);
                }
            };
            
            const renderStarRating = (rating) => {
                const stars = [];
                for (let i = 1; i <= 5; i++) {
                    stars.push(
                        <span key={i} style={{ color: i <= rating ? '#FFC567' : '#ddd' }}>★</span>
                    );
                }
                return stars;
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">Challenge 1: Financial Resistance Scenarios</h2>
                    
                    <div className="section-content">
                        <p>Navigate challenging financial scenarios where traditional banking systems have failed or been weaponized. Choose the best method to accomplish your goal while maintaining privacy and security.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "When systems are designed to surveil and control, we need alternative pathways. Sometimes the ancient methods our ancestors used are still the most effective—especially when enhanced with modern technology."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "Trust networks have always been the foundation of resilient communities. When formal systems exclude us or threaten our freedom, we return to the wisdom of community-based finance."</p>
                    </div>
                    
                    <div className="scenario-card">
                        <div className="level-indicator">Scenario {scenario}/{scenarios.length}</div>
                        <h3 className="scenario-title">{scenarios[scenario - 1].title}</h3>
                        <p className="scenario-description">{scenarios[scenario - 1].description}</p>
                        
                        <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Select your approach:</h4>
                        
                        <div className="options-container">
                            {scenarios[scenario - 1].options.map(option => (
                                <div 
                                    key={option.id}
                                    className={`option-card ${selectedOption === option.id ? 'selected' : ''}`}
                                    onClick={() => handleOptionSelect(option.id)}
                                >
                                    <div className="option-header">
                                        <div className="option-icon" style={{ 
                                            backgroundColor: option.id.includes('bitcoin') ? 
                                                var(--bitcoin-color) : option.id.includes('hawala') ? 
                                                var(--hawala-color) : option.id.includes('esusu') || option.id.includes('friend') ? 
                                                var(--esusu-color) : '#757575'
                                        }}>
                                            {option.icon}
                                        </div>
                                        <div className="option-title">{option.title}</div>
                                    </div>
                                    <div className="option-content">
                                        <p>{option.description}</p>
                                    </div>
                                    <div className="option-stats">
                                        <div className="option-stat">
                                            <span>Privacy:</span>
                                            <span>{renderStarRating(option.privacy)}</span>
                                        </div>
                                        <div className="option-stat">
                                            <span>Speed:</span>
                                            <span>{renderStarRating(option.speed)}</span>
                                        </div>
                                        <div className="option-stat">
                                            <span>Reliability:</span>
                                            <span>{renderStarRating(option.reliability)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {feedback && (
                            <div className={`route-feedback ${feedback.type}`}>
                                {feedback.message}
                            </div>
                        )}
                        
                        {selectedOption && (
                            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                <button 
                                    className="button"
                                    onClick={handleNextScenario}
                                >
                                    {scenario < scenarios.length ? 'Next Scenario' : 'Complete Challenge'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            );
        };
        
        // Escape Game Component
        const EscapeGame = ({ activeCharacter, completeStep, setCurrentStep, updateProgress }) => {
            const [gameStarted, setGameStarted] = useState(false);
            const [gameCompleted, setGameCompleted] = useState(false);
            const [gameLevel, setGameLevel] = useState(1);
            const [playerPosition, setPlayerPosition] = useState({ row: 0, col: 0 });
            const [path, setPath] = useState([]);
            const [surveillancePoints, setSurveillancePoints] = useState([]);
            const [money, setMoney] = useState(100);
            const [selectedMethod, setSelectedMethod] = useState(null);
            const [message, setMessage] = useState('');
            const [hawalaPaths, setHawalaPaths] = useState([]);
            const [bitcoinNodes, setBitcoinNodes] = useState([]);
            
            const levels = [
                {
                    title: "Level 1: Basic Surveillance",
                    description: "Navigate through basic financial surveillance to send money to Asha's family. Bank monitoring is in place, but alternative routes exist.",
                    grid: 5,
                    surveillance: 2,
                    surveillanceRadius: 1,
                    startPoint: { row: 0, col: 0 },
                    endPoint: { row: 4, col: 4 },
                    hawalaNodes: [{ row: 1, col: 2 }, { row: 3, col: 1 }],
                    bitcoinNodes: [{ row: 2, col: 3 }]
                },
                {
                    title: "Level 2: Banking Restrictions",
                    description: "Banks have increased monitoring and begun restricting certain transactions. Government surveillance has intensified in response to political protests.",
                    grid: 6,
                    surveillance: 3,
                    surveillanceRadius: 1,
                    startPoint: { row: 0, col: 0 },
                    endPoint: { row: 5, col: 5 },
                    hawalaNodes: [{ row: 1, col: 3 }, { row: 4, col: 2 }],
                    bitcoinNodes: [{ row: 2, col: 4 }, { row: 3, col: 1 }]
                },
                {
                    title: "Level 3: Financial Blockade",
                    description: "The government has implemented a near-complete financial blockade. Bank accounts are frozen, transfers blocked, and surveillance is pervasive.",
                    grid: 6,
                    surveillance: 4,
                    surveillanceRadius: 2,
                    startPoint: { row: 0, col: 0 },
                    endPoint: { row: 5, col: 5 },
                    hawalaNodes: [{ row: 1, col: 4 }, { row: 3, col: 2 }, { row: 4, col: 4 }],
                    bitcoinNodes: [{ row: 2, col: 1 }, { row: 2, col: 3 }, { row: 4, col: 1 }]
                }
            ];
            
            const playerRef = useRef(null);
            
            useEffect(() => {
                if (gameStarted) {
                    initializeLevel(gameLevel);
                }
            }, [gameStarted, gameLevel]);
            
            useEffect(() => {
                // Update progress
                const progress = gameCompleted ? 100 : gameStarted ? (gameLevel / levels.length) * 100 : 0;
                updateProgress((progress / 3) + (100 / 3)); // First challenge (33%) + current progress (up to 33%)
                
                if (gameCompleted) {
                    completeStep(2);
                }
            }, [gameStarted, gameLevel, gameCompleted]);
            
            const initializeLevel = (level) => {
                const currentLevel = levels[level - 1];
                
                // Set player at start position
                setPlayerPosition(currentLevel.startPoint);
                
                // Clear path
                setPath([]);
                
                // Generate surveillance points
                const newSurveillancePoints = [];
                const grid = currentLevel.grid;
                const numPoints = currentLevel.surveillance;
                
                // Avoid placing surveillance on start, end, or special nodes
                const specialPositions = [
                    currentLevel.startPoint,
                    currentLevel.endPoint,
                    ...currentLevel.hawalaNodes,
                    ...currentLevel.bitcoinNodes
                ];
                
                while (newSurveillancePoints.length < numPoints) {
                    const row = Math.floor(Math.random() * grid);
                    const col = Math.floor(Math.random() * grid);
                    
                    // Check if position is already a special position
                    const isSpecial = specialPositions.some(pos => pos.row === row && pos.col === col);
                    
                    // Check if position is already a surveillance point
                    const isSurveillance = newSurveillancePoints.some(pos => pos.row === row && pos.col === col);
                    
                    if (!isSpecial && !isSurveillance) {
                        newSurveillancePoints.push({ row, col });
                    }
                }
                
                setSurveillancePoints(newSurveillancePoints);
                setHawalaPaths([]);
                setBitcoinNodes([]);
                setSelectedMethod(null);
                setMessage(`Start Level ${level}: ${currentLevel.title}`);
            };
            
            const startGame = () => {
                setGameStarted(true);
                setGameLevel(1);
                setGameCompleted(false);
                setMoney(100);
            };
            
            const isValidMove = (row, col) => {
                const currentLevel = levels[gameLevel - 1];
                const grid = currentLevel.grid;
                
                // Check boundaries
                if (row < 0 || row >= grid || col < 0 || col >= grid) {
                    return false;
                }
                
                // Check if already in path
                if (path.some(pos => pos.row === row && pos.col === col)) {
                    return false;
                }
                
                return true;
            };
            
            const isSurveillanceCell = (row, col) => {
                return surveillancePoints.some(point => {
                    const radius = levels[gameLevel - 1].surveillanceRadius;
                    const rowDiff = Math.abs(point.row - row);
                    const colDiff = Math.abs(point.col - col);
                    
                    return rowDiff <= radius && colDiff <= radius;
                });
            };
            
            const isHawalaNode = (row, col) => {
                return levels[gameLevel - 1].hawalaNodes.some(node => node.row === row && node.col === col);
            };
            
            const isBitcoinNode = (row, col) => {
                return levels[gameLevel - 1].bitcoinNodes.some(node => node.row === row && node.col === col);
            };
            
            const handleCellClick = (row, col) => {
                if (!isValidMove(row, col)) return;
                
                // Check if direct move is valid (must be adjacent)
                const rowDiff = Math.abs(row - playerPosition.row);
                const colDiff = Math.abs(col - playerPosition.col);
                
                if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
                    // Direct movement
                    movePlayer(row, col);
                } else if (selectedMethod === 'hawala' && isHawalaNode(row, col) && 
                          hawalaPaths.some(path => path.from.row === playerPosition.row && path.from.col === playerPosition.col)) {
                    // Hawala teleport
                    if (money >= 10) {
                        setMoney(money - 10);
                        movePlayer(row, col);
                        setMessage("Used Hawala network to bypass surveillance (-10 coins)");
                    } else {
                        setMessage("Not enough money to use Hawala network!");
                    }
                } else if (selectedMethod === 'bitcoin' && isBitcoinNode(row, col) && 
                          bitcoinNodes.includes(`${playerPosition.row}-${playerPosition.col}`)) {
                    // Bitcoin transfer
                    if (money >= 15) {
                        setMoney(money - 15);
                        movePlayer(row, col);
                        setMessage("Used Bitcoin to transfer value securely (-15 coins)");
                    } else {
                        setMessage("Not enough money to use Bitcoin network!");
                    }
                }
            };
            
            const movePlayer = (row, col) => {
                // Update player position
                setPlayerPosition({ row, col });
                
                // Add position to path
                setPath([...path, { row, col }]);
                
                // Check for surveillance
                if (isSurveillanceCell(row, col)) {
                    setMoney(Math.max(0, money - 20));
                    setMessage("Surveillance detected! Lost 20 coins to monitoring fees and restrictions.");
                }
                
                // Check if reached destination
                const currentLevel = levels[gameLevel - 1];
                if (row === currentLevel.endPoint.row && col === currentLevel.endPoint.col) {
                    if (gameLevel === levels.length) {
                        // Game completed
                        setGameCompleted(true);
                        setMessage("Congratulations! You've successfully navigated all surveillance challenges and delivered the funds!");
                    } else {
                        // Level completed
                        setGameLevel(gameLevel + 1);
                        setMessage(`Level ${gameLevel} completed! Moving to Level ${gameLevel + 1}`);
                    }
                }
            };
            
            const setActiveMethod = (method) => {
                if (selectedMethod === method) {
                    setSelectedMethod(null);
                    setHawalaPaths([]);
                    setBitcoinNodes([]);
                    return;
                }
                
                setSelectedMethod(method);
                
                if (method === 'hawala') {
                    // Generate Hawala paths
                    const currentLevel = levels[gameLevel - 1];
                    const newHawalaPaths = [];
                    
                    currentLevel.hawalaNodes.forEach(from => {
                        currentLevel.hawalaNodes.forEach(to => {
                            if (from.row !== to.row || from.col !== to.col) {
                                newHawalaPaths.push({
                                    from,
                                    to
                                });
                            }
                        });
                    });
                    
                    setHawalaPaths(newHawalaPaths);
                    setBitcoinNodes([]);
                    setMessage("Hawala activated: Click on a Hawala node to use the trust network for secure transfers");
                } else if (method === 'bitcoin') {
                    // Activate Bitcoin nodes
                    const currentLevel = levels[gameLevel - 1];
                    const nodeIds = currentLevel.bitcoinNodes.map(node => `${node.row}-${node.col}`);
                    setBitcoinNodes(nodeIds);
                    setHawalaPaths([]);
                    setMessage("Bitcoin activated: Click on Bitcoin nodes to make censorship-resistant transfers");
                }
            };
            
            const renderGameBoard = () => {
                if (!gameStarted) return null;
                
                const currentLevel = levels[gameLevel - 1];
                const gridSize = currentLevel.grid;
                
                const cells = [];
                for (let row = 0; row < gridSize; row++) {
                    for (let col = 0; col < gridSize; col++) {
                        // Determine cell type
                        let cellType = '';
                        
                        if (row === currentLevel.startPoint.row && col === currentLevel.startPoint.col) {
                            cellType = 'start';
                        } else if (row === currentLevel.endPoint.row && col === currentLevel.endPoint.col) {
                            cellType = 'end';
                        } else if (isSurveillanceCell(row, col)) {
                            cellType = 'surveillance';
                        } else if (isHawalaNode(row, col)) {
                            cellType = 'hawala-node';
                        } else if (isBitcoinNode(row, col)) {
                            cellType = 'bitcoin-node';
                        } else if (path.some(pos => pos.row === row && pos.col === col)) {
                            cellType = 'path';
                        }
                        
                        cells.push(
                            <div 
                                key={`${row}-${col}`}
                                className={`game-cell ${cellType}`}
                                onClick={() => handleCellClick(row, col)}
                            >
                                <div className="cell-content">
                                    {row === currentLevel.startPoint.row && col === currentLevel.startPoint.col && (
                                        <>
                                            <span>Start</span>
                                            <div className="cell-title">Asha</div>
                                        </>
                                    )}
                                    
                                    {row === currentLevel.endPoint.row && col === currentLevel.endPoint.col && (
                                        <>
                                            <span>End</span>
                                            <div className="cell-title">Family</div>
                                        </>
                                    )}
                                    
                                    {isHawalaNode(row, col) && (
                                        <>
                                            <span>🤝</span>
                                            <div className="cell-title">Hawala</div>
                                        </>
                                    )}
                                    
                                    {isBitcoinNode(row, col) && (
                                        <>
                                            <span>₿</span>
                                            <div className="cell-title">Bitcoin</div>
                                        </>
                                    )}
                                    
                                    {isSurveillanceCell(row, col) && 
                                     !(row === currentLevel.startPoint.row && col === currentLevel.startPoint.col) &&
                                     !(row === currentLevel.endPoint.row && col === currentLevel.endPoint.col) &&
                                     !isHawalaNode(row, col) &&
                                     !isBitcoinNode(row, col) && (
                                        <>
                                            <span>👁️</span>
                                            <div className="cell-title">Watched</div>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    }
                }
                
                // Draw surveillance radius indicators
                const surveillanceRadii = surveillancePoints.map((point, index) => {
                    const radius = currentLevel.surveillanceRadius;
                    const size = ((radius * 2) + 1) * 100; // Cell size is approximately 100px
                    
                    return (
                        <div 
                            key={`surveillance-${index}`}
                            className="surveillance-radius"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${(point.col - radius) * 100 + 50}px`,
                                top: `${(point.row - radius) * 100 + 50}px`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        ></div>
                    );
                });
                
                // Draw Hawala connection paths
                const hawalaConnections = hawalaPaths.map((path, index) => {
                    // Calculate start and end positions
                    const startX = path.from.col * 100 + 50;
                    const startY = path.from.row * 100 + 50;
                    const endX = path.to.col * 100 + 50;
                    const endY = path.to.row * 100 + 50;
                    
                    // Calculate distance and angle
                    const dx = endX - startX;
                    const dy = endY - startY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                    
                    return (
                        <div 
                            key={`hawala-path-${index}`}
                            className="connection hawala"
                            style={{
                                width: `${distance}px`,
                                height: '3px',
                                left: `${startX}px`,
                                top: `${startY}px`,
                                transform: `rotate(${angle}deg)`,
                                opacity: selectedMethod === 'hawala' ? 0.8 : 0,
                                transition: 'opacity 0.3s ease'
                            }}
                        ></div>
                    );
                });
                
                return (
                    <div className="game-board">
                        <div className="level-indicator">Level {gameLevel}: {currentLevel.title.split(':')[0]}</div>
                        <div className="money-counter">
                            <span>💰</span>
                            <span>{money} coins</span>
                        </div>
                        <div 
                            className="game-grid"
                            style={{
                                gridTemplateColumns: `repeat(${gridSize}, 1fr)`
                            }}
                        >
                            {cells}
                            {surveillanceRadii}
                            {hawalaConnections}
                            <div 
                                ref={playerRef}
                                className="game-player"
                                style={{
                                    transform: `translate(${playerPosition.col * 100 + 50}px, ${playerPosition.row * 100 + 50}px) translate(-50%, -50%)`
                                }}
                            >
                                A
                            </div>
                        </div>
                    </div>
                );
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">Challenge 2: Escape the Surveillance Net</h2>
                    
                    <div className="section-content">
                        <p>Help Asha navigate through financial surveillance and restrictions to send money to her family. Use different financial tools and networks to avoid detection and ensure funds reach their destination.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "We need to be strategic about how we move money in surveilled environments. Sometimes the best route isn't the most direct—it's the one that avoids the watchers."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "Our community has always known how to find the hidden paths when the main roads are blocked. Hawala brokers are the waykeepers of these ancient financial routes."</p>
                    </div>
                    
                    {!gameStarted ? (
                        <div className="scenario-card">
                            <h3 className="scenario-title">Escape the Surveillance Net</h3>
                            <p className="scenario-description">Political unrest has led to increased financial surveillance and control. Asha needs to send money to her family across the country without it being monitored, blocked, or confiscated by authorities.</p>
                            
                            <div className="tutorial-container">
                                <h4 className="tutorial-title">How to Play:</h4>
                                <div className="tutorial-cards">
                                    <div className="tutorial-card">
                                        <div className="tutorial-step">Step 1: Navigate the Grid</div>
                                        <p>Click adjacent cells to move Asha through the financial landscape. Your goal is to reach her family at the end point.</p>
                                        <div className="tutorial-image">🧭</div>
                                    </div>
                                    
                                    <div className="tutorial-card">
                                        <div className="tutorial-step">Step 2: Avoid Surveillance</div>
                                        <p>Red areas indicate financial surveillance. Moving through these areas costs money due to monitoring fees and restrictions.</p>
                                        <div className="tutorial-image">👁️</div>
                                    </div>
                                    
                                    <div className="tutorial-card">
                                        <div className="tutorial-step">Step 3: Use Hawala Network</div>
                                        <p>Activate the Hawala network to travel between Hawala nodes (🤝), bypassing surveillance. Each Hawala transfer costs 10 coins.</p>
                                        <div className="tutorial-image">🤝</div>
                                    </div>
                                    
                                    <div className="tutorial-card">
                                        <div className="tutorial-step">Step 4: Use Bitcoin Network</div>
                                        <p>Activate the Bitcoin network to transfer value between Bitcoin nodes (₿), avoiding traditional financial channels. Each Bitcoin transfer costs 15 coins.</p>
                                        <div className="tutorial-image">₿</div>
                                    </div>
                                </div>
                                
                                <div className="challenge-details">
                                    <h4 className="challenge-title">The Challenge:</h4>
                                    <p>Complete all three levels of increasing difficulty, with more surveillance and restrictions in each level.</p>
                                    
                                    <div className="challenge-steps">
                                        <div className="challenge-step">
                                            <div className="step-number">1</div>
                                            <div className="step-content">
                                                <div className="step-title">Level 1: Basic Surveillance</div>
                                                <p>Navigate through basic financial monitoring with limited surveillance points.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="challenge-step">
                                            <div className="step-number">2</div>
                                            <div className="step-content">
                                                <div className="step-title">Level 2: Banking Restrictions</div>
                                                <p>Face increased monitoring and financial restrictions with more surveillance points.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="challenge-step">
                                            <div className="step-number">3</div>
                                            <div className="step-content">
                                                <div className="step-title">Level 3: Financial Blockade</div>
                                                <p>Navigate a near-complete financial blockade with pervasive surveillance and wide monitoring radius.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <button className="button" onClick={startGame}>
                                    Start Game
                                </button>
                            </div>
                        </div>
                    ) : gameCompleted ? (
                        <div className="scenario-card">
                            <h3 className="scenario-title">Mission Complete!</h3>
                            <p className="scenario-description">Congratulations! You've successfully navigated the financial surveillance network and delivered the funds to Asha's family.</p>
                            
                            <div className="story-progress">
                                <h4 className="story-title">Mission Outcome:</h4>
                                <div className="story-message">
                                    The money has reached Asha's family safely, allowing them to purchase essential supplies during the political crisis. Your strategic use of alternative financial networks demonstrated how communities can maintain sovereignty even in the face of surveillance and control.
                                </div>
                            </div>
                            
                            <div className="summary-box">
                                <h3 className="summary-title">Key Learnings:</h3>
                                <div className="summary-points">
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Financial surveillance creates significant challenges for private transactions</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Hawala networks leverage trust relationships to bypass formal financial systems</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Bitcoin provides censorship-resistant transfers when traditional channels are blocked</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Combining different methods creates resilient pathways for financial sovereignty</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <button className="button" onClick={() => setCurrentStep(3)}>
                                    Continue to Next Challenge
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="story-message">
                                {message}
                            </div>
                            
                            {renderGameBoard()}
                            
                            <div className="game-controls">
                                <button 
                                    className={`button hawala ${selectedMethod === 'hawala' ? 'active' : ''}`}
                                    onClick={() => setActiveMethod('hawala')}
                                >
                                    Use Hawala Network (10 coins)
                                </button>
                                
                                <button 
                                    className={`button bitcoin ${selectedMethod === 'bitcoin' ? 'active' : ''}`}
                                    onClick={() => setActiveMethod('bitcoin')}
                                >
                                    Use Bitcoin Network (15 coins)
                                </button>
                                
                                <button 
                                    className="button secondary"
                                    onClick={() => initializeLevel(gameLevel)}
                                >
                                    Restart Level
                                </button>
                            </div>
                            
                            <div className="scenario-description" style={{ marginTop: '1.5rem' }}>
                                <strong>How to play:</strong> Click adjacent cells to move Asha. Activate Hawala or Bitcoin networks to make special transfers between network nodes. Avoid surveillance areas or you'll lose coins to monitoring fees.
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Trust Network Builder Component
        const TrustNetworkBuilder = ({ activeCharacter, completeStep, setCurrentStep, updateProgress }) => {
            const [networkType, setNetworkType] = useState('esusu');
            const [networkNodes, setNetworkNodes] = useState([
                { id: 1, name: 'Asha', role: 'Tech Advisor', icon: '👩‍💻', x: 400, y: 150, connected: [] },
                { id: 2, name: 'Odu', role: 'Elder', icon: '👴', x: 200, y: 300, connected: [] },
                { id: 3, name: 'Mira', role: 'Merchant', icon: '👩‍🏫', x: 600, y: 300, connected: [] }
            ]);
            const [selectedNode, setSelectedNode] = useState(null);
            const [newMemberName, setNewMemberName] = useState('');
            const [newMemberRole, setNewMemberRole] = useState('');
            const [networkStats, setNetworkStats] = useState({
                trust: 60,
                resilience: 40,
                privacy: 50,
                accessibility: 70
            });
            const [networkComplete, setNetworkComplete] = useState(false);
            
            const communityRoles = [
                { value: 'merchant', label: 'Local Merchant', icon: '🛍️' },
                { value: 'farmer', label: 'Farmer', icon: '🌾' },
                { value: 'teacher', label: 'Teacher', icon: '📚' },
                { value: 'driver', label: 'Driver', icon: '🚗' },
                { value: 'tech', label: 'Tech Worker', icon: '💻' },
                { value: 'artisan', label: 'Artisan', icon: '🧶' },
                { value: 'elder', label: 'Elder', icon: '👵' },
                { value: 'religious', label: 'Religious Leader', icon: '🙏' }
            ];
            
            useEffect(() => {
                // Calculate network statistics based on connections
                const connections = networkNodes.reduce((sum, node) => sum + node.connected.length, 0);
                const maxConnections = networkNodes.length * (networkNodes.length - 1);
                const connectionDensity = maxConnections > 0 ? connections / maxConnections : 0;
                
                // Calculate network metrics
                let trust = 60;
                let resilience = 40;
                let privacy = 50;
                let accessibility = 70;
                
                // Adjust based on network type
                if (networkType === 'esusu') {
                    trust += 20;
                    resilience += 10;
                    privacy -= 10;
                    accessibility += 20;
                } else if (networkType === 'hawala') {
                    trust += 15;
                    resilience += 20;
                    privacy += 15;
                    accessibility += 10;
                } else if (networkType === 'bitcoin') {
                    trust -= 10;
                    resilience += 25;
                    privacy += 30;
                    accessibility -= 15;
                }
                
                // Adjust based on network size and connections
                trust += (networkNodes.length > 5 ? 10 : 0) + (connectionDensity > 0.5 ? 10 : 0);
                resilience += (networkNodes.length > 7 ? 15 : 0) + (connectionDensity > 0.3 ? 15 : 0);
                privacy -= (networkNodes.length > 10 ? 15 : 0) + (connectionDensity > 0.7 ? 10 : 0);
                accessibility += (networkNodes.length > 4 ? 5 : 0) - (connectionDensity < 0.3 ? 10 : 0);
                
                // Cap values between 0-100
                setNetworkStats({
                    trust: Math.min(100, Math.max(0, trust)),
                    resilience: Math.min(100, Math.max(0, resilience)),
                    privacy: Math.min(100, Math.max(0, privacy)),
                    accessibility: Math.min(100, Math.max(0, accessibility))
                });
                
                // Check if network is complete
                if (networkNodes.length >= 5 && connectionDensity >= 0.3) {
                    setNetworkComplete(true);
                    completeStep(3);
                } else {
                    setNetworkComplete(false);
                }
                
                // Update progress
                const progress = networkComplete ? 100 : 
                                 (networkNodes.length >= 5 ? 50 : (networkNodes.length / 5) * 50) + 
                                 (connectionDensity >= 0.3 ? 50 : (connectionDensity / 0.3) * 50);
                
                updateProgress((progress / 3) + (200 / 3)); // First two challenges (66%) + current progress (up to 33%)
                
            }, [networkNodes, networkType, networkComplete]);
            
            const handleNodeClick = (nodeId) => {
                if (selectedNode === nodeId) {
                    setSelectedNode(null);
                } else if (selectedNode) {
                    // Create connection between nodes
                    connectNodes(selectedNode, nodeId);
                    setSelectedNode(null);
                } else {
                    setSelectedNode(nodeId);
                }
            };
            
            const connectNodes = (nodeId1, nodeId2) => {
                if (nodeId1 === nodeId2) return;
                
                const updatedNodes = networkNodes.map(node => {
                    if (node.id === nodeId1 && !node.connected.includes(nodeId2)) {
                        return { ...node, connected: [...node.connected, nodeId2] };
                    }
                    if (node.id === nodeId2 && !node.connected.includes(nodeId1)) {
                        return { ...node, connected: [...node.connected, nodeId1] };
                    }
                    return node;
                });
                
                setNetworkNodes(updatedNodes);
            };
            
            const addNetworkMember = () => {
                if (!newMemberName.trim()) return;
                
                const role = communityRoles.find(r => r.value === newMemberRole);
                const roleIcon = role ? role.icon : '👤';
                const roleLabel = role ? role.label : 'Member';
                
                // Place new node in a somewhat random position but within bounds
                const x = 200 + Math.random() * 400;
                const y = 150 + Math.random() * 300;
                
                const newNode = {
                    id: networkNodes.length + 1,
                    name: newMemberName,
                    role: roleLabel,
                    icon: roleIcon,
                    x,
                    y,
                    connected: []
                };
                
                setNetworkNodes([...networkNodes, newNode]);
                setNewMemberName('');
                setNewMemberRole('');
            };
            
            const changeNetworkType = (type) => {
                setNetworkType(type);
            };
            
            const calculateConnectionPath = (node1, node2) => {
                // Calculate start and end positions
                const startX = node1.x;
                const startY = node1.y;
                const endX = node2.x;
                const endY = node2.y;
                
                // Calculate distance and angle
                const dx = endX - startX;
                const dy = endY - startY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                
                return { startX, startY, distance, angle };
            };
            
            const completeNetwork = () => {
                setCurrentStep(4);
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">Challenge 3: Build a Trust Network</h2>
                    
                    <div className="section-content">
                        <p>Design a community-based financial network that can withstand external pressure and provide financial services outside traditional banking. Add members, create connections, and build resilience into your system.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "The strength of community finance isn't in complex technology but in the web of relationships. A well-designed network can withstand tremendous external pressure if it's built on genuine trust and mutual support."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "Our savings circles survived colonialism, dictatorships, and economic crises because they're rooted in deep community bonds. Each member has a stake in everyone's success."</p>
                    </div>
                    
                    <div className="scenario-card">
                        <h3 className="scenario-title">Community Financial Network Builder</h3>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div>
                                <button 
                                    className={`button esusu ${networkType === 'esusu' ? 'active' : ''}`}
                                    onClick={() => changeNetworkType('esusu')}
                                >
                                    Esusu/Savings Circle
                                </button>
                            </div>
                            
                            <div>
                                <button 
                                    className={`button hawala ${networkType === 'hawala' ? 'active' : ''}`}
                                    onClick={() => changeNetworkType('hawala')}
                                >
                                    Hawala Network
                                </button>
                            </div>
                            
                            <div>
                                <button 
                                    className={`button bitcoin ${networkType === 'bitcoin' ? 'active' : ''}`}
                                    onClick={() => changeNetworkType('bitcoin')}
                                >
                                    P2P Bitcoin Network
                                </button>
                            </div>
                        </div>
                        
                        <div className="network-visual">
                            {/* Draw connections first */}
                            {networkNodes.map(node => {
                                return node.connected.map(connectedId => {
                                    const connectedNode = networkNodes.find(n => n.id === connectedId);
                                    if (!connectedNode) return null;
                                    
                                    const { startX, startY, distance, angle } = calculateConnectionPath(node, connectedNode);
                                    
                                    return (
                                        <div 
                                            key={`connection-${node.id}-${connectedId}`}
                                            className={`network-connection ${networkType}`}
                                            style={{
                                                width: `${distance}px`,
                                                left: `${startX}px`,
                                                top: `${startY}px`,
                                                transform: `rotate(${angle}deg)`
                                            }}
                                        ></div>
                                    );
                                });
                            })}
                            
                            {/* Draw nodes on top */}
                            {networkNodes.map(node => (
                                <div 
                                    key={`node-${node.id}`}
                                    className={`network-node ${selectedNode === node.id ? 'selected' : ''}`}
                                    style={{
                                        left: `${node.x - 50}px`,
                                        top: `${node.y - 50}px`,
                                        border: selectedNode === node.id ? `4px solid var(--${networkType}-color)` : null
                                    }}
                                    onClick={() => handleNodeClick(node.id)}
                                >
                                    <div className="network-icon">{node.icon}</div>
                                    <div className="network-label">{node.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--neutral)' }}>{node.role}</div>
                                </div>
                            ))}
                        </div>
                        
                        <div style={{ marginTop: '1.5rem' }}>
                            {selectedNode ? (
                                <div className="story-message">
                                    Node selected: <strong>{networkNodes.find(n => n.id === selectedNode).name}</strong>. Click another node to create a connection, or click this node again to cancel.
                                </div>
                            ) : (
                                <div className="story-message">
                                    Click on a node to select it, then click another node to create a connection. Add new members to expand your network.
                                </div>
                            )}
                        </div>
                        
                        <div style={{ marginTop: '2rem' }}>
                            <h4>Add Network Member:</h4>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                                <input 
                                    type="text"
                                    placeholder="Member Name"
                                    value={newMemberName}
                                    onChange={(e) => setNewMemberName(e.target.value)}
                                    style={{ 
                                        padding: '0.75rem',
                                        borderRadius: 'var(--border-radius)',
                                        border: '1px solid #ddd',
                                        flex: '1'
                                    }}
                                />
                                
                                <select 
                                    value={newMemberRole}
                                    onChange={(e) => setNewMemberRole(e.target.value)}
                                    style={{ 
                                        padding: '0.75rem',
                                        borderRadius: 'var(--border-radius)',
                                        border: '1px solid #ddd',
                                        flex: '1'
                                    }}
                                >
                                    <option value="">-- Select Role --</option>
                                    {communityRoles.map(role => (
                                        <option key={role.value} value={role.value}>
                                            {role.icon} {role.label}
                                        </option>
                                    ))}
                                </select>
                                
                                <button 
                                    className="button"
                                    onClick={addNetworkMember}
                                >
                                    Add Member
                                </button>
                            </div>
                        </div>
                        
                        <div style={{ marginTop: '2rem' }}>
                            <h4>Network Statistics:</h4>
                            <div style={{ 
                                display: 'flex', 
                                flexWrap: 'wrap', 
                                gap: '1rem', 
                                marginTop: '1rem',
                                justifyContent: 'space-between'
                            }}>
                                <div style={{ flex: '1', minWidth: '200px' }}>
                                    <div>Trust Level: {networkStats.trust}%</div>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{ width: `${networkStats.trust}%` }}></div>
                                    </div>
                                </div>
                                
                                <div style={{ flex: '1', minWidth: '200px' }}>
                                    <div>Network Resilience: {networkStats.resilience}%</div>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{ width: `${networkStats.resilience}%` }}></div>
                                    </div>
                                </div>
                                
                                <div style={{ flex: '1', minWidth: '200px' }}>
                                    <div>Privacy Protection: {networkStats.privacy}%</div>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{ width: `${networkStats.privacy}%` }}></div>
                                    </div>
                                </div>
                                
                                <div style={{ flex: '1', minWidth: '200px' }}>
                                    <div>Accessibility: {networkStats.accessibility}%</div>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{ width: `${networkStats.accessibility}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="toolkit-container">
                            <h4 className="toolkit-title">Network Toolkit:</h4>
                            <div className="toolkit-items">
                                {networkType === 'esusu' && (
                                    <>
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">📆</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Rotating Funds</div>
                                                <p>Members contribute regularly and take turns receiving the full pot</p>
                                            </div>
                                        </div>
                                        
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">📝</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Community Record-Keeping</div>
                                                <p>Transparent documentation of contributions and distributions</p>
                                            </div>
                                        </div>
                                        
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">👥</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Social Collateral</div>
                                                <p>Reputation and community standing serve as loan security</p>
                                            </div>
                                        </div>
                                        
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">🤝</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Group Meetings</div>
                                                <p>Regular gatherings strengthen bonds and ensure accountability</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                                
                                {networkType === 'hawala' && (
                                    <>
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">🔄</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Hawaladar Brokers</div>
                                                <p>Trusted intermediaries who facilitate transfers without moving money</p>
                                            </div>
                                        </div>
                                        
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">🔑</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Authentication Codes</div>
                                                <p>Secure passwords or codes to verify identities and transfers</p>
                                            </div>
                                        </div>
                                        
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">📱</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Mobile Coordination</div>
                                                <p>Secure messaging to coordinate transfers across distances</p>
                                            </div>
                                        </div>
                                        
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">⚖️</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Balance Settlement</div>
                                                <p>Periodic settlement of balances between hawaladars</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                                
                                {networkType === 'bitcoin' && (
                                    <>
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">🔒</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Wallet Security</div>
                                                <p>Secure storage of private keys and recovery phrases</p>
                                            </div>
                                        </div>
                                        
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">⚡</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Lightning Network</div>
                                                <p>Fast, low-fee transactions through payment channels</p>
                                            </div>
                                        </div>
                                        
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">👥</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">P2P Exchange</div>
                                                <p>Person-to-person trading between bitcoin and local currency</p>
                                            </div>
                                        </div>
                                        
                                        <div className="toolkit-item">
                                            <div className="toolkit-icon">🔍</div>
                                            <div className="toolkit-content">
                                                <div className="toolkit-name">Privacy Practices</div>
                                                <p>Techniques to enhance transaction privacy and security</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <button 
                                className="button"
                                onClick={completeNetwork}
                                disabled={!networkComplete}
                                style={{ 
                                    opacity: !networkComplete ? 0.5 : 1,
                                    cursor: !networkComplete ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {networkComplete ? 'Complete Network' : 'Add more members and connections (at least 5 members with good connectivity)'}
                            </button>
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