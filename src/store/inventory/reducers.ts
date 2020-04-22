import { InventoryState, REMOVE_ITEM_FROM_INVENTORY, ADD_ITEM_TO_INVENTORY, InventoryActionTypes } from './types';

const initialState: InventoryState = {
    items: [
        {
            id: 1,
            name: 'Product'
        }
    ]
}

export function inventoryReducer (state = initialState, action: InventoryActionTypes) {
    switch ( action.type ) {
        case ADD_ITEM_TO_INVENTORY:
            return {
                ...state,
                items: [...state.items, action.payload ]
            }
            case REMOVE_ITEM_FROM_INVENTORY:
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload)
                }

                default:
                    return state;
    }
}