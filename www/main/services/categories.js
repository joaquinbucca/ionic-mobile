'use strict';
angular.module('main')
  .service('Categories', function () {

    var products = [
      { photo: 'main/assets/images/pringles.jpeg', name: 'Pringles Queso Cheddar', price: 46.00 },
      { photo: 'main/assets/images/villavicencio.jpg', name: 'Agua Mineral Villavicencio', price: 17.95 },
      { photo: 'main/assets/images/quick.jpg', name: 'Sopa Quick', price: 22.79 },
      { photo: 'main/assets/images/sancor.jpg', name: 'Leche Sancor', price: 15.09 }
    ];

    var water =  { name: 'Aguas'};
    var cokes =  { name: 'Gaseosas'};
    var juices =  { name: 'Jugos'};

    var beers =  { name: 'Cervezas'};
    var wines =  { name: 'Vinos'};
    var boose =  { name: 'Aperitivos con alcohol'};

    var alcohol = {name: 'Alcohólicas', categories: [beers, wines, boose] };
    var nonAlcohol = {name: 'No Alcohólicas', categories: [water, cokes, juices] };



    var aders =  { name: 'Aderezos'};
    var rices =  { name: 'Arroces'};
    var fideos =  { name: 'Fideos'};
    var oils =  { name: 'Aceites'};
    var flour =  { name: 'Harinas'};

    var sugar =  { name: 'Azucares'};
    var coffee =  { name: 'Yerba, Té y Café'};
    var milk =  { name: 'Leches'};
    var snacks =  { name: 'Galletitas dulces y alfajores'};
    var cereal =  { name: 'Cereales'};

    var paty =  { name: 'Hamburguesas'};
    var pizza =  { name: 'Pizzas'};
    var vegetal =  { name: 'Vegetales'};
    var friedPot =  { name: 'Papas Fritas'};
    var iceCream =  { name: 'Helados'};


    var alamcen = {name: 'Almacén', categories: [aders,rices, fideos, oils, flour] };
    var breakfast = {name: 'Desayuno', categories: [sugar, coffee, milk, snacks, cereal] };
    var freezed = {name: 'Congelados', categories: [paty, pizza, vegetal, friedPot, iceCream] };

    var shampoo =  { name: 'Shampoo'};
    var acond =  { name: 'Acondicionador'};

    var toiletPaper =  { name: 'Papel higiénico'};
    var dipers =  { name: 'Pañales'};
    var femenine =  { name: 'Higiene femenina'};

    var deodorants =  { name: 'Desodorantes'};
    var soap =  { name: 'Jabones'};
    var oral =  { name: 'Cuidado oral'};


    var hair = {name: 'Cabellos', categories: [shampoo, acond] };
    var pharmacy = {name: 'Higiene y farmacia', categories: [toiletPaper, dipers, femenine] };
    var toucher = {name: 'Tocador', categories: [deodorants, soap, oral] };

    this.categories = [
      { name: 'Bebidas', photo: 'main/assets/images/drinks.png', style: 'button-balanced', categories: [alcohol, nonAlcohol] },
      { name: 'Alimentos', photo: 'main/assets/images/food.png', style: 'button-balanced', categories: [alamcen, breakfast, freezed]},
      { name: 'Perfurmería', photo: 'main/assets/images/perfumes.png', style: 'button-balanced', categories: [hair, pharmacy, toucher]}
    ];

  });
