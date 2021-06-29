const app = new Vue(
    {
        el :'#app',

        data : {
            cerca : '',
            parolaSearch:'',
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
                                text: 'Ricordati di dargli da mangiare',                status: 'sent'            
                            },
                            {                
                                date: '10/01/2020 16:15:22',                text: 'Tutto fatto!',                status: 'received'            
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
            // clicco e prendo la chat 
            chatta(contact){
                const data = contact.messages[contact.messages.length - 1].date.slice(10);
                document.getElementById('chat-name').innerHTML = contact.name;
                document.getElementById('user-foto').src = contact.avatar;
                document.getElementById('last-access').innerHTML = ' ' + data;
                document.getElementById('container-messaggi').innerHTML = '';
                for(let i = 0;i < contact.messages.length;i++) {
                    if (contact.messages[i].status == 'sent') {
                        document.getElementById('container-messaggi').innerHTML += `
                        <div class="messaggi green"> 
                            ${contact.messages[i].text}
                            <div class="data">${contact.messages[i].date} </div>
                        </div>
                        `
                    } else {
                        document.getElementById('container-messaggi').innerHTML += `
                        <div class="messaggi white"> 
                            ${contact.messages[i].text}
                            <div class="data">${contact.messages[i].date} </div>
                        </div>
                        `
                    }
                }
            },
            // controllo la lunghezza dell'input e se vuoto mostro tutte le chat 
            lunghezza() {
                if(this.cerca.length == 0) {
                    for(let i = 0;i < this.contacts.length; i++) {
                        this.contacts[i].visible = true;
                    }
                }
            },
            controlValue(){
                let valoreSearch = document.getElementById('search-chat').value;
                let valoreCapitalize = valoreSearch.charAt(0).toUpperCase() + valoreSearch.slice(1).toLowerCase();

                if(valoreSearch.length > 2) {
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
                
            }

        }  
    });

