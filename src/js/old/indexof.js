function handle(needle,str) {
    let len = str.length
    // 判断str在needle中的位置，如果没有返回-1
    if (str==='') return 0
    for (let i = 0; i  < needle.length; i++) {
        //截取与str一样长度的字符串
        if (needle.substring(i,i+len)===str) {return i}
    }
    return -1
    
}
handle('abc','c')