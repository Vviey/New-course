<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mission 2.6: The Rise of the Dollar</title>
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
            --us-color: #3b5dc9;
            --oil-color: #2e7d32;
            --debt-color: #d32f2f;
            --africa-color: #ffa000;
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
        .dark-mode .money-web-canvas,
        .dark-mode .country-node,
        .dark-mode .info-card,
        .dark-mode .game-card,
        .dark-mode .mission-progress,
        .dark-mode .nixon-simulator {
            background-color: var(--bg-dark);
            color: var(--light-text);
            border-color: #333;
        }
        
        .dark-mode .timeline-line {
            background-color: #555;
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
        
        /* Money Web Simulation Styles */
        .money-web-container {
            margin: 2rem 0;
        }
        
        .money-web-canvas {
            position: relative;
            height: 600px;
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            margin: 1rem 0;
            overflow: hidden;
        }
        
        .country-node {
            position: absolute;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            cursor: grab;
            user-select: none;
            box-shadow: var(--shadow);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
            font-weight: 700;
        }
        
        .country-node:hover {
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
        }
        
        .country-node.usa {
            background-color: var(--us-color);
            color: white;
        }
        
        .country-node.oil {
            background-color: var(--oil-color);
            color: white;
        }
        
        .country-node.debt {
            background-color: var(--debt-color);
            color: white;
        }
        
        .country-node.africa {
            background-color: var(--africa-color);
            color: white;
        }
        
        .country-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        
        .flow-arrow {
            position: absolute;
            background-color: #ccc;
            height: 4px;
            transform-origin: 0 0;
            pointer-events: none;
            z-index: 1;
        }
        
        .flow-arrow::after {
            content: '';
            position: absolute;
            right: 0;
            top: -4px;
            width: 0;
            height: 0;
            border-top: 6px solid transparent;
            border-left: 12px solid #ccc;
            border-bottom: 6px solid transparent;
        }
        
        .flow-arrow.dollars {
            background-color: #3b5dc9;
        }
        
        .flow-arrow.dollars::after {
            border-left-color: #3b5dc9;
        }
        
        .flow-arrow.oil {
            background-color: #2e7d32;
        }
        
        .flow-arrow.oil::after {
            border-left-color: #2e7d32;
        }
        
        .flow-arrow.debt {
            background-color: #d32f2f;
        }
        
        .flow-arrow.debt::after {
            border-left-color: #d32f2f;
        }
        
        .flow-label {
            position: absolute;
            background-color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-size: 0.75rem;
            box-shadow: var(--shadow);
            pointer-events: none;
            z-index: 2;
            transform: translate(-50%, -50%);
        }
        
        .dark-mode .flow-label {
            background-color: var(--bg-dark);
            color: var(--light-text);
        }
        
        .connection-controls {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1rem 0;
        }
        
        .connection-control {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 0.75rem 1rem;
            box-shadow: var(--shadow);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            transition: var(--transition);
            flex-grow: 1;
            border: 2px solid transparent;
        }
        
        .dark-mode .connection-control {
            background-color: var(--bg-dark);
            color: var(--light-text);
        }
        
        .connection-control:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .connection-control.active {
            border-color: var(--primary);
        }
        
        .connection-dot {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }
        
        .connection-dot.dollars {
            background-color: var(--us-color);
        }
        
        .connection-dot.oil {
            background-color: var(--oil-color);
        }
        
        .connection-dot.debt {
            background-color: var(--debt-color);
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
        
        /* Nixon Shock Simulator Styles */
        .nixon-simulator {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            margin: 2rem 0;
        }
        
        .simulator-title {
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .simulator-controls {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .control-group {
            flex: 1;
            min-width: 250px;
        }
        
        .control-label {
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
        
        .slider-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
        }
        
        .slider-input {
            width: 100%;
            margin: 0.5rem 0;
        }
        
        .slider-value {
            font-weight: 700;
            text-align: center;
        }
        
        .simulation-results {
            margin-top: 2rem;
        }
        
        .result-metrics {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1rem 0;
        }
        
        .metric-card {
            background-color: var(--light-yellow);
            border-radius: var(--border-radius);
            padding: 1rem;
            flex: 1;
            min-width: 150px;
            text-align: center;
        }
        
        .dark-mode .metric-card {
            background-color: #333;
        }
        
        .metric-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        .metric-label {
            font-size: 0.875rem;
            color: var(--neutral);
        }
        
        .chart-container {
            height: 300px;
            margin: 2rem 0;
            position: relative;
            display: flex;
            align-items: flex-end;
            gap: 1rem;
            padding-bottom: 30px;
        }
        
        .chart-bar {
            flex: 1;
            background-color: var(--primary);
            border-radius: 4px 4px 0 0;
            transition: height 0.5s ease;
            position: relative;
            min-width: 60px;
        }
        
        .chart-label {
            position: absolute;
            bottom: -25px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 0.875rem;
        }
        
        .chart-value {
            position: absolute;
            top: -25px;
            left: 0;
            right: 0;
            text-align: center;
            font-weight: 700;
            color: var(--primary);
        }
        
        /* Debt Trap Simulator Styles */
        .debt-trap-simulator {
            margin: 2rem 0;
        }
        
        .game-card {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            margin-bottom: 1.5rem;
        }
        
        .game-title {
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .country-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .country-stat {
            flex: 1;
            min-width: 120px;
            text-align: center;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }
        
        .stat-label {
            font-size: 0.875rem;
            color: var(--neutral);
        }
        
        .policy-options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .policy-option {
            background-color: var(--light-yellow);
            border-radius: var(--border-radius);
            padding: 1rem;
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid transparent;
        }
        
        .dark-mode .policy-option {
            background-color: #333;
        }
        
        .policy-option:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }
        
        .policy-option.selected {
            border-color: var(--primary);
        }
        
        .policy-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .policy-effects {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }
        
        .policy-effect {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.875rem;
        }
        
        .effect-positive {
            color: var(--success);
        }
        
        .effect-negative {
            color: var(--danger);
        }
        
        .game-feedback {
            margin-top: 1.5rem;
            padding: 1rem;
            border-radius: var(--border-radius);
            border-left: 4px solid var(--primary);
            background-color: rgba(238, 114, 11, 0.05);
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
            
            .country-node {
                width: 80px;
                height: 80px;
                font-size: 0.875rem;
            }
            
            .country-icon {
                font-size: 1.5rem;
            }
            
            .simulator-controls {
                flex-direction: column;
            }
            
            .result-metrics {
                flex-direction: column;
            }
            
            .chart-container {
                flex-direction: column;
                height: auto;
                align-items: stretch;
            }
            
            .chart-bar {
                height: 60px;
                width: 100%;
                border-radius: 0 4px 4px 0;
            }
            
            .chart-label {
                bottom: 0;
                left: -25px;
                right: auto;
                transform-origin: left bottom;
                transform: rotate(-90deg);
            }
            
            .chart-value {
                top: 0;
                right: -25px;
                left: auto;
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
                        unlockAchievement('History Detective', 'You\'ve uncovered the key events in the dollar\'s rise to dominance!');
                    } else if (stepNum === 2) {
                        unlockAchievement('Global Strategist', 'You\'ve mapped the complex web of global dollar flows!');
                    } else if (stepNum === 3) {
                        unlockAchievement('Economic Navigator', 'You\'ve experienced the challenges of dollar dependency!');
                    }
                }
            };
            
            return (
                <div className="app-container">
                    <header className="header">
                        <h1 className="mission-title">Mission 2.6: The Rise of the Dollar</h1>
                        <p className="mission-subtitle">Explore how the US dollar became the world's dominant currency and its impact on global economics.</p>
                        
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
                            <p>The US dollar is the world's primary reserve currency, used in international trade, central bank reserves, and global debt. This mission explores how the dollar achieved this position, from the Bretton Woods agreement to the Nixon Shock and the petrodollar system, and examines its impacts on developing nations.</p>
                        </div>
                        
                        <div className="dialog-box">
                            <div className="dialog-character">A</div>
                            <p><strong>Asha:</strong> "The dollar's dominance isn't an accident of history—it's the result of deliberate policy decisions that created a system where one nation's currency rules the world. This gives the US extraordinary power and creates dependencies for everyone else."</p>
                        </div>
                        
                        <div className="dialog-box odu">
                            <div className="dialog-character">O</div>
                            <p><strong>Odu:</strong> "In my lifetime, I've seen how changes to the dollar ripple through our economy in Africa. When the US Federal Reserve raises interest rates, our currencies fall. When they print money, our savings lose value. We feel every decision, yet have no voice in making them."</p>
                        </div>
                    </section>
                    
                    <div className="mission-progress">
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 1 ? 'active' : ''} ${completedSteps.includes(1) ? 'completed' : ''}`}>1</div>
                            <div className="progress-label">Historical Timeline</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 2 ? 'active' : ''} ${completedSteps.includes(2) ? 'completed' : ''}`}>2</div>
                            <div className="progress-label">Global Money Web</div>
                        </div>
                        <div className="progress-step">
                            <div className={`progress-indicator ${currentStep === 3 ? 'active' : ''} ${completedSteps.includes(3) ? 'completed' : ''}`}>3</div>
                            <div className="progress-label">Debt Trap Navigator</div>
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
                        <HistoricalTimeline
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 2 && (
                        <GlobalMoneyWeb
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    {currentStep === 3 && (
                        <DebtTrapNavigator
                            activeCharacter={activeCharacter}
                            completeStep={completeStep}
                            updateProgress={updateProgress}
                        />
                    )}
                    
                    <div className="section">
                        <div className="section-content">
                            <div className="reflection">
                                <h3 className="section-title">Final Reflection</h3>
                                <p className="reflection-question">How does dollar dominance affect economic sovereignty for developing nations? What alternatives might create a more balanced global financial system?</p>
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
                                        unlockAchievement('Mission Complete', 'You\'ve completed all challenges in Mission 2.6!');
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
                                        <div>The dollar's global dominance was established through deliberate policy decisions</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>The 1971 Nixon Shock fundamentally altered the global monetary system</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Petrodollar recycling creates structural dependencies on the US dollar</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>Dollar-denominated debt limits economic sovereignty for developing nations</div>
                                    </div>
                                    <div className="summary-point">
                                        <div className="summary-point-icon">✓</div>
                                        <div>US monetary policy decisions affect economies worldwide without their input</div>
                                    </div>
                                </div>
                                
                                <div className="completion-badge">
                                    <div className="badge-icon">💵</div>
                                    <div className="badge-title">Dollar Dominance Expert</div>
                                    <div>You've completed Mission 2.6</div>
                                </div>
                            </div>
                        </div>
                    )}
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
                    year: 1944,
                    title: 'Bretton Woods Agreement',
                    content: 'Representatives from 44 countries met at Bretton Woods, New Hampshire to design a new international monetary system. They established the US dollar as the world\'s primary reserve currency, pegged to gold at $35 per ounce. Other currencies were pegged to the dollar.',
                    longContent: 'The Bretton Woods system emerged as World War II was ending, with the US holding 75% of the world\'s gold and being the only major industrial power with an intact economy. The agreement created the IMF and World Bank to oversee the new system. Notably, representatives from colonized African nations were largely excluded from these negotiations, yet the decisions would profoundly shape their economic futures.',
                    position: 'left'
                },
                {
                    id: 2,
                    year: '1960s',
                    title: 'Vietnam War & Deficit Spending',
                    content: 'The US began printing dollars to finance the Vietnam War and domestic programs. Foreign nations grew concerned about America\'s ability to maintain the gold standard as more dollars circulated than could be backed by gold reserves.',
                    longContent: 'As US government spending increased dramatically, foreign central banks began converting their dollar reserves to gold, depleting US gold reserves. By 1971, the US had approximately $14 billion in gold reserves against foreign dollar holdings of $50 billion. This created an unsustainable situation known as the "Triffin Dilemma" - the conflict between national monetary policy and international reserve currency status.',
                    position: 'right'
                },
                {
                    id: 3,
                    year: 1971,
                    title: 'Nixon Shock',
                    content: 'President Richard Nixon unilaterally ended the dollar\'s convertibility to gold, effectively ending the Bretton Woods system. This "temporary" measure (which became permanent) created a pure fiat global monetary system for the first time in history.',
                    longContent: 'On August 15, 1971, President Nixon announced the US would no longer convert dollars to gold at a fixed rate, effectively defaulting on its obligations. This decision, made without consulting other nations, fundamentally changed the global monetary system overnight. It removed the last constraint on the US\'s ability to create new currency and shifted monetary power entirely to the Federal Reserve and US Treasury.',
                    position: 'left'
                },
                {
                    id: 4,
                    year: '1973-1975',
                    title: 'Petrodollar System Established',
                    content: 'Following the 1973 oil crisis, the US made agreements with Saudi Arabia and other OPEC nations to price oil exclusively in dollars in exchange for military protection. This created global demand for dollars, as all nations needed dollars to purchase oil.',
                    longContent: 'The US-Saudi agreement created the "petrodollar" system. Oil-exporting nations would sell oil for dollars, then deposit surplus dollars in US banks, which would be used to purchase US Treasury bonds, effectively financing US government debt. This system replaced the gold backing with "black gold" (oil) backing, creating artificial global demand for dollars. Countries now needed to earn dollars through exports or borrow them to purchase essential energy resources.',
                    position: 'right'
                },
                {
                    id: 5,
                    year: '1980s',
                    title: 'Volcker Shock & Third World Debt Crisis',
                    content: 'Federal Reserve Chairman Paul Volcker dramatically raised US interest rates to combat inflation, reaching 20% by 1981. This triggered a global recession and a devastating debt crisis across Latin America and Africa as dollar-denominated loans became impossible to service.',
                    longContent: 'Many developing nations had taken dollar-denominated loans in the 1970s. When the Fed raised rates, their debt servicing costs skyrocketed. Countries like Mexico, Brazil, Argentina, and numerous African nations faced impossible choices - default on debts or implement severe austerity measures. The IMF stepped in with "structural adjustment programs" that mandated privatization, spending cuts, and economic liberalization in exchange for debt relief, often exacerbating poverty and inequality.',
                    position: 'left'
                },
                {
                    id: 6,
                    year: '1990s-2000s',
                    title: 'Dollar Hegemony Solidified',
                    content: 'With the Soviet Union\'s collapse and China\'s integration into global markets, the dollar strengthened its position. By 2000, most international trade was conducted in dollars, and foreign central banks held trillions in US Treasury bonds as reserves.',
                    longContent: 'As the world\'s only superpower after the Cold War, the US leveraged dollar dominance as a foreign policy tool. Access to dollar clearing became essential for international business, allowing the US to impose effective economic sanctions on countries like Iran, Venezuela, and North Korea. Meanwhile, the dollar\'s purchasing power for Americans remained strong despite trade deficits, described by economist Michael Hudson as "monetary imperialism."',
                    position: 'right'
                },
                {
                    id: 7,
                    year: '2008-2014',
                    title: 'Global Financial Crisis & Quantitative Easing',
                    content: 'Following the 2008 financial crisis, the Federal Reserve created trillions of new dollars through quantitative easing. This exported inflation to countries holding dollars and triggered capital outflows from emerging markets when the Fed eventually tightened policy.',
                    longContent: 'The Fed expanded its balance sheet from $900 billion to over $4.5 trillion, creating new currency to purchase financial assets. This massive monetary expansion benefited US financial markets but created volatility for developing economies. When the Fed began raising rates in 2013, it triggered the "Taper Tantrum" as capital fled emerging markets, causing currency crises in Turkey, Argentina, and other nations that had no say in US monetary policy decisions.',
                    position: 'left'
                },
                {
                    id: 8,
                    year: '2020-Present',
                    title: 'COVID Response & Dollar Weaponization',
                    content: 'The Fed created unprecedented amounts of currency during the pandemic, while the US increasingly used the dollar as a geopolitical weapon through sanctions. These actions accelerated discussions about de-dollarization among countries seeking monetary sovereignty.',
                    longContent: 'The Fed\'s balance sheet expanded to over $8.9 trillion by 2022. Meanwhile, the freezing of Russia\'s foreign reserves following the Ukraine invasion demonstrated the risks of dollar dependence to other nations. Countries including China, Russia, India, and Brazil began working on alternative payment systems and bilateral trade agreements that bypass the dollar. However, the dollar\'s network effects and the lack of a viable alternative have maintained its dominance despite these challenges.',
                    position: 'right'
                }
            ];
            
            useEffect(() => {
                // Update sub-progress based on expanded events
                const newProgress = (expandedEvents.length / timelineEvents.length) * 100;
                setSubProgress(newProgress);
                
                if (expandedEvents.length === timelineEvents.length) {
                    completeStep(1);
                }
                
                // Update main progress
                updateProgress(newProgress / 3); // First challenge contributes 1/3 to overall progress
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
                        <span>Challenge 1: Historical Decision Points</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Explore key moments in the dollar's rise to global dominance. Click on each event to learn more about its significance and long-term impacts.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "The dollar's dominance wasn't inevitable—it was constructed through specific decisions that prioritized US interests. Understanding this history reveals how one nation gained control over the global monetary system."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "When I was a boy, our currency was strong. But after the Nixon Shock and the IMF structural adjustments of the 1980s, everything changed. Our economic sovereignty was compromised by decisions made thousands of miles away."</p>
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
                            <h3 className="info-card-title">Key Insights:</h3>
                            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                <li>The dollar's global dominance wasn't the result of natural market forces but deliberate policy decisions</li>
                                <li>The 1971 Nixon Shock fundamentally altered the global monetary system, removing all constraints on dollar creation</li>
                                <li>The petrodollar system replaced gold backing with oil backing, creating artificial global demand for dollars</li>
                                <li>US monetary policy decisions created boom-bust cycles in developing nations who had no input in these policies</li>
                                <li>Dollar weaponization through sanctions has accelerated discussions about de-dollarization</li>
                            </ul>
                            
                            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                <button className="button">Challenge Completed</button>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
        
        // Global Money Web Simulation Component
        const GlobalMoneyWeb = ({ activeCharacter, completeStep, updateProgress }) => {
            const [isDragging, setIsDragging] = useState(false);
            const [draggingNode, setDraggingNode] = useState(null);
            const [nodes, setNodes] = useState([
                { id: 'usa', label: 'United States', icon: '🇺🇸', x: 300, y: 150 },
                { id: 'oil', label: 'Oil Producers', icon: '🛢️', x: 500, y: 150 },
                { id: 'debt', label: 'Debt Holders', icon: '💰', x: 300, y: 350 },
                { id: 'africa', label: 'African Nations', icon: '🌍', x: 500, y: 350 }
            ]);
            const [connections, setConnections] = useState([]);
            const [activeFlow, setActiveFlow] = useState('dollars');
            const [selectedFromNode, setSelectedFromNode] = useState(null);
            const [nixonSimulationActive, setNixonSimulationActive] = useState(false);
            const [goldBacked, setGoldBacked] = useState(true);
            const [dollarSupply, setDollarSupply] = useState(100);
            const [goldReserves, setGoldReserves] = useState(100);
            const [simulationResults, setSimulationResults] = useState(null);
            const [subProgress, setSubProgress] = useState(0);
            
            const canvasRef = useRef(null);
            const lastPosRef = useRef({ x: 0, y: 0 });
            
            const flowTypes = [
                { id: 'dollars', label: 'Dollar Flows', description: 'How US dollars move through the global system' },
                { id: 'oil', label: 'Oil Flows', description: 'How oil is traded internationally' },
                { id: 'debt', label: 'Debt Flows', description: 'How debt and loans circulate globally' }
            ];
            
            const presetConnections = [
                { from: 'usa', to: 'oil', type: 'dollars', label: 'Dollar payments for oil' },
                { from: 'oil', to: 'usa', type: 'oil', label: 'Oil exports' },
                { from: 'oil', to: 'debt', type: 'dollars', label: 'Dollar recycling' },
                { from: 'debt', to: 'usa', type: 'dollars', label: 'US Treasury purchases' },
                { from: 'usa', to: 'africa', type: 'dollars', label: 'Loans & aid' },
                { from: 'africa', to: 'oil', type: 'dollars', label: 'Payment for oil imports' },
                { from: 'debt', to: 'africa', type: 'dollars', label: 'IMF/World Bank loans' },
                { from: 'africa', to: 'debt', type: 'debt', label: 'Debt service payments' }
            ];
            
            useEffect(() => {
                // Update sub-progress based on completed tasks
                // 50% for connections, 50% for Nixon simulation
                const connectionsProgress = (connections.length / presetConnections.length) * 50;
                const nixonProgress = nixonSimulationActive && simulationResults ? 50 : 0;
                const newProgress = connectionsProgress + nixonProgress;
                
                setSubProgress(newProgress);
                
                if (newProgress >= 90) {
                    completeStep(2);
                }
                
                // Update main progress
                updateProgress((newProgress / 3) + (1 / 3 * 100)); // 1/3 for previous challenge + current progress
            }, [connections, nixonSimulationActive, simulationResults]);
            
            // Mouse down handler for node dragging
            const handleMouseDown = (e, nodeId) => {
                e.preventDefault();
                const node = nodes.find(n => n.id === nodeId);
                if (!node) return;
                
                setIsDragging(true);
                setDraggingNode(nodeId);
                
                // Save the starting position
                const rect = canvasRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                lastPosRef.current = { x, y };
            };
            
            // Touch start handler for node dragging on mobile
            const handleTouchStart = (e, nodeId) => {
                const node = nodes.find(n => n.id === nodeId);
                if (!node) return;
                
                setIsDragging(true);
                setDraggingNode(nodeId);
                
                // Save the starting position
                const rect = canvasRef.current.getBoundingClientRect();
                const touch = e.touches[0];
                const x = touch.clientX - rect.left;
                const y = touch.clientY - rect.top;
                lastPosRef.current = { x, y };
            };
            
            // Mouse move handler for node dragging
            const handleMouseMove = (e) => {
                if (!isDragging || !draggingNode) return;
                
                const rect = canvasRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const dx = x - lastPosRef.current.x;
                const dy = y - lastPosRef.current.y;
                
                // Update the node position
                setNodes(nodes.map(node => {
                    if (node.id === draggingNode) {
                        return {
                            ...node,
                            x: node.x + dx,
                            y: node.y + dy
                        };
                    }
                    return node;
                }));
                
                // Update the last position
                lastPosRef.current = { x, y };
            };
            
            // Touch move handler for node dragging on mobile
            const handleTouchMove = (e) => {
                if (!isDragging || !draggingNode) return;
                
                e.preventDefault();
                const rect = canvasRef.current.getBoundingClientRect();
                const touch = e.touches[0];
                const x = touch.clientX - rect.left;
                const y = touch.clientY - rect.top;
                
                const dx = x - lastPosRef.current.x;
                const dy = y - lastPosRef.current.y;
                
                // Update the node position
                setNodes(nodes.map(node => {
                    if (node.id === draggingNode) {
                        return {
                            ...node,
                            x: node.x + dx,
                            y: node.y + dy
                        };
                    }
                    return node;
                }));
                
                // Update the last position
                lastPosRef.current = { x, y };
            };
            
            // Mouse up handler to stop dragging
            const handleMouseUp = () => {
                setIsDragging(false);
                setDraggingNode(null);
            };
            
            // Touch end handler to stop dragging on mobile
            const handleTouchEnd = () => {
                setIsDragging(false);
                setDraggingNode(null);
            };
            
            // Handle node click for creating connections
            const handleNodeClick = (nodeId) => {
                if (!selectedFromNode) {
                    // First click - select from node
                    setSelectedFromNode(nodeId);
                } else if (selectedFromNode !== nodeId) {
                    // Second click - create connection
                    const existingConnection = connections.find(
                        conn => conn.from === selectedFromNode && conn.to === nodeId && conn.type === activeFlow
                    );
                    
                    if (!existingConnection) {
                        const presetConnection = presetConnections.find(
                            conn => conn.from === selectedFromNode && conn.to === nodeId && conn.type === activeFlow
                        );
                        
                        if (presetConnection) {
                            setConnections([...connections, { ...presetConnection }]);
                        } else {
                            setConnections([...connections, {
                                from: selectedFromNode,
                                to: nodeId,
                                type: activeFlow,
                                label: `Custom ${activeFlow} flow`
                            }]);
                        }
                    }
                    setSelectedFromNode(null);
                } else {
                    // Clicked the same node twice - deselect
                    setSelectedFromNode(null);
                }
            };
            
            // Calculate arrow positions
            const calculateArrow = (fromNode, toNode) => {
                // Find the center of each node
                const fromCenterX = fromNode.x + 60;
                const fromCenterY = fromNode.y + 60;
                const toCenterX = toNode.x + 60;
                const toCenterY = toNode.y + 60;
                
                // Calculate angle and distance
                const angle = Math.atan2(toCenterY - fromCenterY, toCenterX - fromCenterX);
                const distance = Math.sqrt(
                    Math.pow(toCenterX - fromCenterX, 2) + 
                    Math.pow(toCenterY - fromCenterY, 2)
                );
                
                // Calculate start and end points on the edge of the circles
                const fromX = fromCenterX + 60 * Math.cos(angle);
                const fromY = fromCenterY + 60 * Math.sin(angle);
                const toX = toCenterX - 60 * Math.cos(angle);
                const toY = toCenterY - 60 * Math.sin(angle);
                
                // Calculate adjusted distance
                const adjustedDistance = Math.sqrt(
                    Math.pow(toX - fromX, 2) + 
                    Math.pow(toY - fromY, 2)
                );
                
                return {
                    fromX,
                    fromY,
                    angle: angle * (180 / Math.PI),
                    distance: adjustedDistance,
                    labelX: (fromX + toX) / 2,
                    labelY: (fromY + toY) / 2 - 10
                };
            };
            
            // Set active flow type
            const setFlowType = (flowType) => {
                setActiveFlow(flowType);
                setSelectedFromNode(null);
            };
            
            // Load preset connections
            const loadPresetConnections = () => {
                setConnections(presetConnections);
            };
            
            // Reset connections
            const resetConnections = () => {
                setConnections([]);
                setSelectedFromNode(null);
            };
            
            // Toggle Nixon simulation
            const toggleNixonSimulation = () => {
                setNixonSimulationActive(!nixonSimulationActive);
                setGoldBacked(true);
                setDollarSupply(100);
                setGoldReserves(100);
                setSimulationResults(null);
            };
            
            // Handle gold backing toggle
            const toggleGoldBacking = () => {
                setGoldBacked(!goldBacked);
            };
            
            // Handle dollar supply change
            const handleDollarSupplyChange = (e) => {
                const value = parseInt(e.target.value);
                setDollarSupply(value);
                
                if (goldBacked) {
                    // Under gold standard, gold reserves must equal dollar supply
                    setGoldReserves(value);
                }
            };
            
            // Run simulation
            const runSimulation = () => {
                const results = {
                    goldRatio: goldBacked ? 1 : (goldReserves / dollarSupply),
                    dollarValue: goldBacked ? 1 : (goldReserves / dollarSupply),
                    globalInflation: goldBacked ? 0 : ((dollarSupply - 100) / 2),
                    treasuryFinancing: goldBacked ? (dollarSupply - 100) : (dollarSupply - 100) * 2
                };
                
                setSimulationResults(results);
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 2: Global Money Web Simulation</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Visualize how dollars, oil, and debt flow through the global system. Drag nodes to rearrange them, and create connections to explore relationships between different entities.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "This web of relationships reveals how the dollar creates dependencies. Through the petrodollar system, even countries that don't trade with the US need dollars to buy oil, giving America enormous power."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "Look at the position of African nations in this web. We must export valuable resources to earn dollars, which we immediately send out again for oil and debt payments. It creates a cycle that's difficult to escape."</p>
                    </div>
                    
                    <div className="money-web-container">
                        <div className="connection-controls">
                            {flowTypes.map(flow => (
                                <div 
                                    key={flow.id}
                                    className={`connection-control ${activeFlow === flow.id ? 'active' : ''}`}
                                    onClick={() => setFlowType(flow.id)}
                                >
                                    <div className={`connection-dot ${flow.id}`}></div>
                                    <div>
                                        <div style={{ fontWeight: 700 }}>{flow.label}</div>
                                        <div style={{ fontSize: '0.875rem' }}>{flow.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div style={{ marginTop: '1rem' }}>
                            {selectedFromNode && (
                                <div style={{ background: 'rgba(238, 114, 11, 0.1)', padding: '0.75rem', borderRadius: 'var(--border-radius)', marginBottom: '1rem' }}>
                                    <p>Selected: <strong>{nodes.find(n => n.id === selectedFromNode).label}</strong></p>
                                    <p>Now click another node to create a {flowTypes.find(f => f.id === activeFlow).label.toLowerCase()}</p>
                                </div>
                            )}
                        </div>
                        
                        <div 
                            className="money-web-canvas"
                            ref={canvasRef}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {/* Draw arrows for connections */}
                            {connections.filter(conn => activeFlow === 'all' || conn.type === activeFlow).map((connection, index) => {
                                const fromNode = nodes.find(n => n.id === connection.from);
                                const toNode = nodes.find(n => n.id === connection.to);
                                
                                if (!fromNode || !toNode) return null;
                                
                                const { fromX, fromY, angle, distance, labelX, labelY } = calculateArrow(fromNode, toNode);
                                
                                return (
                                    <React.Fragment key={`${connection.from}-${connection.to}-${connection.type}`}>
                                        <div 
                                            className={`flow-arrow ${connection.type}`}
                                            style={{
                                                left: `${fromX}px`,
                                                top: `${fromY}px`,
                                                width: `${distance}px`,
                                                transform: `rotate(${angle}deg)`
                                            }}
                                        ></div>
                                        <div 
                                            className="flow-label"
                                            style={{
                                                left: `${labelX}px`,
                                                top: `${labelY}px`
                                            }}
                                        >
                                            {connection.label}
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                            
                            {/* Draw country nodes */}
                            {nodes.map(node => (
                                <div 
                                    key={node.id}
                                    className={`country-node ${node.id} ${selectedFromNode === node.id ? 'selected' : ''}`}
                                    style={{
                                        left: `${node.x}px`,
                                        top: `${node.y}px`,
                                        border: selectedFromNode === node.id ? '4px solid var(--primary)' : 'none'
                                    }}
                                    onMouseDown={(e) => handleMouseDown(e, node.id)}
                                    onTouchStart={(e) => handleTouchStart(e, node.id)}
                                    onClick={() => handleNodeClick(node.id)}
                                >
                                    <div className="country-icon">{node.icon}</div>
                                    <div>{node.label}</div>
                                </div>
                            ))}
                        </div>
                        
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '1rem 0' }}>
                            <button 
                                className="button"
                                onClick={loadPresetConnections}
                            >
                                Load All Connections
                            </button>
                            <button 
                                className="button secondary"
                                onClick={resetConnections}
                            >
                                Reset Connections
                            </button>
                            <button 
                                className="button"
                                onClick={toggleNixonSimulation}
                                style={{ marginLeft: 'auto' }}
                            >
                                {nixonSimulationActive ? 'Return to Money Web' : 'Try Nixon Shock Simulator'}
                            </button>
                        </div>
                        
                        {connections.length >= presetConnections.length * 0.75 && (
                            <div className="info-card">
                                <h3 className="info-card-title">Key Insights from the Money Web:</h3>
                                <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                    <li><strong>Petrodollar Recycling:</strong> Oil producers sell oil for dollars, then invest those dollars back into US treasuries, creating a circular flow that finances US government spending</li>
                                    <li><strong>Dollar Dependency:</strong> Nations must earn dollars through exports or borrow them to purchase essential oil imports</li>
                                    <li><strong>Debt Service Trap:</strong> African nations take dollar loans, but must continually earn dollars through exports to service that debt</li>
                                    <li><strong>Capital Outflow:</strong> The system creates a net flow of capital from developing nations to the United States and financial centers</li>
                                    <li><strong>Exorbitant Privilege:</strong> The US can print the currency that the world needs for trade and reserves, effectively "importing for free"</li>
                                </ul>
                            </div>
                        )}
                        
                        {nixonSimulationActive && (
                            <div className="nixon-simulator">
                                <h3 className="simulator-title">Nixon Shock Simulator: Gold Standard vs. Fiat Dollar</h3>
                                <p>Explore how the 1971 removal of dollar-gold convertibility changed the global monetary system. Toggle between the gold standard and fiat dollar to see the effects on currency creation.</p>
                                
                                <div style={{ margin: '1.5rem 0', display: 'flex', justifyContent: 'center' }}>
                                    <div 
                                        style={{ 
                                            display: 'flex', 
                                            borderRadius: 'var(--border-radius)', 
                                            overflow: 'hidden',
                                            border: '1px solid #ddd'
                                        }}
                                    >
                                        <button 
                                            style={{
                                                padding: '0.75rem 1.5rem',
                                                background: goldBacked ? 'var(--primary)' : 'white',
                                                color: goldBacked ? 'white' : 'var(--dark-text)',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontWeight: 600
                                            }}
                                            onClick={() => setGoldBacked(true)}
                                        >
                                            Gold Standard (Pre-1971)
                                        </button>
                                        <button 
                                            style={{
                                                padding: '0.75rem 1.5rem',
                                                background: !goldBacked ? 'var(--primary)' : 'white',
                                                color: !goldBacked ? 'white' : 'var(--dark-text)',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontWeight: 600
                                            }}
                                            onClick={() => setGoldBacked(false)}
                                        >
                                            Fiat Dollar (Post-1971)
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="simulator-controls">
                                    <div className="control-group">
                                        <div className="control-label">Dollar Supply (% of 1944 base)</div>
                                        <div className="slider-container">
                                            <input 
                                                type="range"
                                                min="100"
                                                max={goldBacked ? 200 : 900}
                                                value={dollarSupply}
                                                onChange={handleDollarSupplyChange}
                                                className="slider-input"
                                            />
                                            <div className="slider-value">{dollarSupply}%</div>
                                        </div>
                                    </div>
                                    
                                    <div className="control-group">
                                        <div className="control-label">Gold Reserves (% of 1944 base)</div>
                                        <div className="slider-container">
                                            <input 
                                                type="range"
                                                min="0"
                                                max="150"
                                                value={goldReserves}
                                                onChange={(e) => setGoldReserves(parseInt(e.target.value))}
                                                disabled={goldBacked}
                                                className="slider-input"
                                                style={{ opacity: goldBacked ? 0.5 : 1 }}
                                            />
                                            <div className="slider-value">{goldReserves}%</div>
                                            {goldBacked && (
                                                <div style={{ textAlign: 'center', color: 'var(--neutral)', fontSize: '0.875rem' }}>
                                                    (Locked to dollar supply under gold standard)
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                <button 
                                    className="button"
                                    onClick={runSimulation}
                                    style={{ margin: '1rem auto', display: 'block' }}
                                >
                                    Run Simulation
                                </button>
                                
                                {simulationResults && (
                                    <div className="simulation-results">
                                        <h3 style={{ marginBottom: '1rem' }}>Simulation Results:</h3>
                                        
                                        <div className="result-metrics">
                                            <div className="metric-card">
                                                <div className="metric-value">
                                                    {simulationResults.goldRatio.toFixed(2)}
                                                </div>
                                                <div className="metric-label">Gold-to-Dollar Ratio</div>
                                            </div>
                                            
                                            <div className="metric-card">
                                                <div className="metric-value">
                                                    {(simulationResults.dollarValue * 100).toFixed(0)}%
                                                </div>
                                                <div className="metric-label">Dollar Purchasing Power</div>
                                            </div>
                                            
                                            <div className="metric-card">
                                                <div className="metric-value">
                                                    {simulationResults.globalInflation.toFixed(1)}%
                                                </div>
                                                <div className="metric-label">Exported Inflation</div>
                                            </div>
                                            
                                            <div className="metric-card">
                                                <div className="metric-value">
                                                    ${simulationResults.treasuryFinancing.toFixed(0)}B
                                                </div>
                                                <div className="metric-label">Gov't Deficit Financing</div>
                                            </div>
                                        </div>
                                        
                                        <div className="info-card" style={{ marginTop: '2rem' }}>
                                            <h3 className="info-card-title">Key Insights from the Nixon Shock:</h3>
                                            {goldBacked ? (
                                                <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                                    <li><strong>Limited Money Creation:</strong> Under the gold standard, dollar creation was constrained by gold reserves</li>
                                                    <li><strong>Stable Purchasing Power:</strong> The gold backing helped maintain the dollar's value over time</li>
                                                    <li><strong>Fiscal Discipline:</strong> Limited ability to finance government deficits through money creation</li>
                                                    <li><strong>External Constraint:</strong> The system imposed an external constraint on US monetary policy</li>
                                                </ul>
                                            ) : (
                                                <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                                    <li><strong>Unlimited Money Creation:</strong> Without the gold constraint, the Fed can create unlimited dollars</li>
                                                    <li><strong>Dollar Devaluation:</strong> Each new dollar created diminishes the purchasing power of existing dollars</li>
                                                    <li><strong>Exported Inflation:</strong> Dollar creation creates inflation globally, especially in dollar-dependent economies</li>
                                                    <li><strong>Expanded Deficit Financing:</strong> The government can fund larger deficits through money creation</li>
                                                    <li><strong>Lost Sovereignty:</strong> Foreign nations must cope with US monetary policy without having any input in decisions</li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            );
        };
        
        // Debt Trap Navigator Component
        const DebtTrapNavigator = ({ activeCharacter, completeStep, updateProgress }) => {
            const [gameStarted, setGameStarted] = useState(false);
            const [gameOver, setGameOver] = useState(false);
            const [year, setYear] = useState(1);
            const [gdp, setGdp] = useState(100);
            const [debt, setDebt] = useState(50);
            const [debtService, setDebtService] = useState(5);
            const [dollarReserves, setDollarReserves] = useState(20);
            const [infrastructure, setInfrastructure] = useState(30);
            const [stability, setStability] = useState(80);
            const [interestRate, setInterestRate] = useState(5);
            const [dollarIndex, setDollarIndex] = useState(100);
            const [selectedPolicy, setSelectedPolicy] = useState(null);
            const [feedback, setFeedback] = useState('');
            const [fedEvent, setFedEvent] = useState(null);
            const [endResult, setEndResult] = useState(null);
            const [subProgress, setSubProgress] = useState(0);
            
            const policies = [
                {
                    id: 'imf',
                    title: 'Accept IMF Structural Adjustment',
                    description: 'Take a new IMF loan with strict conditions to cut government spending, privatize state assets, and liberalize markets.',
                    effects: [
                        { label: 'Debt', value: '+20%', type: 'negative' },
                        { label: 'Dollar Reserves', value: '+15', type: 'positive' },
                        { label: 'Infrastructure', value: '-10', type: 'negative' },
                        { label: 'Stability', value: '-15', type: 'negative' }
                    ],
                    apply: () => {
                        setDebt(debt * 1.2);
                        setDollarReserves(dollarReserves + 15);
                        setInfrastructure(Math.max(10, infrastructure - 10));
                        setStability(Math.max(20, stability - 15));
                        setDebtService(calculateDebtService(debt * 1.2, interestRate));
                        return 'You received a $20B IMF loan but must implement austerity measures. Public protests erupt against spending cuts while foreign investors gain access to privatized assets.';
                    }
                },
                {
                    id: 'export',
                    title: 'Increase Resource Exports',
                    description: 'Expand mining operations and commodity exports to earn more dollars for debt payments.',
                    effects: [
                        { label: 'GDP', value: '+5%', type: 'positive' },
                        { label: 'Dollar Reserves', value: '+10', type: 'positive' },
                        { label: 'Infrastructure', value: '-5', type: 'negative' },
                        { label: 'Stability', value: '-5', type: 'negative' }
                    ],
                    apply: () => {
                        setGdp(gdp * 1.05);
                        setDollarReserves(dollarReserves + 10);
                        setInfrastructure(Math.max(10, infrastructure - 5));
                        setStability(Math.max(20, stability - 5));
                        return 'Mineral exports increase, bringing in needed dollars but causing environmental damage and displacing local communities. Foreign companies extract most of the profit.';
                    }
                },
                {
                    id: 'local',
                    title: 'Invest in Local Development',
                    description: 'Redirect funds from debt payments to education, healthcare, and local industry development.',
                    effects: [
                        { label: 'Debt Service', value: '-5', type: 'positive' },
                        { label: 'GDP', value: '+10%', type: 'positive' },
                        { label: 'Infrastructure', value: '+15', type: 'positive' },
                        { label: 'Stability', value: '+10', type: 'positive' },
                        { label: 'Dollar Reserves', value: '-5', type: 'negative' }
                    ],
                    apply: () => {
                        setDebtService(Math.max(1, debtService - 5));
                        setGdp(gdp * 1.1);
                        setInfrastructure(Math.min(100, infrastructure + 15));
                        setStability(Math.min(100, stability + 10));
                        setDollarReserves(Math.max(0, dollarReserves - 5));
                        return 'Local industries begin to grow and public satisfaction increases, but creditors express concern about reduced debt payments and may downgrade your credit rating.';
                    }
                },
                {
                    id: 'negotiate',
                    title: 'Negotiate Debt Restructuring',
                    description: 'Seek to extend loan terms, reduce interest rates, or partially forgive debt with creditors.',
                    effects: [
                        { label: 'Debt', value: '-10%', type: 'positive' },
                        { label: 'Debt Service', value: '-3', type: 'positive' },
                        { label: 'Stability', value: '+5', type: 'positive' }
                    ],
                    apply: () => {
                        setDebt(debt * 0.9);
                        setDebtService(calculateDebtService(debt * 0.9, interestRate));
                        setStability(Math.min(100, stability + 5));
                        return 'After tense negotiations, creditors agree to modest debt relief. This provides some breathing room, but they impose stricter conditions on future lending.';
                    }
                },
                {
                    id: 'currency',
                    title: 'Switch to Local Currency Trading',
                    description: 'Establish bilateral trade agreements with neighbors to reduce dollar dependency.',
                    effects: [
                        { label: 'Dollar Reserves', value: '+5', type: 'positive' },
                        { label: 'Stability', value: '+5', type: 'positive' },
                        { label: 'GDP', value: '+3%', type: 'positive' }
                    ],
                    apply: () => {
                        setDollarReserves(dollarReserves + 5);
                        setStability(Math.min(100, stability + 5));
                        setGdp(gdp * 1.03);
                        return 'Regional trade in local currencies reduces dollar needs for imports. US officials express "concern" over the arrangement, but local businesses benefit from reduced currency risk.';
                    }
                }
            ];
            
            const fedEvents = [
                {
                    title: 'Federal Reserve Rate Hike',
                    description: 'The US Federal Reserve raises interest rates to combat domestic inflation.',
                    effects: () => {
                        const newInterestRate = interestRate + 2;
                        const newDebtService = calculateDebtService(debt, newInterestRate);
                        const reserveChange = -5;
                        
                        setInterestRate(newInterestRate);
                        setDebtService(newDebtService);
                        setDollarReserves(Math.max(0, dollarReserves + reserveChange));
                        setDollarIndex(dollarIndex + 10);
                        
                        return {
                            message: `The Federal Reserve raised interest rates by 2%. Your debt servicing costs increased to $${newDebtService.toFixed(1)}B, and capital is flowing out of your country as investors seek higher returns in the US.`,
                            changes: [
                                { label: 'Interest Rate', value: `+2% to ${newInterestRate}%`, type: 'negative' },
                                { label: 'Debt Service', value: `+${(newDebtService - debtService).toFixed(1)}B`, type: 'negative' },
                                { label: 'Dollar Reserves', value: `${reserveChange}`, type: 'negative' },
                                { label: 'Dollar Index', value: '+10', type: 'negative' }
                            ]
                        };
                    }
                },
                {
                    title: 'US Quantitative Easing',
                    description: 'The Federal Reserve launches a new round of quantitative easing, creating trillions of new dollars.',
                    effects: () => {
                        const newInterestRate = Math.max(1, interestRate - 1);
                        const newDebtService = calculateDebtService(debt, newInterestRate);
                        const inflationEffect = -5;
                        
                        setInterestRate(newInterestRate);
                        setDebtService(newDebtService);
                        setDollarIndex(dollarIndex - 10);
                        
                        return {
                            message: `The Federal Reserve prints trillions of new dollars through quantitative easing. Interest rates fall, easing your debt service costs, but inflation is rising as the dollar's value falls, making imports more expensive.`,
                            changes: [
                                { label: 'Interest Rate', value: `-1% to ${newInterestRate}%`, type: 'positive' },
                                { label: 'Debt Service', value: `${(newDebtService - debtService).toFixed(1)}B`, type: 'positive' },
                                { label: 'Dollar Index', value: '-10', type: 'positive' },
                                { label: 'Import Costs', value: `+${inflationEffect}%`, type: 'negative' }
                            ]
                        };
                    }
                },
                {
                    title: 'Dollar Shortage Crisis',
                    description: 'Global demand for dollars surges during a financial crisis, creating a shortage in emerging markets.',
                    effects: () => {
                        const reserveChange = -8;
                        const stabilityChange = -10;
                        
                        setDollarReserves(Math.max(0, dollarReserves + reserveChange));
                        setStability(Math.max(20, stability + stabilityChange));
                        setDollarIndex(dollarIndex + 15);
                        
                        return {
                            message: `A "flight to safety" during a global crisis creates a dollar shortage. Your currency is falling sharply as investors seek dollar safety, and importing essential goods becomes difficult without sufficient dollar reserves.`,
                            changes: [
                                { label: 'Dollar Reserves', value: reserveChange, type: 'negative' },
                                { label: 'Stability', value: stabilityChange, type: 'negative' },
                                { label: 'Dollar Index', value: '+15', type: 'negative' }
                            ]
                        };
                    }
                }
            ];
            
            useEffect(() => {
                // Update sub-progress based on game progress
                const maxYears = 10;
                const newProgress = gameStarted ? Math.min(100, (year / maxYears) * 100) : 0;
                
                if (gameOver) {
                    setSubProgress(100);
                    completeStep(3);
                } else {
                    setSubProgress(newProgress);
                }
                
                // Update main progress
                updateProgress((subProgress / 3) + (2 / 3 * 100)); // 2/3 for previous challenges + current progress
            }, [gameStarted, year, gameOver, subProgress]);
            
            // Calculate debt service based on debt and interest rate
            const calculateDebtService = (debtAmount, rate) => {
                return (debtAmount * (rate / 100));
            };
            
            // Start the game
            const startGame = () => {
                setGameStarted(true);
                setYear(1);
                setGdp(100);
                setDebt(50);
                setDebtService(5);
                setDollarReserves(20);
                setInfrastructure(30);
                setStability(80);
                setInterestRate(5);
                setDollarIndex(100);
                setSelectedPolicy(null);
                setFedEvent(null);
                setFeedback('');
                setGameOver(false);
                setEndResult(null);
            };
            
            // Implement selected policy
            const implementPolicy = () => {
                if (!selectedPolicy) return;
                
                const policy = policies.find(p => p.id === selectedPolicy);
                const policyFeedback = policy.apply();
                
                setFeedback(policyFeedback);
                setSelectedPolicy(null);
                
                // Check if game is lost
                if (dollarReserves <= 0 || stability <= 20 || debt >= gdp * 1.5) {
                    setGameOver(true);
                    
                    if (dollarReserves <= 0) {
                        setEndResult('Dollar Shortage Crisis: Without sufficient dollar reserves, your country cannot import essential goods or service external debt. The IMF imposes harsh austerity measures in exchange for emergency funding.');
                    } else if (stability <= 20) {
                        setEndResult('Political Instability: Economic hardship leads to widespread protests and eventual regime change. The new government defaults on external debt, resulting in international isolation.');
                    } else if (debt >= gdp * 1.5) {
                        setEndResult('Debt Spiral: Your debt-to-GDP ratio has become unsustainable. Credit agencies downgrade your bonds to junk status, and creditors demand immediate payment, forcing a default.');
                    }
                    
                    return;
                }
                
                // Advance to next year
                advanceYear();
            };
            
            // Advance to the next year
            const advanceYear = () => {
                // Check for win condition
                if (year >= 10) {
                    setGameOver(true);
                    setEndResult('Success! You\'ve navigated the challenges of dollar dependency for a decade, maintaining economic stability while gradually reducing external vulnerabilities. Your country has created more policy space for independent development.');
                    return;
                }
                
                // Trigger random Fed event every 2-3 years
                if (year % 3 === 0) {
                    const randomEvent = fedEvents[Math.floor(Math.random() * fedEvents.length)];
                    const eventResult = randomEvent.effects();
                    setFedEvent({
                        title: randomEvent.title,
                        description: randomEvent.description,
                        message: eventResult.message,
                        changes: eventResult.changes
                    });
                } else {
                    setFedEvent(null);
                }
                
                // Apply yearly changes
                setYear(year + 1);
                setGdp(gdp * (1 + (infrastructure / 1000))); // Growth based on infrastructure
                setDebt(debt - (debtService * 0.7)); // Debt decreases by 70% of debt service paid
                setDollarReserves(Math.max(0, dollarReserves - (debtService * 0.5))); // Dollar reserves decrease from debt payments
            };
            
            return (
                <div className="section">
                    <h2 className="section-title">
                        <span>Challenge 3: Debt Trap Navigator</span>
                    </h2>
                    
                    <div className="section-content">
                        <p>Take on the role of managing an African nation's finances in a dollar-dominated world. Balance development needs against dollar-denominated debt while responding to external shocks you cannot control.</p>
                    </div>
                    
                    <div className="dialog-box" style={{ display: activeCharacter === 'asha' ? 'block' : 'none' }}>
                        <div className="dialog-character">A</div>
                        <p><strong>Asha:</strong> "This simulation shows the impossible choices faced by nations caught in the dollar debt trap. You need dollars to develop, but earning dollars often means depleting your resources while facing conditions you can't control."</p>
                    </div>
                    
                    <div className="dialog-box odu" style={{ display: activeCharacter === 'odu' ? 'block' : 'none' }}>
                        <div className="dialog-character">O</div>
                        <p><strong>Odu:</strong> "I've watched finance ministers make these painful decisions for decades. When the US raises interest rates, our currencies collapse. When commodity prices fall, we can't pay our debts. Our destiny is tied to decisions made in Washington."</p>
                    </div>
                    
                    <div className="debt-trap-simulator">
                        {!gameStarted ? (
                            <div className="game-card">
                                <h3 className="game-title">Debt Trap Navigator: The Dollar Dependency Challenge</h3>
                                <p style={{ marginBottom: '1rem' }}>As the finance minister of Niberia, a resource-rich African nation, you must navigate the challenges of dollar dependency and external debt while trying to develop your economy.</p>
                                
                                <div style={{ margin: '2rem 0' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Starting Scenario:</h4>
                                    <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                        <li>Your country has a $100B GDP with $50B in dollar-denominated external debt</li>
                                        <li>You must maintain dollar reserves to import essential goods and service debt</li>
                                        <li>US Federal Reserve decisions will affect your interest rates and currency</li>
                                        <li>Your goal is to survive for 10 years while developing your economy</li>
                                        <li>You'll lose if you run out of dollar reserves, your debt becomes unsustainable, or social stability collapses</li>
                                    </ul>
                                </div>
                                
                                <div style={{ textAlign: 'center' }}>
                                    <button className="button" onClick={startGame}>
                                        Start Simulation
                                    </button>
                                </div>
                            </div>
                        ) : gameOver ? (
                            <div className="game-card">
                                <h3 className="game-title">Simulation Complete - Year {year}</h3>
                                
                                <div style={{ margin: '1.5rem 0', padding: '1rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--primary)' }}>
                                    <p><strong>Result:</strong> {endResult}</p>
                                </div>
                                
                                <div className="country-stats">
                                    <div className="country-stat">
                                        <div className="stat-value">${gdp.toFixed(1)}B</div>
                                        <div className="stat-label">Final GDP</div>
                                    </div>
                                    
                                    <div className="country-stat">
                                        <div className="stat-value">${debt.toFixed(1)}B</div>
                                        <div className="stat-label">External Debt</div>
                                    </div>
                                    
                                    <div className="country-stat">
                                        <div className="stat-value">{(debt/gdp*100).toFixed(0)}%</div>
                                        <div className="stat-label">Debt-to-GDP</div>
                                    </div>
                                    
                                    <div className="country-stat">
                                        <div className="stat-value">${dollarReserves.toFixed(1)}B</div>
                                        <div className="stat-label">Dollar Reserves</div>
                                    </div>
                                </div>
                                
                                <div className="info-card" style={{ marginTop: '2rem' }}>
                                    <h3 className="info-card-title">Key Insights from Debt Dependency:</h3>
                                    <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                                        <li><strong>External Vulnerability:</strong> Dollar-denominated debt exposes countries to US monetary policy and exchange rate fluctuations</li>
                                        <li><strong>Development Constraint:</strong> Debt service diverts resources from critical infrastructure and social investment</li>
                                        <li><strong>Resource Extraction Trap:</strong> The need to earn dollars often leads to environmentally damaging resource extraction</li>
                                        <li><strong>Policy Autonomy Loss:</strong> External debt often comes with conditions that limit a nation's economic sovereignty</li>
                                        <li><strong>Structural Dependency:</strong> The system perpetuates dependency relationships rather than fostering balanced development</li>
                                    </ul>
                                </div>
                                
                                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                    <button className="button" onClick={startGame}>
                                        Play Again
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="game-card">
                                <h3 className="game-title">Year {year}: Managing Niberia's Economy</h3>
                                
                                <div className="country-stats">
                                    <div className="country-stat">
                                        <div className="stat-value">${gdp.toFixed(1)}B</div>
                                        <div className="stat-label">GDP</div>
                                    </div>
                                    
                                    <div className="country-stat">
                                        <div className="stat-value">${debt.toFixed(1)}B</div>
                                        <div className="stat-label">External Debt</div>
                                    </div>
                                    
                                    <div className="country-stat">
                                        <div className="stat-value">${debtService.toFixed(1)}B</div>
                                        <div className="stat-label">Annual Debt Service</div>
                                    </div>
                                    
                                    <div className="country-stat">
                                        <div className="stat-value">${dollarReserves.toFixed(1)}B</div>
                                        <div className="stat-label">Dollar Reserves</div>
                                    </div>
                                </div>
                                
                                <div className="country-stats" style={{ marginTop: '1rem' }}>
                                    <div className="country-stat">
                                        <div className="stat-value">{infrastructure}%</div>
                                        <div className="stat-label">Infrastructure</div>
                                    </div>
                                    
                                    <div className="country-stat">
                                        <div className="stat-value">{stability}%</div>
                                        <div className="stat-label">Social Stability</div>
                                    </div>
                                    
                                    <div className="country-stat">
                                        <div className="stat-value">{interestRate}%</div>
                                        <div className="stat-label">Interest Rate</div>
                                    </div>
                                    
                                    <div className="country-stat">
                                        <div className="stat-value">{dollarIndex}</div>
                                        <div className="stat-label">Dollar Index</div>
                                    </div>
                                </div>
                                
                                {fedEvent && (
                                    <div style={{ 
                                        margin: '1.5rem 0', 
                                        padding: '1rem', 
                                        borderRadius: 'var(--border-radius)', 
                                        backgroundColor: 'rgba(211, 47, 47, 0.1)', 
                                        borderLeft: '4px solid var(--danger)' 
                                    }}>
                                        <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>{fedEvent.title}</h4>
                                        <p>{fedEvent.message}</p>
                                        
                                        <div style={{ 
                                            display: 'flex', 
                                            flexWrap: 'wrap', 
                                            gap: '0.5rem', 
                                            marginTop: '1rem' 
                                        }}>
                                            {fedEvent.changes.map((change, index) => (
                                                <div 
                                                    key={index}
                                                    style={{ 
                                                        padding: '0.25rem 0.5rem', 
                                                        backgroundColor: 'rgba(0,0,0,0.05)', 
                                                        borderRadius: '4px',
                                                        fontSize: '0.875rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.25rem'
                                                    }}
                                                >
                                                    <span>{change.label}:</span>
                                                    <span style={{ 
                                                        color: change.type === 'positive' ? 'var(--success)' : 'var(--danger)',
                                                        fontWeight: 700
                                                    }}>
                                                        {change.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {feedback && (
                                    <div className="game-feedback">
                                        {feedback}
                                    </div>
                                )}
                                
                                <div style={{ margin: '1.5rem 0' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Select a Policy Direction:</h4>
                                    
                                    <div className="policy-options">
                                        {policies.map(policy => (
                                            <div 
                                                key={policy.id}
                                                className={`policy-option ${selectedPolicy === policy.id ? 'selected' : ''}`}
                                                onClick={() => setSelectedPolicy(policy.id)}
                                            >
                                                <div className="policy-title">{policy.title}</div>
                                                <p>{policy.description}</p>
                                                
                                                <div className="policy-effects">
                                                    {policy.effects.map((effect, index) => (
                                                        <div 
                                                            key={index}
                                                            className={`policy-effect ${effect.type === 'positive' ? 'effect-positive' : 'effect-negative'}`}
                                                        >
                                                            <span>{effect.label}:</span>
                                                            <span>{effect.value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                        <button 
                                            className="button"
                                            onClick={implementPolicy}
                                            disabled={!selectedPolicy}
                                            style={{ 
                                                opacity: !selectedPolicy ? 0.5 : 1,
                                                cursor: !selectedPolicy ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            Implement Policy & Advance Year
                                        </button>
                                    </div>
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