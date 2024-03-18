class game{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = this.tipo
        }
        atacarChefão(){
        switch (this.ataque){
    	case "Mago":
        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos, matou o Chefão Final usando magia`)
        break
        
        case "Guerreiro":
        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos, matou o Chefão Final usando Espada`)
        break
        
        case "Monge":
        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos, matou o Chefão Final usando artes marciais`)
        break
        
        default:
        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos, matou o Chefão Final usando shuriken`)
        break
        }
    }
    
}

let gameMaster = new game("Jake", 25, "Mago")


gameMaster.atacarChefão()