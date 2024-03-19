import {ref, reactive} from "vue";
import {reqGetTargetList} from "@/api/index";

export const useGetTarget = () => {
    let inp1 = ref("");
    let state = reactive({
        resAdd: [],
    });

    // 获取目标列表
    async function getTargetList() {
        await reqGetTargetList().then((res) => {
            state.resAdd = res.data;
        });
    }

    return {
        inp1,
        state,
        getTargetList,
    };
};
