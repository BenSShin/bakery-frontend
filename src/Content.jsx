import { Bread } from "./Bread";
import { Pasteries } from "./Pasteries";

export function Content() {
  let breads = [
    {
      id: 1,
      name: "Sourdough",
      price: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bCH3c8vFIj0K0o1ZUxexWN5_J7M9y0UHww&usqp=CAU",
    },
    {
      id: 2,
      name: "Ciabatta",
      price: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpleznwm_7S33BkDi3aiHTqwjCN17HmRAHPg&usqp=CAU",
    },
    {
      id: 3,
      name: "Chocolate Babka",
      price: 7,
      image: "https://www.dinnerwithjulie.com/wp-content/uploads/2017/06/Babka-7.jpg",
    },
  ];

  let pasteries = [
    {
      id: 1,
      name: "Croissant",
      price: 5,
      image:
        "https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-articleLarge.jpg",
    },
    {
      id: 2,
      name: "Pain au Chocolat",
      price: 5.5,
      image:
        "https://cdn.vox-cdn.com/thumbor/Tcpci_8p7CkZS1IhqXCfx_8-G2M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24397130/2023_01_25_Car_Artisan_Chocolate_045.jpg",
    },
    {
      id: 3,
      name: "Eclair",
      price: 5,
      image: "https://natashaskitchen.com/wp-content/uploads/2018/10/Classic-Eclairs-Recipe-3-600x900.jpg",
    },
    {
      id: 4,
      name: "Canele",
      price: 4,
      image: "https://www.homecookingadventure.com/wp-content/uploads/2022/01/caneles_de_bordeaux_main.jpg",
    },
  ];
  return (
    <div>
      <Bread breads={breads} />
      <Pasteries pasteries={pasteries} />
    </div>
  );
}
