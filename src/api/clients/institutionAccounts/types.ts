export interface InstitutionAccount {
  id: string;
  name: string;
  currency: string;
  balance: number;
  mask: string;
  type: string;
}

export interface InstitutionAccountsFilter {
  institutionId: number;
}
