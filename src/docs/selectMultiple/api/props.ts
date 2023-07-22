export default {
    title: 'Props',
    columnsKey: 'props',
    data: [
        {
            name: 'model-value',
            description: '绑定值',
            type: 'string',
            default: '-',
        },
        {
            name: 'options',
            description: '选项',
            type: 'options',
            default: '[]',
        },
        {
            name: 'size',
            description: '尺寸大小',
            type: 'small ｜ medium ｜ large',
            default: 'medium',
        },
        {
            name: 'trigger',
            description: '触发方式',
            type: 'click | hover',
            default: 'click',
        },
        {
            name: 'default-value',
            description: '默认值',
            type: `string | number`,
            default: '-',
        },
        {
            name: 'searchable',
            description: '禁用选择器',
            type: `boolean`,
            default: false,
        },
        {
            name: 'search-method',
            description: '搜索方法（支持promise）',
            type: `function`,
            default: 'filter',
        },
        {
            name: 'readonly',
            description: '只读',
            type: `boolean`,
            default: false,
        },
        {
            name: 'disabled',
            description: '禁用选择器',
            type: `boolean`,
            default: false,
        },
        {
            name: 'clearable',
            description: '支持清空',
            type: `boolean`,
            default: false,
        },
    ],
};
