const Scrolls = []

window.onscroll = function () {
  Scrolls.forEach(func => {
    func()
  })
}

export default Scrolls
