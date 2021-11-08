import React from 'react';
import MyInput from "./UI/input/MyInput";
import Select from "./UI/select/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Поиск"
                value={filter.query}
                onChange={e => {
                    setFilter({...filter, query: e.target.value})
                }}
            />
            <Select
                value={filter.sort}
                onChange={selectedSort => {
                    setFilter({...filter, sort: selectedSort})
                }}
                defaultValue={'Сортировка'}
                options={[
                    {value: 'title', name: 'По навзанию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;