export default interface IActivity {
  activity: string;
  accessibility?: number;
  type: string | null;
  participants: number;
  price: number;
  key?: string;
  link?: string;
  error?: string;
}
