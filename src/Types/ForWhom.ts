export type ForWhom = {
  id: number,
  name: string,
  photo: string,
  description: string,
  position: {
    right?: number
    top: number,
    left: number,
  }
}