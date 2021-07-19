let canvas = {
    c: null,
    canvas: null,
    init() {
        this.c = document.getElementById('canvas').getContext('2d')
    },
    render() {
        
    },
    run() {
        window.requestAnimationFrame(() => {
            this.render()
            this.run()
        })
    },
    start() {
        this.init()
        this.render()
    }
}

window.addEventListener('load', () => {
    canvas.start()
}) 