// 计分牌
export default class ScorePanel {
    score: number = 0
    level: number = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    maxLevel: number = 10
    upScore: number = 10
    constructor() {
        this.scoreEle = document.querySelector('#score')
        this.levelEle = document.querySelector('#level')
    }
    // 设置加分方法
    addScore() {
        this.scoreEle.innerHTML = `${++this.score}`
        // 判断分数是多少，每十分升一级
        if (this.score % this.upScore === 0) this.levelUp()
    }
    // 提升等级
    levelUp() {
        // 等级上限
        if (this.level < this.maxLevel) this.levelEle.innerHTML = `${++this.level}`
    }
}