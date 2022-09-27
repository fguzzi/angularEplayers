export class User {           /* PROPRIEDADES DO USUÁRIO */

    constructor(
        public nome?: string,
        public idade?: number,
        public email?: string,
        public password?: string      /* INICIA COM VALOR UNDEFINDED DEVIDO AO USO DE ? */
    ){}
    
}
