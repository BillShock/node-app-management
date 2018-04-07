// Common Actions

export const addAction = (element,name) => ({
    type: "ADD_ELEMENT",
    //payload: {task: text}
    element,
    name
});

export const setAction = (elements,name) => ({
    type: "SET_ELEMENTS",
    //payload: {task: text}
    elements,
    name
});

export const setTextFilter = (text,name) =>({
    type:"TEXT_FILTER",
    text,
    name
});

export const setPageAction = (pagination,name) =>({
    type:"SET_PAGE",
    pagination,
    name
});