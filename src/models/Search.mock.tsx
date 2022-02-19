import { Category, IngredientClasses, Recipe } from "./Recipe.model";

export const searchResults: Recipe[] = [
    {
        id: 1,
        name: "Krem supa od cvjetače i brokule",
        time: "40m",
        likes: 755,
        imageUrl: "https://podravkaiovariations.azureedge.net/aed93878-63d0-11eb-b463-0242ac12004c/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "Juha u tanjuru - tanjur pun zdravlja. Bila ona bistra ili gusta, mesna ili povrtna, uvijek prija i krijepi dušu. Ovo je moj način pripremanja krem juhe od brokule i cvjetače, koju klinci obožavaju.",
        personCount: 4,
        ingredients: [
            '1 mala glavica cvjetače',
            '1 mala glavica brokule',
            'malo zelenja za juhu (peršin, celer, mrkvica)',
            '1 žlica Vegete',
            'po potrebi sol i papar',
            '1 jaje',
            '1 žlica ulja',
            '2 dl mlijeka',
            '3 žlice - vrhom pune brašna'
        ],
        ingredientClasses: {
            main: [
                { id: 5, name: 'Vegeta' }, { id: 6, name: 'Sol' },
                { id: 7, name: 'Biber' }, { id: 8, name: 'Jaje' },
                { id: 9, name: 'Ulje' }, { id: 10, name: 'Mlijeko' },
                { id: 11, name: 'Brašno' }
            ],
            vegetables: [
                { id: 1, name: 'Cvjetača' }, { id: 2, name: 'Brokula' },
                { id: 3, name: 'Celer' }, { id: 4, name: 'Mrkva' }
            ]
        },
        steps: [
            {
                priority: 1,
                name: "Cvjetaču i brokulu očistite i razdijelite na manje komade. Zajedno sa zelenjem za juhu stavite kuhati. Malo posolite. Kuhajte dok povrće ne omekša, otprilike 30 minuta."
            },
            {
                priority: 2,
                name: "8 dl vode u kojoj se povrće kuhalo procijedite u drugu posudu. Brokulu, cvjetaču i malo mrkve stavite u sjeckalicu i usitnite tako da dobijete finu kašu. Vratite kašu u posudu s procijeđenom vodom od kuhanja, dolijte mlijeko, po potrebi dolijte još vode tako da dobijete oko 1, 2 l juhe. Dodajte Vegetu i ako je potrebno, malo papra i soli. Kratko zakuhajte i na kraju zgusnite juhu slatkim vrhnjem. Neka gotova juha odstoji par minuta prije nego ju poslužite, jer će tako još malo zgusnuti. Dok se povrće kuha, vi pripremite fritate."
            },
            {
                priority: 3,
                name: "Umutite jaje s malo soli i ulja. Dodavajte mlijeko i brašno. Tijesto treba biti nešto gušće nego za palačinke."
            },
            {
                priority: 4,
                name: "Na lagano pouljenoj tavi ispecite nekoliko palačinki, nešto debljih nego inače. Ostavite ih da se malo ohlade. Zarolajte ih i režite na kolutiće debljine 2-3 mm. Poslužite ih kad je juha već na tanjuru."
            }
        ],
        serving: "Fritate odlično pašu i u bistre juhe, i mesne i povrtne, a djeci je itekako zanimljiva ideja juhe s “palačinkama”, naročito ako je za poslije koja ostala nenarezana.",
        advice: "Ako želite još puniju i još kremastiju juhu, prije samog posluživanja u nju žustro umiješajte jedno razmućeno jaje.",
        comments: [
            {
                username: "cortado",
                comment: "Super čorbica, nisam koristila mrkvu da ne pokvarim boju i blendala sam samo malo brokule (ostalo ostavila u komadima), takođe zbog boje. Okus sam pojačala sa crvenim i bijelim lukom u prahu"
            },
            {
                username: "tanja-peic",
                comment: "I ja sam htjela pitati za vrhnje jel to vrhnje za kuhanje a ne šlag valjda?!"
            },
            {
                username: 'minchya',
                comment: 'Je li ovo slatko vrhnje ustvari vrhnje za kuhanje? Hvala'
            }
        ],
        category: Category.Soup
    },
    {
        id: 2,
        name: "Zapečena pasta",
        time: "30m",
        likes: 65,
        imageUrl: "https://podravkaiovariations.azureedge.net/ea4d3890-63e5-11eb-810f-0242ac120021/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "Brzi i fini ručak. Kombinacija koju svi vole!",
        personCount: 2,
        ingredients: [
            "Žlica parmezana",
            "Žlica krušnih mrvica",
            "Sol",
            "Papar",
            "Bosiljak",
            "Pasta"
        ],
        ingredientClasses: {
            main: [{ id: 12, name: 'Pasta' }, { id: 6, name: 'Sol' }, { id: 7, name: 'Biber' }, { id: 13, name: 'Parmezan' }]
        },
        steps: [
            {
                priority: 1,
                name: "Špagete skuhati “al dente”. U međuvremenu narezati šunku i rajčice na manje komadiće. Bosiljak nasjeckajte."
            },
            {
                priority: 2,
                name: "Razmutite jaja, vrhnje i mlijeko te dodajte naribani sir i začine."
            },
            {
                priority: 3,
                name: "Špagete dobro ocijedite te ih pomiješajte sa šunkom, rajčicom i nasjeckanim bosiljkom. Prebacite u vatrostalnu posudu te prelijte smjesom sira i vrhnja."
            },
            {
                priority: 4,
                name: "Izmiješajte parmezan i krušne mrvice te ravnomjerno rasporedite po površini tjestenine."
            },
            {
                priority: 5,
                name: "Stavite peći u zagrijanu pećnicu 200 °C oko 20 minuta."
            }
        ],
        serving: "Poslužite uz sezonsku salatu i pospite parmezanom :))",
        advice: "",
        comments: [
            {
                username: "anita.t",
                comment: "Odlično!! Pravit ću opet pa opet...;)) Da je bilo više i to bi pojeli - znači sledeći put duplo... hehe Hvala od srca!"
            },
            {
                username: "navimen",
                comment: "super, preporuka"
            }
        ],
        category: Category.Main
    },
    {
        id: 3,
        name: "Pasta s tunom",
        time: "25m",
        likes: 65,
        imageUrl: "https://podravkaiovariations.azureedge.net/2afa06b0-631f-11eb-87f4-0242ac120032/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "Brzi recept za tjesteninu s tunom u bijelom umaku.",
        personCount: 2,
        ingredients: [
            "tjestenina",
            "3 konzerve tune u maslilnovom ulju (po 80 g)",
            "malo crvenog luka",
            "malo češnjaka",
            "1 čašica kiselog vrhnja",
            "2 jušne žlice parmezana",
            "malo peršina"
        ],
        ingredientClasses: {
            main: [{ id: 12, name: 'Tjestenina' }, { id: 14, name: 'Tuna' }, { id: 13, name: 'Parmezan' }, { id: 16, name: 'Vrhnje za kuhanje' }],
            vegetables: [{ id: 15, name: 'Luk' }, { id: 18, name: 'Češnjak' }]
        },
        steps: [
            {
                priority: 1,
                name: "Staviti kuhati tjesteninu po želji. Osobno, kuham pene."
            },
            {
                priority: 2,
                name: "Crveni luk i češnjak usitniti.Otvoriti tri konzerve tune (po 80 g).Malo maslinovog ulja iz konzerve uliti na tavu, ostatak ukloniti. Ne preporučam staviti puno ulja jer će to previše razrijediti umak."
            },
            {
                priority: 3,
                name: "Na maslinovom ulju kratko prepeći crveni luk. Stavljam ga vrlo malo, otprilike jednu čajnu žličicu usitnjenog luka.Nakon toga odmah staviti češnjak (stavljam pola čajne žličice usitnjenog češnjaka) i čašicu vrhnja te dobro promiješati da se smjesa ujednači."
            },
            {
                priority: 4,
                name: "Dodati parmezan i promiješati. Vrhnje se ne smije dugo držati na plamenu - od pola do maksimalno jedne minute - stoga je potrebno imati sve sastojke na dohvat ruke.Maknuti sa štednjaka."
            },
            {
                priority: 5,
                name: "U bijeli umak dodati ocijeđenu tunu iz konzerve na način da se previše ne izmrvi, te lagano promiješati."
            },
            {
                priority: 6,
                name: "Tjesteninu staviti na tanjur, preko nje preliti bijeli umak i posuti s malo prešina."
            }
        ],
        serving: "Koristim komade tune jer mi je to bolje od komadića. Također, s obzirom da ne volim da se tuna skroz izmrvi, stvaljam je tek po završetku umaka, na gore opisani način. Priprema jela traje zapravo onoliko koliko je potrebno tjestenini da se skuha. Umak je brzo gotov. Osobno, ne stavljam nikakve začine (osim peršina), pogotovo ne sol s obzirom na to da mi je parmezan dovoljno slan.",
        advice: "",
        comments: [
            {
                username: "a.t",
                comment: "Odlično."
            },
            {
                username: "bicoh",
                comment: "Super recept, vrhunski..."
            }
        ],
        category: Category.Main
    },
    {
        id: 4,
        name: "Pasta s bosiljkom",
        time: "30m",
        likes: 318,
        imageUrl: "https://podravkaiovariations.azureedge.net/f4e05df8-610d-11eb-973c-0242ac120030/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "U mediteranskoj kuhinji važnu ulogu imaju začini, a u ovome jednostavnom jelu – bosiljak. Oplemenili smo ga maslinovim uljem, sirom ribancem i češnjakom. Pesto, kako ga zovu u Italiji, priprema se na razne načine, a najčešće s tjesteninom.",
        personCount: 4,
        ingredients: [
            "400 g tjestenine",
            "200 ml slatkog vrhnja",
            "limunov sok",
            "Vegeta Maestro crni papar mljeveni",
            "sol",
            "3 žlice parmezana",
            "bosiljak",
            "2 češnja češnjaka",
            "4 žlice maslinova ulja",
            "20 g sušene slanine",
            "200 g očišćenog graška",
            "1 žličica Vegete"
        ],
        ingredientClasses: {
            main: [
                { id: 12, name: 'Tjestenina' }, { id: 16, name: 'Vrhnje za kuhanje' },
                { id: 5, name: 'Vegeta' }, { id: 7, name: 'Biber' }, { id: 6, name: 'Sol' },
                { id: 13, name: 'Parmezan' }, { id: 19, name: 'Maslinovo ulje' }
            ],
            vegetables: [{ id: 18, name: 'Češnjak' }, { id: 20, name: 'Grašak' }],
            fruit: [{ id: 17, name: 'Limun' }]
        },
        steps: [
            {
                priority: 1,
                name: "Slaninu narežite na sitne kocke. Pripremite mješavinu od bosiljka: izgnječite češnjak, dodajte bosiljak, parmezan, maslinovo ulje i papar, pa sve dobro izmiješajte."
            },
            {
                priority: 2,
                name: "Tjesteninu stavite kuhati u slanu kipuću vodu. U većoj posudi na malo ulja popecite nasjeckanu slaninu, dodajte grašak i Vegetu. Pirjajte i zalijevajte s malo vode dok grašak ne omekša, a zatim dodajte malo limunova soka."
            },
            {
                priority: 3,
                name: "Tako pripremljenom grašku dodajte kuhanu ocijeđenu tjesteninu i mješavinu bosiljka. Sve promiješajte i ostavite neka se ugrije, pa dodajte malo tekućine u kojoj se kuhala tjestenina, slatko vrhnje i nasjeckani peršin."
            }
        ],
        serving: "Toplo poslužite kao predjelo ili glavno jelo.",
        advice: "Sočnost gotovog jela postići ćete ako za umak upotrijebite manju količinu tekućine u kojoj se kuhala tjestenina. Tjesteninu kuhajte nekoliko minuta manje kako bi se do kraja skuhala kada se pomiješa s graškom i mješavinom bosiljka.",
        comments: [
            {
                username: "lidija16",
                comment: "ovo ti je prefino"
            },
            {
                username: "lilycool",
                comment: "super brzo i fino"
            }
        ],
        category: Category.Main
    },
    {
        id: 5,
        name: "Pasta (Fusilli Vesuvio)",
        time: "25m",
        likes: 318,
        imageUrl: "https://podravkaiovariations.azureedge.net/0df8f36a-6422-11eb-85e1-0242ac120036/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "Kombinacija mozzarelle i mascarpone sira je nesto zaista veoma ukusno...neoduzima Vam mnogo vremena da ovo spremite. Receptic sam izdvojila kao zanimljiv iz Tesco magazina a i pokazao se kao takav.",
        personCount: 4,
        ingredients: [
            "6 kasika maslinovog ulja",
            "1 luk",
            "400 g seckanog paradajza",
            "350 g makarona",
            "150 g Mascarpone",
            "6 listica bosiljka (ja sam koristila persun)",
            "125 g mozzarelle isecene na kockice",
            "20 g parmesan, so"
        ],
        ingredientClasses: {
            main: [{ id: 19, name: 'Maslinovo ulje' }, { id: 12, name: 'Tjestenina' }, { id: 22, name: 'Mocarela sir' }, { id: 13, name: 'Parmezan' }, { id: 6, name: 'Sol' }],
            vegetables: [{ id: 15, name: 'Luk' }, { id: 21, name: 'Paradajiz' }]
        },
        steps: [
            {
                priority: 1,
                name: "Zagrijete ulje i proprzite luk do zlatno-zuckaste boje. Dodajte paradajz i kuvajte na srednjoj vatri 10 minuta povremeno promesajuci."
            },
            {
                priority: 2,
                name: "U medjuvremenu skuvajte makarone u slanoj vodi."
            },
            {
                priority: 3,
                name: "Paradajzu dodajte bosiljak,mascarpone i mozzarellu i dinstajte jos 5 minuta na veoma laganoj vatri. Zacinjite solju."
            },
            {
                priority: 4,
                name: "Kad su makarone kuvane al dente procedite ih i dodajte u sos. Gore pospite rendani parmesan i posluzite odmah."
            }
        ],
        serving: "",
        advice: "",
        comments: [
            {
                username: "BARBARA26",
                comment: "ajme... divno"
            },
            {
                username: "oska",
                comment: "ovo ti je prefino"
            }
        ],
        category: Category.Main
    },
    {
        id: 6,
        name: "Pasta Tagliatelle s kozicama",
        time: "20m",
        likes: 80,
        imageUrl: "https://podravkaiovariations.azureedge.net/64a08c2c-63ce-11eb-97a2-0242ac120051/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "Brzo i jednostavno, a fino.",
        personCount: 2,
        ingredients: [
            "tagliatelle (zelene)",
            "maslinovo ulje",
            "češnjak",
            "350 g makarona",
            "peršin",
            "kozice",
            "bijelo vino",
            "vrhnje za kuhanje"
        ],
        ingredientClasses: {
            main: [{ id: 12, name: 'Tjestenina' }, { id: 19, name: 'Maslinovo ulje' }, { id: 16, name: 'Vrhnje za kuhanje' }],
            vegetables: [{ id: 18, name: 'Češnjak' },]
        },
        steps: [
            {
                priority: 1,
                name: "Na malo maslinovog ulja popržiti češnjak i dio peršina."
            },
            {
                priority: 2,
                name: "Dodati odmrznute kozice i vino te pustiti da vino ispari."
            },
            {
                priority: 3,
                name: "Dodati vrhnje za kuhanje, krčkati 10-ak minuta dok se vrhnje ne zgusne, a pred kraj dodati preostali peršin."
            },
            {
                priority: 4,
                name: "U međuvremenu skuhati tagliatelle u puno vode pa ih pred kraj kuhanja dodati u umak. Promiješati i poslužiti s istim vinom s kojim ste kuhali umak."
            }
        ],
        serving: "Količine prilagoditi broju osoba. Talijani kažu da na jednu osobu ide 10dkg tjestenine, ali naravno, svatko najbolje zna koliko ukućani mogu pojesti. :)",
        advice: "",
        comments: [
            {
                username: "anon",
                comment: "I meni je ovo super i sutra će nam biti za ručak. Ja samo još dodam dimljenog lososa pred kraj!"
            },
            {
                username: "vlastuljak",
                comment: "ovo je prefino!"
            },
            {
                username: "housewife",
                comment: "Ovo je bila danas nasa ,,brzinska klopa,, Odlicno, ,,ubili smo se,, !!! :-)))) Ovo ce cesce ,,gostovati,, na nasem stolu. Hvala za receptic!"
            }
        ],
        category: Category.Main
    },
    {
        id: 7,
        name: "Pasta Tagliatelle s povrćem",
        time: "50m",
        likes: 270,
        imageUrl: "https://podravkaiovariations.azureedge.net/f25ad6c6-610d-11eb-a0f3-0242ac12002d/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "Otkrijte kelj u posve drukčijoj kombinaciji nego što ste ga dosad znali: uglavnom samo u varivu ili eventualno složencu.",
        personCount: 4,
        ingredients: [
            "2 žlice ulja",
            "2 češnja češnjaka",
            "50 g luka",
            "1 crvena papričica",
            "200 g kelja",
            "200 g šampinjona",
            "200 ml vode",
            "2 Povrtne kocke Podravka",
            "200 ml slatkog vrhnja",
            "300 g Valjanih rezanaca s jajima Zlato polje"
        ],
        ingredientClasses: {
            main: [{ id: 9, name: 'Ulje' }, { id: 25, name: 'Šampinjoni' }, { id: 16, name: 'Vrhnje za kuhanje' }, { id: 12, name: 'Tjestenina' }],
            vegetables: [{ id: 15, name: 'Luk' }, { id: 18, name: 'Češnjak' }, { id: 23, name: 'Paprika' }, { id: 24, name: 'Kelj' }]
        },
        steps: [
            {
                priority: 1,
                name: "Kelj očistite, operite, kratko prokuhajte i ocijedite."
            },
            {
                priority: 2,
                name: "Na ulju kratko propirjajte cijeli češnjak, nasjeckani luk i papričicu. Češnjak i papričicu izvadite, dodajte očišćene i narezane šampinjone, promiješajte i pirjajte oko 15 minuta."
            },
            {
                priority: 3,
                name: "Umiješajte prokuhani kelj koji ste narezali na tanje rezance, povrtne kocke, pa zalijte vodom i još kratko prokuhajte. Na kraju umiješajte slatko vrhnje."
            },
            {
                priority: 4,
                name: "Rezance skuhajte, ocijedite i umiješajte u umak."
            }
        ],
        serving: "Tagliatelle s povrćem poslužite tople s ribanim parmezanom.",
        advice: "Kelj možete zamijeniti svježim zelenim kupusom.",
        comments: [
            {
                username: "bagy",
                comment: "na sličan način pripremam kelj flekice. jako je ukusno. ponekad im dodam i dinstane šampinjone."
            },
            {
                username: "zaagorec",
                comment: "ovo je zaista ful dobro uz dodatek 50 grama pršuta."
            },
            {
                username: "danijela",
                comment: "Obožavam povrće, posebno kelj, stoga jedva čekam sutra da isprobam ovaj recept."
            }
        ],
        category: Category.Main
    },
    {
        id: 8,
        name: "Pasta Carbonara",
        time: "30m",
        likes: 69,
        imageUrl: "https://podravkaiovariations.azureedge.net/bc3b2fda-63d0-11eb-b82a-0242ac12001f/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "Ovako ja radim \"carbonaru\", lagano i ukusno….....",
        personCount: 4,
        ingredients: [
            "500 g pašte (koje želite)",
            "100 g Pancete Podravka",
            "100 g šunke",
            "2 žlice Dukatela namaza sa sirom",
            "3 žlice kiselog vrhnja (12% m.m)",
            "1 jaje",
            "1 žlica vegete",
            "malo soli",
            "2 lovorova lista",
            "malo peršina suhog mljevenog",
            "2 režnja češnjaka (može i mljeveni)",
            "pola srednje kapule"
        ],
        steps: [
            {
                priority: 1,
                name: "Paštu skuhati i ocijediti. Pancetu, šunku, češnjak, kapulu malo prodinstati ili prepržiti, dodati malo vode, lovor, vrhnje i Dukatela namaz i imućena jaja, miješati dok se ne zgusne, posoliti po želji, po potrebi dodati još vrhnja (tko voli više). Umakom preliti paštu, posipati peršinom i poslužiti. Jaje se ne mora staviti…"
            }
        ],
        serving: "",
        advice: "",
        comments: [
            {
                username: "kajakuha",
                comment: "odlična,brza i lagana carbonara za ove vruće dane.....pravila sam danas i jako je fino.stavila sam jaje ali skroz na kraju,izostavila sam lovorov list...."
            },
            {
                username: "shiny1",
                comment: "Lepo je, ukusno, samo mi se od jaja malo zgrušao preliv, pa ću sledeći put ipak bez. Inače je super fora sa toplim prelivom, ja sam pre stavljala pavlaku i sir hladne, pa nije to to."
            }
        ],
        category: Category.Main
    },
    {
        id: 9,
        name: "Pasta & Broccoli",
        time: "35m",
        likes: 34,
        imageUrl: "https://podravkaiovariations.azureedge.net/6dc20f0e-638f-11eb-9ae4-0242ac120037/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "I jos jedan lagani ljetni rucak",
        personCount: 2,
        ingredients: [
            "200-300 gr paste (casarecce ili neke druge)",
            "1 manja glavica brokoli",
            "1 vezica broccolini",
            "maslinova ulja",
            "100gr specka",
            "2 cena bijelog luka (protisnutog cesnjaka)",
            "chili (svjezi ili flekice)",
            "soli i papra (frisko mljevenog)",
            "150gr mladog spinata",
            "parmezana",
            "limunov sok"
        ],
        steps: [
            {
                priority: 1,
                name: "Broccoli dobro operite i razdvojite na male cvjetice, broccolini takodjer isperite pod mlazom hladne vode. Stabljiku narezite/prepolovite.. U kipucu, posoljenu vodu stavite kuhati pastu po uputama na ambalazi. Minutu-dvije, dakleM pred sam kraj u vodu s tjesteninom dodajte broccoli - cvjetice. Kuhajte tek toliko da tjestenina bude al dente a povrce taman malo mekano.Kuhanu tjesteninu procijedite, a 1/4 salice vode u kojoj se kuhala tjestetnina ostavite po strani. Dok se tjestenina kuha vi na malo ulja poprzite nasjeckani speck, dodajte cesnjak i nastavite prziti na laganoj temp pazeci da vam cesnjak ne izgori. Dodajte k tome narezanu stabljiku brokolija, malo sitno nasjeckanog chilija - dinstajte tek da komadici stabljike omeksaju (2-3 min)."
            },
            {
                priority: 2,
                name: "K tome dodajte mladi (baby) spinat,  promijesajte pa dodajte kuhanu pastu s cvjeticima broccoli. Dodajte i onu vodu u kojoj ste kuhala tjestenina, a koju ste prethodno sacuvali. Promijesajte nad laganom temp tek toliko da se sve sjedini i zagrije. Dodajte ribanog parmezana, frisko mljevenog crnog papra, soli ako je potrebno i dobro promijesajte.Servirajte, pospite parmezanom i pospite bajamima. Po zelji nakapajte limunovim sokom."
            }
        ],
        serving: "",
        advice: "Kelj možete zamijeniti svježim zelenim kupusom.",
        comments: [
            {
                username: "nenasr",
                comment: "Cestitam draga."
            }
        ],
        category: Category.Main
    },
    {
        id: 10,
        name: "Mediteranska pasta",
        time: "20m",
        likes: 102,
        imageUrl: "https://podravkaiovariations.azureedge.net/5374567a-6402-11eb-8e0e-0242ac120013/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "Predivna pasta u sočnom paradajz umaku sa maslinama, tunjevinom i mirisom Mediterana...",
        personCount: 2,
        ingredients: [
            "500 g makarona (penne rigate)",
            "500 ml pasiranog paradajza",
            "2 konzerve tunjevine",
            "200 g zelenih maslina bez koštica",
            "1 crveni luk",
            "4 čena belog luka",
            "malo maslinovog ulja",
            "po ukusu origano, bosiljak, peršun, šareni biber, so",
            "150gr mladog spinata",
            "nekoliko kašičica rendanog parmezana"
        ],
        steps: [
            {
                priority: 1,
                name: "U šerpi propržite seckani crveni luk na maslinovom ulju. Dodajte sitno seckani beli luk. Čim beli luk zamiriše dodajte seckane masline, promešajte, pa sipajte paradajz."
            },
            {
                priority: 2,
                name: "Odmah dodajte oceđenu tunjevinu, origano, bosiljak, seckani peršun, biber i so po ukusu. Čim preliv proključa sklonite ga sa šporeta."
            },
            {
                priority: 3,
                name: "Makarone skuvajte u posoljenoj vodi al dente (desetak minuta), procedite i spojite sa prelivom."
            },
            {
                priority: 4,
                name: "Sipajte pastu u tanjire, pospite parmezanom po ukusu i poslužite."
            }
        ],
        serving: "Poslužite toplo uz začinjenu zelenu salatu.Ako postite nemojte dodavati parmezan i dobili ste fin posni ručak.Prijatno:-)!",
        advice: "Kelj možete zamijeniti svježim zelenim kupusom.",
        comments: [
            {
                username: "freelove",
                comment: "to bu današnji ručak, jedva čekam...."
            },
            {
                username: "BlackCherryFood",
                comment: "Cestitam"
            }
        ],
        category: Category.Main
    },
    {
        id: 11,
        name: "Zucchini pasta",
        time: "25m",
        likes: 85,
        imageUrl: "https://podravkaiovariations.azureedge.net/de3cbe52-6392-11eb-be46-0242ac12001b/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        description: "Odlicna \"pasta\" od tikvica u krem paradaiz sosu...",
        personCount: 2,
        ingredients: [
            "500gr. tikvica",
            "1 veća luka",
            "2-3 cena cesnjaka",
            "1 konzerve pelata/400g ili sjeckanog paradajza",
            "1/2 zlicice susenog bosiljka",
            "1/2 zlicice suhog oregana",
            "Crni papar mljeveni Podravka,sol",
            "1 salica(250ml) Slatkog vrhnja Dolcela"
        ],
        steps: [
            {
                priority: 1,
                name: "Tikvice izrendajte ili izrezite na ful tanke trakice da dobijete izgled kao spagete...imate na ytube raznih nacina na pogledajte..ja sam na trenicu ali nisam ribala,nego lagano provlacila uzduzno..."
            },
            {
                priority: 2,
                name: "U tavi dodajte maslinovo ulje i zagrijte..dodajte sirno sjeckani luk i przite jedno3-4 minute..u to dodajte sitno sjeckani cesnjak i przite 1 minutu..zatim dodajte sjeckani paradaiz iz konzerve,suhi bosiljak,oregano,sol i peper..pojacajte temperaturu i neka sve kuha oko 5 minuta.."
            },
            {
                priority: 3,
                name: "Ubacite slatko vrhnje,izmjesajte,zatim dodajte tikvice.."
            },
            {
                priority: 4,
                name: "Smanjite temperaturu i ostavite da sve zajedno kuha na laganoj vatri 3-4 minute..."
            }
        ],
        serving: "",
        advice: "",
        comments: [
            {
                username: "macapapucarica",
                comment: "ovo volim, bilježim i jedva čekam mamine tikvice i paradajze"
            },
            {
                username: "vesna72",
                comment: "Odlična pasta."
            }
        ],
        category: Category.Main
    }
];

export const ingredientClasses: IngredientClasses = {
    main: [
        { id: 5, name: 'Vegeta' }, { id: 6, name: 'Sol' },
        { id: 7, name: 'Biber' }, { id: 8, name: 'Jaje' },
        { id: 9, name: 'Ulje' }, { id: 10, name: 'Mlijeko' },
        { id: 11, name: 'Brašno' }, { id: 12, name: 'Tjestenina' },
        { id: 13, name: 'Parmezan' }, { id: 14, name: 'Tuna' },
        { id: 16, name: 'Vrhnje za kuhanje' }, { id: 19, name: 'Maslinovo ulje' },
        { id: 22, name: 'Mocarela sir' }, { id: 25, name: 'Šampinjoni' }
    ],
    vegetables: [
        { id: 1, name: 'Cvjetača' }, { id: 2, name: 'Brokula' },
        { id: 3, name: 'Celer' }, { id: 4, name: 'Mrkva' },
        { id: 15, name: 'Luk' }, { id: 18, name: 'Češnjak' },
        { id: 20, name: 'Grašak' }, { id: 21, name: 'Paradajiz' },
        { id: 23, name: 'Paprika' }, { id: 24, name: 'Kelj' }
    ],
    fruit: [
        { id: 17, name: 'Limun' }
    ]
}