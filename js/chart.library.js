var drawLine = function drawLine(ctx, startX, startY, endX, endY) {
  ctx.beginPath()
  ctx.moveTo(startX, startY)
  ctx.lineTo(endX, endY)
  ctx.stroke()
}

var drawArc = function drawArc(
  ctx,
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle
) {
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, startAngle, endAngle)
  ctx.stroke()
}

var drawPieSlice = function drawPieSlice(
  ctx,
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  color
) {
  ctx.fillStyle = color
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 1.2
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(centerX, centerY)
  ctx.arc(centerX, centerY, radius, startAngle, endAngle)
  ctx.closePath()
  ctx.fill()
}

var Piechart = function Piechart(options) {
  this.options = options
  this.canvas = options.canvas
  this.ctx = this.canvas.getContext('2d')

  this.draw = function () {
    var _this = this

    var total_value = this.options.data.reduce(function (total, currentCateg) {
      return total + currentCateg.value
    }, 0)
    var start_angle = 1.5 * Math.PI
    this.options.data.forEach(function (categ) {
      val = categ.value
      var slice_angle = (2 * Math.PI * val) / total_value
      drawPieSlice(
        _this.ctx,
        _this.canvas.width / 2,
        _this.canvas.height / 2,
        Math.min(_this.canvas.width / 2, _this.canvas.height / 2),
        start_angle,
        start_angle + slice_angle,
        categ.color
      )
      start_angle += slice_angle
    })

    if (this.options.doughnutHoleSize) {
      drawPieSlice(
        this.ctx,
        this.canvas.width / 2,
        this.canvas.height / 2,
        this.options.doughnutHoleSize *
          Math.min(this.canvas.width / 2, this.canvas.height / 2),
        0,
        2 * Math.PI,
        '#ffffff'
      )
    }
  }
}
