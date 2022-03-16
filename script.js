const app = new Vue ({
    el: '#root',
    data: {
        currentChatIndex: 0,

        newMessage: {
            message: '',
            sent: true,
        },

        arrChats:
        [
            {
                name: 'Michele',
                img: 'avatar_1.jpg',
                date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                time: luxon.DateTime.now().toFormat("HH:mm"),
                text: 
                [
                    {
                        message: 'Hai portato a spasso il cane?',
                        sent: true,
                        
                    },
                    {
                        message: 'Ricordati di stendere i panni',
                        sent: true,
                    },
                    {
                        message: 'Tutto fatto!',
                        sent: false,
                    },
                ],
            },
            {
                name: 'Fabio',
                img: 'avatar_2.jpg',
                date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                time: luxon.DateTime.now().toFormat("HH:mm"),
                text:
                [
                    {
                        message: 'Hai studiato CSS?',
                        sent: true,   
                    },
                    {
                        message: 'Certo',
                        sent: false,
                    },
                ],
            },
            {
                name: 'Samuele',
                img: 'avatar_3.jpg', 
                date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                time: luxon.DateTime.now().toFormat("HH:mm"),    
                text:
                [
                    {
                        message: 'Forza Roma!',
                        sent: true,
                    },
                    {
                        message: 'Non tifare Lazio!',
                        sent: true,
                    },
                    {
                        message: 'Sempre forza Roma!',
                        sent: false
                    },
                ],
            },
            {
                name: 'Alessandro B.',
                img: 'avatar_4.jpg',
                date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                time: luxon.DateTime.now().toFormat("HH:mm"),
                text:
                [
                    {
                        message: 'Hai capito Bootstrap?',
                        sent: true,
                    },
                    {
                        message: 'Si!',
                        sent: false,
                    },
                ],
            },
            {
                name: 'Alessandro U.',
                img: 'avatar_5.jpg',
                date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                time: luxon.DateTime.now().toFormat("HH:mm"),
                text:
                [
                    {
                        message: 'Come si fa quella cosa in JS?',
                        sent: true,
                    },
                    {
                        message: 'Non ho capito nulla delle funzioni!',
                        sent: true,
                    },
                    {
                        message: 'Certo',
                        sent: false,
                    },
                ],
            },
            {
                name: 'Claudia',
                img: 'avatar_6.jpg',
                date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                time: luxon.DateTime.now().toFormat("HH:mm"),
                text:
                [
                    {
                        message: 'Stasera usciamo?',
                        sent: true,
                    },
                    {
                        message: 'Andiamo nel bar nuovo',
                        sent: true,
                    },
                    {
                        message: 'Va bene',
                        sent: false,
                    },
                ],
            },
            {
                name: 'Federico',
                img: 'avatar_7.jpg',
                date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                time: luxon.DateTime.now().toFormat("HH:mm"),
                text:
                [
                    {
                        message: 'Vado a giocare a calcio',
                        sent: true,
                    },
                    {
                        message: 'Vieni?',
                        sent: true,
                    },
                    {
                        message: 'Va bene',
                        sent: false,
                    },
                ],
            },
            {
                name: 'Davide',
                img: 'avatar_8.jpg',
                date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                time: luxon.DateTime.now().toFormat("HH:mm"),
                text:
                [
                    {
                        message: 'Facciamo una partita a D&D?',
                        sent: true,
                    },
                    {
                        message: 'Una bella campagna con il mago',
                        sent: true,
                    },
                    {
                        message: 'Va bene',
                        sent: false,
                    },
                ],
            },
        ],
    },
    methods: {

        addMessage() {
            let newMessage = {...this.newMessage};
            this.newMessage.message = '';
            this.postAddMessage(newMessage)
            setTimeout(this.otherMess, 1000);
        },

        postAddMessage(newMessage) {
            this.arrChats[this.currentChatIndex].text.push(newMessage);
        },

        otherMess(){
            this.postAddMessage({
                message: 'ok',
                sent: false,
            });
        },

        filterName() {

            const NameFilter = this.arrChats.filter(arrChats => this.arrChats.name == this.name);
            return NameFilter;
        }
    },
});