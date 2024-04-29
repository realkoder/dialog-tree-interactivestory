import { StoryType } from "@/types/StoryType";

const STORIES: StoryType[] = [
    {
        id: 1,
        header: "I Landsbyen",
        description: "Du er en ung eventyrer, der lige er vågnet i din hjemlandsby. Solen skinner og folkemængder samler sig omkring markedet. En ældgammel legende fortæller om en forsvunden skat gemt dybtinde i skoven.",
        choices: [
            {
                id: 2,
                header: "Gå til markedet",
                description: "Besøg markedet for at samle forsyninger og information."
            }
        ]
    },

    {
        id: 2,
        header: "På Markedet",
        description: "Markedet summer af liv. Handlende fra fjerne lande sælger eksotiske varer. Du spejder efter noget, der kan hjælpe på din rejse.",
        choices: [{
            id: 4,
            header: "Køb udstyr",
            description: " Køb nødvendigt udstyr for dine kommende eventyr.",
        },
        {
            id: 5,
            header: "Hør rygter",
            description: "Hør om hemmelige passager og farlige væsner, der beskytter skatten."
        }]
    },

    {
        id: 3,
        header: "Møde med Ældsten",
        description: "Ældsten byder dig velkommen og fortæller dig om skatten og de prøvelser, der venter. Han giver dig et gammelt kort, der skal guide din vej.",
        choices: [
            {
                id: 6,
                header: "Tak og farvel",
                description: "Tak ældsten og forlad landsbyen for at påbegynde din rejse."
            }
        ]
    },

    {
        id: 4,
        header: "Udstyret og Klar",
        description: "Med nyt udstyr i hånden er du klar til at tage ud på din eventyr. Skoven venter.",
        choices: [
            {
                id: 6,
                header: "Begynd rejsen",
                description: "Tag afsted mod skoven for at finde skatten."
            }
        ]
    },

    {
        id: 5,
        header: "Rygterne Fortæller",
        description: "Du hører om en hemmelig passage, der kan lede dig sikkert gennem skoven. Du lærer også om de væsner, der beskytter skatten.",
        choices: [{
            id: 6,
            header: "Tag til skoven",
            description: "Med denne viden, er du mere forberedt på farerne.",
        }]
    },

    {
        id: 6,
        header: "På Eventyr",
        description: "Du forlader landsbyen og begiver dig ind i skoven. Skovstierne er tætte og mørket lurer. Et eventyr venter.",
        choices: [
            {
                id: 7,
                header: "Fortsæt frem",
                description: "Gå dybere ind i skoven mod Skovens Hjerte."
            },
            {
                id: 8,
                header: "Slå lejr",
                description: "Beslut dig for at slå lejr for natten og fortsætte din rejse ved daggry."
            }
        ]
    },

    {
        id: 7,
        header: "Ved Skovens Hjerte",
        description: "Du ankommer til skovens centrum, hvor legenden siger skatten er gemt. Men du er ikke alene; et væsen bevogter skatten.",
        choices: [{
            id: 9,
            header: "Kamp",
            description: "Forbered dig på kamp mod væsenet.",
        }, {
            id: 10,
            header: "Snige",
            description: "Forsøg at snige dig forbi væsenet og få fat på skatten.",
        }]
    },

    {
        id: 8,
        header: "Natten i Skoven",
        description: "Du tilbringer natten i skoven. Natten er fyldt med lyde, men du holder dig skjult og sikkert. Ved daggry er du klar til at fortsætte.",
        choices: [
            {
                id: 7,
                header: "Fortsæt ved daggry",
                description: "Fortsæt din færd mod Skovens Hjerte ved første lys.",
            }
        ]
    },

    {
        id: 9,
        header: "Natten i Skoven",
        description: " Du bekæmper væsenet med tapperhed. Efter en lang kamp, falder det til jorden, udmattet og overvundet.",
        choices: undefined
    },

    {
        id: 10,
        header: "Skatten Er Nær",
        description: "Du sniger dig forbi væsenet og finder skatten. Du er nu rig og berømt.",
        choices: undefined
    },
]

export default STORIES;