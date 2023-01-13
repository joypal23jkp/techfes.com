import { defineStore } from "pinia";

export const useMetaStore = defineStore('meta', () => {
    const mode = usePreferredDark();
    console.log(usePreferredDark())
    function updateMode(value: boolean) {
        mode.value = value
    }

    return { mode, updateMode }
})