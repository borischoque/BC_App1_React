const functionPromiseFind = (list,time,id) => {
    return ( new Promise((resolve,reject) => {
        const productofiltrado = list.find(item => item.id === Number(id))
        setTimeout(() => {
            resolve(productofiltrado)
            }, time);
    
        })
    );
};

export default functionPromiseFind;