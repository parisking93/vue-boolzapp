const app = new Vue(
    {
        el :'#app',

        data : {
            cerca : '',
            parolaSearch:'',
            mex : '',
            index : 0,
            counter : 0,
            answer : ['ciao','come stai?','no','si'],
            utente : {
                name: 'Emmanuel', 
                avatar: './../img/avatar_8.jpg'
            },

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
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double'            
                            },
                            {                
                                date: '10/01/2020 15:50:00',
                                text: 'Ricordati di dargli da mangiare',                
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double'            
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
                                    status: 'sent',
                                    colorChecked : 'blue',
                                    check : ' fas fa-check-double'
                                },            
                                {                
                                    date: '20/03/2020 16:30:55',                
                                    text: 'Bene grazie! Stasera ci vediamo?',                
                                    status: 'received'            
                                },            
                                {                
                                    date: '20/03/2020 16:35:00',                
                                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',                
                                    status: 'sent',
                                    colorChecked : 'blue',
                                    check : ' fas fa-check-double'            
                                }
                            ],
                    },
                    {       
                        name: 'Marco', 
                        avatar: './../img/avatar_3.jpg',
                        visible: true,
                        messages: 
                        [            
                            {                
                                date: '11/01/2020 15:30:40',
                                text: 'che fai?',
                                status: 'received',
         
                            },
                            {                
                                date: '11/01/2020 15:50:00',
                                text: 'niente te?',                
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double'            
                            },
                            {                
                                date: '11/01/2020 16:15:22',                
                                text: 'tante belle cose!',                
                                status: 'received'            
                            },
                        ],    
                    },
                    {       
                        name: 'Martina', 
                        avatar: './../img/avatar_6.jpg',
                        visible: true,
                        messages: 
                        [            
                            {                
                                date: '10/01/2020 15:30:55',
                                text: 'ti ho visto ieri',
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double'            
                            },
                            {                
                                date: '10/01/2020 15:50:00',
                                text: 'dove',                
                                status: 'received',
          
                            },
                            {                
                                date: '10/01/2020 16:15:22',                
                                text: 'a barcellona!',                
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double'              
                            },
                        ],    
                    },
                    {       
                        name: 'Gaia', 
                        avatar: './../img/avatar_7.jpg',
                        visible: true,
                        messages: 
                        [            
                            {                
                                date: '10/01/2020 15:30:55',
                                text: 'usciamo?',
                                status: 'sent',
           
                            },
                            {                
                                date: '10/01/2020 15:34:00',
                                text: 'no',                
                                status: 'receeived',
          
                            },
                            {                
                                date: '16/01/2020 26:11:22',                
                                text: 'va bene!',                
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double'             
                            },
                        ],    
                    },

                ]
        },  
        methods : {
            // controllo quello che scrive nell'iput di ricerca e cerco 
            controlValue(){
                let valoreSearch = this.cerca;
                let valoreCapitalize = valoreSearch.charAt(0).toUpperCase() + valoreSearch.slice(1).toLowerCase();

                
                this.contacts.forEach((element) => {
                    element.visible = false;
                    if(element.name.includes(valoreSearch) || element.name.includes(valoreCapitalize)) {
                        element.visible = true;
                    }// } else {
                    //     element.messages.forEach((messaggio)=> {
                    //         if(messaggio.text.includes(valoreSearch) || messaggio.text.includes(valoreCapitalize)){
                    //             element.visible = true
                    //         }
                    //     })
                        
                    // }

                });
                
                
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
                let tempo = this.prendiTempo();

                this.contacts[this.index].messages.push({
                    date: tempo[0] + ':' + tempo[1] + ':' + tempo[2],                
                    text: this.mex,                
                    status: 'sent',
                    colorChecked: '',
                    check : ' fas fa-check'
                });
                this.mex = '';
                setTimeout(()=>{
                    let messaggiLength = this.contacts[this.index].messages.length;
                    this.contacts[this.index].messages[messaggiLength - 1].check = ' fas fa-check-double';
                    this.contacts[this.index].messages[messaggiLength - 1].colorChecked = 'blue';
                },1000);

                setTimeout(()=>{
                    tempo = this.prendiTempo();
                    let numRand = Math.floor(Math.random() * this.answer.length);
                    this.contacts[this.index].messages.push({
                        date: tempo[0] + ':' + tempo[1] + ':' + tempo[2],                
                        text: this.answer[numRand],                
                        status: 'received'
                    });
                },2000);




            },
            prendiTempo() {
                this.ore = (dayjs().hour() < 10) ? "0"+ dayjs().hour(): dayjs().hour();
                this.minuti = (dayjs().minute() < 10) ? "0"+ dayjs().minute(): dayjs().minute();
                this.secondi = (dayjs().second() < 10) ? "0"+ dayjs().second(): dayjs().second();

                return [this.ore,this.minuti,this.secondi]
            }

        }  
    });

