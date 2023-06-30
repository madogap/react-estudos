export type Name = {
    first: string
    last: string
    age?: number | undefined

}

export type PersonProps = {
    name: Name
    age?: number | undefined
    
}


export type Endereco = {
    cidade: string
    bairro: string
    cep: number
}