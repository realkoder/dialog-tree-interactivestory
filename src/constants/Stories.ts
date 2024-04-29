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
            },
            {
                id: 3,
                header: "Møde med Ældsten",
                description: "Besøg landsbyens ældste for at lære mere om legenden."
            },
            {
                id: 11,
                header: "Undersøg området",
                description: "Gå en tur rundt i landsbyen for at få en fornemmelse af stedet."
            }
        ]
    },

    {
        id: 2,
        header: "På Markedet",
        description: "Markedet summer af liv. Handlende fra fjerne lande sælger eksotiske varer. Du spejder efter noget, der kan hjælpe på din rejse.",
        choices: [
            {
                id: 4,
                header: "Køb udstyr",
                description: "Køb nødvendigt udstyr for dine kommende eventyr."
            },
            {
                id: 5,
                header: "Hør rygter",
                description: "Hør om hemmelige passager og farlige væsner, der beskytter skatten."
            },
            {
                id: 12,
                header: "Hjælp en handlende",
                description: "Hjælp en lokal handlende med et problem og måske får du noget nyttigt i gengæld."
            }
        ]
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
            },
            {
                id: 13,
                header: "Stil flere spørgsmål",
                description: "Spørg Ældsten om mere specifik information om skatten og dens vagtere."
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
            },
            {
                id: 22,
                header: "Undersøg mærkelige lyde",
                description: "Følg kilden til nogle mærkelige lyde, der kan være et dyr eller noget mere mystisk."
            },
            {
                id: 23,
                header: "Saml urter og ressourcer",
                description: "Brug noget tid på at samle nyttige urter og ressourcer til din rejse."
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

    {
        id: 13,
        header: "Visdom fra Ældsten",
        description: "Ældsten deler historier og dybere hemmeligheder om skatten. Du lærer om skattens historie og dens tidligere beskyttere.",
        choices: [
            {
                id: 6,
                header: "Gør dig klar til rejsen",
                description: "Med ny viden og velsignelser fra Ældsten, forbereder du dig til rejsen."
            },
            {
                id: 14,
                header: "Spørg om den forsvundne helt",
                description: "Få mere at vide om den helt, der sidst søgte efter skatten, men aldrig vendte tilbage."
            },
            {
                id: 15,
                header: "Undersøg gamle artefakter",
                description: "Se nærmere på nogle af de artefakter, som Ældsten har samlet over årene."
            }
        ]
    },

    {
        id: 14,
        header: "Historien om den Forsvundne Helt",
        description: "Ældsten fortæller om en modig helt, der en gang søgte skatten. Hans udstyr blev fundet, men han selv forsvandt sporløst.",
        choices: [
            {
                id: 6,
                header: "Tak Ældsten og fortsæt",
                description: "Med historien i tankerne, føler du en fornyet beslutsomhed for din egen færd."
            },
            {
                id: 16,
                header: "Søg efter heltenes efterladte spor",
                description: "Beslut dig for at finde stedet, hvor helten sidst blev set, måske finder du nyttige ledetråde."
            }
        ]
    },

    {
        id: 15,
        header: "Artefakter af Fortiden",
        description: "Du studerer gamle kort og værktøjer, som har tilhørt tidligere eventyrere. Ældsten viser dig et særligt kompas, der peger mod skjulte stier.",
        choices: [
            {
                id: 17,
                header: "Tag kompasset",
                description: "Ældsten giver dig kompasset som en gave for at hjælpe dig på din rejse."
            },
            {
                id: 6,
                header: "Fortsæt uden kompasset",
                description: "Du vælger at stole på dine egne evner og kortet du allerede har."
            }
        ]
    },

    {
        id: 16,
        header: "Heltenes Sidste Kendte Sted",
        description: "Du ankommer til en gammel lejrplads, omgivet af spor og efterladte genstande. Måske kan du finde noget brugbart.",
        choices: [
            {
                id: 18,
                header: "Undersøg lejren nærmere",
                description: "Søg gennem lejren for efterladte genstande eller spor."
            },
            {
                id: 6,
                header: "Fortsæt din rejse",
                description: "Efter et kort stop, beslutter du at fortsætte din vej mod skatten."
            }
        ]
    },

    {
        id: 17,
        header: "Med Kompas mod Skatten",
        description: "Med det magiske kompas i hånden afslører du stier, der var skjulte før. Din rejse bliver lettere, men også mere spændende.",
        choices: [
            {
                id: 6,
                header: "Følg de nye stier",
                description: "Brug kompasset til at finde en sikrere eller hurtigere vej gennem skoven."
            },
            {
                id: 19,
                header: "Udforsk en mystisk grotte",
                description: "Kompassets nål peger mod en grotte, der ikke er markeret på dit kort."
            }
        ]
    },

    {
        id: 18,
        header: "Fund i Lejren",
        description: "Du finder ikke kun personlige genstande, men også et dagbog fra den forsvundne helt, som indeholder værdifulde oplysninger.",
        choices: [
            {
                id: 6,
                header: "Læs dagbogen og fortsæt",
                description: "Du bruger informationen fra dagbogen til at undgå farer og fremskynde din søgen."
            },
            {
                id: 19,
                header: "Følg et nyt spor",
                description: "Dagbogen nævner en hemmelig passage ikke langt fra lejren."
            }
        ]
    },

    {
        id: 19,
        header: "Den Mystiske Grotte",
        description: "Grotten er dyb og mørk, men måske gemmer den på mere end bare skygger. Der kunne være skjulte skatte eller vigtige ledetråde.",
        choices: [
            {
                id: 20,
                header: "Udforsk dybere ind i grotten",
                description: "Tænd et fakkel og vov dig dybere ind i grottens mysterier."
            },
            {
                id: 6,
                header: "Vend tilbage til hovedstien",
                description: "Beslutter at grottens risici ikke er værd at forfølge og vender tilbage."
            }
        ]
    },

    {
        id: 20,
        header: "Grottens Hjerte",
        description: "I grottens hjerte finder du spor efter en ældgammel civilisation og måske nøglen til at lokalisere skatten.",
        choices: [
            {
                id: 21,
                header: "Tag artefakter med dig",
                description: "Saml nogle af de fundne artefakter for at bruge dem senere."
            },
            {
                id: 6,
                header: "Noter placeringen og fortsæt",
                description: "Marker grottens placering på dit kort og fortsæt din rejse mod skatten."
            }
        ]
    },

    {
        id: 21,
        header: "Artefakternes Hemmeligheder",
        description: "Efter at have samlet artefakterne opdager du, at de indeholder spor af gammel magi. Disse artefakter kunne være nøglen til at låse op for yderligere hemmeligheder eller endda forbedre dine evner på din rejse.",
        choices: [
            {
                id: 24,
                header: "Studér artefakterne",
                description: "Brug noget tid på at studere artefakterne for at forstå deres oprindelse og magiske egenskaber."
            },
            {
                id: 25,
                header: "Brug artefakterne",
                description: "Beslut dig for at bruge artefakterne med det samme for at se, hvilken indflydelse de har på dine evner og omgivelser."
            },
            {
                id: 6,
                header: "Opbevar artefakterne sikkert",
                description: "Vælg at opbevare artefakterne sikkert i din taske, indtil du finder et mere passende tidspunkt eller person til at hjælpe med at dechifrere dem."
            }
        ]
    },

    {
        id: 22,
        header: "Mystisk Opgørelse",
        description: "Du opdager, at lydene stammer fra en gruppe eventyrere, der også er på skattejagt. Du kan vælge at samarbejde med dem eller fortsætte på egen hånd.",
        choices: [
            {
                id: 6,
                header: "Samarbejde",
                description: "Slut dig til gruppen og del oplysninger, hvilket kan øge dine chancer for succes."
            },
            {
                id: 6,
                header: "Fortsæt alene",
                description: "Hold dine opdagelser for dig selv og fortsæt din rejse alene."
            }
        ]
    },
    
    {
        id: 23,
        header: "Nyttige Fund",
        description: "Din søgen efter urter fører dig til et skjult vandfald, hvor du finder sjældne urter og en gammel artefakt.",
        choices: [
            {
                id: 6,
                header: "Undersøg artefakten",
                description: "Tag artefakten med dig og forsøg at lære mere om dens oprindelse og brug."
            },
            {
                id: 6,
                header: "Ignorer artefakten",
                description: "Fokusér på de urter, du har fundet, og fortsæt din rejse uden artefakten."
            }
        ]
    },

    {
        id: 24,
        header: "Forståelse af Artefakter",
        description: "Din indsats for at forstå artefakterne afslører, at de tilhørte en gammel troldmand, der kendte til hemmelige stier og beskyttelsesformularer.",
        choices: [
            {
                id: 26,
                header: "Anvend viden",
                description: "Anvend din nyvundne viden til at navigere mere sikkert gennem skoven og undgå farer."
            },
            {
                id: 6,
                header: "Gem viden",
                description: "Gem denne viden til fremtidig brug, når du måske vil stå over for større trusler."
            }
        ]
    },
    
    {
        id: 25,
        header: "Artefakternes Magi",
        description: "Ved brug af artefakterne føler du en strøm af magi, der styrker dine evner og giver dig et kortvarigt syn, der afslører skjulte stier og fælder.",
        choices: [
            {
                id: 6,
                header: "Følg de skjulte stier",
                description: "Brug dit nye syn til at følge de skjulte stier, der kunne føre dig sikkert til skatten."
            },
            {
                id: 27,
                header: "Undersøg de afslørede fælder",
                description: "Gå nærmere ind på de fælder, du nu kan se, for at finde ud af, hvordan du kan deaktivere dem eller bruge dem mod eventuelle fjender."
            }
        ]
    },
    
    {
        id: 26,
        header: "Sikker Navigation",
        description: "Med troldmandens viden navigerer du sikkert gennem skoven, undgår naturlige fælder og dyrker sjældne urter på vejen.",
        choices: [
            {
                id: 6,
                header: "Fortsæt din rejse",
                description: "Fortsæt din rejse med fornyet tillid og forberedt på hvad end, der kommer din vej."
            },
            {
                id: 8,
                header: "Slå lejr",
                description: "Brug lejligheden til at slå lejr og forberede dig på de næste trin i din rejse."
            }
        ]
    },
    
    {
        id: 27,
        header: "Fældernes Hemmeligheder",
        description: "Du lærer, hvordan man deaktiverer fælderne og selv bruger dem som forsvar, hvilket giver dig en taktisk fordel i skoven.",
        choices: [
            {
                id: 6,
                header: "Anvend fælder",
                description: "Anvend din viden til at beskytte dig selv og skabe sikre passager gennem skoven."
            },
            {
                id: 7,
                header: "Ignorer fælder",
                description: "Vælg at ignorere fælderne og stole mere på din intuition og evner i din videre færd."
            }
        ]
    },

    {
        id: 28,
        header: "Skattens Hemmeligheder Afsløret",
        description: "Efter en lang og farefuld færd når du endelig til det sted, hvor skatten skulle være gemt. Stedet er præget af gamle symboler og mystiske mekanismer, som tydeligt viser, at skatten har været vigtig for dem, der gemte den.",
        choices: [
            {
                id: 29,
                header: "Løs gåden",
                description: "Brug de viden og artefakter, du har samlet på din rejse, til at løse gåden og åbne skattekammeret."
            },
            {
                id: 30,
                header: "Vent på hjælp",
                description: "Beslut dig for at vente på hjælp fra andre eventyrere eller en ekspert i gamle civilisationer, da mekanismerne er for komplekse."
            }
        ]
    },
    
    {
        id: 29,
        header: "Skatten Er Din",
        description: "Dine anstrengelser bærer frugt, da du løser den sidste gåde, der låser op for skattekammeret. Indenfor finder du utrolige rigdomme og artefakter, mere værdifulde end du nogensinde kunne have forestillet dig.",
        choices: undefined 
    },
    
    {
        id: 30,
        header: "Vise Beslutninger",
        description: "Din beslutning om at vente på hjælp viser sig at være klog, da en ekspert i gamle civilisationer ankommer og hjælper dig med at sikre skatten på en sikker måde. Du deler viden og rigdomme, hvilket sikrer, at skatten bruges til at gavne mange.",
        choices: undefined 
    }
    

    
]

export default STORIES;