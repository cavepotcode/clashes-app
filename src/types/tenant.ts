export interface Tenant {
  _id: string;
  name: string;
  status: string;
}

export interface TenantData {
  name: string;
  status: string;
  terms: string;
  ranking: boolean;
  theme: {
    background: string;
    card: string;
    matchesBackground: string;
    details: string;
    title: string;
    menu: string;
    one: string;
    two: string;
    groupTexts: string;
    text: string;
  };
}
