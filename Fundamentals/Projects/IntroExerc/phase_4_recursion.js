function range(s, e) {

    if (s === e) {
        return [];
    }
    

    let r = range(s, e - 1)
    r.push(e - 1);
    return r
}

