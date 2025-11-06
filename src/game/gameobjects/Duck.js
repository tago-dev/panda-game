import { HEIGHTS, GAMEPLAY } from "../constants.js";

export default class Duck extends Phaser.GameObjects.Image {
    constructor(scene, x, y) {
        super(scene, x, y, "duck");
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setOrigin(0.5, 1); // Origem na base da imagem
        this.setDepth(3); // Na frente dos bugs

        // Hitbox para coleta
        const body = this.body;
        body.setSize(32, 32);
        body.setOffset((this.width - 32) / 2, this.height - 32);

        this.speed = GAMEPLAY.BUG_SPEED;
        this.collected = false;
    }

    update() {
        this.move();
    }

    updateWithSpeed(gameSpeed, deltaMultiplier = 1) {
        this.moveWithSpeed(gameSpeed, deltaMultiplier);
    }

    move() {
        this.x -= this.speed * GAMEPLAY.BASE_GAME_SPEED;
    }

    moveWithSpeed(gameSpeed, deltaMultiplier = 1) {
        this.x -= this.speed * gameSpeed * deltaMultiplier;
    }

    collect() {
        if (!this.collected) {
            this.collected = true;
            this.destroy();
        }
    }
}
