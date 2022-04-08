
const functionPromise = (items, time) => {
    return ( new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(items);
            }, time);
    
        })
    );
};

export default functionPromise;