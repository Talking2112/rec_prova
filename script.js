class Personagem {
    #vida
    #forca
    #mana
    constructor(vida, forca, mana){
        this.vida = vida;
        this.forca = forca;
        this.mana = mana
    }

    atacar(){
        console.log("Atacando")
    }
    defender(){

    }
    usarMagia(){

    }
    get vida (){
        return this.#vida
    }
    set vida (vida){
        this.#vida = vida
    }
    get forca (){
        return this.#forca
    }
    set forca (forca){
        this.#forca = forca
    }
    get mana (){
        return this.#mana
    }
    set mana (mana){
        this.#mana = mana
    }
}
let novoPersonagem = new Personagem()
novoPersonagem.vida = 100
novoPersonagem.forca = 90
novoPersonagem.mana = 80
console.log("A vida do seu personagem é", novoPersonagem.vida, ",a força do seu personagem é", novoPersonagem.forca, "e a mana do seu personagem é", novoPersonagem.mana)

class Guerreiro extends Personagem{
    atacar(){
        console.log("Atacando com uma espada.")
    }
    defender(){

    }
    usarMagia(){

    }
}

class Mago extends Personagem{
    atacar(){
        console.log("Atacando com magia.")
    }
    defender(){

    }
    usarMagia(){
        
    }
}

class Arqueiro extends Personagem{
    atacar(){
        console.log("Atacando com um arco.")
    }
    defender(){

    }
    usarMagia(){
        
    }
}