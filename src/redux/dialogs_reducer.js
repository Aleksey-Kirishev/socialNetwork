const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alexey'},
        {id: 2, name: 'Valeriya'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Artem'},

    ],
    messages: [
        {id: 1, sms: 'hi'},
        {id: 2, sms: 'how r u?'},
        {id: 3, sms: 'I am good, ty'},
        {id: 4, sms: 'Yo'},
        {id: 5, sms: 'Love u'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE: {
            let body = action.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, sms: body}]
            };
        }
        default:
            return state;
    }
}

export const sendNewMessageCreator = (newMessageBody) => ({type: SEND_NEW_MESSAGE, newMessageBody})

export default dialogsReducer;