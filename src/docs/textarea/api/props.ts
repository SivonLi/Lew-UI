export default {
    title: 'Props',
    columnsKey: 'props',
    data: [
        {
            name: 'model-value (v-model)',
            description: '绑定值',
            type: 'string',
            default: '-',
        },
        {
            name: 'size',
            description: '尺寸',
            type: 'small ｜ medium ｜ large',
            default: 'text',
        },
        {
            name: 'placeholder',
            description: '默认提示',
            type: 'string',
            default: '请输入',
        },
        {
            name: 'disabled',
            description: '禁用',
            type: 'boolean',
            default: 'false',
        },
        {
            name: 'readonly',
            description: '是否只读',
            type: 'boolean',
            default: 'false',
        },
        {
            name: 'clearable',
            description: '是否可清空',
            type: 'boolean',
            default: false,
        },
    ],
};