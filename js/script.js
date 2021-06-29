const app = new Vue(
    {
        el :'#app',

        data : {
            cerca : '',
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
        mounted() {
            // inserisco i messaggi del primo utente 
            for(let i = 0;i < this.contacts[0].messages.length;i++) {
            
                if (this.contacts[0].messages[i].status == 'sent') {
                    document.getElementById('container-messaggi').innerHTML += `
                    <div class="messaggi green">
                        ${this.contacts[0].messages[i].text}
                        <div class="data">${this.contacts[0].messages[i].date} </div>
                     </div>
                    `
                } else {
                    document.getElementById('container-messaggi').innerHTML += `
                    <div class="messaggi white"> 
                        ${this.contacts[0].messages[i].text}
                        <div class="data">${this.contacts[0].messages[i].date} </div>
                    </div>
                    `
                }
            }
        },
        methods : {
            // clicco e prendo la chat 
            chatta(contact){
                document.getElementById('chat-name').innerHTML = contact.name;
                document.getElementById('user-foto').src = contact.avatar;
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
            // cerco se ci sono le chat cercate 
            search(){

                for (let i = 0; i < this.contacts.length;i++) {
                    this.contacts[i].visible = false;
                    if(this.cerca == this.contacts[i].name || this.cerca == this.contacts[i].name.toLowerCase()) {
                        this.contacts[i].visible = true;
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
            }

        }  
    });

