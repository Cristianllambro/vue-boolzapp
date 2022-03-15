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
                name: 'Samuele',
                img: 'avatar_3.jpg',
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
                    {
                        message: 'Tutto fatto!',
                        status: 'recived',
                    },
                ],
            },
            {
                name: 'Alessandro B.',
                img: 'avatar_4.jpg',
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
                    {
                        message: 'Tutto fatto!',
                        status: 'recived',
                    },
                ],
            },
            {
                name: 'Alessandro U.',
                img: 'avatar_5.jpg',
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
                    {
                        message: 'Tutto fatto!',
                        status: 'recived',
                    },
                ],
            },
            {
                name: 'Claudia',
                img: 'avatar_6.jpg',
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
                    {
                        message: 'Tutto fatto!',
                        status: 'recived',
                    },
                ],
            },
            {
                name: 'Federico',
                img: 'avatar_7.jpg',
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
                    {
                        message: 'Tutto fatto!',
                        status: 'recived',
                    },
                ],
            },
            {
                name: 'Davide',
                img: 'avatar_8.jpg',
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
                    {
                        message: 'Tutto fatto!',
                        status: 'recived',
                    },
                ],
            },
        ],
    },
})