const news = {
  name: (string) => {
    const result = typeof string !== 'undefined' ? 'xx' : 'yy'
    return result
  },
  test: (numeric) => {
    const result = typeof numeric != 'undefined' ? '11' : '22'
    return result
  },
  parser: (url, format) => {
    let result = {}
    result['url'] = url
    result['format'] = format
    // console.log('result', result)
    return result
  },
}

news.name()
