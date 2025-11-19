class Economy {
    constructor() {
        this.money = 10000;
        this.totalPower = 0;
        this.totalIncome = 0;
        this.totalMaintenance = 0;
        this.placedGenerators = [];
        this.activeUpgrades = {};
    }

    canAfford(cost) {
        return this.money >= cost;
    }

    buyGenerator(type, cost) {
        if (this.canAfford(cost)) {
            this.money -= cost;
            return true;
        }
        return false;
    }

    buyUpgrade(upgradeId, cost) {
        if (this.canAfford(cost)) {
            this.money -= cost;
            this.activeUpgrades[upgradeId] = UPGRADES[upgradeId];
            return true;
        }
        return false;
    }

    calculateIncome() {
        let income = 0;
        let maintenance = 0;
        let power = 0;

        this.placedGenerators.forEach(gen => {
            let genIncome = GENERATORS[gen.type].income;
            let genMaintenance = GENERATORS[gen.type].maintenance;
            let genPower = GENERATORS[gen.type].powerOutput;

            // Apply upgrades
            if (this.activeUpgrades.efficiency1) {
                genIncome *= this.activeUpgrades.efficiency1.multiplier;
            }
            if (this.activeUpgrades.efficiency2) {
                genIncome *= this.activeUpgrades.efficiency2.multiplier;
            }
            if (this.activeUpgrades.output1) {
                genPower *= this.activeUpgrades.output1.multiplier;
            }
            if (this.activeUpgrades.maintenance1) {
                genMaintenance *= this.activeUpgrades.maintenance1.multiplier;
            }

            income += genIncome;
            maintenance += genMaintenance;
            power += genPower;
        });

        this.totalIncome = income - maintenance;
        this.totalPower = power;
        this.totalMaintenance = maintenance;

        return this.totalIncome;
    }

    update() {
        const netIncome = this.calculateIncome();
        this.money += netIncome;
        
        // Update UI
        document.getElementById('money').textContent = Math.floor(this.money).toLocaleString();
        document.getElementById('power').textContent = Math.floor(this.totalPower).toLocaleString();
        document.getElementById('income').textContent = Math.floor(netIncome).toLocaleString();
    }

    addGenerator(generator) {
        this.placedGenerators.push(generator);
        this.calculateIncome();
    }
}
