<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asha & Odu's Resistance Saga</title>
    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // Configure Tailwind
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            orange: '#EE720B',
                            light: '#FBF4D2',
                            gold: '#FFC567'
                        },
                        resistance: {
                            blue: '#0A84FF',
                            green: '#32D74B', 
                            red: '#FF3B30'
                        },
                        terminal: {
                            black: '#121212',
                            darkgray: '#1D1D1D',
                        }
                    },
                    fontFamily: {
                        satoshi: ['Satoshi', 'sans-serif'],
                        mono: ['Space Mono', 'monospace'],
                    },
                    animation: {
                        'float': 'float 3s ease-in-out infinite',
                        'flicker': 'flicker 1.5s infinite alternate',
                        'glitch': 'glitch 1s infinite',
                        'pulse-border': 'pulse-border 2s infinite',
                        'slide-in': 'slide-in 0.5s ease-out',
                        'character-switch': 'character-switch 0.8s ease-in-out',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        flicker: {
                            '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: '1' },
                            '20%, 24%, 55%': { opacity: '0.5' },
                        },
                        glitch: {
                            '0%, 100%': { transform: 'translate(0)' },
                            '33%': { transform: 'translate(-5px, 2px)' },
                            '66%': { transform: 'translate(5px, -2px)' },
                        },
                        'pulse-border': {
                            '0%, 100%': { borderColor: 'rgba(238, 114, 11, 0.4)' },
                            '50%': { borderColor: 'rgba(238, 114, 11, 1)' },
                        },
                        'slide-in': {
                            '0%': { transform: 'translateX(-100%)', opacity: 0 },
                            '100%': { transform: 'translateX(0)', opacity: 1 },
                        },
                        'character-switch': {
                            '0%': { transform: 'scale(0.8)', opacity: 0 },
                            '100%': { transform: 'scale(1)', opacity: 1 },
                        }
                    }
                }
            }
        }

        // Dark mode detection
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });
    </script>
    <style>
        .resistance-panel {
            background: rgba(30, 30, 30, 0.8);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(238, 114, 11, 0.5);
            box-shadow: 0 0 10px rgba(238, 114, 11, 0.3);
            transition: all 0.3s ease;
        }

        .asha-panel {
            background: rgba(30, 30, 30, 0.8);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(10, 132, 255, 0.5);
            box-shadow: 0 0 10px rgba(10, 132, 255, 0.3);
        }

        .odu-panel {
            background: rgba(30, 30, 30, 0.8);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 197, 103, 0.5);
            box-shadow: 0 0 10px rgba(255, 197, 103, 0.3);
        }

        .resistance-button {
            position: relative;
            overflow: hidden;
            border: 1px solid;
            transition: all 0.3s ease;
        }

        .resistance-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.6s ease;
        }

        .resistance-button:hover::before {
            left: 100%;
        }

        .neon-text {
            text-shadow: 0 0 5px rgba(238, 114, 11, 0.5), 0 0 10px rgba(238, 114, 11, 0.3);
        }

        .glow-effect {
            box-shadow: 0 0 10px rgba(238, 114, 11, 0.5), 0 0 20px rgba(238, 114, 11, 0.3);
        }

        .asha-glow {
            box-shadow: 0 0 10px rgba(10, 132, 255, 0.5), 0 0 20px rgba(10, 132, 255, 0.3);
        }

        .odu-glow {
            box-shadow: 0 0 10px rgba(255, 197, 103, 0.5), 0 0 20px rgba(255, 197, 103, 0.3);
        }

        /* Parallax background */
        .parallax-bg {
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><g fill="none" stroke="rgba(238, 114, 11, 0.15)" stroke-width="1"><path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"/><path d="M-31 229L237 261 390 382 731 737M520 660L309 538M295 764L126.5 879.5M237 261L102 382M520 660L415 724M520 660L427 727M-31 229L-71 205.5M-31 229L35.5 248M37 228.7L40 217"/><path d="M520 660L578 700.5M520 660L494.5 628M520 660L485 692M520 660L538 618M520 660L572.5 651M927 880L769 229M295 764L40 599M-31 229L126.5 79.5"/></g></svg>');
            background-position: 50%;
            background-size: cover;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
            opacity: 0.3;
        }

        .parallax-bg.dark {
            opacity: 0.15;
        }

        /* Grid lines background */
        .grid-lines {
            background-image: linear-gradient(rgba(238, 114, 11, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(238, 114, 11, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
        }

        /* Chart styling */
        .chart-container {
            width: 100%;
            height: 200px;
        }

        /* Slider styling */
        .slider {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 8px;
            background: #303339;
            outline: none;
            border-radius: 4px;
        }

        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: #EE720B;
            cursor: pointer;
            border-radius: 50%;
            box-shadow: 0 0 5px rgba(238, 114, 11, 0.5);
        }

        .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #EE720B;
            cursor: pointer;
            border-radius: 50%;
            box-shadow: 0 0 5px rgba(238, 114, 11, 0.5);
        }

        /* Character portraits */
        .character-portrait {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-size: cover;
            transition: all 0.3s ease;
        }

        .asha-portrait {
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="20" fill="%230A84FF"/><path d="M50 65 Q50 95 20 95 L80 95 Q50 95 50 65" fill="%230A84FF"/><circle cx="42" cy="38" r="3" fill="white"/><circle cx="58" cy="38" r="3" fill="white"/><path d="M42 48 Q50 55 58 48" stroke="white" fill="none" stroke-width="2"/></svg>');
        }

        .odu-portrait {
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="20" fill="%23FFC567"/><path d="M50 65 Q50 95 20 95 L80 95 Q50 95 50 65" fill="%23FFC567"/><circle cx="42" cy="38" r="3" fill="white"/><circle cx="58" cy="38" r="3" fill="white"/><path d="M42 50 Q50 58 58 50" stroke="white" fill="none" stroke-width="2"/><path d="M38 30 Q50 20 62 30" stroke="%23FFC567" fill="none" stroke-width="4"/></svg>');
        }

        /* Dialog bubbles */
        .dialog-bubble {
            position: relative;
            padding: 12px;
            border-radius: 12px;
            max-width: 80%;
            margin-bottom: 20px;
        }

        .dialog-bubble::after {
            content: '';
            position: absolute;
            bottom: -10px;
            width: 0;
            height: 0;
            border: 10px solid transparent;
        }

        .asha-bubble {
            background-color: rgba(10, 132, 255, 0.2);
            border: 1px solid rgba(10, 132, 255, 0.5);
            margin-left: auto;
        }

        .asha-bubble::after {
            right: 15px;
            border-top-color: rgba(10, 132, 255, 0.5);
            border-bottom: 0;
        }

        .odu-bubble {
            background-color: rgba(255, 197, 103, 0.2);
            border: 1px solid rgba(255, 197, 103, 0.5);
            margin-right: auto;
        }

        .odu-bubble::after {
            left: 15px;
            border-top-color: rgba(255, 197, 103, 0.5);
            border-bottom: 0;
        }
    </style>
</head>
<body class="bg-primary-light dark:bg-terminal-black text-gray-900 dark:text-gray-100 min-h-screen font-satoshi">
    <div class="parallax-bg dark:parallax-bg-dark"></div>
    <div id="app" class="grid-lines"></div>

    <script type="text/babel">
        // Context for tracking user progress and game state
        const GameContext = React.createContext();

        const GameProvider = ({ children }) => {
            const [state, setState] = React.useState({
                activeCharacter: 'asha', // 'asha' or 'odu'
                currentMission: 1,
                progress: {
                    asha: {
                        1: { completed: false, progress: 0 },
                        2: { completed: false, progress: 0 },
                        3: { completed: false, progress: 0 },
                        4: { completed: false, progress: 0 },
                        5: { completed: false, progress: 0 },
                        6: { completed: false, progress: 0 },
                        7: { completed: false, progress: 0 },
                    },
                    odu: {
                        1: { completed: false, progress: 0 },
                        2: { completed: false, progress: 0 },
                        3: { completed: false, progress: 0 },
                        4: { completed: false, progress: 0 },
                        5: { completed: false, progress: 0 },
                        6: { completed: false, progress: 0 },
                        7: { completed: false, progress: 0 },
                    }
                },
                badges: [],
                mode: 'menu', // 'menu', 'mission', 'simulation', 'dialog'
                simulationData: null,
                dialogData: null,
                showTutorial: true,
                characterStats: {
                    asha: {
                        techSkill: 85,
                        community: 40,
                        resilience: 65,
                        influence: 50,
                        experience: 0
                    },
                    odu: {
                        techSkill: 30,
                        community: 90,
                        resilience: 80,
                        influence: 75,
                        experience: 0
                    }
                }
            });

            // Character switching
            const switchCharacter = () => {
                setState(prev => ({
                    ...prev,
                    activeCharacter: prev.activeCharacter === 'asha' ? 'odu' : 'asha'
                }));
            };

            // Progress tracking
            const updateProgress = (missionId, progressValue) => {
                setState(prev => ({
                    ...prev,
                    progress: {
                        ...prev.progress,
                        [prev.activeCharacter]: {
                            ...prev.progress[prev.activeCharacter],
                            [missionId]: {
                                ...prev.progress[prev.activeCharacter][missionId],
                                progress: progressValue
                            }
                        }
                    }
                }));
            };

            const completeMission = (missionId) => {
                // Add experience to current character
                const expGain = 100;
                
                setState(prev => ({
                    ...prev,
                    progress: {
                        ...prev.progress,
                        [prev.activeCharacter]: {
                            ...prev.progress[prev.activeCharacter],
                            [missionId]: {
                                ...prev.progress[prev.activeCharacter][missionId],
                                completed: true,
                                progress: 100
                            }
                        }
                    },
                    characterStats: {
                        ...prev.characterStats,
                        [prev.activeCharacter]: {
                            ...prev.characterStats[prev.activeCharacter],
                            experience: prev.characterStats[prev.activeCharacter].experience + expGain
                        }
                    }
                }));
            };

            const startMission = (missionId) => {
                setState(prev => ({
                    ...prev,
                    currentMission: missionId,
                    mode: 'mission'
                }));
            };

            const startSimulation = (missionId, simulationData) => {
                setState(prev => ({
                    ...prev,
                    mode: 'simulation',
                    simulationData
                }));
            };

            const startDialog = (dialogData) => {
                setState(prev => ({
                    ...prev,
                    mode: 'dialog',
                    dialogData
                }));
            };

            const returnToMenu = () => {
                setState(prev => ({
                    ...prev,
                    mode: 'menu'
                }));
            };

            const returnToMission = () => {
                setState(prev => ({
                    ...prev,
                    mode: 'mission',
                    simulationData: null,
                    dialogData: null
                }));
            };

            const addBadge = (badge) => {
                setState(prev => ({
                    ...prev,
                    badges: [...prev.badges, badge]
                }));
            };

            const closeTutorial = () => {
                setState(prev => ({
                    ...prev,
                    showTutorial: false
                }));
            };

            // Improve character stats
            const improveStats = (character, statName, amount) => {
                setState(prev => ({
                    ...prev,
                    characterStats: {
                        ...prev.characterStats,
                        [character]: {
                            ...prev.characterStats[character],
                            [statName]: Math.min(100, prev.characterStats[character][statName] + amount)
                        }
                    }
                }));
            };

            return (
                <GameContext.Provider 
                    value={{ 
                        state, 
                        updateProgress, 
                        completeMission, 
                        startMission,
                        startSimulation,
                        startDialog,
                        returnToMenu,
                        returnToMission,
                        addBadge,
                        switchCharacter,
                        closeTutorial,
                        improveStats
                    }}
                >
                    {children}
                </GameContext.Provider>
            );
        };

        // Custom hook to access the game context
        const useGame = () => React.useContext(GameContext);

        // Tutorial Overlay
        const Tutorial = () => {
            const { state, closeTutorial } = useGame();
            
            if (!state.showTutorial) return null;
            
            return (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
                    <div className="resistance-panel max-w-2xl w-full p-6 rounded-lg animate-slide-in">
                        <h2 className="font-satoshi font-bold text-2xl mb-4 text-primary-orange">Welcome to the Resistance!</h2>
                        
                        <p className="mb-4">In this journey, you'll experience financial freedom through the eyes of two characters:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="asha-panel p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <div className="character-portrait asha-portrait mr-3 asha-glow"></div>
                                    <h3 className="text-xl font-bold text-resistance-blue">Asha</h3>
                                </div>
                                <p className="text-sm">A tech-savvy activist using Bitcoin and digital tools to fight financial oppression. She believes in technology as the path to freedom.</p>
                            </div>
                            
                            <div className="odu-panel p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <div className="character-portrait odu-portrait mr-3 odu-glow"></div>
                                    <h3 className="text-xl font-bold text-primary-gold">Odu</h3>
                                </div>
                                <p className="text-sm">A wise village elder leveraging traditional systems like Hawala and community savings. He believes in grassroots organizing and collective action.</p>
                            </div>
                        </div>
                        
                        <p className="mb-4">You can switch between characters at any time, experiencing different approaches to the same challenges. Each character has unique strengths and weaknesses.</p>
                        
                        <p className="mb-6">Complete missions to earn experience and badges, unlocking new abilities for both characters. Your choices will affect how the resistance unfolds!</p>
                        
                        <div className="flex justify-end">
                            <button 
                                className="resistance-button bg-primary-orange hover:bg-primary-orange/80 border-primary-orange/60 text-white px-6 py-2 rounded-md font-satoshi font-bold transition-all"
                                onClick={closeTutorial}
                            >
                                BEGIN YOUR JOURNEY
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        // Character Stats Component
        const CharacterStats = ({ character, stats }) => {
            return (
                <div className="mb-4">
                    <h3 className="text-sm font-bold mb-2">CHARACTER STATS</h3>
                    <div className="space-y-2">
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>Tech Skill</span>
                                <span>{stats.techSkill}</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${character === 'asha' ? 'bg-resistance-blue' : 'bg-primary-gold'}`}
                                    style={{ width: `${stats.techSkill}%` }}
                                ></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>Community</span>
                                <span>{stats.community}</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${character === 'asha' ? 'bg-resistance-blue' : 'bg-primary-gold'}`}
                                    style={{ width: `${stats.community}%` }}
                                ></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>Resilience</span>
                                <span>{stats.resilience}</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${character === 'asha' ? 'bg-resistance-blue' : 'bg-primary-gold'}`}
                                    style={{ width: `${stats.resilience}%` }}
                                ></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>Influence</span>
                                <span>{stats.influence}</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${character === 'asha' ? 'bg-resistance-blue' : 'bg-primary-gold'}`}
                                    style={{ width: `${stats.influence}%` }}
                                ></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>Experience</span>
                                <span>{stats.experience}</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-resistance-green"
                                    style={{ width: `${Math.min(100, stats.experience / 10)}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        // Navigation Header
        const Header = () => {
            const { state, returnToMenu, switchCharacter } = useGame();
            
            return (
                <header className="resistance-panel p-4 flex justify-between items-center">
                    <h1 
                        className="text-primary-orange font-satoshi font-black text-xl md:text-2xl cursor-pointer"
                        onClick={returnToMenu}
                    >
                        Asha <span className="text-resistance-blue">&</span> Odu's <span className="text-primary-gold">Resistance Saga</span>
                    </h1>
                    
                    <div className="flex items-center gap-3">
                        {/* Character Switcher */}
                        <div 
                            className={`character-portrait cursor-pointer transition-all transform hover:scale-110 ${state.activeCharacter === 'asha' ? 'asha-portrait asha-glow' : 'odu-portrait odu-glow'}`}
                            onClick={switchCharacter}
                            title={`Switch to ${state.activeCharacter === 'asha' ? 'Odu' : 'Asha'}`}
                        ></div>
                        
                        {/* Badges */}
                        {state.badges.length > 0 && (
                            <div className="flex items-center gap-1">
                                <span className="hidden md:inline text-sm">Badges:</span>
                                {state.badges.map((badge, index) => (
                                    <div 
                                        key={index} 
                                        className="w-6 h-6 rounded-full bg-primary-orange flex items-center justify-center"
                                        title={badge.name}
                                    >
                                        <span className="text-xs">{badge.icon}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </header>
            );
        };

        // Mission Button Component
        const MissionButton = ({ mission, index }) => {
            const { state, startMission } = useGame();
            const progress = state.progress[state.activeCharacter][index]?.progress || 0;
            const completed = state.progress[state.activeCharacter][index]?.completed || false;
            const characterColor = state.activeCharacter === 'asha' ? 'resistance-blue' : 'primary-gold';
            const panelClass = state.activeCharacter === 'asha' ? 'asha-panel' : 'odu-panel';
            const glowClass = state.activeCharacter === 'asha' ? 'asha-glow' : 'odu-glow';

            return (
                <div className={`${panelClass} w-full rounded-md overflow-hidden mb-6 hover:${glowClass} transition-all duration-300`}>
                    <div className={`h-1 ${completed ? 'bg-resistance-green' : `bg-${characterColor}`}`} style={{ width: `${progress}%` }}></div>
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="font-satoshi font-bold text-lg text-primary-orange">
                                <span className={`text-${characterColor}`}>{index}</span> {mission.title}
                            </h2>
                            {completed && (
                                <span className="text-resistance-green text-sm font-bold">COMPLETED</span>
                            )}
                        </div>
                        <p className="text-sm mb-4">{mission.description[state.activeCharacter]}</p>
                        <button 
                            className={`resistance-button bg-${characterColor} hover:bg-${characterColor}/80 border-${characterColor}/60 text-white px-4 py-2 rounded-md font-satoshi font-bold transition-all`}
                            onClick={() => startMission(index)}
                        >
                            {completed ? 'REPLAY' : 'START'}
                        </button>
                    </div>
                </div>
            );
        };

        // Character Profile Card
        const CharacterProfile = () => {
            const { state } = useGame();
            const character = state.activeCharacter;
            const stats = state.characterStats[character];
            
            return (
                <div className={`${character === 'asha' ? 'asha-panel' : 'odu-panel'} p-4 rounded-lg`}>
                    <div className="flex items-center mb-3">
                        <div className={`character-portrait ${character === 'asha' ? 'asha-portrait asha-glow' : 'odu-portrait odu-glow'} mr-3`}></div>
                        <div>
                            <h3 className={`text-xl font-bold ${character === 'asha' ? 'text-resistance-blue' : 'text-primary-gold'}`}>
                                {character === 'asha' ? 'Asha' : 'Odu'}
                            </h3>
                            <p className="text-xs opacity-80">
                                {character === 'asha' 
                                    ? 'Tech Activist, 27' 
                                    : 'Village Elder, 62'}
                            </p>
                        </div>
                    </div>
                    
                    <CharacterStats character={character} stats={stats} />
                    
                    <div className="text-sm">
                        <h4 className="font-bold mb-1">APPROACH:</h4>
                        <p className="mb-2">
                            {character === 'asha' 
                                ? 'Uses technology and Bitcoin to work around centralized financial systems.' 
                                : 'Builds community savings networks and traditional value exchange systems.'}
                        </p>
                        <h4 className="font-bold mb-1">STRENGTHS:</h4>
                        <p>
                            {character === 'asha' 
                                ? 'Digital literacy, programming, cryptography' 
                                : 'Community organizing, trust networks, historical knowledge'}
                        </p>
                    </div>
                </div>
            );
        };

        // Main Menu
        const MainMenu = () => {
            const { state } = useGame();
            
            // Different mission descriptions based on the active character
            const missions = [
                {
                    title: "Who Controls the Money?",
                    description: {
                        asha: "Investigate central banks' digital infrastructure and track financial control mechanisms.",
                        odu: "Explore how village elders lost control of local currencies during colonial occupation."
                    }
                },
                {
                    title: "The Silent Tax -- Inflation",
                    description: {
                        asha: "Analyze Bitcoin as protection against currency debasement and financial surveillance.",
                        odu: "Document how inflation destroys generational wealth and community savings systems."
                    }
                },
                {
                    title: "Surveillance & Censorship",
                    description: {
                        asha: "Build privacy-enhancing tools to circumvent financial monitoring systems.",
                        odu: "Develop communication networks that bypass censored financial channels."
                    }
                },
                {
                    title: "Financial Exclusion in Africa",
                    description: {
                        asha: "Create a mobile Bitcoin app for unbanked communities to access financial services.",
                        odu: "Organize a community savings collective for those excluded from traditional banking."
                    }
                },
                {
                    title: "Knowledge Test -- Fiat vs Freedom",
                    description: {
                        asha: "Demonstrate how cryptographic systems resist censorship and confiscation.",
                        odu: "Share traditional wealth preservation techniques that survived colonial rule."
                    }
                },
                {
                    title: "The Rise of the Dollar",
                    description: {
                        asha: "Map the surveillance capabilities of the global SWIFT payment system.",
                        odu: "Document how dollar dependency created economic vassalage in African nations."
                    }
                },
                {
                    title: "Whisper Networks",
                    description: {
                        asha: "Develop mesh network communications for Bitcoin transactions under censorship.",
                        odu: "Establish a Hawala-inspired value transfer system between isolated communities."
                    }
                }
            ];

            return (
                <div className="max-w-5xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="md:col-span-2">
                            <div className="resistance-panel p-4 rounded-lg mb-6 animate-pulse-border">
                                <h2 className="font-satoshi font-bold text-2xl mb-4 text-primary-gold">RESISTANCE BRIEFING</h2>
                                <p className="mb-4">Central banks and financial institutions hold immense power over everyday lives. As <span className={state.activeCharacter === 'asha' ? 'text-resistance-blue font-bold' : 'text-primary-gold font-bold'}>
                                    {state.activeCharacter === 'asha' ? 'Asha' : 'Odu'}
                                </span>, you'll challenge this control through different but complementary approaches.</p>
                                <p className="text-sm text-primary-orange font-bold">🎯 GOAL: Build financial sovereignty for your community</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {missions.slice(0, 4).map((mission, index) => (
                                    <MissionButton 
                                        key={index} 
                                        mission={mission} 
                                        index={index + 1}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-6">
                            <CharacterProfile />
                            
                            <div className="resistance-panel p-4 rounded-lg">
                                <h3 className="text-primary-orange font-bold mb-3">PROGRESS TRACKER</h3>
                                <div className="space-y-2">
                                    {Object.keys(state.progress[state.activeCharacter]).map(missionId => (
                                        <div key={missionId} className="text-sm">
                                            <div className="flex justify-between mb-1">
                                                <span>Mission {missionId}</span>
                                                <span>{state.progress[state.activeCharacter][missionId].progress}%</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full ${state.progress[state.activeCharacter][missionId].completed ? 'bg-resistance-green' : state.activeCharacter === 'asha' ? 'bg-resistance-blue' : 'bg-primary-gold'}`}
                                                    style={{ width: `${state.progress[state.activeCharacter][missionId].progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h2 className="font-satoshi font-bold text-xl mb-4 text-primary-orange">ADVANCED MISSIONS</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {missions.slice(4).map((mission, index) => (
                            <MissionButton 
                                key={index + 4} 
                                mission={mission} 
                                index={index + 5}
                            />
                        ))}
                    </div>
                </div>
            );
        };

        // Central Banker Simulator (for Mission 1)
        const CentralBankerSimulator = () => {
            const { state, returnToMission, improveStats } = useGame();
            const [inflation, setInflation] = React.useState(2);
            const [unemployment, setUnemployment] = React.useState(5);
            const [wealth, setWealth] = React.useState(100);
            const [inequality, setInequality] = React.useState(40);
            const [year, setYear] = React.useState(1);
            const [decisions, setDecisions] = React.useState([]);
            const [insights, setInsights] = React.useState([]);
            const [scenario, setScenario] = React.useState({
                title: "Economic Downturn",
                description: "The economy is slowing down. Unemployment is rising and growth is stagnating. What will you do?",
                options: [
                    { 
                        label: "Print Money ($1 Trillion)", 
                        effect: "Increase money supply to stimulate spending",
                        action: () => {
                            setInflation(prev => prev + 3);
                            setUnemployment(prev => Math.max(1, prev - 1.5));
                            setWealth(prev => prev + 10);
                            setInequality(prev => prev + 5);
                            addDecision("Printed $1 Trillion");
                            addInsight("The rich capture most new money, increasing inequality.");
                            advanceYear();
                        }
                    },
                    { 
                        label: "Raise Interest Rates", 
                        effect: "Tighten monetary policy to control inflation",
                        action: () => {
                            setInflation(prev => Math.max(0, prev - 2));
                            setUnemployment(prev => prev + 2);
                            setWealth(prev => Math.max(80, prev - 5));
                            setInequality(prev => Math.max(30, prev - 3));
                            addDecision("Raised Interest Rates");
                            addInsight("Higher rates hurt workers more than the wealthy.");
                            advanceYear();
                        }
                    }
                ]
            });

            const chartRef = React.useRef(null);
            const [chart, setChart] = React.useState(null);

            React.useEffect(() => {
                if (!chartRef.current) return;
                
                // Initialize chart
                const ctx = chartRef.current.getContext('2d');
                const newChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Year 1'],
                        datasets: [
                            {
                                label: 'Inflation (%)',
                                data: [inflation],
                                borderColor: '#FF3B30',
                                backgroundColor: 'rgba(255, 59, 48, 0.1)',
                                tension: 0.3,
                            },
                            {
                                label: 'Unemployment (%)',
                                data: [unemployment],
                                borderColor: '#0A84FF',
                                backgroundColor: 'rgba(10, 132, 255, 0.1)',
                                tension: 0.3,
                            },
                            {
                                label: 'Wealth Index',
                                data: [wealth],
                                borderColor: '#FFC567',
                                backgroundColor: 'rgba(255, 197, 103, 0.1)',
                                tension: 0.3,
                            },
                            {
                                label: 'Inequality Index',
                                data: [inequality],
                                borderColor: '#EE720B',
                                backgroundColor: 'rgba(238, 114, 11, 0.1)',
                                tension: 0.3,
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: {
                                    color: 'rgba(238, 114, 11, 0.1)'
                                }
                            },
                            x: {
                                grid: {
                                    color: 'rgba(238, 114, 11, 0.1)'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                position: 'top',
                            }
                        }
                    }
                });
                
                setChart(newChart);
                
                return () => {
                    newChart.destroy();
                };
            }, []);

            // Update chart when data changes
            React.useEffect(() => {
                if (!chart) return;
                
                const yearLabel = `Year ${year}`;
                // Check if the label already exists
                if (!chart.data.labels.includes(yearLabel)) {
                    chart.data.labels.push(yearLabel);
                    chart.data.datasets[0].data.push(inflation);
                    chart.data.datasets[1].data.push(unemployment);
                    chart.data.datasets[2].data.push(wealth);
                    chart.data.datasets[3].data.push(inequality);
                } else {
                    // Update the last data point
                    const index = chart.data.labels.indexOf(yearLabel);
                    chart.data.datasets[0].data[index] = inflation;
                    chart.data.datasets[1].data[index] = unemployment;
                    chart.data.datasets[2].data[index] = wealth;
                    chart.data.datasets[3].data[index] = inequality;
                }
                
                chart.update();
            }, [inflation, unemployment, wealth, inequality, year, chart]);

            const addDecision = (decision) => {
                setDecisions(prev => [...prev, { year, decision }]);
            };

            const addInsight = (insight) => {
                setInsights(prev => [...prev, { year, insight }]);
            };

            const completeSimulation = () => {
                // Improve character stats based on insights gained
                improveStats(state.activeCharacter, 'techSkill', 5);
                improveStats(state.activeCharacter, 'resilience', 3);
                
                returnToMission();
            };

            const advanceYear = () => {
                setYear(prev => prev + 1);
                
                // Generate new scenario based on current economic state
                if (inflation > 8) {
                    setScenario({
                        title: "Inflation Crisis",
                        description: "Inflation is spiraling out of control! Citizens are seeing their savings erode rapidly.",
                        options: [
                            { 
                                label: "Drastically Raise Interest Rates", 
                                effect: "Attempt to reduce inflation but risk recession",
                                action: () => {
                                    setInflation(prev => Math.max(2, prev - 4));
                                    setUnemployment(prev => prev + 4);
                                    setWealth(prev => Math.max(70, prev - 15));
                                    setInequality(prev => Math.max(30, prev - 5));
                                    addDecision("Drastically Raised Interest Rates");
                                    addInsight("Central banks prioritize currency stability over employment.");
                                    advanceYear();
                                }
                            },
                            { 
                                label: "Moderate Policy Response", 
                                effect: "Balance inflation control with economic support",
                                action: () => {
                                    setInflation(prev => Math.max(4, prev - 2));
                                    setUnemployment(prev => prev + 2);
                                    setWealth(prev => Math.max(85, prev - 7));
                                    setInequality(prev => prev);
                                    addDecision("Moderate Policy Response");
                                    addInsight("Monetary policy always creates winners and losers.");
                                    advanceYear();
                                }
                            }
                        ]
                    });
                } else if (unemployment > 10) {
                    setScenario({
                        title: "Unemployment Crisis",
                        description: "Millions are out of work and social unrest is growing. The central bank is under pressure to act.",
                        options: [
                            { 
                                label: "Massive Stimulus Package", 
                                effect: "Create jobs but risk inflation",
                                action: () => {
                                    setInflation(prev => prev + 5);
                                    setUnemployment(prev => Math.max(3, prev - 3));
                                    setWealth(prev => prev + 12);
                                    setInequality(prev => prev + 7);
                                    addDecision("Launched Massive Stimulus");
                                    addInsight("New money flows to those already connected to financial power.");
                                    advanceYear();
                                }
                            },
                            { 
                                label: "Targeted Relief Programs", 
                                effect: "Limited economic support with less inflationary risk",
                                action: () => {
                                    setInflation(prev => prev + 2);
                                    setUnemployment(prev => Math.max(5, prev - 1.5));
                                    setWealth(prev => prev + 5);
                                    setInequality(prev => prev + 2);
                                    addDecision("Created Targeted Relief Programs");
                                    addInsight("Even targeted programs benefit the financial sector first.");
                                    advanceYear();
                                }
                            }
                        ]
                    });
                } else if (inequality > 60) {
                    setScenario({
                        title: "Wealth Gap Crisis",
                        description: "The wealth gap has reached historic levels. Political pressure is mounting to address inequality.",
                        options: [
                            { 
                                label: "Maintain Status Quo", 
                                effect: "Continue current policies favoring economic growth",
                                action: () => {
                                    setInflation(prev => prev);
                                    setUnemployment(prev => prev);
                                    setWealth(prev => prev + 8);
                                    setInequality(prev => Math.min(95, prev + 10));
                                    addDecision("Maintained Status Quo");
                                    addInsight("Central banks serve financial interests, not social equity.");
                                    advanceYear();
                                }
                            },
                            { 
                                label: "Wealth Redistribution Policies", 
                                effect: "Support policies to reduce inequality",
                                action: () => {
                                    setInflation(prev => prev + 1);
                                    setUnemployment(prev => prev + 1);
                                    setWealth(prev => Math.max(90, prev - 5));
                                    setInequality(prev => Math.max(40, prev - 15));
                                    addDecision("Supported Wealth Redistribution");
                                    addInsight("Monetary policy alone cannot solve structural inequality.");
                                    advanceYear();
                                }
                            }
                        ]
                    });
                } else {
                    // Default scenario
                    setScenario({
                        title: "Economic Management",
                        description: "The economy is relatively stable. How do you want to adjust monetary policy?",
                        options: [
                            { 
                                label: "Expansionary Policy", 
                                effect: "Lower rates and increase money supply",
                                action: () => {
                                    setInflation(prev => prev + 2);
                                    setUnemployment(prev => Math.max(2, prev - 1));
                                    setWealth(prev => prev + 7);
                                    setInequality(prev => prev + 4);
                                    addDecision("Implemented Expansionary Policy");
                                    addInsight("Low interest rates boost asset prices, benefiting the wealthy.");
                                    advanceYear();
                                }
                            },
                            { 
                                label: "Contractionary Policy", 
                                effect: "Raise rates and decrease money supply",
                                action: () => {
                                    setInflation(prev => Math.max(1, prev - 1.5));
                                    setUnemployment(prev => prev + 1.5);
                                    setWealth(prev => Math.max(85, prev - 3));
                                    setInequality(prev => Math.max(30, prev - 2));
                                    addDecision("Implemented Contractionary Policy");
                                    addInsight("Tight monetary policy increases unemployment among lower classes.");
                                    advanceYear();
                                }
                            }
                        ]
                    });
                }
                
                // End scenario after 5 years to keep the simulation shorter
                if (year >= 5) {
                    setScenario({
                        title: "End of Term",
                        description: "You have completed your term as head of the central bank. Let's review what you've learned about financial control.",
                        options: []
                    });
                }
            };

            // Determine status messages based on economic indicators
            const getInflationStatus = () => {
                if (inflation < 2) return { message: "Deflation Risk", color: "text-resistance-blue" };
                if (inflation <= 3) return { message: "Stable Prices", color: "text-resistance-green" };
                if (inflation <= 6) return { message: "Moderate Inflation", color: "text-primary-gold" };
                if (inflation <= 10) return { message: "High Inflation", color: "text-resistance-red" };
                return { message: "Hyperinflation", color: "text-resistance-red font-bold" };
            };

            const getUnemploymentStatus = () => {
                if (unemployment < 3) return { message: "Full Employment", color: "text-resistance-green" };
                if (unemployment <= 6) return { message: "Low Unemployment", color: "text-resistance-green" };
                if (unemployment <= 10) return { message: "Moderate Unemployment", color: "text-primary-gold" };
                return { message: "High Unemployment", color: "text-resistance-red font-bold" };
            };

            const getInequalityStatus = () => {
                if (inequality < 35) return { message: "Low Inequality", color: "text-resistance-green" };
                if (inequality <= 50) return { message: "Moderate Inequality", color: "text-primary-gold" };
                if (inequality <= 70) return { message: "High Inequality", color: "text-resistance-red" };
                return { message: "Extreme Inequality", color: "text-resistance-red font-bold" };
            };

            const inflationStatus = getInflationStatus();
            const unemploymentStatus = getUnemploymentStatus();
            const inequalityStatus = getInequalityStatus();

            return (
                <div className="max-w-4xl mx-auto p-4">
                    <div className="mb-4 flex justify-between items-center">
                        <h2 className="font-satoshi font-bold text-xl text-primary-orange">Central Banker Simulator</h2>
                        <div className="flex items-center">
                            <div className={`character-portrait ${state.activeCharacter === 'asha' ? 'asha-portrait' : 'odu-portrait'} mr-3 animate-float`}></div>
                            <button
                                className="resistance-button bg-resistance-red hover:bg-resistance-red/80 border-resistance-red/60 text-white px-3 py-1 rounded-md font-satoshi text-sm"
                                onClick={returnToMission}
                            >
                                EXIT SIMULATION
                            </button>
                        </div>
                    </div>
                    
                    {/* Dashboard */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="resistance-panel p-3 rounded-lg">
                            <h3 className="text-resistance-red text-sm font-bold mb-2">INFLATION</h3>
                            <div className="flex justify-between">
                                <span className="text-2xl font-bold">{inflation.toFixed(1)}%</span>
                                <span className={`text-sm ${inflationStatus.color}`}>{inflationStatus.message}</span>
                            </div>
                            {state.activeCharacter === 'asha' && (
                                <div className="mt-2 text-xs text-resistance-blue">Bitcoin is designed to resist inflation through fixed supply.</div>
                            )}
                            {state.activeCharacter === 'odu' && (
                                <div className="mt-2 text-xs text-primary-gold">Community savings circles protect against currency debasement.</div>
                            )}
                        </div>
                        <div className="resistance-panel p-3 rounded-lg">
                            <h3 className="text-resistance-blue text-sm font-bold mb-2">UNEMPLOYMENT</h3>
                            <div className="flex justify-between">
                                <span className="text-2xl font-bold">{unemployment.toFixed(1)}%</span>
                                <span className={`text-sm ${unemploymentStatus.color}`}>{unemploymentStatus.message}</span>
                            </div>
                            {state.activeCharacter === 'asha' && (
                                <div className="mt-2 text-xs text-resistance-blue">Digital currencies create new economic opportunities.</div>
                            )}
                            {state.activeCharacter === 'odu' && (
                                <div className="mt-2 text-xs text-primary-gold">Local economic networks provide job resilience.</div>
                            )}
                        </div>
                        <div className="resistance-panel p-3 rounded-lg">
                            <h3 className="text-primary-orange text-sm font-bold mb-2">INEQUALITY INDEX</h3>
                            <div className="flex justify-between">
                                <span className="text-2xl font-bold">{inequality.toFixed(1)}</span>
                                <span className={`text-sm ${inequalityStatus.color}`}>{inequalityStatus.message}</span>
                            </div>
                            {state.activeCharacter === 'asha' && (
                                <div className="mt-2 text-xs text-resistance-blue">Open financial systems can democratize opportunity.</div>
                            )}
                            {state.activeCharacter === 'odu' && (
                                <div className="mt-2 text-xs text-primary-gold">Community wealth distribution systems promote equality.</div>
                            )}
                        </div>
                    </div>
                    
                    {/* Chart */}
                    <div className="resistance-panel p-4 rounded-lg mb-6">
                        <h3 className="text-primary-gold text-sm font-bold mb-2">ECONOMIC TRENDS - YEAR {year}</h3>
                        <div className="chart-container">
                            <canvas ref={chartRef}></canvas>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Scenario and Actions */}
                        <div className="resistance-panel p-4 rounded-lg animate-pulse-border">
                            <h3 className="text-primary-gold text-lg font-bold mb-2">{scenario.title}</h3>
                            <p className="mb-4">{scenario.description}</p>
                            
                            <div className="space-y-3">
                                {scenario.options.map((option, index) => (
                                    <button
                                        key={index}
                                        className="resistance-button w-full bg-primary-orange hover:bg-primary-orange/80 border-primary-orange/60 text-white px-4 py-3 rounded-md font-satoshi transition-all text-left"
                                        onClick={option.action}
                                    >
                                        <span className="block font-bold mb-1">{option.label}</span>
                                        <span className="text-xs block opacity-80">{option.effect}</span>
                                    </button>
                                ))}
                            </div>
                            
                            {/* End game state */}
                            {year > 5 && (
                                <div className="mt-6">
                                    <h3 className="text-primary-gold text-lg font-bold mb-2">Your Insights</h3>
                                    <p className="mb-4">After your time as central bank governor, you've gained valuable understanding of how financial control works:</p>
                                    
                                    <ul className="list-disc pl-6 mt-4 space-y-2">
                                        <li>Final Inflation Rate: <span className={inflationStatus.color}>{inflation.toFixed(1)}% ({inflationStatus.message})</span></li>
                                        <li>Final Unemployment Rate: <span className={unemploymentStatus.color}>{unemployment.toFixed(1)}% ({unemploymentStatus.message})</span></li>
                                        <li>Wealth Inequality: <span className={inequalityStatus.color}>{inequality.toFixed(1)} ({inequalityStatus.message})</span></li>
                                    </ul>
                                    
                                    <div className={`p-4 mt-6 rounded-lg ${state.activeCharacter === 'asha' ? 'bg-resistance-blue/20' : 'bg-primary-gold/20'}`}>
                                        <p className="font-bold mb-2">Key Insight:</p>
                                        <p>{state.activeCharacter === 'asha' 
                                            ? "Central banks create and distribute money in ways that reinforce existing power structures. This is why we need decentralized alternatives."
                                            : "Those who control money creation have immense influence over our communities. We must build resilient local systems to protect ourselves."
                                        }</p>
                                    </div>
                                    
                                    <div className="mt-6">
                                        <button
                                            className={`resistance-button ${state.activeCharacter === 'asha' ? 'bg-resistance-blue' : 'bg-primary-gold'} hover:${state.activeCharacter === 'asha' ? 'bg-resistance-blue/80' : 'bg-primary-gold/80'} border-${state.activeCharacter === 'asha' ? 'resistance-blue/60' : 'primary-gold/60'} text-white px-4 py-2 rounded-md font-satoshi font-bold transition-all`}
                                            onClick={completeSimulation}
                                        >
                                            COMPLETE SIMULATION
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <div className="space-y-6">
                            {/* Decision History */}
                            {decisions.length > 0 && (
                                <div className="resistance-panel p-4 rounded-lg">
                                    <h3 className="text-primary-orange text-sm font-bold mb-2">POLICY DECISIONS</h3>
                                    <div className="max-h-40 overflow-y-auto">
                                        {decisions.map((decision, index) => (
                                            <div key={index} className="border-b border-primary-orange/30 py-2 last:border-0">
                                                <span className="text-resistance-blue mr-2 font-bold">Year {decision.year}:</span>
                                                <span>{decision.decision}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {/* Resistance Insights */}
                            {insights.length > 0 && (
                                <div className={`p-4 rounded-lg ${state.activeCharacter === 'asha' ? 'asha-panel' : 'odu-panel'}`}>
                                    <h3 className={`text-sm font-bold mb-2 ${state.activeCharacter === 'asha' ? 'text-resistance-blue' : 'text-primary-gold'}`}>
                                        RESISTANCE INSIGHTS
                                    </h3>
                                    <div className="max-h-60 overflow-y-auto space-y-3">
                                        {insights.map((item, index) => (
                                            <div key={index} className={`p-3 rounded ${state.activeCharacter === 'asha' ? 'bg-resistance-blue/20' : 'bg-primary-gold/20'}`}>
                                                <div className="text-xs opacity-70 mb-1">Year {item.year}</div>
                                                <div>{item.insight}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        };

        // Character Dialog Component
        const CharacterDialog = () => {
            const { state, returnToMission } = useGame();
            const [currentDialogIndex, setCurrentDialogIndex] = React.useState(0);
            
            // Sample dialog for mission 1
            const dialogScenes = [
                {
                    asha: "I've been analyzing central bank operations. They control the money supply through interest rates and 'quantitative easing' - essentially printing money digitally.",
                    odu: "In our villages, we once had our own currencies - cowrie shells, special cloths, metals. The colonizers replaced these with their paper money to control our trade."
                },
                {
                    asha: "This centralized control creates huge problems. When they print more money, it flows to banks and wealthy investors first - the Cantillon Effect.",
                    odu: "Yes, and this new money rarely reaches ordinary people. The colonial central banks were designed to extract our resources, not develop our communities."
                },
                {
                    asha: "That's why I believe in Bitcoin's fixed supply. No central authority can devalue your savings by printing more.",
                    odu: "Bitcoin is interesting, but remember - technology alone isn't enough. We need to rebuild community monetary systems too, like our ancestors had."
                },
                {
                    asha: "You have a point. Digital tools work best when they serve real human communities.",
                    odu: "And traditional systems gain resilience when enhanced by appropriate technology. Perhaps our approaches are complementary?"
                }
            ];

            const goToNextDialog = () => {
                if (currentDialogIndex < dialogScenes.length - 1) {
                    setCurrentDialogIndex(prevIndex => prevIndex + 1);
                } else {
                    returnToMission();
                }
            };

            return (
                <div className="max-w-4xl mx-auto p-4">
                    <div className="mb-4 flex justify-between items-center">
                        <h2 className="font-satoshi font-bold text-xl text-primary-orange">Character Dialog</h2>
                        <button
                            className="resistance-button bg-gray-700 hover:bg-gray-600 border-gray-600 text-white px-3 py-1 rounded-md font-satoshi text-sm"
                            onClick={returnToMission}
                        >
                            SKIP DIALOG
                        </button>
                    </div>
                    
                    <div className="resistance-panel p-4 rounded-lg mb-6 min-h-[400px] flex flex-col">
                        <div className="flex-grow">
                            {/* Odu's dialog */}
                            <div className="flex items-start mb-6">
                                <div className="character-portrait odu-portrait mr-3 odu-glow"></div>
                                <div className="dialog-bubble odu-bubble animate-character-switch">
                                    <h3 className="text-primary-gold font-bold mb-1">Odu</h3>
                                    <p>{dialogScenes[currentDialogIndex].odu}</p>
                                </div>
                            </div>
                            
                            {/* Asha's dialog */}
                            <div className="flex items-start justify-end">
                                <div className="dialog-bubble asha-bubble animate-character-switch">
                                    <h3 className="text-resistance-blue font-bold mb-1">Asha</h3>
                                    <p>{dialogScenes[currentDialogIndex].asha}</p>
                                </div>
                                <div className="character-portrait asha-portrait ml-3 asha-glow"></div>
                            </div>
                        </div>
                        
                        <div className="mt-auto flex justify-end">
                            <button 
                                className="resistance-button bg-primary-orange hover:bg-primary-orange/80 border-primary-orange/60 text-white px-6 py-2 rounded-md font-satoshi font-bold transition-all"
                                onClick={goToNextDialog}
                            >
                                {currentDialogIndex < dialogScenes.length - 1 ? 'CONTINUE' : 'COMPLETE DIALOG'}
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        // Mission 1 content
        const Mission1 = () => {
            const { state, startSimulation, startDialog } = useGame();
            
            return (
                <div className="max-w-4xl mx-auto p-4">
                    <div className="mb-6 resistance-panel p-4 rounded-lg">
                        <h2 className="font-satoshi font-bold text-xl mb-4 text-primary-orange">
                            MISSION 1: <span className={state.activeCharacter === 'asha' ? 'text-resistance-blue' : 'text-primary-gold'}>Who Controls the Money?</span>
                        </h2>
                        
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                            {state.activeCharacter === 'asha' ? (
                                <>
                                    <p>Throughout history, the control of money has been a key lever of power. Today, central banks act as the gatekeepers of monetary policy, determining how much money exists in the economy and who has access to it.</p>
                                    
                                    <h3 className="text-resistance-blue font-bold">Digital Financial Control</h3>
                                    <p>Central banking systems are now primarily digital, using complex algorithms and electronic book entries to expand or contract the money supply. This digital infrastructure is vulnerable to both surveillance and censorship.</p>
                                    
                                    <div className="my-4 p-3 border border-resistance-blue/50 rounded bg-terminal-darkgray">
                                        <h4 className="text-primary-gold font-bold">TECHNICAL INSIGHT</h4>
                                        <p className="text-sm">Most of the world's money supply exists only as digital entries in banking databases, not as physical cash. This makes it easier to monitor, control, and potentially restrict access to funds.</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p>The story of money control in Africa is a story of colonization. Traditional currencies and exchange systems were deliberately replaced to facilitate resource extraction and economic control.</p>
                                    
                                    <h3 className="text-primary-gold font-bold">Colonial Banking Legacy</h3>
                                    <p>Central banks in Africa emerged directly from colonial currency boards that were explicitly designed to benefit the colonizing power's economy rather than serve local populations. This legacy continues to influence monetary systems today.</p>
                                    
                                    <div className="my-4 p-3 border border-primary-gold/50 rounded bg-terminal-darkgray">
                                        <h4 className="text-primary-gold font-bold">ELDER WISDOM</h4>
                                        <p className="text-sm">Our ancestors used diverse forms of money - from cowrie shells to cloth currencies - that were controlled by communities rather than distant powers. These systems promoted local wealth circulation rather than extraction.</p>
                                    </div>
                                </>
                            )}
                            
                            <h3 className={state.activeCharacter === 'asha' ? 'text-resistance-blue font-bold' : 'text-primary-gold font-bold'}>The Money Supply Control System</h3>
                            <p>Central banks control the money supply through several mechanisms:</p>
                            
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Setting interest rates</li>
                                <li>Creating new money ("printing")</li>
                                <li>Purchasing government bonds</li>
                                <li>Setting banking reserve requirements</li>
                            </ul>
                            
                            <p>These seemingly technical decisions have profound impacts on wealth distribution, access to capital, and economic opportunity.</p>
                            
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className={`p-4 rounded-lg ${state.activeCharacter === 'asha' ? 'bg-resistance-blue/20' : 'bg-primary-gold/20'}`}>
                                    <h3 className={`${state.activeCharacter === 'asha' ? 'text-resistance-blue' : 'text-primary-gold'} font-bold mb-3`}>Learning Challenge: Banker Simulation</h3>
                                    <p className="mb-4">Take on the role of a central banker and make monetary policy decisions. Your choices will reveal who truly benefits from central banking powers.</p>
                                    
                                    <button 
                                        className={`resistance-button ${state.activeCharacter === 'asha' ? 'bg-resistance-blue' : 'bg-primary-gold'} hover:${state.activeCharacter === 'asha' ? 'bg-resistance-blue/80' : 'bg-primary-gold/80'} border-${state.activeCharacter === 'asha' ? 'resistance-blue/60' : 'primary-gold/60'} text-white px-6 py-2 rounded-md font-satoshi font-bold transition-all`}
                                        onClick={() => startSimulation(1, { type: 'banker' })}
                                    >
                                        START SIMULATION
                                    </button>
                                </div>
                                
                                <div className="resistance-panel p-4 rounded-lg">
                                    <h3 className="text-primary-orange font-bold mb-3">Character Perspectives</h3>
                                    <p className="mb-4">Listen to Asha and Odu discuss their different approaches to understanding money control and building alternatives.</p>
                                    
                                    <button 
                                        className="resistance-button bg-primary-orange hover:bg-primary-orange/80 border-primary-orange/60 text-white px-6 py-2 rounded-md font-satoshi font-bold transition-all"
                                        onClick={() => startDialog({ mission: 1 })}
                                    >
                                        START DIALOG
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        // Placeholder for other missions
        const MissionPlaceholder = () => {
            const { state, returnToMenu } = useGame();
            
            return (
                <div className="max-w-4xl mx-auto p-4">
                    <div className="mb-6 resistance-panel p-4 rounded-lg">
                        <h2 className="font-satoshi font-bold text-xl mb-4 text-primary-orange">
                            MISSION {state.currentMission}: <span className={state.activeCharacter === 'asha' ? 'text-resistance-blue' : 'text-primary-gold'}>Ready for Development</span>
                        </h2>
                        
                        <div className="flex items-center mb-6">
                            <div className={`character-portrait ${state.activeCharacter === 'asha' ? 'asha-portrait asha-glow' : 'odu-portrait odu-glow'} mr-4 animate-float`}></div>
                            <div className="dialog-bubble odu-bubble">
                                <p>This mission is being prepared for the resistance. Check back soon for more content in our journey toward financial sovereignty!</p>
                            </div>
                        </div>
                        
                        <button 
                            className="resistance-button bg-primary-orange hover:bg-primary-orange/80 border-primary-orange/60 text-white px-4 py-2 rounded-md font-satoshi font-bold transition-all"
                            onClick={returnToMenu}
                        >
                            RETURN TO MISSION SELECT
                        </button>
                    </div>
                </div>
            );
        };

        // Main App Component
        const App = () => {
            const { state } = useGame();
            
            // Determine what to render based on app mode
            const renderContent = () => {
                if (state.mode === 'menu') {
                    return <MainMenu />;
                } else if (state.mode === 'mission') {
                    // Render appropriate mission content
                    switch (state.currentMission) {
                        case 1:
                            return <Mission1 />;
                        default:
                            return <MissionPlaceholder />;
                    }
                } else if (state.mode === 'simulation') {
                    // Render appropriate simulation
                    if (state.simulationData?.type === 'banker') {
                        return <CentralBankerSimulator />;
                    }
                    return <div>Simulation not found</div>;
                } else if (state.mode === 'dialog') {
                    return <CharacterDialog />;
                }
                
                return <div>Content not found</div>;
            };
            
            return (
                <div className="min-h-screen pb-20">
                    <Header />
                    {renderContent()}
                    <Tutorial />
                </div>
            );
        };

        // Render the app
        const rootElement = document.getElementById('app');
        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <GameProvider>
                <App />
            </GameProvider>
        );
    </script>
</body>
</html>