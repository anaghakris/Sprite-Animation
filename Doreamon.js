class Doreamon {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./doreamon.png"), 0, 0, 150, 150, 3, 0.4);
        this.x = 0;
        this.y = 0;
        this.speed = 25;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};