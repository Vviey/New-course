import React, { useState, useEffect, ChangeEvent } from 'react';
import { ForceGraph2D } from 'react-force-graph';

interface NodeObject {
  id: string;
  name: string;
  group: string;
  value: number;
  x?: number;
  y?: number;
}

interface LinkObject {
  source: string | NodeObject;
  target: string | NodeObject;
  value: number;
  description: string;
}

interface GraphData {
  nodes: NodeObject[];
  links: LinkObject[];
}

const GlobalMoneyWebSimulation = () => {
  const [simulationStage, setSimulationStage] = useState<string>('intro');
  const [brettonActive, setBrettonActive] = useState<boolean>(false);
  const [nixonShockActive, setNixonShockActive] = useState<boolean>(false);
  const [petrodollarActive, setPetrodollarActive] = useState<boolean>(false);
  const [debtTrapActive, setDebtTrapActive] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<NodeObject | null>(null);
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });
  const [dollarCreationRate, setDollarCreationRate] = useState<number>(1);
  const [inflationRate, setInflationRate] = useState<number>(2);
  const [dollarsInCirculation, setDollarsInCirculation] = useState<number>(100);
  const [oilPriceIncrease, setOilPriceIncrease] = useState<number>(0);
  const [year, setYear] = useState<number>(1944);
  const [showReflection, setShowReflection] = useState<boolean>(false);
  const [reflectionAnswer, setReflectionAnswer] = useState<string>('');

  // Helper function to reset simulation to base state
  const baseGraphData: GraphData = {
    nodes: [
      { id: 'usa', name: 'United States', group: 'major', value: 100, x: 0, y: 0 },
      { id: 'uk', name: 'United Kingdom', group: 'major', value: 70, x: 100, y: -100 },
      { id: 'germany', name: 'Germany', group: 'major', value: 75, x: 150, y: 0 },
      { id: 'france', name: 'France', group: 'major', value: 65, x: 100, y: 100 },
      { id: 'japan', name: 'Japan', group: 'major', value: 80, x: 200, y: -50 },
      { id: 'saudi', name: 'Saudi Arabia', group: 'oil', value: 60, x: -100, y: 150 },
      { id: 'uae', name: 'UAE', group: 'oil', value: 50, x: -150, y: 100 },
      { id: 'venezuela', name: 'Venezuela', group: 'oil', value: 40, x: -200, y: 0 },
      { id: 'nigeria', name: 'Nigeria', group: 'developing', value: 30, x: -100, y: -100 },
      { id: 'kenya', name: 'Kenya', group: 'developing', value: 25, x: -150, y: -150 },
      { id: 'argentina', name: 'Argentina', group: 'developing', value: 35, x: -200, y: -50 },
      { id: 'gold', name: 'Gold Reserves', group: 'asset', value: 90, x: 50, y: -150 },
      { id: 'oil', name: 'Oil Markets', group: 'asset', value: 85, x: -50, y: 200 },
      { id: 'dollar', name: 'US Dollar', group: 'currency', value: 95, x: 0, y: 50 },
      { id: 'treasuries', name: 'US Treasuries', group: 'asset', value: 80, x: 50, y: 150 },
      { id: 'imf', name: 'IMF', group: 'institution', value: 70, x: 0, y: -200 },
    ],
    links: []
  };

  const resetSimulation = (): void => {
    setGraphData(baseGraphData);
    setSimulationStage('intro');
    setBrettonActive(false);
    setNixonShockActive(false);
    setPetrodollarActive(false);
    setDebtTrapActive(false);
    setSelectedNode(null);
    setDollarCreationRate(1);
    setInflationRate(2);
    setDollarsInCirculation(100);
    setOilPriceIncrease(0);
    setYear(1944);
    setShowReflection(false);
    setReflectionAnswer('');
  };

  const handleNodeClick = (node: NodeObject) => {
    setSelectedNode(node);
  };

  const handleDollarCreationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDollarCreationRate(parseFloat(e.target.value));
  };

  const handleReflectionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReflectionAnswer(e.target.value);
  };

  const getNodeColor = (node: NodeObject): string => {
    const groupColors: { [key: string]: string } = {
      major: '#4263eb',
      oil: '#94d82d',
      developing: '#fcc419',
      asset: '#ff922b',
      currency: '#f06595',
      institution: '#7950f2'
    };
    return groupColors[node.group] || '#343a40';
  };

  const getLinkColor = (link: LinkObject): string => {
    const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
    const targetId = typeof link.target === 'string' ? link.target : link.target.id;
    if (sourceId === 'usa' || targetId === 'usa') return '#4263eb';
    if (sourceId === 'dollar' || targetId === 'dollar') return '#f06595';
    if (sourceId === 'oil' || targetId === 'oil') return '#94d82d';
    if (sourceId === 'imf' || targetId === 'imf') return '#7950f2';
    return '#adb5bd';
  };

  return (
    <div className="global-money-web-simulation">{/* keep full UI rendering */}</div>
  );
};

export default GlobalMoneyWebSimulation;
