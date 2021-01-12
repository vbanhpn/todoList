import { v4 as uuidv4 } from 'uuid';
export const getTaskList =  () => {
    return ( 
        [
            {
                Id : uuidv4(),
                Name : "Trà sữa",
                CreateDate: "1610091723105", //1610091723105
                CompleteDate: "", 
                Favorite: true,
                IsComplete: false
            },  
            {
                Id : uuidv4(),
                Name : "Bún chả",
                CreateDate: "1610091723102", //1610091723105
                CompleteDate: "", 
                Favorite: false,
                IsComplete: false
            }, 
            {
                Id : uuidv4(),
                Name : "Bánh ngọt",
                CreateDate: "1610091723104",  
                CompleteDate: "", 
                Favorite: false, 
                IsComplete: false
            },  
            {
                Id : uuidv4(),
                Name : "Sữa chua",
                CreateDate: "1610091723106",
                CompleteDate: "16100917231010", 
                Favorite: false,
                IsComplete: true
            }, 
            {
                Id : uuidv4(),
                Name : "Coffee",
                CreateDate: "1610091723107", 
                CompleteDate: "1610091723111", 
                Favorite: false, 
                IsComplete: true
            }, 
        ]
    )
}