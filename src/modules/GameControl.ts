// 游戏控制器，控制其他所有类

import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

export default class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    direction: string = ''
    isLive: Boolean = true // 蛇是否存活
    constructor() {
        this.snake = new Snake
        this.food = new Food
        this.scorePanel = new ScorePanel
        this.init()
    }
    // 游戏初始化方法，说明游戏开始
    init() {
        // 绑定键盘按下事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }
    // 键盘按下方法
    keydownHandler(event: KeyboardEvent) {
        // 检查方向是否合法
        this.direction = event.key
    }
    // 蛇移动的方法
    run() {
        // 获取蛇当前坐标
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10
                break
            case "ArrowDown":
                Y += 10
                break
            case "ArrowLeft":
                X -= 10
                break
            case "ArrowRight":
                X += 10
                break
        }
        // 检查蛇是否吃到了食物
        this.checkEat(X, Y)
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            console.log('e', e)
            // alert(e.messag + 'Game Over')
            this.isLive = false
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }
    // 是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}