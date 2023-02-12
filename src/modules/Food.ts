// 定义食物类
export default class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement
    constructor() {
        this.element = document.querySelector("#food")
    }
    // 获取食物x轴坐标
    get X() {
        return this.element.offsetLeft;
    }
    // 定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop
    }
    // 修改食物位置的方法
    change() {
        // 生成随机位置
        // 食物位置是0，最大是 舞台宽度 - 食物宽度： 290
        // 食物的位置一定是整10的
        let top = Math.round(Math.random() * 29) * 10 // 0 ~ 290
        let left = Math.round(Math.random() * 29) * 10 // 0 ~ 290
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    }
}