const idGenerator = createIdGenerator();
function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const fontGenerator = newFontGenerator(14);
function* newFontGenerator(i) {
    let res = yield i;
    while (true) {
        if (res === "up") {
            i = i + 2;
            res = yield i;
        } else if (res === "down") {
            i = i - 2;
            if (i < 0) {
                i = 0;
            }
            res = yield i;
        } else res = yield i;
    }
}

