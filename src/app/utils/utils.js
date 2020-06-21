
export function convertTimestamp(timestamp) {
    
    let date = new Date(timestamp * 1000)  
    let dateFormated = [date.toLocaleDateString(), ` - `, date.toLocaleTimeString('pt-BR')]

    return dateFormated
}

