import Burger1 from "../assets/img/burger.png";
import Piza1 from "../assets/img/Piza1.png";
import Piza2 from "../assets/img/Bitmap (1).png";
import Piza3 from "../assets/img/Bitmap (3).png";
import Piza4 from "../assets/img/Bitmap5.png";
import Piza5 from "../assets/img/Bitmap4.png";
import Pishloq from "../assets/img/pishloq.png";
import Beda from "../assets/img/beda.png";
import Kombo1 from "../assets/img/kombo1.png"
import Kombo2 from "../assets/img/kombo2.png"
import Salat1 from "../assets/img/salat.png";
import Salat2 from "../assets/img/salat2.png";
import Salat3 from "../assets/img/salat3.png";
import Sprite from "../assets/img/sprite.png";
import Cola from "../assets/img/cola.png";
import Fanta from "../assets/img/fanta.png";

export const Database = [

    {
        id: "1",
        type: "Pitsa",
        title: "Gavaya",
        titleImg: Pishloq,
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 45000,
        imgSrc: Piza1
    },
    {
        id: "2",
        type: "Pitsa",
        title: "Hot Achiko",
        titleImg: Beda,
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 64000,
        imgSrc: Piza2
    },
    {
        id: "3",
        type: "Pitsa",
        title: "Apocalipto",
        titleImg: Pishloq,
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 64000,
        imgSrc: Piza1
    }, {
        id: "4",
        type: "Pitsa",
        title: "Mexica",
        titleImg: Beda,
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 53000,
        imgSrc: Piza3
    }, {
        id: "5",
        type: "Pitsa",
        title: "Mexica",
        titleImg: Pishloq,
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 45000,
        imgSrc: Piza4
    }, {
        id: "6",
        type: "Pitsa",
        title: "Sosiskacho",
        titleImg: Beda,
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 45000,
        imgSrc: Piza5
    }, {
        id: "7",
        type: "Burger",
        title: "Cheeseburger",
        titleImg: Pishloq,
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 13000,
        imgSrc: Burger1
    }, {
        id: "8",
        type: "Burger",
        title: "Hamburger",
        titleImg: Pishloq,
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 15000,
        imgSrc: Burger1
    }, {
        id: "9",
        type: "Burger",
        title: "Chiliburger",
        titleImg: Pishloq,
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 17000,
        imgSrc: Burger1
    }, {
        id: "10",
        type: "Burger",
        title: "Doubleburger",
        titleImg: Pishloq,
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 20000,
        imgSrc: Burger1
    }, {
        id: "11",
        type: "Kombo",
        title: "Kombo-1",
        titleImg: "",
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 25000,
        imgSrc: Kombo1
    },
    {
        id: "12",
        type: "Kombo",
        title: "Kombo-2",
        titleImg: "",
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 25000,
        imgSrc: Kombo2
    },
    {
        id: "13",
        type: "Kombo",
        title: "Kombo-3",
        titleImg: "",
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 25000,
        imgSrc: Kombo1
    },
    {
        id: "14",
        type: "Salat",
        title: "Tovuq salat",
        titleImg: "",
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 45000,
        imgSrc: Salat1
    },
    {
        id: "15",
        type: "Salat",
        title: "Grek Salat",
        titleImg: "",
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 45000,
        imgSrc: Salat2
    }, {
        id: "16",
        type: "Salat",
        title: "Kombo-Mix",
        titleImg: "",
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 45000,
        imgSrc: Salat3
    }, {
        id: "17",
        type: "Ichimlik",
        title: "Sprite",
        titleImg: "",
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 10000,
        imgSrc: Sprite
    }, {
        id: "18",
        type: "Ichimlik",
        title: "Coca Cola",
        titleImg: "",
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 10000,
        imgSrc: Cola
    }, {
        id: "19",
        type: "Ichimlik",
        title: "Fanta",
        titleImg: "",
        description: "Hot appetizer with meatballs\n" +
            "beef, tomatoes,\n" +
            "mozzarella and chipotle sauce\n",
        price: 10000,
        imgSrc: Fanta
    },

]