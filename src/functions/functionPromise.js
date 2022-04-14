 const functionPromiseFilter = (items, time,categoryid) => {
    return ( new Promise((resolve,reject) => {
        const productosFiltrados = items.filter(
            (item) => item.category === categoryid
        )
        setTimeout(() => {
            categoryid ? resolve(productosFiltrados) : resolve(items);
            }, time);
    
        })
    );
};

export default functionPromiseFilter;