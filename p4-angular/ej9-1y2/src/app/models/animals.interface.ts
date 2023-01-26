interface NameI {
  'name-USen': string;
  'name-EUen': string;
  'name-EUde': string;
  'name-EUes': string;
  'name-USes': string;
  'name-EUfr': string;
  'name-USfr': string;
  'name-EUit': string;
  'name-EUnl': string;
  'name-CNzh': string;
  'name-TWzh': string;
  'name-JPja': string;
  'name-KRko': string;
  'name-EUru': string;
}

interface AvailabilityI {
  'month-northern': string;
  'month-southern': string;
  time: string;
  isAllDay: boolean;
  isAllYear: boolean;
  location: string;
  rarity: string;
  'month-array-northern': number[];
  'month-array-southern': number[];
  'time-array': number[];
}

export interface CompleteAnimalI {
  id: number;
  'file-name': string;
  name: NameI;
  availability: AvailabilityI;
  shadow: string;
  price: number;
  'price-cj': number;
  'catch-phrase': string;
  'museu-phrase': string;
  image_uri: string;
  icon_uri: string;
}

export interface AnimalI {
  id: number;
  name_EUes: string;
  catch_phrase: string;
  rarity: string;
  price: number;
  image_uri: string;
}
