class Personagem {
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
}

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