class UI {
    constructor(game) {
        this.game = game;
        this.selectedGenerator = null;
        this.init();
    }

    init() {
        this.createGrid();
        this.createShop();
        this.createUpgradeShop();
        this.startGameLoop();
    }

    createGrid() {
        const grid = document.getElementById('grid');
        grid.innerHTML = '';
        
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.index = i;
            
            cell.addEventListener('click', () => this.placeGenerator(i));
            
            grid.appendChild(cell);
        }
    }

    createShop() {
        const shop = document.getElementById('generator-shop');
        shop.innerHTML = '';

        Object.entries(GENERATORS).forEach(([id, gen]) => {
            const button = document.createElement('button');
            button.className = 'generator-btn';
            button.innerHTML = `
                <strong>${gen.name}</strong><br>
                ⚡ ${gen.powerOutput} MW | 💰 $${gen.income}/sec<br>
                🛠️ $${gen.maintenance}/sec | 💵 $${gen.cost.toLocaleString()}
            `;

            button.addEventListener('click', () => this.selectGenerator(id));
            
            shop.appendChild(button);
        });
    }

    createUpgradeShop() {
        const shop = document.getElementById('upgrade-shop');
        shop.innerHTML = '';

        Object.entries(UPGRADES).forEach(([id, upgrade]) => {
            const button = document.createElement('button');
            button.className = 'upgrade-btn';
            button.innerHTML = `
                <strong>${upgrade.name}</strong><br>
                ${upgrade.description}<br>
                💵 $${upgrade.cost.toLocaleString()}
            `;

            button.addEventListener('click', () => this.buyUpgrade(id));
            
            shop.appendChild(button);
        });
    }

    selectGenerator(type) {
        this.selectedGenerator = type;
        
        // Highlight affordable generators
        document.querySelectorAll('.generator-btn').forEach(btn => {
            const genId = Object.keys(GENERATORS).find(id => 
                btn.textContent.includes(GENERATORS[id].name)
            );
            
            if (genId) {
                const cost = GENERATORS[genId].cost;
                btn.classList.remove('affordable', 'expensive');
                
                if (this.game.economy.canAfford(cost)) {
                    btn.classList.add('affordable');
                } else {
                    btn.classList.add('expensive');
                }
            }
        });
    }

    placeGenerator(cellIndex) {
        if (!this.selectedGenerator) {
            alert('Please select a generator first!');
            return;
        }

        const cell = document.querySelector(`.grid-cell[data-index="${cellIndex}"]);
        if (cell.classList.contains('occupied')) {
            alert('This cell is already occupied!');
            return;
        }

        const generator = GENERATORS[this.selectedGenerator];
        
        if (this.game.economy.buyGenerator(this.selectedGenerator, generator.cost)) {
            // Place generator
            cell.classList.add('occupied');
            cell.textContent = generator.emoji;
            
            this.game.economy.addGenerator({
                type: this.selectedGenerator,
                cellIndex: cellIndex,
                level: 1
            });
            
            this.updateUI();
        } else {
            alert('Not enough money!');
        }
    }

    buyUpgrade(upgradeId) {
        const upgrade = UPGRADES[upgradeId];
        
        if (this.game.economy.buyUpgrade(upgradeId, upgrade.cost)) {
            alert(`Upgrade purchased: ${upgrade.name}`);
            this.updateUI();
        } else {
            alert('Not enough money for this upgrade!');
        }
    }

    updateUI() {
        // Update money display
        document.getElementById('money').textContent = Math.floor(this.game.economy.money).toLocaleString();
        
        // Update generator affordability
        this.selectGenerator(this.selectedGenerator);
    }

    startGameLoop() {
        setInterval(() => {
            this.game.economy.update();
            this.updateUI();
        }, 1000); // Update every second
    }
}
