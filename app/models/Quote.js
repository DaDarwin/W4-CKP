



export class Quote{

    constructor(data){
        this.content = data.content
        this.author = data.author
        this.tags = data.tags
        this.description = data.description
    }

    get getQuote(){
        return `
            <div class="align-self-end col-12 m-0 p-0">

                <div class="bg-dark text-light m-5 p-5 row justify-content-center ">
                    <p class="col-10">${this.content}</p>
                    <span class="col-8 text-end">${this.author}</span>
                </div>
                
                <footer class="bg-dark text-light col-12">
                    <div class="flex-grow-1 justify-content-end align-items-center d-none" id="authstate"></div>
                    <div class="text-center no-select">
                        <p class="mb-0"><small>Made with 💖 by CodeWorks</small></p>
                    </div>
                </footer>
            
            </div>`
    }
}
