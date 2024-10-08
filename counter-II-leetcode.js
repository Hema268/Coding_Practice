var createCounter = function(init) {
    let num = init
    return{
            increment: ()=> ++num,
            decrement: () => --num,
            reset: () => num = init
        }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */