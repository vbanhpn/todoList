import { v4 as uuidv4 } from 'uuid';
export const getTaskList =  () => {
    return ( 
        [
            {
                id : uuidv4(),
                Name : "Trà sữa",
                DateCreate: "1610091723105", //1610091723105
                DateComplete: "", 
                Favorite: true,
                isComplete: false
            },  
            {
                id : uuidv4(),
                Name : "Bún chả",
                DateCreate: "1610091723102", //1610091723105
                DateComplete: "", 
                Favorite: false,
                isComplete: false
            }, 
            {
                id : uuidv4(),
                Name : "Bánh ngọt",
                DateCreate: "1610091723104",  
                DateComplete: "", 
                Favorite: false, 
                isComplete: false
            },  
            {
                id : uuidv4(),
                Name : "Sữa chua",
                DateCreate: "1610091723106",
                DateComplete: "16100917231010", 
                Favorite: false,
                isComplete: true
            }, 
            {
                id : uuidv4(),
                Name : "Coffee",
                DateCreate: "1610091723107", 
                DateComplete: "1610091723111", 
                Favorite: false, 
                isComplete: true
            }, 
        ]
    )
}