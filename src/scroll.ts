const Scrolls: any = []

window.onscroll = function () {
  Scrolls.forEach((func: any) => {
    func()
  })
}

export default Scrolls
