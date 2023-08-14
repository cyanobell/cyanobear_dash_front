import { ref } from 'vue'
export class Arcon {
    id: number;
    top: number;
    left: number;
  
    constructor(id: number, top: number, left: number) {
      this.id = id;
      this.top = top;
      this.left = left;
    }
}
export const arcons = ref<Arcon[]>([])