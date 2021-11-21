export default function Timer(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}