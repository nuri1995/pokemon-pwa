export interface Pokemon {
  id: string;
  name: string;
  type: string;
  weight: number;
  height: number;
  url: string;
  image_url: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}
