export function arrayReduce(array, num) {
    let resultado = array.reduce((acc, x, i) => {
        const idx = Math.floor(i / num)
        acc[idx] = [...(acc[idx] || []), x]
        return acc
    }, [])
    return resultado
}