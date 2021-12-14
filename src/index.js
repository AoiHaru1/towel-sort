
// You should implement your task here.

module.exports = function towelSort(...matrix) {
  return matrix.length === 0 ? [] : matrix[0].reduce((a, c, i) => {
    i % 2 === 0 ? a.push(...c) : a.push(...c.reverse())
    return a
  }, [])
}

