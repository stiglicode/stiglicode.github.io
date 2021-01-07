const toggleClick = (classNames: {open: string, close?: string}, ele: any ): string => {
    if(Object.keys(classNames).length <= 1){
        if(ele.classList.contains(classNames.open)){
            ele.classList.remove(classNames.open);
        }else if(!ele.classList.contains(classNames.open)){
            ele.classList.add(classNames.open); 
        }
    }else {
        if(ele.classList.contains(classNames.open)){
            ele.classList.remove(classNames.open);
            ele.classList.add(classNames.close);
            return "open"
        }else if(ele.classList.contains(classNames.close)){
            ele.classList.remove(classNames.close);
            ele.classList.add(classNames.open);
            return "close"
        }
    }
}
export default toggleClick;