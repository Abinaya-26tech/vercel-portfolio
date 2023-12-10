export class Tag {
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('Typescript','darkred');
    static readonly PYTHON = new Tag('Python','purple');
    static readonly EMBEDDED_C = new Tag('EMBEDDED C','green');
    
    private constructor(private readonly key:string,public readonly color:string){

    }
    toString()
    {
        return this.key;
    }
}