export default class Snake {
    // 表示蛇头的元素
    head: HTMLElement
    bodies: HTMLCollection
    // 获取蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake')
        this.head = document.querySelector('#snake>div') as HTMLElement
        this.bodies = this.element!.getElementsByTagName('div')
    }
    // 蛇头坐标
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    set X(value: number) {
        if (this.X === value) return
        if (value < 0 || value > 290) {
            // 说明蛇撞墙了
            throw new Error('蛇撞墙了！')
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }
        this.head.style.left = `${value}px`
        this.moveBody()
        this.checkHeadBody()
    }
    set Y(value: number) {
        if (this.Y === value) return
        if (value < 0 || value > 290) {
            // 说明蛇撞墙了
            throw new Error('蛇撞墙了！')
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }
        this.head.style.top = `${value}px`
        this.moveBody()
        this.checkHeadBody()
    }
    // 给蛇增加身体
    addBody() {
        console.log('appendBody')
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }
    moveBody() {
        // 将后边的身体，设置到前一个身体的位置
        // 第二节，改为蛇头的位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = `${X}px`;
            (this.bodies[i] as HTMLElement).style.top = `${Y}px`;
        }
    }
    checkHeadBody() {
        // 获取所有身体，是否和身体相撞
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && bd.offsetTop === this.Y) {
                // 说明撞到了身体
                throw new Error('撞到身体了')
            }
        }
    }
}