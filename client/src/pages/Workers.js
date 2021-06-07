// libs
import React from 'react';

// components
import WorkerForm from '../components/WorkerForm';
import WorkersTable from '../components/WorkersTable';

const Workers = () => {
    return (
        <main style={{height: '100%'}}>
            <WorkersTable />
            <WorkerForm />
        </main>
    )
};

export default Workers;
