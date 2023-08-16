
import { ref, Ref } from 'vue'

export const imageWidth: number = 135
export const imageHeight: number = 142
export const totalImages: number = 7
export const x: Ref<number> = ref(150)
export const y: Ref<number> = ref(300.0)

class CyanoBearModel {
    imageWidth = imageWidth;
    imageHeight = imageHeight;
    totalImages = totalImages;
    x = x;
    y = y;
}
export const cyano_bear = new CyanoBearModel()