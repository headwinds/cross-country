export interface NeutralModel {
  id: number;
  type: "neutral";
  name: string;
  health: number;
  weapon: string;
  armour: string;
  speed: number;
  accuracy: number;
  treaure: any[]; // Note: you might want to specify the exact type here
  skin: string;
}
