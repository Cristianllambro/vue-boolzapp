const app = new Vue ({
    el: '#root',
    data: {
        currentChatIndex: 0,
        strInput: '',

        newMessage: {
            mess: 'Ok',
            message: '',
        },

        arrChats:
        [
            {
                name: 'Michele',
                img: 'avatar_1.jpg',
                mess: 'Tutto fatto!',
                text: 
                [
                    {
                        message: 'Hai portato a spasso il cane?',
                    },
                    {
                        message: 'Ricordati di stendere i panni',
                    },
                ],
            },
            {
                name: 'Fabio',
                img: 'avatar_2.jpg',
                mess: 'Certo',
                text:
                [
                    {
                        message: 'Hai studiato CSS?',
                    },
                ],
            },
            {
                name: 'Samuele',
                img: 'avatar_3.jpg',
                mess: 'Sempre forza Roma!',
                text:
                [
                    {
                        message: 'Forza Roma!',
                    },
                    {
                        message: 'Non tifare Lazio!',
                    },
                ],
            },
            {
                name: 'Alessandro B.',
                img: 'avatar_4.jpg',
                mess: 'Si!',
                text:
                [
                    {
                        message: 'Hai capito Bootstrap?',
                    },
                ],
            },
            {
                name: 'Alessandro U.',
                img: 'avatar_5.jpg',
                mess: 'Hahahahahahaha!',
                text:
                [
                    {
                        message: 'Come si fa quella cosa in JS?',
                    },
                    {
                        message: 'Non ho capito nulla delle funzioni!',
                    },
                ],
            },
            {
                name: 'Claudia',
                img: 'avatar_6.jpg',
                mess: 'Va bene',
                text:
                [
                    {
                        message: 'Stasera usciamo?',
                    },
                    {
                        message: 'Andiamo nel bar nuovo',
                    },
                ],
            },
            {
                name: 'Federico',
                img: 'avatar_7.jpg',
                mess: 'Va bene',
                text:
                [
                    {
                        message: 'Vado a giocare a calcio',
                    },
                    {
                        message: 'Vieni?',
                    },
                ],
            },
            {
                name: 'Davide',
                img: 'avatar_8.jpg',
                mess: 'Va bene',
                text:
                [
                    {
                        message: 'Facciamo una partita a D&D?',
                    },
                    {
                        message: 'Una bella campagna con il mago',
                    },
                ],
            },
        ],
    },
    methods: {
        addMessage() {
            if(this.newMessage.text != '') {
                this.newMessage.message == this.strInput;
                this.arrChats.push(this.newMessage)
                console.log(this.newMessage)

            }
        }
    }
})