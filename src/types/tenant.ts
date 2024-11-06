export interface Tenant {
  _id: string;
  name: string;
  status: string;
  terms: string;
  ranking: boolean;
  theme: {
    background: string;
    card: string;
    'matches-background': string;
    details: string;
    title: string;
    menu: string;
    one: string;
    two: string;
    groupTexts: string;
    text: string;
  };
}

export type TenantData = Omit<Tenant, "_id">;
