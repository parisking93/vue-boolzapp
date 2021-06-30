const app = new Vue(
    {
        el :'#app',

        data : {
            ore : (dayjs().hour() < 10) ? "0"+ dayjs().hour(): dayjs().hour(),
            minuti : (dayjs().minute() < 10) ? "0"+ dayjs().minute(): dayjs().minute(),
            secondi : (dayjs().second() < 10) ? "0"+ dayjs().second(): dayjs().second(),
            cerca : '',
            parolaSearch:'',
            mex : '',
            index : 0,
            answer : ['ciao','come stai?','no','si'],
            contacts: 
                [  
                    {       
                        name: 'Michele', 
                        avatar: './../img/avatar_1.jpg',
                        visible: true,
                        messages: 
                        [            
                            {                
                                date: '10/01/2020 15:30:55',
                                text: 'Hai portato a spasso il cane?',
                                status: 'sent'            
                            },
                            {                
                                date: '10/01/2020 15:50:00',
                                text: 'Ricordati di dargli da mangiare',                
                                status: 'sent'            
                            },
                            {                
                                date: '10/01/2020 16:15:22',                
                                text: 'Tutto fatto!',                
                                status: 'received'            
                            },
                        ],    
                    },
                
                    {        
                        name: 'Fabio',        
                        avatar: './../img/avatar_2.jpg',        
                        visible: true,        
                        messages: 
                            [            
                                {                
                                    date: '20/03/2020 16:30:00',                
                                    text: 'Ciao come stai',                
                                    status: 'sent'
                                },            
                                {                
                                    date: '20/03/2020 16:30:55',                
                                    text: 'Bene grazie! Stasera ci vediamo?',                
                                    status: 'received'            
                                },            
                                {                
                                    date: '20/03/2020 16:35:00',                
                                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',                
                                    status: 'sent'            
                                }
                            ],
                    }

                ]
        },  
        methods : {
            // controllo quello che scrive nell'iput di ricerca e cerco 
            controlValue(){
                let valoreSearch = this.cerca;
                let valoreCapitalize = valoreSearch.charAt(0).toUpperCase() + valoreSearch.slice(1).toLowerCase();

                if(valoreSearch.length > 1) {
                    this.contacts.forEach((element) => {
                        element.visible = false;
                        if(element.name.includes(valoreSearch) || element.name.includes(valoreCapitalize)) {
                            element.visible = true;
                        } else {
                            element.messages.forEach((messaggio)=> {
                                if(messaggio.text.includes(valoreSearch) || messaggio.text.includes(valoreCapitalize)){
                                    element.visible = true
                                }
                            })
                            
                        }
    
                    });
                }
                
            },
            // clicco e prendo l'indice della elemento cosi da prendere la chat 
            chatta(indice){
                this.index = indice;
                 let lunghezzaMessaggi =this.contacts[indice].messages.length;
                 console.log(lunghezzaMessaggi);
            },
            // controllo la lunghezza dell'input e se vuoto mostro tutte le chat 
            lunghezza() {
                if(this.cerca.length == 0) {
                    for(let i = 0;i < this.contacts.length; i++) {
                        this.contacts[i].visible = true;
                    }
                }
            },
            inviaMessaggio() {
                this.contacts[this.index].messages.push({
                    date: this.ore + ':' + this.minuti + ':' + this.secondi,                
                    text: this.mex,                
                    status: 'sent'
                });
                this.mex = '';
                

                setTimeout(()=>{
                    console.log(this.answer.length);
                    let numRand = Math.floor(Math.random() * this.answer.length);
                    this.contacts[this.index].messages.push({
                        date: this.ore + ':' + this.minuti + ':' + this.secondi,                
                        text: this.answer[numRand],                
                        status: 'received'
                    });
                },2000)

            }

        }  
    });

