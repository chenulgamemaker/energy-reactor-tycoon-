// Generator Types with your requested reactors!
const GENERATORS = {
    windTurbine: {
        name: "🌬️ Wind Turbine",
        cost: 500,
        powerOutput: 25,
        income: 5,
        maintenance: 2,
        unlockAt: 0,
        emoji: "🌬️",
        description: "Basic renewable energy"
    },
    solarFarm: {
        name: "☀️ Solar Farm", 
        cost: 800,
        powerOutput: 40,
        income: 8,
        maintenance: 1,
        unlockAt: 1000,
        emoji: "☀️",
        description: "Clean solar power"
    },
    coalPlant: {
        name: "🔥 Coal Plant",
        cost: 1500,
        powerOutput: 150,
        income: 20,
        maintenance: 15,
        unlockAt: 5000,
        emoji: "🔥",
        description: "Reliable but polluting"
    },
    nuclearReactor: {
        name: "☢️ Nuclear Reactor",
        cost: 10000,
        powerOutput: 1000,
        income: 150,
        maintenance: 50,
        unlockAt: 25000,
        emoji: "☢️",
        description: "High output fission power"
    },
    fusionReactor: {
        name: "⚛️ Fusion Reactor",
        cost: 50000,
        powerOutput: 5000,
        income: 800,
        maintenance: 200,
        unlockAt: 100000,
        emoji: "⚛️",
        description: "Star power on Earth"
    },
    teslaReactor: {
        name: "🌀 Tesla Reactor",
        cost: 150000,
        powerOutput: 15000,
        income: 2500,
        maintenance: 500,
        unlockAt: 500000,
        emoji: "🌀",
        description: "Wireless energy transmission"
    },
    tokamak: {
        name: "🔴 Tokamak",
        cost: 300000,
        powerOutput: 30000,
        income: 5000,
        maintenance: 1000,
        unlockAt: 1000000,
        emoji: "🔴",
        description: "Magnetic confinement fusion"
    },
    stellarator: {
        name: "🌟 Stellarator",
        cost: 750000,
        powerOutput: 75000,
        income: 12000,
        maintenance: 2500,
        unlockAt: 2500000,
        emoji: "🌟",
        description: "Advanced helical fusion"
    },
    quantumReactor: {
        name: "🔮 Quantum Reactor",
        cost: 2000000,
        powerOutput: 200000,
        income: 30000,
        maintenance: 6000,
        unlockAt: 5000000,
        emoji: "🔮",
        description: "Reality-bending energy"
    },
    dysonSphere: {
        name: "🛸 Dyson Sphere",
        cost: 10000000,
        powerOutput: 1000000,
        income: 150000,
        maintenance: 30000,
        unlockAt: 20000000,
        emoji: "🛸",
        description: "Stellar energy harvesting"
    }
};

// Generator upgrades
const UPGRADES = {
    efficiency1: {
        name: "Efficiency Upgrade I",
        cost: 5000,
        effect: "income",
        multiplier: 1.5,
        description: "+50% income from all generators"
    },
    efficiency2: {
        name: "Efficiency Upgrade II", 
        cost: 25000,
        effect: "income",
        multiplier: 2.0,
        description: "+100% income from all generators"
    },
    output1: {
        name: "Output Upgrade I",
        cost: 10000,
        effect: "powerOutput",
        multiplier: 1.5,
        description: "+50% power output from all generators"
    },
    maintenance1: {
        name: "Maintenance Reduction I",
        cost: 15000,
        effect: "maintenance",
        multiplier: 0.7,
        description: "-30% maintenance costs"
    }
};
