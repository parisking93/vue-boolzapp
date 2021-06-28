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
        methods : {
            chatta(contact){
                document.getElementById('chat-name').innerHTML = contact.name;
                document.getElementById('user-foto').src = contact.avatar;
            },
            search(){
                for (let i = 0; i < this.contacts.length;i++) {
                    this.contacts[1].visible = false;
                    console.log(this.contacts[i].visible);
                    if(this.cerca == this.contacts[i].name || this.cerca == this.contacts[i].name.toLowerCase()) {
                        console.log(this.contacts[i].visible);
                        this.contacts[i].visible = true;
                    }
                    
                }

            }

        }
    });

