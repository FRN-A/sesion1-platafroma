const t1 = setTimeout(() => {
    console.log("t1");
}, 5000);

const t2 = setTimeout(() => {
    console.log("t2");
}, 3000);

t1.unref();
clearTimeout(t2);