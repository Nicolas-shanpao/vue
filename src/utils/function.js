export function toMoney (num) {
    return num.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')// 返回的是字符串23,245.12保留2位小数
}

export function parsePrice (s) {
    var n = 2 // 设置保留的小数位数
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
    var l = s.split('.')[0].split('').reverse()
    var r = s.split('.')[1]
    var t = ''
    for (let i = 0; i < l.length; i++) {
        t += l[i]
    }
    return t.split('').reverse().join('') + '.' + r
}
