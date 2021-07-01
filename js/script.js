const app = new Vue(
    {
        el :'#app',

        data : {
            cerca : '',
            parolaSearch:'',
            mex : '',
            index : 0,
            answer : ['ciao','come stai?','no','si'],
            incrementoScroll : 60,
            info : false,
            typing : false,
            utente : {
                name: 'Emmanuel', 
                avatar: 'img/avatar_8.jpg'
            },

            contacts: 
                [  
                    {       
                        name: 'Michele', 
                        avatar: 'img/avatar_1.jpg',
                        visible: true,
                        messages: 
                        [            
                            {                
                                date: '10/01/2020 15:30:55',
                                text: 'Hai portato a spasso il cane?',
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double',
                                openOption : 'false',
                                show : false

                            },
                            {                
                                date: '10/01/2020 15:50:00',
                                text: 'Ricordati di dargli da mangiare',                
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double',
                                openOption : 'false',
                                show : false

                            },
                            {                
                                date: '10/01/2020 16:15:22',                
                                text: 'Tutto fatto!',                
                                status: 'received',
                                openOption : 'false',
                                show : false

                            },
                        ],    
                    },
                
                    {        
                        name: 'Fabio',        
                        avatar: 'img/avatar_2.jpg',        
                        visible: true,        
                        messages: 
                            [            
                                {                
                                    date: '20/03/2020 16:30:00',                
                                    text: 'Ciao come stai',                
                                    status: 'sent',
                                    colorChecked : 'blue',
                                    check : ' fas fa-check-double',
                                    openOption : 'false',
                                    show : false
                                },            
                                {                
                                    date: '20/03/2020 16:30:55',                
                                    text: 'Bene grazie! Stasera ci vediamo?',                
                                    status: 'received',
                                    openOption :'false',
                                    show : false            
                                },            
                                {                
                                    date: '20/03/2020 16:35:00',                
                                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',                
                                    status: 'sent',
                                    colorChecked : 'blue',
                                    check : ' fas fa-check-double',
                                    openOption :'false',
                                    show : false            
                                }
                            ],
                    },
                    {       
                        name: 'Marco', 
                        avatar: 'img/avatar_3.jpg',
                        visible: true,
                        messages: 
                        [            
                            {                
                                date: '11/01/2020 15:30:40',
                                text: 'che fai?',
                                status: 'received',
                                openOption : 'false',
                                show : false
         
                            },
                            {                
                                date: '11/01/2020 15:50:00',
                                text: 'niente te?',                
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double',
                                openOption : 'false',
                                show : false            
                            },
                            {                
                                date: '11/01/2020 16:15:22',                
                                text: 'tante belle cose!',                
                                status: 'received',
                                openOption : 'false',
                                show : false
                        
                            },
                        ],    
                    },
                    {       
                        name: 'Martina', 
                        avatar: 'img/avatar_6.jpg',
                        visible: true,
                        messages: 
                        [            
                            {                
                                date: '10/01/2020 15:30:55',
                                text: 'ti ho visto ieri',
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double',
                                openOption : 'false',
                                show : false            
                            },
                            {                
                                date: '10/01/2020 15:50:00',
                                text: 'dove',                
                                status: 'received',
                                openOption : 'false',
                                show : false
          
                            },
                            {                
                                date: '10/01/2020 16:15:22',                
                                text: 'a barcellona!',                
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double',
                                openOption : 'false',
                                show : false              
                            },
                        ],    
                    },
                    {       
                        name: 'Gaia', 
                        avatar: 'img/avatar_7.jpg',
                        visible: true,
                        messages: 
                        [            
                            {                
                                date: '10/01/2020 15:30:55',
                                text: 'usciamo?',
                                status: 'sent',
                                openOption : 'false',
                                show : false
           
                            },
                            {                
                                date: '10/01/2020 15:34:00',
                                text: 'no',                
                                status: 'receeived',
                                openOption : 'false',
                                show : false
          
                            },
                            {                
                                date: '16/01/2020 26:11:22',                
                                text: 'va bene!',                
                                status: 'sent',
                                colorChecked : 'blue',
                                check : ' fas fa-check-double',
                                openOption : 'false',
                                show : false             
                            },
                        ],    
                    },

            ],
            emoji : ['😃','😂','😉','😎','😓','😈','😍','😡','😏']
            
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
                    }  // else {
                    //      element.messages.forEach((messaggio)=> {
                    //          if(messaggio.text.includes(valoreSearch) || messaggio.text.includes(valoreCapitalize)){
                    //              element.visible = true
                    //          }
                    //      })
                        
                    //  }

                });
                
                
            },
            // clicco e prendo l'indice della elemento cosi da prendere la chat 
            chatta(indice){
                this.index = indice;
                 let lunghezzaMessaggi =this.contacts[indice].messages.length;
                 document.getElementById('insert-field').focus();
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
                if(this.mex) {
                    // let tempo = this.prendiTempo();

                    this.contacts[this.index].messages.push({
                        date: "Oggi " + dayjs().format("HH:mm:ss"),                
                        text: this.mex,                
                        status: 'sent',
                        colorChecked: '',
                        check : ' fas fa-check',
                        openOption : 'false',
                        show : false              
                    });
                    this.mex = '';

                
                    
                    setTimeout(()=>{
                        let messaggiLength = this.contacts[this.index].messages.length;
                        this.contacts[this.index].messages[messaggiLength - 1].check = ' fas fa-check-double';
                        this.contacts[this.index].messages[messaggiLength - 1].colorChecked = 'blue';
                        this.typing = true;
                    },1000);
                    // scrollo la funzione all'ultimo mio messaggio 
                    setTimeout(() => {
                        this.scrollFunction();
                    }, 600);

                    setTimeout(()=>{
                        // tempo = this.prendiTempo();
                        let numRand = Math.floor(Math.random() * this.answer.length);
                        this.contacts[this.index].messages.push({
                            date: "Oggi " + dayjs().format("HH:mm:ss"),                
                            text: this.answer[numRand],                
                            status: 'received',
                            openOption : 'false',
                            show : false              
                        });
                        this.typing = false;
                    },2000);
                    // scrollo la funzione all'ultimo messaggio ricevuto

                    setTimeout(() => {
                        this.scrollFunction();
                    }, 2200);
                }

            },
            prendiTempo() {
                this.ore = (dayjs().hour() < 10) ? "0"+ dayjs().hour(): dayjs().hour();
                this.minuti = (dayjs().minute() < 10) ? "0"+ dayjs().minute(): dayjs().minute();
                this.secondi = (dayjs().second() < 10) ? "0"+ dayjs().second(): dayjs().second();

                return [this.ore,this.minuti,this.secondi]
            },
            scrollFunction() {
                const myElement = document.getElementById("container-messaggi");
                let altezza = myElement.clientHeight;
                myElement.scrollTop = altezza + this.incrementoScroll;
                this.incrementoScroll += 60;
            },
            opzioniMessaggio(messaggi,indice){
                this.hidePopup()
                this.contacts[this.index].messages[indice].openOption = true;
                if(indice == this.contacts[this.index].messages.length - 1 ){
                    setTimeout(this.scrollFunction, 100);
                }
            },
            hidePopup(){
                this.contacts[this.index].messages.forEach((element) => {
                    element.openOption = false;
                    element.show = false;
                })
                this.info = false;
                setTimeout(()=>{
                    document.querySelector('.block-emoji').style.display = "none";
                },100);
            },
            cancella(indice){
                this.contacts[this.index].messages.splice(indice,1); 
            },
            getInfo() {
                this.info = true;
            },
            showArrow(indice){
                this.contacts[this.index].messages[indice].show = true;
            },
            hideArrow(indice) {
                if(this.contacts[this.index].messages[indice].openOption == false) {
                    this.contacts[this.index].messages[indice].show = false;
                }

            },
            openEmoji(){
                document.querySelector('.block-emoji').style.display = "flex";
            },
            emojInsert(indice) {
                this.mex += this.emoji[indice];
                document.getElementById('insert-field').focus();
                setTimeout(()=>{
                    document.querySelector('.block-emoji').style.display = "none";
                },100);
            }
        }
    });

