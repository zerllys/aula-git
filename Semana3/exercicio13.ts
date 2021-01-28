interface Programador{
nome: string,
idade:number,
empresa: string,
famoso:boolean
}

function programador(programador:Programador) {
	// não precisa desenvolver nada aqui
}
const dev = {
  nome: 'Bill Gates',
  idade: 60,
  empresa: 'Microsoft',
  famoso: true
}
const produtos:string [] = ["Azure", "VS Code", "Office"]

programador(dev, produtos)