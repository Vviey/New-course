import React, { useState, useEffect, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useMission1Styles } from '../styles/missionStyles';
import { ChartData, Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import SimulationFrame from '../components/SimulationFrame';
import { Printer, TrendingUp, TrendingDown, DollarSign, BriefcaseBusiness, Users, ArrowDownCircle, ArrowUpCircle, AlertCircle, Percent } from 'lucide-react';
import theme from '../styles/theme';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Decision types for the simulator
type Decision = 'print_money' | 'raise_rates' | 'lower_rates' | 'none';

// Impact types for decisions
interface DecisionImpact {
  inflation: number;
  unemployment: number;
  wealthGap: number;
  economicGrowth: number;
  publicDebt: number;
  bankProfits: number;
  explanation: string;
}

// Decision metadata
interface DecisionOption {
  id: Decision;
  title: string;
  description: string;
  icon: React.ReactNode;
  className: string;
}

// Initial economic state values
const initialState = {
  inflation: 4.5,
  unemployment: 6.0,
  wealthGap: 30,
  economicGrowth: 2.2,
  publicDebt: 65,
  bankProfits: 10,
  quarters: 0
};

// Define the impacts of each decision
const decisionImpacts: Record<Decision, DecisionImpact> = {
  print_money: {
    inflation: 2.5,
    unemployment: -1.0,
    wealthGap: 3.0,
    economicGrowth: 1.0,
    publicDebt: 5.0,
    bankProfits: 2.0,
    explanation: "Money printing boosts short-term growth and lowers unemployment, but increases inflation, wealth inequality, and public debt. Asset holders benefit most as their investments rise in value, while those on fixed incomes suffer from rising prices."
  },
  raise_rates: {
    inflation: -1.5,
    unemployment: 1.2,
    wealthGap: -1.0,
    economicGrowth: -0.8,
    publicDebt: 1.5,
    bankProfits: 1.5,
    explanation: "Higher interest rates combat inflation by tightening money supply, but slow economic growth and increase unemployment. This can reduce wealth inequality as asset prices cool, but raises borrowing costs for everyone, including the government."
  },
  lower_rates: {
    inflation: 1.0,
    unemployment: -0.8,
    wealthGap: 2.0,
    economicGrowth: 0.7,
    publicDebt: 2.0,
    bankProfits: 1.0,
    explanation: "Lower interest rates stimulate borrowing and economic activity, reducing unemployment. However, they can fuel inflation, increase wealth inequality as asset prices rise, and encourage more public debt due to cheaper financing."
  },
  none: {
    inflation: 0.2,
    unemployment: 0.1,
    wealthGap: 0.3,
    economicGrowth: -0.1,
    publicDebt: 0.5,
    bankProfits: -0.2,
    explanation: "Taking no action lets the economy follow its current trajectory with minor adjustments. This avoids potentially disruptive policy shifts but may allow existing imbalances to persist or worsen gradually."
  }
};

// Decision options with styling and metadata
const decisionOptions: DecisionOption[] = [
  {
    id: 'print_money',
    title: 'Print More Money',
    description: 'Increase money supply by creating new currency',
    icon: <Printer size={20} />,
    className: 'printMoney'
  },
  {
    id: 'raise_rates',
    title: 'Raise Interest Rates',
    description: 'Increase cost of borrowing to slow inflation',
    icon: <TrendingUp size={20} />,
    className: 'raiseRates'
  },
  {
    id: 'lower_rates',
    title: 'Lower Interest Rates',
    description: 'Decrease cost of borrowing to stimulate economy',
    icon: <TrendingDown size={20} />,
    className: 'lowerRates'
  },
  {
    id: 'none',
    title: 'No Action',
    description: 'Maintain current monetary policy',
    icon: <DollarSign size={20} />,
    className: 'noAction'
  }
];

// Define chart colors
const chartColors = {
  inflation: 'rgba(255, 82, 82, 0.7)',
  unemployment: 'rgba(84, 110, 122, 0.7)',
  wealthGap: 'rgba(255, 171, 0, 0.7)',
  economicGrowth: 'rgba(76, 175, 80, 0.7)',
};

// Create custom styles for the component
const useStyles = createUseStyles({
  simulatorContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  controlsArea: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
    marginBottom: '20px',
  },
  decisionCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    },
  },
  decisionSelected: {
    border: `1px solid ${theme.colors.primary}`,
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
  },
  decisionIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  decisionTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '5px',
    color: theme.colors.textLight,
  },
  decisionDescription: {
    fontSize: '0.85rem',
    color: theme.colors.softContrast,
    marginBottom: '15px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '15px',
    marginBottom: '20px',
  },
  statCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgba(255, 255, 255, 0.03)',
  },
  statTitle: {
    fontSize: '0.85rem',
    color: theme.colors.softContrast,
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  statValue: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: theme.colors.textLight,
    fontFamily: theme.fonts.heading,
  },
  statTrend: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.85rem',
    marginTop: '5px',
  },
  trendUp: {
    color: '#ff5252',
  },
  trendDown: {
    color: '#4caf50',
  },
  trendNeutral: {
    color: theme.colors.softContrast,
  },
  quarterIndicator: {
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    color: theme.colors.primary,
    padding: '8px 15px',
    borderRadius: theme.borderRadius.default,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    fontSize: '0.9rem',
    fontWeight: 500,
  },
  chartContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: theme.borderRadius.default,
    padding: '20px',
    marginBottom: '20px',
    height: '350px',
    border: '1px solid rgba(255, 255, 255, 0.03)',
  },
  outcomeContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: theme.borderRadius.default,
    padding: '20px',
    marginTop: '20px',
    border: '1px solid rgba(255, 255, 255, 0.03)',
  },
  outcomeTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: theme.colors.textLight,
  },
  outcomeText: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: theme.colors.softContrast,
  },
  gainersLosers: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  gainersColumn: {
    flex: 1,
    minWidth: '200px',
  },
  losersColumn: {
    flex: 1,
    minWidth: '200px',
  },
  columnTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: theme.colors.textLight,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  entityList: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    '& ul': {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    '& li': {
      padding: '8px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      color: theme.colors.softContrast,
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      '&:last-child': {
        borderBottom: 'none',
      },
    },
  },
  actionsArea: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  actionButton: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: theme.borderRadius.default,
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.95rem',
    transition: 'background-color 0.3s, transform 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '&:hover': {
      backgroundColor: theme.colors.primaryAccent,
      transform: 'translateY(-2px)',
    },
    '&:disabled': {
      backgroundColor: theme.colors.secondaryAccent,
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: theme.colors.textLight,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '12px 24px',
    borderRadius: theme.borderRadius.default,
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.95rem',
    transition: 'background-color 0.3s, transform 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      transform: 'translateY(-2px)',
    },
  },
  printMoney: {
    '& $decisionIcon': {
      backgroundColor: 'rgba(255, 82, 82, 0.1)',
      color: theme.colors.primary,
    },
  },
  raiseRates: {
    '& $decisionIcon': {
      backgroundColor: 'rgba(84, 110, 122, 0.1)',
      color: theme.colors.secondary,
    },
  },
  lowerRates: {
    '& $decisionIcon': {
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      color: '#4caf50',
    },
  },
  noAction: {
    '& $decisionIcon': {
      backgroundColor: 'rgba(255, 171, 0, 0.1)',
      color: theme.colors.accent1,
    },
  },
});

// Component for the Central Banker Simulator
const CentralBankerSimulator: React.FC = () => {
  const classes = useStyles();
  const missionStyles = useMission1Styles();
  
  // State for current simulation
  const [gameState, setGameState] = useState({...initialState});
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);
  const [decisionsMade, setDecisionsMade] = useState<Decision[]>([]);
  const [historyData, setHistoryData] = useState<{
    inflation: number[];
    unemployment: number[];
    wealthGap: number[];
    economicGrowth: number[];
    quarters: number[];
  }>({
    inflation: [initialState.inflation],
    unemployment: [initialState.unemployment],
    wealthGap: [initialState.wealthGap],
    economicGrowth: [initialState.economicGrowth],
    quarters: [0],
  });
  
  // State for gainers and losers
  const [gainersLosers, setGainersLosers] = useState<{
    gainers: string[];
    losers: string[];
  }>({
    gainers: [],
    losers: [],
  });
  
  // Update the state based on decision
  const makeDecision = useCallback(() => {
    if (!selectedDecision) return;
    
    const impact = decisionImpacts[selectedDecision];
    const newState = {
      inflation: Math.max(0, gameState.inflation + impact.inflation),
      unemployment: Math.max(0, gameState.unemployment + impact.unemployment),
      wealthGap: Math.max(0, gameState.wealthGap + impact.wealthGap),
      economicGrowth: Math.max(-5, gameState.economicGrowth + impact.economicGrowth),
      publicDebt: Math.min(150, Math.max(0, gameState.publicDebt + impact.publicDebt)),
      bankProfits: Math.max(0, gameState.bankProfits + impact.bankProfits),
      quarters: gameState.quarters + 1
    };
    
    setGameState(newState);
    setDecisionsMade([...decisionsMade, selectedDecision]);
    
    // Update history data for charts
    setHistoryData({
      inflation: [...historyData.inflation, newState.inflation],
      unemployment: [...historyData.unemployment, newState.unemployment],
      wealthGap: [...historyData.wealthGap, newState.wealthGap],
      economicGrowth: [...historyData.economicGrowth, newState.economicGrowth],
      quarters: [...historyData.quarters, newState.quarters + 1],
    });
    
    // Update gainers and losers based on decision
    updateGainersLosers(selectedDecision);
    
    // Reset selected decision
    setSelectedDecision(null);
  }, [selectedDecision, gameState, decisionsMade, historyData]);
  
  // Reset the simulation
  const resetSimulation = () => {
    setGameState({...initialState});
    setSelectedDecision(null);
    setDecisionsMade([]);
    setHistoryData({
      inflation: [initialState.inflation],
      unemployment: [initialState.unemployment],
      wealthGap: [initialState.wealthGap],
      economicGrowth: [initialState.economicGrowth],
      quarters: [0],
    });
    setGainersLosers({
      gainers: [],
      losers: [],
    });
  };
  
  // Update gainers and losers based on decision
  const updateGainersLosers = (decision: Decision) => {
    const gainersLosersMap: Record<Decision, { gainers: string[], losers: string[] }> = {
      print_money: {
        gainers: [
          'Asset owners (stocks, real estate)',
          'Debtors with fixed-rate loans',
          'Banks and financial institutions',
          'Government (reduces real debt burden)'
        ],
        losers: [
          'People on fixed incomes',
          'Savers and pensioners',
          'Wage earners without assets',
          'Low-income communities'
        ]
      },
      raise_rates: {
        gainers: [
          'Savers and bondholders',
          'Banks through higher interest margins',
          'Those with cash reserves',
          'Currency value strengthens'
        ],
        losers: [
          'Borrowers with variable-rate loans',
          'Homeowners with mortgages',
          'Small businesses that need credit',
          'Workers as unemployment rises'
        ]
      },
      lower_rates: {
        gainers: [
          'Homebuyers and mortgage holders',
          'Stock market investors',
          'Real estate investors',
          'Corporate borrowers'
        ],
        losers: [
          'Savers and retirees dependent on interest',
          'Pension funds seeking safe returns',
          "Banks' interest margins",
          "Currency value (may weaken)"
        ]
      },
      none: {
        gainers: [
          'Status quo beneficiaries',
          'Market stability seekers',
          'Long-term economic planners',
          'Businesses that dislike policy shocks'
        ],
        losers: [
          'Those harmed by existing imbalances',
          'Sectors needing policy intervention',
          'Anyone expecting monetary solutions',
          'Economic growth if stagnation continues'
        ]
      }
    };
    
    setGainersLosers(gainersLosersMap[decision]);
  };
  
  // Prepare chart data
  const chartData: ChartData<'line'> = {
    labels: historyData.quarters.map(q => `Q${q}`),
    datasets: [
      {
        label: 'Inflation (%)',
        data: historyData.inflation,
        borderColor: chartColors.inflation,
        backgroundColor: `${chartColors.inflation}50`,
        tension: 0.3,
        fill: false,
      },
      {
        label: 'Unemployment (%)',
        data: historyData.unemployment,
        borderColor: chartColors.unemployment,
        backgroundColor: `${chartColors.unemployment}50`,
        tension: 0.3,
        fill: false,
      },
      {
        label: 'Wealth Gap Index',
        data: historyData.wealthGap,
        borderColor: chartColors.wealthGap,
        backgroundColor: `${chartColors.wealthGap}50`,
        tension: 0.3,
        fill: false,
      },
      {
        label: 'Economic Growth (%)',
        data: historyData.economicGrowth,
        borderColor: chartColors.economicGrowth,
        backgroundColor: `${chartColors.economicGrowth}50`,
        tension: 0.3,
        fill: false,
      },
    ],
  };
  
  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          usePointStyle: true,
          pointStyleWidth: 10,
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        bodyColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      }
    },
  };
  
  // Helper for trend indicators
  const getTrendIndicator = (current: number, previous: number) => {
    const diff = current - previous;
    if (diff > 0) {
      return (
        <span className={classes.trendUp}>
          <ArrowUpCircle size={14} /> +{diff.toFixed(1)}
        </span>
      );
    } else if (diff < 0) {
      return (
        <span className={classes.trendDown}>
          <ArrowDownCircle size={14} /> {diff.toFixed(1)}
        </span>
      );
    } else {
      return (
        <span className={classes.trendNeutral}>
          No change
        </span>
      );
    }
  };
  
  // Get current economic health status
  const getEconomicHealthStatus = () => {
    const inflation = gameState.inflation;
    const unemployment = gameState.unemployment;
    const growth = gameState.economicGrowth;
    
    if (inflation > 8 && unemployment > 8) {
      return 'Stagflation Crisis';
    } else if (inflation > 10) {
      return 'High Inflation Crisis';
    } else if (unemployment > 10) {
      return 'Unemployment Crisis';
    } else if (growth < 0 && inflation < 1) {
      return 'Deflationary Recession';
    } else if (growth < 0) {
      return 'Recession';
    } else if (inflation < 2 && growth < 1) {
      return 'Stagnation';
    } else if (inflation < 3 && unemployment < 5 && growth > 2) {
      return 'Healthy Economy';
    } else if (growth > 4 && inflation < 5) {
      return 'Economic Boom';
    } else {
      return 'Mixed Economic Signals';
    }
  };
  
  // Bar chart for decision frequency
  const decisionFrequencyData = {
    labels: ['Print Money', 'Raise Rates', 'Lower Rates', 'No Action'],
    datasets: [
      {
        label: 'Decisions Made',
        data: [
          decisionsMade.filter(d => d === 'print_money').length,
          decisionsMade.filter(d => d === 'raise_rates').length,
          decisionsMade.filter(d => d === 'lower_rates').length,
          decisionsMade.filter(d => d === 'none').length,
        ],
        backgroundColor: [
          'rgba(255, 82, 82, 0.7)',
          'rgba(84, 110, 122, 0.7)',
          'rgba(76, 175, 80, 0.7)',
          'rgba(255, 171, 0, 0.7)',
        ],
      },
    ],
  };

  return (
    <div className={classes.simulatorContainer}>
      <SimulationFrame 
        title="Central Bank Monetary Policy Simulator" 
        description="As the central banker, you must make policy decisions that balance inflation, unemployment, economic growth, and wealth inequality. Each decision will have different impacts across various economic indicators and population groups."
        securityLevel="high"
        isMonitored={true}
      >
        {/* Quarter Indicator */}
        <div className={classes.quarterIndicator}>
          <AlertCircle size={16} />
          <span>Quarter {gameState.quarters} | Economic Status: {getEconomicHealthStatus()}</span>
        </div>
        
        {/* Economic Stats */}
        <div className={classes.statsGrid}>
          <div className={classes.statCard}>
            <div className={classes.statTitle}>
              <Percent size={14} /> Inflation Rate
            </div>
            <div className={classes.statValue}>{gameState.inflation.toFixed(1)}%</div>
            {gameState.quarters > 0 && (
              <div className={classes.statTrend}>
                {getTrendIndicator(
                  gameState.inflation, 
                  historyData.inflation[historyData.inflation.length - 2]
                )}
              </div>
            )}
          </div>
          
          <div className={classes.statCard}>
            <div className={classes.statTitle}>
              <Users size={14} /> Unemployment Rate
            </div>
            <div className={classes.statValue}>{gameState.unemployment.toFixed(1)}%</div>
            {gameState.quarters > 0 && (
              <div className={classes.statTrend}>
                {getTrendIndicator(
                  gameState.unemployment, 
                  historyData.unemployment[historyData.unemployment.length - 2]
                )}
              </div>
            )}
          </div>
          
          <div className={classes.statCard}>
            <div className={classes.statTitle}>
              <TrendingUp size={14} /> Economic Growth
            </div>
            <div className={classes.statValue}>{gameState.economicGrowth.toFixed(1)}%</div>
            {gameState.quarters > 0 && (
              <div className={classes.statTrend}>
                {getTrendIndicator(
                  gameState.economicGrowth, 
                  historyData.economicGrowth[historyData.economicGrowth.length - 2]
                )}
              </div>
            )}
          </div>
          
          <div className={classes.statCard}>
            <div className={classes.statTitle}>
              <BriefcaseBusiness size={14} /> Wealth Gap Index
            </div>
            <div className={classes.statValue}>{gameState.wealthGap.toFixed(1)}</div>
            {gameState.quarters > 0 && (
              <div className={classes.statTrend}>
                {getTrendIndicator(
                  gameState.wealthGap, 
                  historyData.wealthGap[historyData.wealthGap.length - 2]
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Chart of Economic Indicators */}
        <div className={classes.chartContainer}>
          <Line data={chartData} options={chartOptions} />
        </div>
        
        {/* Decision Options */}
        <h3 style={{fontFamily: theme.fonts.heading, marginBottom: '20px', fontSize: '1.4rem'}}>Make Your Decision</h3>
        <div className={classes.controlsArea}>
          {decisionOptions.map(option => (
            <div 
              key={option.id}
              className={`${classes.decisionCard} ${selectedDecision === option.id ? classes.decisionSelected : ''}`}
              onClick={() => setSelectedDecision(option.id)}
            >
              <div className={classes.decisionIcon}>
                {option.icon}
              </div>
              <div className={classes.decisionTitle}>{option.title}</div>
              <div className={classes.decisionDescription}>{option.description}</div>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className={classes.actionsArea}>
          <button 
            className={classes.actionButton}
            onClick={makeDecision}
            disabled={selectedDecision === null}
          >
            Implement Decision
          </button>
          <button 
            className={classes.secondaryButton}
            onClick={resetSimulation}
          >
            Reset Simulation
          </button>
        </div>
        
        {/* Decision Impact Display */}
        {selectedDecision && (
          <div className={classes.outcomeContainer}>
            <div className={classes.outcomeTitle}>Projected Impact</div>
            <div className={classes.outcomeText}>
              {decisionImpacts[selectedDecision].explanation}
            </div>
          </div>
        )}
        
        {/* Gainers and Losers Display */}
        {gainersLosers.gainers.length > 0 && (
          <div className={classes.gainersLosers}>
            <div className={classes.gainersColumn}>
              <div className={classes.columnTitle}>
                <TrendingUp size={16} color="#4caf50" /> Who Benefits
              </div>
              <div className={classes.entityList}>
                <ul>
                  {gainersLosers.gainers.map((gainer, index) => (
                    <li key={index}>{gainer}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={classes.losersColumn}>
              <div className={classes.columnTitle}>
                <TrendingDown size={16} color="#ff5252" /> Who Suffers
              </div>
              <div className={classes.entityList}>
                <ul>
                  {gainersLosers.losers.map((loser, index) => (
                    <li key={index}>{loser}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Decision Frequency Chart - only show after some decisions are made */}
        {decisionsMade.length > 0 && (
          <div className={classes.chartContainer} style={{ marginTop: '20px', height: '250px' }}>
            <Bar 
              data={decisionFrequencyData} 
              options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  title: {
                    display: true,
                    text: 'Your Policy Approach',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }
                }
              }}
            />
          </div>
        )}
      </SimulationFrame>
    </div>
  );
};

export default CentralBankerSimulator;