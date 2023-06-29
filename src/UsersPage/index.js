import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useParams, useSearchParams } from 'react-router-dom';


const UsersPage = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => setUsers(data.results));
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: name => `${name.title} ${name.first} ${name.last}`,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];

    const params = useParams()
    let [searchParams] = useSearchParams();
    console.log(props, 'props', params, searchParams)



    return (
        <div>
            <h1>Users</h1>
            <Table columns={columns} dataSource={users} />
        </div>
    );
};

export default UsersPage;