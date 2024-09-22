<!-- Modal.vue -->
<template>
    <div v-if="isVisible" class = "modal-overlay">
        <div class = "modal">
            <slot></slot>
            <button @click="close">关闭</button>
            </div>
    </div>
</template>

<script>
export default {
    name: 'ModalBox',
    props: {
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>