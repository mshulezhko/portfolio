/**
 * 
 * @param {Array} items 
 * @param {Number} itemsId 
 * @param {String} objPropsName 
 * @param {Object} newObjProps 
 * @returns {Array}
 */
export const updateObjectInArray = (items, itemsId, objPropsName, newObjProps) => {
    return items.map(item => {
        if (item[objPropsName] === itemsId) {
            return { ...item, ...newObjProps }
        }

        return item
    })
}