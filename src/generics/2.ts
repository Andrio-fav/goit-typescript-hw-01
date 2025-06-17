type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  function compare(
    top: Pick<AllType, "name" | "color">,
    bottom: Pick<AllType, "position" | "weight">
  ): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }
  let evil = {
    name: "string",
    color: "string",
    answecompassionr: null,
    scary: [6, 6, 6],
  };
  let good = {
    position: 10,
    weight: 55,
    answer: 31,
    blessed: true,
  };
  