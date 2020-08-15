export default class DescripcionDatos{
    constructor(data){
        this.director = data.crew.find(x => x.job === "Director")
        this.autor = data.crew.find(x => x.job === "Writer")
        this.autor2 = data.crew.find(x => x.job === "Screenplay")
        this.castPrevia = data.cast.slice(0,4)
        this.cast = data.cast
    }
}