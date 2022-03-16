const app = new Vue ({
    el: '#root',
    data: {
        currentChatIndex: 0,
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
                        status: 'sent',
                    },
                    {
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
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
                        status: 'sent',
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
                        status: 'sent',
                    },
                    {
                        message: 'Ao non tifare Lazio!',
                        status: 'sent',
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
                        status: 'sent',
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
                        status: 'sent',
                    },
                    {
                        message: 'Non ho capito nulla delle funzioni!',
                        status: 'sent',
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
                        status: 'sent',
                    },
                    {
                        message: 'Andiamo nel bar nuovo',
                        status: 'sent',
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
                        status: 'sent',
                    },
                    {
                        message: 'Vieni?',
                        status: 'sent',
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
                        status: 'sent',
                    },
                    {
                        message: 'Una bella campagna con il mago',
                        status: 'sent',
                    },
                ],
            },
        ],
    },
})