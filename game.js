
class Game {
    constructor() {
        this.economy = new Economy();
        this.ui = new UI(this);
    }
}

// Start the game when page loads
window.addEventListener('load', () => {
    new Game();
});
