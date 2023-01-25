interface nameI {
  name_USen: string;
  name_EUen: string;
  name_EUde: string;
  name_EUes: string;
  name_USes: string;
  name_EUfr: string;
  name_USfr: string;
  name_EUit: string;
  name_EUnl: string;
  name_CNzh: string;
  name_TWzh: string;
  name_JPja: string;
  name_KRko: string;
  name_EUru: string;
}

interface availabilityI {
  month_northern: string;
  month_southern: string;
  time: string;
  isAllDay: boolean;
  isAllYear: boolean;
  location: string;
  rarity: string;
  month_array_northern: number[];
  month_array_southern: number[];
  time_array: number[];
}

export interface animalI {
  id: number;
  file_name: string;
  name: nameI;
  name_EUes: string
  avalability: availabilityI;
  shadow: string;
  price: number;
  price_cj: number;
  catch_phrase: string;
  museu_phrase: string;
  image_uri: string;
  icon_uri: string;
}