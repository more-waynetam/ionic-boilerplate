import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demoStore', ()=>{
    const getList = () => {
        return [
            {title: 'title1', content: 'content1'},
            {title: 'title2', content: 'content2'},
            {title: 'title3', content: 'content3'},
            {title: 'title4', content: 'content4'}
        ]
    }
    return {getList}
})