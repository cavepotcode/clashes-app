export interface Tournament {
  id: string;
  name: string;
  date: string;
  description: string;
  categories: Category[];
}

export interface Category {
  tournament_id: string;
  category_id: string;
  category: string;
  cups: Cup[];
  stages: string[];
  date: string;
}

interface Cup {
  id: string;
  name: string;
}
