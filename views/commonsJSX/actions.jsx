// Common Actions

export const addAction = (element,name) => ({
    type: "ADD_ELEMENT",
    //payload: {task: text}
    element,
    name
});

export const updateAction = (element,name) => ({
    type: "UPDATE_ELEMENT",
    element,
    name
});

export const deleteAction = (id,name) => ({
    type: "DELETE_ELEMENT",
    //payload: {task: text}
    id,
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


