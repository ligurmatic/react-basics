interface ColourList {
    id: number;
    name: string;
    style: string;
}

const colours = (ColourList: ColourList) => {
    return [
    {
      "id": 1,
      "name": "Puce",
      "style": "purple"
    },
    {
      "id": 2,
      "name": "Moss",
      "style": "green"
    },
    {
      "id": 3,
      "name": "Orange",
      "style": "green"
    },
    {
      "id": 4,
      "name": "Teal",
      "style": "green"
    }
  ];

}

export default colours